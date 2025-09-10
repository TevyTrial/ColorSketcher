import { THEME_PALETTES, type ThemeKey } from '@/utils/color-utils';

interface ThemeSelectorProps {
  selectedTheme: ThemeKey | null;
  onSelectTheme: (theme: ThemeKey) => void;
}

const themeLabels: Record<ThemeKey, { icon: string; name: string; description: string }> = {
  sunset: { icon: '🌅', name: 'Sunset', description: 'Warm & cozy' },
  ocean: { icon: '🌊', name: 'Ocean', description: 'Cool & fresh' },
  forest: { icon: '🌲', name: 'Forest', description: 'Natural & earthy' },
  pastel: { icon: '🌸', name: 'Pastel', description: 'Soft & dreamy' },
  retro: { icon: '📼', name: 'Retro', description: 'Vintage vibes' },
  monochrome: { icon: '⚫', name: 'Monochrome', description: 'Classic & timeless' },
};

export function ThemeSelector({ selectedTheme, onSelectTheme }: ThemeSelectorProps) {
  return (
    <section className="notebook-holes">
      <div className="sketchy-border p-6 bg-card">
        <h2 className="text-2xl font-sketch font-semibold mb-6 transform rotate-1 text-center">
          🌈 Theme Palettes
        </h2>
        
        <div className="grid grid-cols-2 gap-4">
          {(Object.keys(THEME_PALETTES) as ThemeKey[]).map((themeKey) => {
            const theme = themeLabels[themeKey];
            const colors = THEME_PALETTES[themeKey];
            const isActive = selectedTheme === themeKey;
            
            return (
              <div 
                key={themeKey}
                className={`theme-card p-4 cursor-pointer text-center ${isActive ? 'active' : ''}`}
                onClick={() => onSelectTheme(themeKey)}
                data-testid={`theme-${themeKey}`}
              >
                <h3 className="font-handwritten font-semibold mb-2">
                  {theme.icon} {theme.name}
                </h3>
                <div className="flex justify-center gap-1 mb-2">
                  {colors.slice(0, 4).map((color, index) => (
                    <div 
                      key={index}
                      className="w-4 h-4 rounded-full" 
                      style={{ background: color }}
                      data-testid={`theme-color-${themeKey}-${index}`}
                    />
                  ))}
                </div>
                <p className="text-xs text-muted-foreground font-handwritten">
                  {theme.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
