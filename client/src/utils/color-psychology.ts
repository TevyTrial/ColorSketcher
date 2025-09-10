// Color psychology mappings based on color theory and research

export interface ColorPsychology {
  emotion: string;
  meaning: string;
  icon: string;
  description: string;
}

export interface PaletteMood {
  overallMood: string;
  energy: 'low' | 'medium' | 'high';
  warmth: 'cool' | 'neutral' | 'warm';
  description: string;
  icon: string;
}

// Convert hex to HSL for better color categorization
function hexToHsl(hex: string): [number, number, number] {
  const r = parseInt(hex.slice(1, 3), 16) / 255;
  const g = parseInt(hex.slice(3, 5), 16) / 255;
  const b = parseInt(hex.slice(5, 7), 16) / 255;

  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);
  let h = 0, s = 0, l = (max + min) / 2;

  if (max !== min) {
    const d = max - min;
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
    
    switch (max) {
      case r: h = (g - b) / d + (g < b ? 6 : 0); break;
      case g: h = (b - r) / d + 2; break;
      case b: h = (r - g) / d + 4; break;
    }
    h /= 6;
  }

  return [h * 360, s * 100, l * 100];
}

// Get psychology info for a single color
export function getColorPsychology(hex: string): ColorPsychology {
  const [h, s, l] = hexToHsl(hex);

  // Red family (0-15, 345-360)
  if ((h >= 0 && h <= 15) || (h >= 345 && h <= 360)) {
    if (l > 80) {
      return {
        emotion: "Gentle & Soft",
        meaning: "Love, tenderness, compassion",
        icon: "🌸",
        description: "Light reds evoke feelings of gentle love and nurturing care"
      };
    }
    return {
      emotion: "Passionate & Energetic",
      meaning: "Power, excitement, urgency",
      icon: "🔥",
      description: "Red stimulates energy and creates a sense of urgency and passion"
    };
  }

  // Orange family (15-45)
  if (h >= 15 && h <= 45) {
    return {
      emotion: "Warm & Creative",
      meaning: "Enthusiasm, creativity, adventure",
      icon: "🎨",
      description: "Orange promotes creativity and enthusiasm while feeling welcoming"
    };
  }

  // Yellow family (45-75)
  if (h >= 45 && h <= 75) {
    if (l > 85) {
      return {
        emotion: "Cheerful & Optimistic",
        meaning: "Joy, happiness, enlightenment",
        icon: "☀️",
        description: "Bright yellow radiates positivity and mental clarity"
      };
    }
    return {
      emotion: "Intelligent & Energizing",
      meaning: "Mental stimulation, wisdom, caution",
      icon: "💡",
      description: "Yellow stimulates mental activity and promotes clear thinking"
    };
  }

  // Green family (75-165)
  if (h >= 75 && h <= 165) {
    if (l < 30) {
      return {
        emotion: "Sophisticated & Stable",
        meaning: "Growth, prosperity, stability",
        icon: "🌲",
        description: "Dark green represents growth, wealth, and natural stability"
      };
    }
    return {
      emotion: "Harmonious & Natural",
      meaning: "Balance, healing, freshness",
      icon: "🌿",
      description: "Green creates balance and promotes feelings of harmony and renewal"
    };
  }

  // Blue family (165-255)
  if (h >= 165 && h <= 255) {
    if (l > 75) {
      return {
        emotion: "Peaceful & Airy",
        meaning: "Tranquility, freedom, inspiration",
        icon: "☁️",
        description: "Light blue evokes feelings of peace and open-minded thinking"
      };
    }
    if (s > 70) {
      return {
        emotion: "Trustworthy & Professional",
        meaning: "Trust, reliability, corporate",
        icon: "🤝",
        description: "Strong blue builds trust and conveys professionalism"
      };
    }
    return {
      emotion: "Calm & Stable",
      meaning: "Serenity, wisdom, loyalty",
      icon: "🌊",
      description: "Blue promotes calmness and emotional stability"
    };
  }

  // Purple family (255-285)
  if (h >= 255 && h <= 285) {
    if (l > 70) {
      return {
        emotion: "Dreamy & Romantic",
        meaning: "Fantasy, nostalgia, femininity",
        icon: "🦄",
        description: "Light purple creates a dreamy, romantic atmosphere"
      };
    }
    return {
      emotion: "Mysterious & Noble",
      meaning: "Luxury, creativity, spirituality",
      icon: "👑",
      description: "Deep purple suggests luxury, mystery, and creative inspiration"
    };
  }

  // Pink family (285-345)
  if (h >= 285 && h <= 345) {
    return {
      emotion: "Nurturing & Playful",
      meaning: "Love, compassion, playfulness",
      icon: "💕",
      description: "Pink promotes feelings of care, love, and youthful energy"
    };
  }

  // Grayscale
  if (s < 10) {
    if (l > 80) {
      return {
        emotion: "Clean & Minimal",
        meaning: "Purity, simplicity, space",
        icon: "🤍",
        description: "Light gray creates clean, spacious feelings"
      };
    }
    if (l < 30) {
      return {
        emotion: "Sophisticated & Bold",
        meaning: "Power, elegance, formality",
        icon: "🖤",
        description: "Dark colors convey sophistication and strong presence"
      };
    }
    return {
      emotion: "Balanced & Neutral",
      meaning: "Stability, compromise, practicality",
      icon: "⚖️",
      description: "Neutral tones provide balance and timeless appeal"
    };
  }

  // Fallback for edge cases
  return {
    emotion: "Unique & Expressive",
    meaning: "Individuality, creativity, innovation",
    icon: "✨",
    description: "This unique color expresses creativity and individual style"
  };
}

// Analyze overall palette mood
export function analyzePaletteMood(colors: string[]): PaletteMood {
  if (colors.length === 0) {
    return {
      overallMood: "Neutral",
      energy: "medium",
      warmth: "neutral",
      description: "Select some colors to see the mood analysis",
      icon: "🎨"
    };
  }

  let totalWarmth = 0;
  let totalEnergy = 0;
  let dominantEmotions: string[] = [];

  colors.forEach(color => {
    const [h, s, l] = hexToHsl(color);
    const psychology = getColorPsychology(color);
    
    dominantEmotions.push(psychology.emotion);

    // Calculate warmth (red/orange/yellow = warm, blue/green = cool)
    if ((h >= 0 && h <= 60) || (h >= 300 && h <= 360)) {
      totalWarmth += 1; // Warm colors
    } else if (h >= 180 && h <= 240) {
      totalWarmth -= 1; // Cool colors
    }

    // Calculate energy (high saturation + medium lightness = energetic)
    if (s > 60 && l >= 30 && l <= 70) {
      totalEnergy += 1;
    } else if (s < 30 || l > 85 || l < 15) {
      totalEnergy -= 0.5;
    }
  });

  const avgWarmth = totalWarmth / colors.length;
  const avgEnergy = totalEnergy / colors.length;

  // Determine warmth
  let warmth: 'cool' | 'neutral' | 'warm';
  if (avgWarmth > 0.3) warmth = 'warm';
  else if (avgWarmth < -0.3) warmth = 'cool';
  else warmth = 'neutral';

  // Determine energy
  let energy: 'low' | 'medium' | 'high';
  if (avgEnergy > 0.5) energy = 'high';
  else if (avgEnergy < 0) energy = 'low';
  else energy = 'medium';

  // Generate overall mood description
  let overallMood: string;
  let description: string;
  let icon: string;

  if (warmth === 'warm' && energy === 'high') {
    overallMood = "Energetic & Vibrant";
    description = "This palette radiates energy and warmth, perfect for grabbing attention and creating excitement";
    icon = "🔥";
  } else if (warmth === 'warm' && energy === 'medium') {
    overallMood = "Cozy & Inviting";
    description = "A warm, welcoming palette that feels comfortable and approachable";
    icon = "🏠";
  } else if (warmth === 'warm' && energy === 'low') {
    overallMood = "Gentle & Nurturing";
    description = "Soft, warm tones that create a nurturing and peaceful atmosphere";
    icon = "🌅";
  } else if (warmth === 'cool' && energy === 'high') {
    overallMood = "Fresh & Dynamic";
    description = "Cool, energetic colors that feel fresh, modern, and professionally dynamic";
    icon = "⚡";
  } else if (warmth === 'cool' && energy === 'medium') {
    overallMood = "Calm & Professional";
    description = "Cool, balanced tones that promote focus and trustworthiness";
    icon = "🌊";
  } else if (warmth === 'cool' && energy === 'low') {
    overallMood = "Serene & Peaceful";
    description = "Gentle, cool colors that create a tranquil and meditative mood";
    icon = "🕊️";
  } else if (energy === 'high') {
    overallMood = "Bold & Creative";
    description = "A diverse, energetic palette that sparks creativity and bold expression";
    icon = "🎨";
  } else if (energy === 'low') {
    overallMood = "Sophisticated & Elegant";
    description = "Refined, subtle colors that convey sophistication and timeless elegance";
    icon = "✨";
  } else {
    overallMood = "Balanced & Harmonious";
    description = "A well-balanced palette that works in many contexts and feels naturally harmonious";
    icon = "⚖️";
  }

  return {
    overallMood,
    energy,
    warmth,
    description,
    icon
  };
}