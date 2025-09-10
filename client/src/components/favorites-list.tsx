import { Download, X, Trash2, HeartCrack } from 'lucide-react';
import type { ColorPalette } from '@shared/schema';

interface FavoritesListProps {
  favorites: ColorPalette[];
  onLoadPalette: (colors: string[]) => void;
  onDeletePalette: (id: string) => void;
  onClearAll: () => void;
}

export function FavoritesList({ 
  favorites, 
  onLoadPalette, 
  onDeletePalette, 
  onClearAll 
}: FavoritesListProps) {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    const now = new Date();
    const diffTime = Math.abs(now.getTime() - date.getTime());
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    
    if (diffDays === 1) return 'Yesterday';
    if (diffDays < 7) return `${diffDays} days ago`;
    return date.toLocaleDateString();
  };

  return (
    <section className="notebook-holes mb-12">
      <div className="sketchy-border p-6 bg-card">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-sketch font-semibold transform rotate-1">
            💖 Saved Favorites
          </h2>
          {favorites.length > 0 && (
            <button 
              className="text-sm text-muted-foreground hover:text-foreground font-handwritten" 
              onClick={onClearAll}
              data-testid="button-clear-all"
            >
              <Trash2 className="w-4 h-4 inline mr-1" />
              Clear all
            </button>
          )}
        </div>

        {favorites.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6" data-testid="favorites-grid">
            {favorites.map((palette, index) => (
              <div 
                key={palette.id}
                className={`border-2 border-border rounded-lg p-4 bg-muted relative transition-transform ${
                  index % 2 === 0 ? 'transform rotate-1 hover:rotate-0' : 'transform -rotate-1 hover:rotate-0'
                }`}
                data-testid={`favorite-${palette.id}`}
              >
                {/* Bookmark tab */}
                <div className="absolute -top-2 -right-2 bg-destructive text-destructive-foreground px-3 py-1 text-xs font-handwritten font-semibold transform rotate-12 rounded">
                  ♥
                </div>
                
                <div className="flex gap-2 mb-3">
                  {palette.colors.map((color, colorIndex) => (
                    <div 
                      key={colorIndex}
                      className="w-8 h-8 rounded-full" 
                      style={{ background: color }}
                      data-testid={`favorite-color-${palette.id}-${colorIndex}`}
                    />
                  ))}
                </div>
                
                <div className="flex justify-between items-center">
                  <p className="text-xs text-muted-foreground font-handwritten">
                    {palette.theme && `${palette.theme} • `}
                    Saved {formatDate(palette.createdAt)}
                  </p>
                  <div className="flex gap-2">
                    <button 
                      className="text-xs text-muted-foreground hover:text-foreground" 
                      onClick={() => onLoadPalette(palette.colors)}
                      title="Load palette"
                      data-testid={`button-load-${palette.id}`}
                    >
                      <Download className="w-4 h-4" />
                    </button>
                    <button 
                      className="text-xs text-muted-foreground hover:text-destructive" 
                      onClick={() => onDeletePalette(palette.id)}
                      title="Delete palette"
                      data-testid={`button-delete-${palette.id}`}
                    >
                      <X className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center mt-8 text-muted-foreground font-handwritten" data-testid="empty-state">
            <HeartCrack className="w-12 h-12 mx-auto mb-4" />
            <p>No saved palettes yet! Save some favorites to see them here ✨</p>
          </div>
        )}
      </div>
    </section>
  );
}
