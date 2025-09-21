import { useState } from 'react';
import { Search, Sparkles, RefreshCw } from 'lucide-react';
import { 
  searchPalettes, 
  getPalettesByCategory, 
  getRandomPalettes, 
  CATEGORIES,
  type KeywordPalette 
} from '@/utils/keyword-palettes';
import { useToast } from '@/hooks/use-toast';

interface KeywordGeneratorProps {
  onColorsGenerated: (colors: string[]) => void;
}

export function KeywordGenerator({ onColorsGenerated }: KeywordGeneratorProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [searchResults, setSearchResults] = useState<KeywordPalette[]>([]);
  const [showSuggestions, setShowSuggestions] = useState(true);
  const { toast } = useToast();

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    if (query.trim()) {
      const results = searchPalettes(query);
      setSearchResults(results);
      setShowSuggestions(false);
    } else {
      setSearchResults([]);
      setShowSuggestions(true);
    }
  };

  const handleCategorySelect = (category: string) => {
    setSelectedCategory(category);
    const results = getPalettesByCategory(category);
    setSearchResults(results);
    setShowSuggestions(false);
    setSearchQuery('');
  };

  const handlePaletteSelect = (palette: KeywordPalette) => {
    onColorsGenerated(palette.colors);
    toast({
      title: "Palette loaded!",
      description: `Applied "${palette.keyword}" theme`,
    });
  };

  const handleRandomSuggestion = () => {
    const randomPalettes = getRandomPalettes(6);
    setSearchResults(randomPalettes);
    setShowSuggestions(false);
    setSelectedCategory(null);
    setSearchQuery('');
  };

  const displayPalettes = showSuggestions ? getRandomPalettes(6) : searchResults;

  return (
    <section>
      <div className="sketchy-border p-6 bg-card">
        <h2 className="text-2xl font-sketch font-semibold mb-6 transform -rotate-1 text-center">
          🔍 Keyword Palettes
        </h2>

        {/* Search Input */}
        <div className="relative mb-6">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <input
            type="text"
            placeholder="Try 'cozy cafe', 'vintage retro'..."
            value={searchQuery}
            onChange={(e) => handleSearch(e.target.value)}
            className="w-full pl-10 pr-4 py-3 border-2 border-border rounded-lg bg-background font-handwritten placeholder:text-muted-foreground focus:outline-none focus:border-primary"
            data-testid="keyword-search-input"
          />
        </div>

        {/* Category Buttons */}
        <div className="flex flex-wrap gap-2 mb-6">
          <button
            onClick={handleRandomSuggestion}
            className="sketchy-button px-3 py-1 text-sm"
            data-testid="random-suggestions-button"
          >
            <RefreshCw className="w-3 h-3 inline mr-1" />
            Random
          </button>
          {Object.entries(CATEGORIES).map(([key, category]) => (
            <button
              key={key}
              onClick={() => handleCategorySelect(key)}
              className={`sketchy-button px-3 py-1 text-sm ${
                selectedCategory === key ? 'bg-primary text-primary-foreground' : ''
              }`}
              data-testid={`category-${key}`}
            >
              {category.icon} {category.name}
            </button>
          ))}
        </div>

        {/* Results */}
        <div className="keyword-palette-scroll space-y-4">
          {displayPalettes.length > 0 ? (
            displayPalettes.map((palette, index) => (
              <div
                key={`${palette.keyword}-${index}`}
                className={`border-2 border-border rounded-lg p-4 cursor-pointer transition-all hover:border-primary hover:shadow-md ${
                  index % 2 === 0 ? 'transform rotate-1' : 'transform -rotate-1'
                } hover:rotate-0`}
                onClick={() => handlePaletteSelect(palette)}
                data-testid={`keyword-palette-${index}`}
              >
                <div className="flex items-center justify-between mb-3">
                  <div>
                    <h3 className="font-sketch font-semibold text-base capitalize">
                      {palette.keyword}
                    </h3>
                    <p className="text-xs text-muted-foreground font-handwritten capitalize">
                      {CATEGORIES[palette.category as keyof typeof CATEGORIES].icon} {palette.category}
                    </p>
                  </div>
                  <Sparkles className="w-4 h-4 text-primary" />
                </div>
                
                {/* Color Preview */}
                <div className="flex gap-2 mb-3">
                  {palette.colors.map((color, colorIndex) => (
                    <div
                      key={colorIndex}
                      className="w-8 h-8 rounded-full border-2 border-background shadow-sm"
                      style={{ background: color }}
                      data-testid={`keyword-color-${index}-${colorIndex}`}
                    />
                  ))}
                </div>
                
                <p className="text-xs font-handwritten text-muted-foreground">
                  {palette.description}
                </p>
                
                {/* Tags */}
                <div className="flex flex-wrap gap-1 mt-2">
                  {palette.tags.slice(0, 3).map((tag, tagIndex) => (
                    <span 
                      key={tagIndex}
                      className="px-2 py-1 bg-muted rounded-full text-xs font-handwritten"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))
          ) : searchQuery && !showSuggestions ? (
            <div className="text-center py-8 text-muted-foreground font-handwritten">
              <Search className="w-12 h-12 mx-auto mb-4 opacity-50" />
              <p>No palettes found for "{searchQuery}"</p>
              <p className="text-xs mt-2">Try keywords like "sunset", "cozy", or "professional"</p>
            </div>
          ) : null}
        </div>

        {/* Help Text */}
        {showSuggestions && (
          <div className="mt-6 pt-4 border-t border-border">
            <h4 className="font-sketch font-semibold text-base mb-3">💡 Keyword Examples:</h4>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-2 text-xs font-handwritten text-muted-foreground">
              <div>
                <p><strong>Nature:</strong> forest, ocean, sunset</p>
              </div>
              <div>
                <p><strong>Moods:</strong> cozy, energetic, calm</p>
              </div>
              <div>
                <p><strong>Places:</strong> cafe, tokyo, scandinavian</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}