// Keyword-based palette generation

export interface KeywordPalette {
  keyword: string;
  category: string;
  colors: string[];
  description: string;
  tags: string[];
}

export const KEYWORD_PALETTES: KeywordPalette[] = [
  // Nature
  {
    keyword: "forest morning",
    category: "nature",
    colors: ["#2D5A27", "#4A7C59", "#7FB069", "#D6CC99", "#F7F4E9"],
    description: "Fresh green tones of a misty forest at dawn",
    tags: ["green", "natural", "fresh", "organic"]
  },
  {
    keyword: "desert sunset",
    category: "nature", 
    colors: ["#8B4513", "#CD853F", "#F4A460", "#FFB347", "#FF6B47"],
    description: "Warm earth tones of a blazing desert evening",
    tags: ["warm", "earth", "orange", "sunset"]
  },
  {
    keyword: "ocean depths",
    category: "nature",
    colors: ["#003366", "#1B4F72", "#2E86AB", "#A23B72", "#F18F01"],
    description: "Deep blue mysteries of the ocean floor",
    tags: ["blue", "deep", "mysterious", "cool"]
  },
  {
    keyword: "spring garden",
    category: "nature",
    colors: ["#98FB98", "#87CEEB", "#FFB6C1", "#FFFFE0", "#F0E68C"],
    description: "Soft pastels of blooming spring flowers",
    tags: ["pastel", "soft", "spring", "floral"]
  },
  {
    keyword: "autumn leaves",
    category: "nature",
    colors: ["#8B4513", "#CD853F", "#DAA520", "#FF6347", "#DC143C"],
    description: "Rich, warm colors of fall foliage",
    tags: ["warm", "autumn", "red", "orange"]
  },
  {
    keyword: "winter frost",
    category: "nature",
    colors: ["#E6E6FA", "#B0C4DE", "#87CEEB", "#4682B4", "#2F4F4F"],
    description: "Cool, crisp tones of a winter morning",
    tags: ["cool", "winter", "blue", "crisp"]
  },

  // Moods
  {
    keyword: "cozy cafe",
    category: "moods",
    colors: ["#8B4513", "#D2691E", "#F4A460", "#FFEFD5", "#2F1B14"],
    description: "Warm browns and creams of a welcoming coffee shop",
    tags: ["brown", "warm", "cozy", "coffee"]
  },
  {
    keyword: "energetic startup",
    category: "moods",
    colors: ["#FF6B35", "#004E89", "#1A8FE3", "#00A8CC", "#7209B7"],
    description: "Bold, modern colors that inspire innovation",
    tags: ["bold", "modern", "tech", "vibrant"]
  },
  {
    keyword: "calm meditation",
    category: "moods",
    colors: ["#E8F4F8", "#B8E6B8", "#87CEEB", "#D8BFD8", "#F0F8FF"],
    description: "Gentle, soothing colors for peace and reflection",
    tags: ["calm", "peaceful", "soft", "meditation"]
  },
  {
    keyword: "romantic dinner",
    category: "moods",
    colors: ["#8B0000", "#DC143C", "#FF69B4", "#FFEFD5", "#2F1B14"],
    description: "Rich, intimate colors for a romantic evening",
    tags: ["romantic", "red", "intimate", "elegant"]
  },
  {
    keyword: "playful kids",
    category: "moods",
    colors: ["#FF6B6B", "#4ECDC4", "#45B7D1", "#96CEB4", "#FFEAA7"],
    description: "Bright, cheerful colors that spark joy and creativity",
    tags: ["bright", "playful", "cheerful", "fun"]
  },
  {
    keyword: "professional office",
    category: "moods",
    colors: ["#2C3E50", "#34495E", "#7F8C8D", "#BDC3C7", "#ECF0F1"],
    description: "Clean, professional grays and blues for business",
    tags: ["professional", "clean", "corporate", "neutral"]
  },

  // Places
  {
    keyword: "parisian bistro",
    category: "places",
    colors: ["#800020", "#F5F5DC", "#DDD7C7", "#8B4513", "#2F1B14"],
    description: "Classic burgundy and cream of a French bistro",
    tags: ["classic", "elegant", "french", "sophisticated"]
  },
  {
    keyword: "tokyo neon",
    category: "places",
    colors: ["#FF0080", "#00FFFF", "#FF4500", "#9400D3", "#000000"],
    description: "Electric, vibrant neon colors of Tokyo nightlife",
    tags: ["neon", "electric", "vibrant", "night"]
  },
  {
    keyword: "scandinavian home",
    category: "places",
    colors: ["#F5F5F5", "#E8E8E8", "#D3D3D3", "#696969", "#2F4F4F"],
    description: "Clean, minimalist grays and whites of Nordic design",
    tags: ["minimal", "clean", "nordic", "simple"]
  },
  {
    keyword: "tropical resort",
    category: "places",
    colors: ["#00CED1", "#20B2AA", "#FFD700", "#FF6347", "#FFFFFF"],
    description: "Bright, vacation-inspired tropical colors",
    tags: ["tropical", "bright", "vacation", "turquoise"]
  },
  {
    keyword: "rustic cabin",
    category: "places",
    colors: ["#8B4513", "#A0522D", "#D2691E", "#F4A460", "#FFEFD5"],
    description: "Warm, natural wood tones of a mountain retreat",
    tags: ["rustic", "wood", "natural", "cozy"]
  },
  {
    keyword: "city skyline",
    category: "places",
    colors: ["#1C1C1C", "#4A4A4A", "#7A7A7A", "#A8A8A8", "#E0E0E0"],
    description: "Urban grays and silvers of a metropolitan landscape",
    tags: ["urban", "modern", "gray", "metropolitan"]
  },

  // Seasons
  {
    keyword: "summer beach",
    category: "seasons",
    colors: ["#87CEEB", "#F0E68C", "#FF7F50", "#98FB98", "#FFFFFF"],
    description: "Sun, sand, and sea colors of summer vacation",
    tags: ["summer", "beach", "vacation", "bright"]
  },
  {
    keyword: "spring bloom",
    category: "seasons",
    colors: ["#FFB6C1", "#98FB98", "#87CEEB", "#FFFFE0", "#DDA0DD"],
    description: "Fresh, blooming colors of springtime awakening",
    tags: ["spring", "fresh", "bloom", "pastel"]
  },
  {
    keyword: "autumn harvest",
    category: "seasons",
    colors: ["#FF8C00", "#DAA520", "#CD853F", "#8B4513", "#A0522D"],
    description: "Rich, harvested colors of autumn abundance",
    tags: ["autumn", "harvest", "rich", "orange"]
  },
  {
    keyword: "winter wonderland",
    category: "seasons",
    colors: ["#F0F8FF", "#E6E6FA", "#B0C4DE", "#4682B4", "#2F4F4F"],
    description: "Crisp, snowy colors of winter magic",
    tags: ["winter", "snow", "crisp", "blue"]
  },

  // Styles
  {
    keyword: "vintage retro",
    category: "styles",
    colors: ["#D2691E", "#CD853F", "#F4A460", "#DDA0DD", "#20B2AA"],
    description: "Nostalgic colors from the groovy decades",
    tags: ["vintage", "retro", "nostalgic", "70s"]
  },
  {
    keyword: "modern minimalist",
    category: "styles",
    colors: ["#000000", "#FFFFFF", "#808080", "#F5F5F5", "#2C2C2C"],
    description: "Clean, stark colors of contemporary design",
    tags: ["modern", "minimal", "clean", "stark"]
  },
  {
    keyword: "bohemian artistic",
    category: "styles",
    colors: ["#8B008B", "#FF6347", "#FFD700", "#20B2AA", "#CD853F"],
    description: "Creative, eclectic colors of artistic expression",
    tags: ["bohemian", "artistic", "creative", "eclectic"]
  }
];

export const CATEGORIES = {
  nature: { name: "Nature", icon: "🌿", description: "Colors inspired by the natural world" },
  moods: { name: "Moods", icon: "😊", description: "Colors that evoke specific feelings" },
  places: { name: "Places", icon: "🏛️", description: "Colors from iconic locations" },
  seasons: { name: "Seasons", icon: "🍂", description: "Colors that capture seasonal essence" },
  styles: { name: "Styles", icon: "🎨", description: "Colors from design movements" }
};

// Search palettes by keyword
export function searchPalettes(query: string): KeywordPalette[] {
  const lowerQuery = query.toLowerCase().trim();
  
  if (!lowerQuery) return [];

  return KEYWORD_PALETTES.filter(palette => 
    palette.keyword.toLowerCase().includes(lowerQuery) ||
    palette.description.toLowerCase().includes(lowerQuery) ||
    palette.tags.some(tag => tag.toLowerCase().includes(lowerQuery)) ||
    palette.category.toLowerCase().includes(lowerQuery)
  );
}

// Get palettes by category
export function getPalettesByCategory(category: string): KeywordPalette[] {
  return KEYWORD_PALETTES.filter(palette => palette.category === category);
}

// Get random palette suggestions
export function getRandomPalettes(count: number = 3): KeywordPalette[] {
  const shuffled = [...KEYWORD_PALETTES].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
}