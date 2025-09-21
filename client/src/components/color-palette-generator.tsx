import { useState } from 'react';
import { Copy, Heart, CheckCircle } from 'lucide-react';
import { copyToClipboard } from '@/utils/color-utils';
import { useToast } from '@/hooks/use-toast';

interface ColorPaletteGeneratorProps {
  colors: string[];
  onGenerateRandom: () => void;
  onSaveFavorite: () => void;
}

export function ColorPaletteGenerator({ 
  colors, 
  onGenerateRandom, 
  onSaveFavorite 
}: ColorPaletteGeneratorProps) {
  const [showCopyFeedback, setShowCopyFeedback] = useState(false);
  const { toast } = useToast();

  const handleCopyColor = async (color: string) => {
    try {
      await copyToClipboard(color);
      setShowCopyFeedback(true);
      setTimeout(() => setShowCopyFeedback(false), 2000);
      toast({
        title: "Copied!",
        description: `${color} copied to clipboard`,
        duration: 2000,
      });
    } catch (error) {
      toast({
        title: "Copy failed",
        description: "Failed to copy color to clipboard",
        variant: "destructive",
      });
    }
  };

  return (
    <section className="mb-12">
      <div className="sketchy-border p-6 md:p-8 bg-card">
        <h2 className="text-2xl md:text-3xl font-sketch font-semibold mb-6 text-center transform -rotate-1">
          ✨ Your Current Palette ✨
        </h2>
        
        {/* Current Palette Display - Smaller */}
        <div className="grid grid-cols-3 md:grid-cols-5 gap-3 mb-6 max-w-2xl mx-auto">
          {colors.map((color, index) => (
            <div key={index} className="text-center group">
              <div 
                className="watercolor-swatch w-16 h-16 md:w-20 md:h-20 mx-auto mb-2 cursor-pointer relative" 
                style={{ background: color }}
                onClick={() => handleCopyColor(color)}
                data-testid={`color-swatch-${index}`}
              />
              <p className="font-handwritten text-base font-medium" data-testid={`color-hex-${index}`}>
                {color}
              </p>
              <button 
                className="opacity-0 group-hover:opacity-100 transition-opacity mt-1 text-xs text-muted-foreground hover:text-foreground" 
                onClick={() => handleCopyColor(color)}
                data-testid={`copy-color-${index}`}
              >
                <Copy className="w-3 h-3 inline mr-1" />
                Copy
              </button>
            </div>
          ))}
        </div>

        {/* Generation Controls */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button 
            className="sketchy-button px-6 py-3 text-lg font-semibold" 
            onClick={onGenerateRandom}
            data-testid="button-generate-random"
          >
            <i className="fas fa-dice mr-2"></i>
            Generate Random Palette ✨
          </button>
          <button 
            className="sketchy-button px-6 py-3 text-lg font-semibold" 
            onClick={onSaveFavorite}
            data-testid="button-save-favorite"
          >
            <Heart className="hand-drawn-heart w-5 h-5 inline mr-2" />
            Save to Favorites
          </button>
        </div>
      </div>

      {/* Copy Feedback Toast */}
      {showCopyFeedback && (
        <div className="copy-feedback show" data-testid="copy-feedback">
          <CheckCircle className="w-4 h-4 inline mr-2" />
          Hex code copied! 📋
        </div>
      )}
    </section>
  );
}
