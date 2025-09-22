import { ColorPaletteGenerator } from '@/components/color-palette-generator';
import { ThemeSelector } from '@/components/theme-selector';
import { ImageExtractor } from '@/components/image-extractor';
import { FavoritesList } from '@/components/favorites-list';
import { ColorPsychology } from '@/components/color-psychology';
import { KeywordGenerator } from '@/components/keyword-generator';
import { useColorPalette } from '@/hooks/use-color-palette';
import { useFavorites } from '@/hooks/use-favorites';
import { MousePointer, Heart, Image, Palette, Brain, Search } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import bgImage from '@assets/bg.jpg';

export default function Home() {
  const { 
    currentColors, 
    selectedTheme, 
    generateRandomPalette, 
    selectTheme, 
    setColors 
  } = useColorPalette();
  
  const { 
    favorites, 
    saveFavorite, 
    deleteFavorite, 
    clearFavorites 
  } = useFavorites();

  const { toast } = useToast();

  const handleSaveFavorite = () => {
    saveFavorite(currentColors, selectedTheme || undefined);
    toast({
      title: "Palette saved!",
      description: "Added to your favorites collection",
    });
  };

  const handleLoadPalette = (colors: string[]) => {
    setColors(colors);
    toast({
      title: "Palette loaded!",
      description: "Colors updated to selected palette",
    });
  };

  return (
    <div 
      className="desktop-bg-container text-foreground min-h-screen relative overflow-x-hidden"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed'
      }}
    >
      {/* Center Container - Beige background with margins on desktop only */}
      <div className="center-content-container">
        {/* Header */}
        <header className="relative py-6 px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-sketch font-bold text-foreground mb-2 transform -rotate-1">
              🎨 Color Palette Generator
            </h1>
            <p className="text-lg md:text-xl font-handwritten text-muted-foreground transform rotate-1">
              Your sketchy, playful color inspiration tool! ✨
            </p>
          </div>
          <hr className="doodle-divider" />
        </header>

        <main className="max-w-6xl mx-auto px-4 pb-12">
        {/* Main Generator */}
        <ColorPaletteGenerator
          colors={currentColors}
          onGenerateRandom={generateRandomPalette}
          onSaveFavorite={handleSaveFavorite}
        />

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Keyword Generator */}
          <KeywordGenerator
            onColorsGenerated={setColors}
          />

          {/* Image Extractor */}
          <ImageExtractor
            onColorsExtracted={setColors}
          />
        </div>

        <hr className="doodle-divider" />

        {/* Color Psychology */}
        <ColorPsychology
          colors={currentColors}
        />

        <hr className="doodle-divider" />

        {/* Theme Palettes */}
        <ThemeSelector
          selectedTheme={selectedTheme}
          onSelectTheme={selectTheme}
        />

        <hr className="doodle-divider" />

        {/* Favorites List */}
        <FavoritesList
          favorites={favorites}
          onLoadPalette={handleLoadPalette}
          onDeletePalette={deleteFavorite}
          onClearAll={clearFavorites}
        />

        {/* Help Tips */}
        <section>
          <div className="sketchy-border p-6 bg-accent">
            <h2 className="text-xl font-sketch font-semibold mb-4 transform -rotate-1 text-center">
              💡 Quick Tips
            </h2>
            <div className="grid md:grid-cols-2 gap-6 font-handwritten text-sm">
              <div className="flex items-start gap-3">
                <MousePointer className="text-primary mt-1 w-5 h-5" />
                <p><strong>Click any color</strong> to copy its hex code instantly!</p>
              </div>
              <div className="flex items-start gap-3">
                <Heart className="text-destructive mt-1 w-5 h-5" />
                <p><strong>Save favorites</strong> to build your personal color collection</p>
              </div>
              <div className="flex items-start gap-3">
                <Search className="text-chart-2 mt-1 w-5 h-5" />
                <p><strong>Type keywords</strong> like "cozy cafe" for themed palettes</p>
              </div>
              <div className="flex items-start gap-3">
                <Brain className="text-chart-3 mt-1 w-5 h-5" />
                <p><strong>Learn color psychology</strong> to understand emotional meanings</p>
              </div>
            </div>
          </div>
        </section>
        </main>

        {/* Footer */}
        <footer className="text-center py-8 text-muted-foreground">
          <p className="font-handwritten text-sm">
            Made with 💖 for creative souls everywhere
          </p>
          <p className="font-handwritten text-xs mt-2">
            Share your colorful creations! #PaletteGenerator ✨
          </p>
        </footer>
      </div>
    </div>
  );
}
