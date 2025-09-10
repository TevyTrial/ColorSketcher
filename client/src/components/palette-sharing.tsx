import { useState } from 'react';
import { Share2, Copy, CheckCircle, ExternalLink } from 'lucide-react';
import { useMutation } from '@tanstack/react-query';
import { apiRequest } from '@/lib/queryClient';
import { useToast } from '@/hooks/use-toast';
import { copyToClipboard } from '@/utils/color-utils';
import type { ColorPalette, InsertColorPalette } from '@shared/schema';

interface PaletteSharingProps {
  colors: string[];
  theme?: string;
  name?: string;
}

interface ShareResponse {
  shareId: string;
  shareUrl: string;
  palette: ColorPalette;
}

export function PaletteSharing({ colors, theme, name }: PaletteSharingProps) {
  const [shareUrl, setShareUrl] = useState<string | null>(null);
  const [showCopyFeedback, setShowCopyFeedback] = useState(false);
  const { toast } = useToast();

  const shareMutation = useMutation({
    mutationFn: async (palette: InsertColorPalette): Promise<ShareResponse> => {
      const response = await fetch('/api/share-palette', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(palette),
      });
      
      if (!response.ok) {
        throw new Error('Failed to share palette');
      }
      
      return response.json();
    },
    onSuccess: (data) => {
      setShareUrl(data.shareUrl);
      toast({
        title: "Palette shared!",
        description: "Your palette is now available via a shareable link",
      });
    },
    onError: () => {
      toast({
        title: "Share failed",
        description: "Failed to create shareable link",
        variant: "destructive",
      });
    },
  });

  const handleShare = () => {
    shareMutation.mutate({
      colors,
      theme,
      name: name || `${theme ? theme + ' ' : ''}Palette`,
    });
  };

  const handleCopyUrl = async () => {
    if (!shareUrl) return;
    
    try {
      await copyToClipboard(shareUrl);
      setShowCopyFeedback(true);
      setTimeout(() => setShowCopyFeedback(false), 2000);
      toast({
        title: "URL copied!",
        description: "Share this link with anyone",
      });
    } catch (error) {
      toast({
        title: "Copy failed",
        description: "Failed to copy URL to clipboard",
        variant: "destructive",
      });
    }
  };

  const handleOpenLink = () => {
    if (shareUrl) {
      window.open(shareUrl, '_blank');
    }
  };

  return (
    <div className="sketchy-border p-4 bg-card">
      <h3 className="font-sketch font-semibold mb-4 text-center transform -rotate-1">
        📤 Share This Palette
      </h3>
      
      {!shareUrl ? (
        <button 
          className="sketchy-button w-full py-2" 
          onClick={handleShare}
          disabled={shareMutation.isPending}
          data-testid="button-share-palette"
        >
          <Share2 className="w-4 h-4 inline mr-2" />
          {shareMutation.isPending ? 'Creating link...' : 'Create Shareable Link ✨'}
        </button>
      ) : (
        <div className="space-y-3">
          <div className="bg-muted p-3 rounded-lg border-2 border-border">
            <p className="text-xs font-handwritten text-muted-foreground mb-2">
              Shareable URL:
            </p>
            <div className="flex gap-2">
              <input 
                type="text" 
                value={shareUrl} 
                readOnly 
                className="flex-1 bg-background border border-border rounded px-2 py-1 text-sm font-mono"
                data-testid="share-url-input"
              />
              <button 
                className="text-muted-foreground hover:text-foreground p-1" 
                onClick={handleCopyUrl}
                title="Copy URL"
                data-testid="copy-url-button"
              >
                <Copy className="w-4 h-4" />
              </button>
              <button 
                className="text-muted-foreground hover:text-foreground p-1" 
                onClick={handleOpenLink}
                title="Open in new tab"
                data-testid="open-link-button"
              >
                <ExternalLink className="w-4 h-4" />
              </button>
            </div>
          </div>
          
          <p className="text-xs text-muted-foreground font-handwritten text-center">
            Anyone with this link can view your palette! 🎨
          </p>
        </div>
      )}

      {/* Copy feedback */}
      {showCopyFeedback && (
        <div className="copy-feedback show" data-testid="url-copy-feedback">
          <CheckCircle className="w-4 h-4 inline mr-2" />
          URL copied! 📋
        </div>
      )}
    </div>
  );
}