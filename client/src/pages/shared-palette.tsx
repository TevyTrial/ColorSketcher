import { useEffect, useState } from 'react';
import { useParams, useLocation } from 'wouter';
import { useQuery } from '@tanstack/react-query';
import { apiRequest } from '@/lib/queryClient';
import { Copy, Eye, Calendar, ArrowLeft } from 'lucide-react';
import { copyToClipboard } from '@/utils/color-utils';
import { useToast } from '@/hooks/use-toast';
import type { ColorPalette } from '@shared/schema';

interface SharedPaletteData {
  palette: ColorPalette;
  viewCount: number;
  createdAt: string;
}

export default function SharedPalette() {
  const { shareId } = useParams<{ shareId: string }>();
  const [, setLocation] = useLocation();
  const [showCopyFeedback, setShowCopyFeedback] = useState(false);
  const { toast } = useToast();

  const { data, isLoading, error } = useQuery<SharedPaletteData>({
    queryKey: ['/api/shared', shareId],
    queryFn: async () => {
      const response = await fetch(`/api/shared/${shareId}`);
      if (!response.ok) {
        throw new Error('Failed to load shared palette');
      }
      return response.json();
    },
    enabled: !!shareId,
  });

  // Set page title for social sharing
  useEffect(() => {
    if (data?.palette) {
      const title = `${data.palette.name || 'Color Palette'} - Palette Generator`;
      document.title = title;
      
      // Add meta description for social sharing
      const metaDescription = document.querySelector('meta[name="description"]');
      if (metaDescription) {
        metaDescription.setAttribute('content', 
          `Beautiful ${data.palette.theme || 'custom'} color palette with ${data.palette.colors.length} colors: ${data.palette.colors.join(', ')}`
        );
      }
    }
  }, [data]);

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

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  if (isLoading) {
    return (
      <div className="bg-background text-foreground min-h-screen flex items-center justify-center">
        <div className="sketchy-border p-8 bg-card text-center">
          <div className="animate-pulse">
            <h2 className="text-2xl font-sketch font-semibold mb-4">
              Loading palette... ✨
            </h2>
            <div className="flex gap-4 justify-center">
              {[...Array(5)].map((_, i) => (
                <div key={i} className="w-16 h-16 bg-muted rounded-full" />
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (error || !data) {
    return (
      <div className="bg-background text-foreground min-h-screen flex items-center justify-center">
        <div className="sketchy-border p-8 bg-card text-center max-w-md">
          <h2 className="text-2xl font-sketch font-semibold mb-4 text-destructive">
            Palette not found 😞
          </h2>
          <p className="font-handwritten text-muted-foreground mb-6">
            This shared palette doesn't exist or has been removed.
          </p>
          <button 
            className="sketchy-button px-6 py-2" 
            onClick={() => setLocation('/')}
            data-testid="back-to-home"
          >
            <ArrowLeft className="w-4 h-4 inline mr-2" />
            Back to Generator
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-background text-foreground min-h-screen">
      {/* Header */}
      <header className="py-6 px-4 text-center">
        <div className="notebook-holes max-w-4xl mx-auto">
          <button 
            className="absolute left-4 top-6 sketchy-button px-4 py-2 text-sm" 
            onClick={() => setLocation('/')}
            data-testid="back-button"
          >
            <ArrowLeft className="w-4 h-4 inline mr-2" />
            Back
          </button>
          <h1 className="text-3xl md:text-5xl font-sketch font-bold text-foreground mb-2 transform -rotate-1">
            🎨 {data.palette.name || 'Shared Palette'}
          </h1>
          <div className="flex justify-center gap-6 text-sm text-muted-foreground font-handwritten">
            <div className="flex items-center gap-1">
              <Eye className="w-4 h-4" />
              {data.viewCount} views
            </div>
            <div className="flex items-center gap-1">
              <Calendar className="w-4 h-4" />
              Created {formatDate(data.createdAt)}
            </div>
            {data.palette.theme && (
              <div className="flex items-center gap-1">
                🏷️ {data.palette.theme}
              </div>
            )}
          </div>
        </div>
        <hr className="doodle-divider" />
      </header>

      <main className="max-w-4xl mx-auto px-4 pb-12">
        {/* Palette Display */}
        <section className="notebook-holes mb-12">
          <div className="sketchy-border p-6 md:p-8 bg-card">
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4 mb-8">
              {data.palette.colors.map((color, index) => (
                <div key={index} className="text-center group">
                  <div 
                    className="watercolor-swatch w-24 h-24 md:w-28 md:h-28 mx-auto mb-3 cursor-pointer relative" 
                    style={{ background: color }}
                    onClick={() => handleCopyColor(color)}
                    data-testid={`shared-color-swatch-${index}`}
                  />
                  <p className="font-handwritten text-sm font-medium" data-testid={`shared-color-hex-${index}`}>
                    {color}
                  </p>
                  <button 
                    className="opacity-0 group-hover:opacity-100 transition-opacity mt-1 text-xs text-muted-foreground hover:text-foreground" 
                    onClick={() => handleCopyColor(color)}
                    data-testid={`copy-shared-color-${index}`}
                  >
                    <Copy className="w-3 h-3 inline mr-1" />
                    Copy
                  </button>
                </div>
              ))}
            </div>

            <div className="text-center">
              <button 
                className="sketchy-button px-6 py-3 text-lg font-semibold" 
                onClick={() => setLocation('/')}
                data-testid="create-own-palette"
              >
                ✨ Create Your Own Palette
              </button>
            </div>
          </div>
        </section>

        {/* Tips */}
        <section className="notebook-holes">
          <div className="sketchy-border p-6 bg-accent">
            <h2 className="text-xl font-sketch font-semibold mb-4 transform -rotate-1 text-center">
              💡 Using This Palette
            </h2>
            <div className="grid md:grid-cols-2 gap-6 font-handwritten text-sm">
              <div>
                <p><strong>Click any color</strong> to copy its hex code instantly!</p>
              </div>
              <div>
                <p><strong>Save these colors</strong> for your design projects</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Copy Feedback Toast */}
      {showCopyFeedback && (
        <div className="copy-feedback show" data-testid="shared-copy-feedback">
          <Copy className="w-4 h-4 inline mr-2" />
          Hex code copied! 📋
        </div>
      )}

      {/* Footer */}
      <footer className="text-center py-8 text-muted-foreground">
        <p className="font-handwritten text-sm">
          Made with 💖 for creative souls everywhere
        </p>
      </footer>
    </div>
  );
}