import { useState } from 'react';
import { Brain, Info, Heart } from 'lucide-react';
import { getColorPsychology, analyzePaletteMood } from '@/utils/color-psychology';

interface ColorPsychologyProps {
  colors: string[];
}

export function ColorPsychology({ colors }: ColorPsychologyProps) {
  const [selectedColorIndex, setSelectedColorIndex] = useState<number | null>(null);
  const paletteMood = analyzePaletteMood(colors);

  return (
    <section className="notebook-holes">
      <div className="sketchy-border p-6 bg-card">
        <h2 className="text-2xl font-sketch font-semibold mb-6 transform rotate-1 text-center">
          🧠 Color Psychology
        </h2>

        {/* Overall Palette Mood */}
        <div className="bg-accent rounded-lg p-4 mb-6 sketchy-border">
          <div className="flex items-center gap-3 mb-3">
            <span className="text-2xl">{paletteMood.icon}</span>
            <div>
              <h3 className="font-sketch font-semibold text-lg">
                {paletteMood.overallMood}
              </h3>
              <div className="flex gap-4 text-sm font-handwritten text-muted-foreground">
                <span>Energy: {paletteMood.energy}</span>
                <span>Warmth: {paletteMood.warmth}</span>
              </div>
            </div>
          </div>
          <p className="font-handwritten text-sm">{paletteMood.description}</p>
        </div>

        {/* Individual Color Analysis */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4 mb-6">
          {colors.map((color, index) => {
            const psychology = getColorPsychology(color);
            const isSelected = selectedColorIndex === index;
            
            return (
              <div 
                key={index} 
                className="text-center group cursor-pointer"
                onClick={() => setSelectedColorIndex(isSelected ? null : index)}
                data-testid={`psychology-color-${index}`}
              >
                <div 
                  className={`watercolor-swatch w-20 h-20 mx-auto mb-2 relative transition-all duration-200 ${
                    isSelected ? 'ring-4 ring-primary scale-110' : ''
                  }`}
                  style={{ background: color }}
                >
                  <div className="absolute -top-2 -right-2 bg-background rounded-full p-1 opacity-0 group-hover:opacity-100 transition-opacity">
                    <span className="text-sm">{psychology.icon}</span>
                  </div>
                </div>
                <p className="font-handwritten text-xs text-muted-foreground">
                  Click for meaning
                </p>
              </div>
            );
          })}
        </div>

        {/* Selected Color Details */}
        {selectedColorIndex !== null && (
          <div className="bg-muted rounded-lg p-4 sketchy-border" data-testid="color-psychology-details">
            <div className="flex items-start gap-3">
              <div 
                className="w-12 h-12 rounded-full flex-shrink-0"
                style={{ background: colors[selectedColorIndex] }}
              />
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xl">{getColorPsychology(colors[selectedColorIndex]).icon}</span>
                  <h4 className="font-sketch font-semibold">
                    {getColorPsychology(colors[selectedColorIndex]).emotion}
                  </h4>
                </div>
                <p className="font-handwritten text-sm text-muted-foreground mb-2">
                  <strong>Meaning:</strong> {getColorPsychology(colors[selectedColorIndex]).meaning}
                </p>
                <p className="font-handwritten text-sm">
                  {getColorPsychology(colors[selectedColorIndex]).description}
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Help Text */}
        {colors.length === 0 && (
          <div className="text-center text-muted-foreground font-handwritten">
            <Brain className="w-12 h-12 mx-auto mb-4 opacity-50" />
            <p>Generate a palette to discover the psychology behind your colors! ✨</p>
          </div>
        )}

        {/* Psychology Tips */}
        <div className="mt-6 pt-4 border-t border-border">
          <div className="flex items-center gap-2 mb-3">
            <Info className="w-4 h-4 text-primary" />
            <h4 className="font-sketch font-semibold text-sm">Color Psychology Tips</h4>
          </div>
          <div className="grid md:grid-cols-2 gap-3 text-xs font-handwritten text-muted-foreground">
            <div className="flex items-start gap-2">
              <Heart className="w-3 h-3 mt-0.5 text-destructive" />
              <p><strong>Warm colors</strong> (reds, oranges, yellows) create energy and grab attention</p>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-chart-1 mt-0.5">❄️</span>
              <p><strong>Cool colors</strong> (blues, greens, purples) promote calm and trust</p>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-muted-foreground mt-0.5">⚫</span>
              <p><strong>Neutral colors</strong> (grays, browns, whites) provide balance and sophistication</p>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-chart-3 mt-0.5">🌈</span>
              <p><strong>Bright colors</strong> spark creativity while muted tones feel more professional</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}