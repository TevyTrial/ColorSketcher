import { useState, useRef } from 'react';
import { CloudUpload, Wand2 } from 'lucide-react';
import { extractColorsFromCanvas } from '@/utils/color-utils';
import { useToast } from '@/hooks/use-toast';

interface ImageExtractorProps {
  onColorsExtracted: (colors: string[]) => void;
}

export function ImageExtractor({ onColorsExtracted }: ImageExtractorProps) {
  const [uploadedImage, setUploadedImage] = useState<string | null>(null);
  const [isDragOver, setIsDragOver] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
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
    <section className="notebook-holes">
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
            <div className="mb-4">
              <img 
                src={uploadedImage} 
                alt="Uploaded image preview" 
                className="w-full h-32 object-cover rounded-lg border-2 border-border" 
                data-testid="preview-image"
              />
            </div>
            <button 
              className="sketchy-button w-full py-2" 
              onClick={handleExtractColors}
              data-testid="button-extract-colors"
            >
              <Wand2 className="w-4 h-4 inline mr-2" />
              Extract Colors! ✨
            </button>
          </div>
        )}

        {/* Hidden canvas for color extraction */}
        <canvas ref={canvasRef} style={{ display: 'none' }} />
      </div>
    </section>
  );
}
