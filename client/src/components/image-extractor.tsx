import { useState, useRef } from 'react';
import { CloudUpload, Wand2, Pipette, X, RotateCcw } from 'lucide-react';
import { extractColorsFromCanvas } from '@/utils/color-utils';
import { useToast } from '@/hooks/use-toast';

interface ImageExtractorProps {
  onColorsExtracted: (colors: string[]) => void;
}

export function ImageExtractor({ onColorsExtracted }: ImageExtractorProps) {
  const [uploadedImage, setUploadedImage] = useState<string | null>(null);
  const [isDragOver, setIsDragOver] = useState(false);
  const [isColorPickerMode, setIsColorPickerMode] = useState(false);
  const [pickedColors, setPickedColors] = useState<string[]>([]);
  const [previewColor, setPreviewColor] = useState<string>('#FFFFFF');
  const [cursorPosition, setCursorPosition] = useState<{x: number, y: number} | null>(null);
  const [showPreview, setShowPreview] = useState(false);
  const [pixelGrid, setPixelGrid] = useState<string[][]>([]);
  const [longPressTimer, setLongPressTimer] = useState<NodeJS.Timeout | null>(null);
  const [isLongPressing, setIsLongPressing] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);
  const { toast } = useToast();

  const handleFileUpload = (file: File) => {
    if (!file.type.startsWith('image/')) {
      toast({
        title: "Invalid file",
        description: "Please upload an image file",
        variant: "destructive",
      });
      return;
    }

    const reader = new FileReader();
    reader.onload = (e) => {
      const result = e.target?.result as string;
      setUploadedImage(result);
      setPickedColors([]); // Reset picked colors when new image is uploaded
      setIsColorPickerMode(false);
    };
    reader.readAsDataURL(file);
  };

  const handleExtractColors = () => {
    if (!uploadedImage || !canvasRef.current) return;

    const img = new Image();
    img.onload = () => {
      const canvas = canvasRef.current!;
      const ctx = canvas.getContext('2d')!;
      
      canvas.width = img.width;
      canvas.height = img.height;
      ctx.drawImage(img, 0, 0);
      
      try {
        const extractedColors = extractColorsFromCanvas(canvas);
        onColorsExtracted(extractedColors);
        toast({
          title: "Colors extracted!",
          description: `Found ${extractedColors.length} colors from your image`,
        });
      } catch (error) {
        toast({
          title: "Extraction failed",
          description: "Failed to extract colors from image",
          variant: "destructive",
        });
      }
    };
    img.src = uploadedImage;
  };

  const handleImageMouseMove = (e: React.MouseEvent<HTMLImageElement>) => {
    if (!isColorPickerMode || !imageRef.current) return;

    console.log('MOUSE MOVE - Color picker mode:', isColorPickerMode);

    const img = imageRef.current;
    const rect = img.getBoundingClientRect();
    const scaleX = img.naturalWidth / rect.width;
    const scaleY = img.naturalHeight / rect.height;
    
    const x = Math.floor((e.clientX - rect.left) * scaleX);
    const y = Math.floor((e.clientY - rect.top) * scaleY);

    // Update cursor position relative to the page for the preview circle
    const newPosition = {
      x: e.pageX,
      y: e.pageY
    };
    setCursorPosition(newPosition);
    setShowPreview(true);

    console.log('Setting position:', newPosition);

    // Create a temporary canvas to get pixel colors
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d')!;
    canvas.width = img.naturalWidth;
    canvas.height = img.naturalHeight;
    
    ctx.drawImage(img, 0, 0);
    
    // Get center pixel color for preview
    const centerPixel = ctx.getImageData(x, y, 1, 1);
    const r = centerPixel.data[0];
    const g = centerPixel.data[1];
    const b = centerPixel.data[2];
    
    const hexColor = `#${r.toString(16).padStart(2, '0')}${g.toString(16).padStart(2, '0')}${b.toString(16).padStart(2, '0')}`.toUpperCase();
    setPreviewColor(hexColor);
    
    // Sample 6x6 grid around cursor position
    const gridSize = 6;
    const offset = Math.floor(gridSize / 2); // 3 pixels offset
    const grid: string[][] = [];
    
    for (let row = 0; row < gridSize; row++) {
      const gridRow: string[] = [];
      for (let col = 0; col < gridSize; col++) {
        const sampleX = Math.max(0, Math.min(img.naturalWidth - 1, x - offset + col));
        const sampleY = Math.max(0, Math.min(img.naturalHeight - 1, y - offset + row));
        
        const pixelData = ctx.getImageData(sampleX, sampleY, 1, 1);
        const pixelR = pixelData.data[0];
        const pixelG = pixelData.data[1];
        const pixelB = pixelData.data[2];
        
        const pixelHex = `#${pixelR.toString(16).padStart(2, '0')}${pixelG.toString(16).padStart(2, '0')}${pixelB.toString(16).padStart(2, '0')}`.toUpperCase();
        gridRow.push(pixelHex);
      }
      grid.push(gridRow);
    }
    
    setPixelGrid(grid);
  };

  const handleImageMouseLeave = () => {
    setShowPreview(false);
    setCursorPosition(null);
  };

  // Mobile touch handlers for long press
  const handleTouchStart = (e: React.TouchEvent<HTMLImageElement>) => {
    if (!isColorPickerMode || !imageRef.current) return;

    const touch = e.touches[0];
    if (!touch) return;

    // Clear any existing timer
    if (longPressTimer) {
      clearTimeout(longPressTimer);
    }

    // Start long press timer
    const timer = setTimeout(() => {
      setIsLongPressing(true);
      handleTouchMove(e); // Show grid at initial touch position
    }, 500); // 500ms long press threshold

    setLongPressTimer(timer);
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLImageElement>) => {
    if (!isColorPickerMode || !imageRef.current || !isLongPressing) return;

    // Prevent scrolling when long pressing
    e.preventDefault();

    const touch = e.touches[0];
    if (!touch) return;

    const img = imageRef.current;
    const rect = img.getBoundingClientRect();
    const scaleX = img.naturalWidth / rect.width;
    const scaleY = img.naturalHeight / rect.height;
    
    const x = Math.floor((touch.clientX - rect.left) * scaleX);
    const y = Math.floor((touch.clientY - rect.top) * scaleY);

    // Update cursor position for the preview grid
    setCursorPosition({
      x: touch.pageX,
      y: touch.pageY
    });
    setShowPreview(true);

    // Generate pixel grid (same logic as mouse move)
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d')!;
    canvas.width = img.naturalWidth;
    canvas.height = img.naturalHeight;
    
    ctx.drawImage(img, 0, 0);
    
    // Get center pixel color for preview
    const centerPixel = ctx.getImageData(x, y, 1, 1);
    const r = centerPixel.data[0];
    const g = centerPixel.data[1];
    const b = centerPixel.data[2];
    
    const hexColor = `#${r.toString(16).padStart(2, '0')}${g.toString(16).padStart(2, '0')}${b.toString(16).padStart(2, '0')}`.toUpperCase();
    setPreviewColor(hexColor);
    
    // Sample 6x6 grid around touch position
    const gridSize = 6;
    const offset = Math.floor(gridSize / 2);
    const grid: string[][] = [];
    
    for (let row = 0; row < gridSize; row++) {
      const gridRow: string[] = [];
      for (let col = 0; col < gridSize; col++) {
        const sampleX = Math.max(0, Math.min(img.naturalWidth - 1, x - offset + col));
        const sampleY = Math.max(0, Math.min(img.naturalHeight - 1, y - offset + row));
        
        const pixelData = ctx.getImageData(sampleX, sampleY, 1, 1);
        const pixelR = pixelData.data[0];
        const pixelG = pixelData.data[1];
        const pixelB = pixelData.data[2];
        
        const pixelHex = `#${pixelR.toString(16).padStart(2, '0')}${pixelG.toString(16).padStart(2, '0')}${pixelB.toString(16).padStart(2, '0')}`.toUpperCase();
        gridRow.push(pixelHex);
      }
      grid.push(gridRow);
    }
    
    setPixelGrid(grid);
  };

  const handleTouchEnd = (e: React.TouchEvent<HTMLImageElement>) => {
    // Clear long press timer
    if (longPressTimer) {
      clearTimeout(longPressTimer);
      setLongPressTimer(null);
    }

    // If this was a long press, hide the preview
    if (isLongPressing) {
      setShowPreview(false);
      setCursorPosition(null);
      setIsLongPressing(false);
      return;
    }

    // Otherwise, handle as normal tap (existing click behavior)
    // Convert touch event to click-like behavior
    const touch = e.changedTouches[0];
    if (touch && imageRef.current) {
      const syntheticEvent = {
        clientX: touch.clientX,
        clientY: touch.clientY,
        pageX: touch.pageX,
        pageY: touch.pageY
      } as React.MouseEvent<HTMLImageElement>;
      
      handleImageClick(syntheticEvent);
    }
  };

  const handlePixelGridClick = (color: string) => {
    if (pickedColors.length >= 5) {
      toast({
        title: "Palette full",
        description: "Remove a color first to add a new one",
        variant: "destructive",
      });
      return;
    }

    if (!pickedColors.includes(color)) {
      const newColors = [...pickedColors, color];
      setPickedColors(newColors);
      
      toast({
        title: "Color picked!",
        description: `Added ${color} to your palette`,
      });

      // If we have 5 colors, automatically send them
      if (newColors.length === 5) {
        onColorsExtracted(newColors);
        setIsColorPickerMode(false);
        toast({
          title: "Palette complete!",
          description: "Your custom 5-color palette is ready!",
        });
      }
    } else {
      toast({
        title: "Color already picked",
        description: "This color is already in your palette",
        variant: "destructive",
      });
    }
  };

  const handleImageClick = (e: React.MouseEvent<HTMLImageElement>) => {
    if (!isColorPickerMode || !imageRef.current || pickedColors.length >= 5) return;

    const img = imageRef.current;
    const rect = img.getBoundingClientRect();
    const scaleX = img.naturalWidth / rect.width;
    const scaleY = img.naturalHeight / rect.height;
    
    const x = Math.floor((e.clientX - rect.left) * scaleX);
    const y = Math.floor((e.clientY - rect.top) * scaleY);

    // Create a temporary canvas to get pixel color
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d')!;
    canvas.width = img.naturalWidth;
    canvas.height = img.naturalHeight;
    
    ctx.drawImage(img, 0, 0);
    const imageData = ctx.getImageData(x, y, 1, 1);
    const r = imageData.data[0];
    const g = imageData.data[1];
    const b = imageData.data[2];
    
    const hexColor = `#${r.toString(16).padStart(2, '0')}${g.toString(16).padStart(2, '0')}${b.toString(16).padStart(2, '0')}`.toUpperCase();
    
    // Check if color is already picked
    if (!pickedColors.includes(hexColor)) {
      const newColors = [...pickedColors, hexColor];
      setPickedColors(newColors);
      
      toast({
        title: "Color picked!",
        description: `Added ${hexColor} to your palette`,
      });

      // If we have 5 colors, automatically send them
      if (newColors.length === 5) {
        onColorsExtracted(newColors);
        setIsColorPickerMode(false);
        toast({
          title: "Palette complete!",
          description: "Your custom 5-color palette is ready!",
        });
      }
    } else {
      toast({
        title: "Color already picked",
        description: "This color is already in your palette",
        variant: "destructive",
      });
    }
  };

  const removePickedColor = (indexToRemove: number) => {
    console.log('removePickedColor called with index:', indexToRemove);
    console.log('Current picked colors:', pickedColors);
    const removedColor = pickedColors[indexToRemove];
    setPickedColors(colors => colors.filter((_, index) => index !== indexToRemove));
    toast({
      title: "Color removed",
      description: `Removed ${removedColor} from your palette`,
    });
  };

  const resetColorPicker = () => {
    setPickedColors([]);
    setIsColorPickerMode(false);
    setPreviewColor('#FFFFFF');
    setCursorPosition(null);
    setShowPreview(false);
    setPixelGrid([]);
    setIsLongPressing(false);
    if (longPressTimer) {
      clearTimeout(longPressTimer);
      setLongPressTimer(null);
    }
  };

  const toggleColorPickerMode = () => {
    if (!uploadedImage) {
      toast({
        title: "No image uploaded",
        description: "Please upload an image first",
        variant: "destructive",
      });
      return;
    }
    setIsColorPickerMode(!isColorPickerMode);
    if (!isColorPickerMode) {
      setPickedColors([]);
    }
  };

  const sendPickedColors = () => {
    if (pickedColors.length === 0) {
      toast({
        title: "No colors picked",
        description: "Please pick at least one color",
        variant: "destructive",
      });
      return;
    }

    onColorsExtracted(pickedColors);
    setIsColorPickerMode(false);
    toast({
      title: "Colors sent!",
      description: `Sent ${pickedColors.length} picked colors to your palette`,
    });
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(false);
    
    const file = e.dataTransfer.files[0];
    if (file) {
      handleFileUpload(file);
    }
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(true);
  };

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(false);
  };

  return (
    <section>
      <div className="sketchy-border p-6 bg-card">
        <h2 className="text-2xl font-sketch font-semibold mb-6 transform -rotate-1 text-center">
          📷 Extract from Image
        </h2>
        
        {/* Upload Zone */}
        <div 
          className={`upload-zone p-8 text-center mb-6 cursor-pointer ${isDragOver ? 'dragover' : ''}`}
          onClick={() => fileInputRef.current?.click()}
          onDrop={handleDrop}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          data-testid="upload-zone"
        >
          <CloudUpload className="w-16 h-16 mx-auto mb-4 text-muted-foreground" />
          <p className="font-handwritten text-lg mb-2">Drop an image here!</p>
          <p className="text-sm text-muted-foreground">or click to browse</p>
          <input 
            ref={fileInputRef}
            type="file" 
            accept="image/*" 
            className="hidden" 
            onChange={(e) => {
              const file = e.target.files?.[0];
              if (file) handleFileUpload(file);
            }}
            data-testid="file-input"
          />
        </div>

        {/* Image Preview */}
        {uploadedImage && (
          <div data-testid="image-preview">
            <div className="mb-4 relative">
              <div className="w-full max-h-96 min-h-48 bg-gray-50 rounded-lg border-2 border-border overflow-hidden flex items-center justify-center">
                <img 
                  ref={imageRef}
                  src={uploadedImage} 
                  alt="Uploaded image preview" 
                  className={`max-w-full max-h-full object-contain ${
                    isColorPickerMode ? 'cursor-crosshair' : ''
                  }`}
                  onClick={handleImageClick}
                  onMouseMove={handleImageMouseMove}
                  onMouseLeave={handleImageMouseLeave}
                  onTouchStart={handleTouchStart}
                  onTouchMove={handleTouchMove}
                  onTouchEnd={handleTouchEnd}
                  data-testid="preview-image"
                  style={{ touchAction: isColorPickerMode ? 'none' : 'auto' }}
                />
              </div>
              {isColorPickerMode && (
                <div className="absolute top-2 left-2 bg-black bg-opacity-75 text-white px-2 py-1 rounded text-sm">
                  <Pipette className="w-3 h-3 inline mr-1" />
                  <span className="hidden sm:inline">Click to pick colors ({pickedColors.length}/5)</span>
                  <span className="sm:hidden">Tap or long press to pick ({pickedColors.length}/5)</span>
                  {showPreview && <span className="ml-2 text-green-400">• ACTIVE</span>}
                </div>
              )}
              
              {/* 6x6 Pixel Grid - Clean Version */}
              {isColorPickerMode && cursorPosition && (
                <div 
                  className="fixed z-50 pointer-events-auto bg-white border-2 border-gray-300 shadow-lg rounded p-2"
                  style={{
                    left: Math.min(cursorPosition.x + 20, window.innerWidth - 150),
                    top: Math.min(cursorPosition.y + 20, window.innerHeight - 150),
                  }}
                >
                  {pixelGrid.length > 0 ? (
                    <div className="grid grid-cols-6 gap-0.5 mb-2">
                      {pixelGrid.map((row, rowIndex) =>
                        row.map((color, colIndex) => {
                          const isCenter = rowIndex === 2 && colIndex === 2;
                          return (
                            <button
                              key={`${rowIndex}-${colIndex}`}
                              className={`w-4 h-4 border border-gray-400 hover:scale-125 transition-transform cursor-pointer ${
                                isCenter ? 'ring-2 ring-blue-500' : ''
                              }`}
                              style={{ backgroundColor: color }}
                              onClick={() => handlePixelGridClick(color)}
                              title={color}
                            />
                          );
                        })
                      )}
                    </div>
                  ) : (
                    <div className="w-24 h-24 flex items-center justify-center">
                      <div className="w-4 h-4 border-2 border-gray-300 rounded-full animate-spin border-t-blue-500" />
                    </div>
                  )}
                  <div className="text-xs text-center font-mono text-gray-700">
                    {previewColor}
                  </div>
                </div>
              )}
            </div>

            {/* Color Picker Mode Controls */}
            {isColorPickerMode && (
              <div className="mb-4 p-4 bg-accent rounded-lg">
                <div className="flex flex-wrap gap-2 mb-3">
                  {pickedColors.map((color, index) => (
                    <div key={index} className="flex items-center gap-1 bg-white rounded px-2 py-1 text-sm border shadow-sm">
                      <div 
                        className="w-4 h-4 rounded border border-gray-300" 
                        style={{ backgroundColor: color }}
                      />
                      <span className="font-mono text-xs">{color}</span>
                      <button 
                        onClick={(e) => {
                          console.log('Button clicked! Index:', index);
                          e.stopPropagation();
                          e.preventDefault();
                          removePickedColor(index);
                        }}
                        onMouseDown={(e) => {
                          console.log('Button mouse down! Index:', index);
                        }}
                        className="text-red-500 hover:text-red-700 hover:bg-red-50 rounded p-2 ml-2 transition-colors cursor-pointer bg-red-100 border border-red-300"
                        title="Remove this color"
                        type="button"
                        style={{ zIndex: 10, position: 'relative' }}
                      >
                        <X className="w-4 h-4" />
                      </button>
                    </div>
                  ))}
                </div>
                
                <div className="flex gap-2 flex-wrap">
                  <button 
                    className="sketchy-button px-3 py-1 text-sm" 
                    onClick={sendPickedColors}
                    disabled={pickedColors.length === 0}
                  >
                    Use Picked Colors ({pickedColors.length})
                  </button>
                  <button 
                    className="sketchy-button px-3 py-1 text-sm" 
                    onClick={resetColorPicker}
                  >
                    <RotateCcw className="w-3 h-3 inline mr-1" />
                    Reset
                  </button>
                </div>
              </div>
            )}

            {/* Action Buttons */}
            <div className="flex gap-1 flex-col sm:flex-row">
              <button 
                className="sketchy-button flex-1 py-2" 
                onClick={handleExtractColors}
                data-testid="button-extract-colors"
              >
                <Wand2 className="w-4 h-4 inline mr-2" />
                Auto ✨
              </button>
              
              <button 
                className={`sketchy-button flex-1 py-2 ${isColorPickerMode ? 'bg-primary' : ''}`}
                onClick={toggleColorPickerMode}
                data-testid="button-color-picker"
              >
                <Pipette className="w-4 h-4 inline mr-2" />
                {isColorPickerMode ? 'Exit' : 'Manual'} 🎨
              </button>
            </div>
          </div>
        )}

        {/* Hidden canvas for color extraction */}
        <canvas ref={canvasRef} style={{ display: 'none' }} />
      </div>
    </section>
  );
}
