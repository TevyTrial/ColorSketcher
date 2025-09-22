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
    keyword: "crystal lagoon",
    category: "nature",
    colors: ["#00CED1", "#40E0D0", "#20B2AA", "#7FFFD4", "#E0FFFF"],
    description: "Shimmering turquoise waters of a tropical lagoon",
    tags: ["blue", "aqua", "tropical", "fresh"]
  },
  {
    keyword: "deep forest jewel",
    category: "nature",
    colors: ["#014421", "#2F4F2F", "#5C7A71", "#A3B18A", "#D9E4DD"],
    description: "Dark green jewel tones grounded with soft moss and leaf colours, for that earthy, luxe natural feel",
    tags: ["green", "deep", "earthy", "luxury"]
  },
  {
    keyword: "ocean serenity",
    category: "nature",
    colors: ["#04395E", "#0F4C75", "#3282B8", "#87CEEB", "#E0F7FA"],
    description: "Deep ocean blues evolving into calm sky & water tones — soothing and serene",
    tags: ["blue", "calm", "serene", "water"]
  },
  {
  keyword: "lavender haze",
  category: "nature",
  colors: ["#E6E1FF", "#D1C7E8", "#B8A9D6", "#9B8BC4", "#7E6DB2"],
  description: "Dreamy lavender gradient inspired by misty morning fields",
  tags: ["pastel", "purple", "dreamy", "soft"]
},
{
  keyword: "mushroom forest",
  category: "nature",
  colors: ["#8B7D6B", "#A67C52", "#D2B48C", "#F5DEB3", "#567162ff"],
  description: "Earthy mushroom and forest floor tones with subtle purple undertones",
  tags: ["earthy", "natural", "mushroom", "forest"]
},
  {
    keyword: "winter frost",
    category: "nature",
    colors: ["#E6E6FA", "#B0C4DE", "#87CEEB", "#4682B4", "#2F4F4F"],
    description: "Cool, crisp tones of a winter morning",
    tags: ["cool", "winter", "blue", "crisp"]
  },
  {
  keyword: "calico cat",
  category: "nature",
  colors: ["#141414ff", "#e5b33eff", "#a67c38ff", "#686868ff", "#ffffffff"],
  description: "Playful mix of warm oranges, and soft neutrals inspired by calico cats",
  tags: ["playful", "warm", "cute", "neutral"]
},
{
  keyword: "underwater coral",
  category: "nature", 
  colors: ["#FF7F50", "#FF6347", "#20B2AA", "#87CEEB", "#F0FFFF"],
  description: "Vibrant coral reef colors with ocean blue depths",
  tags: ["coral", "ocean", "vibrant", "marine"]
},
{
  keyword: "butterfly wings",
  category: "nature",
  colors: ["#FF1493", "#9370DB", "#00CED1", "#FFD700", "#FF69B4"],
  description: "Iridescent colors of tropical butterfly wings",
  tags: ["butterfly", "iridescent", "tropical", "colorful"]
},
{
  keyword: "succulent garden",
  category: "nature",
  colors: ["#9ACD32", "#228B22", "#F5DEB3", "#DEB887", "#8FBC8F"],
  description: "Muted greens and sandy tones of desert succulents",
  tags: ["succulent", "desert", "green", "natural"]
},
{
  keyword: "moonbeam meadow",
  category: "nature",
  colors: ["#E6E6FA", "#B0C4DE", "#98FB98", "#F0E68C", "#FFFACD"],
  description: "Ethereal pastels of a meadow bathed in moonlight",
  tags: ["ethereal", "pastel", "moonlight", "meadow"]
},

  {
    keyword: "midnight galaxy",
    category: "nature",
    colors: ["#0B0033", "#1C1C54", "#4B0082", "#8A2BE2", "#FFD700"],
    description: "Cosmic purples and gold stars of a midnight sky",
    tags: ["cosmic", "purple", "mystical", "night"]
  },
  {
    keyword: "icy aurora",
    category: "nature",
    colors: ["#0F2027", "#203A43", "#2C5364", "#7FFFD4", "#ADFFEF"],
    description: "Frozen blues with shimmering northern lights",
    tags: ["aurora", "icy", "blue", "northern lights"]
  },
  {
  keyword: "ancient redwood",
  category: "nature",
  colors: ["#8B4513", "#A0522D", "#654321", "#D2691E", "#F4A460"],
  description: "Deep, grounded browns of ancient redwood forests",
  tags: ["earthy", "natural", "wood", "grounded"]
},
{
  keyword: "desert sage",
  category: "nature",
  colors: ["#9CAF88", "#C8D5B9", "#F5F0E8", "#E6DDD4", "#D4C5B9"],
  description: "Muted sage greens with sandy desert undertones",
  tags: ["earthy", "natural", "sage", "desert"]
},
{
  keyword: "mountain mist",
  category: "nature",
  colors: ["#8B9DC3", "#DFE7FD", "#F7F9FF", "#E8E8E8", "#C5C5C5"],
  description: "Cool mountain air with misty morning clouds",
  tags: ["cool", "misty", "mountain", "serene"]
},
{
  keyword: "river stone",
  category: "nature",
  colors: ["#696969", "#808080", "#A9A9A9", "#D3D3D3", "#F5F5F5"],
  description: "Smooth gray tones of weathered river stones",
  tags: ["gray", "stone", "weathered", "natural"]
},
{
  keyword: "wildflower field",
  category: "nature",
  colors: ["#DA70D6", "#FF69B4", "#98FB98", "#FFE4B5", "#87CEEB"],
  description: "Mixed wildflower colors dancing in meadow breeze",
  tags: ["wildflower", "colorful", "meadow", "mixed"]
},
{
  keyword: "pine forest",
  category: "nature",
  colors: ["#013220", "#2F4F2F", "#228B22", "#8FBC8F", "#F0FFF0"],
  description: "Deep evergreen with fresh pine needle highlights",
  tags: ["pine", "evergreen", "forest", "fresh"]
},
{
  keyword: "clay earth",
  category: "nature",
  colors: ["#B87333", "#CD853F", "#DEB887", "#F5DEB3", "#FAEBD7"],
  description: "Rich clay soil tones with natural earth pigments",
  tags: ["clay", "earth", "soil", "natural"]
},
{
  keyword: "morning dew",
  category: "nature",
  colors: ["#F0FFFF", "#E0FFFF", "#B0E0E6", "#87CEEB", "#4682B4"],
  description: "Fresh morning dew with gentle blue undertones",
  tags: ["fresh", "morning", "dew", "gentle"]
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
    keyword: "velvet romance",
    category: "moods",
    colors: ["#4B0000", "#800000", "#B22222", "#DC143C", "#FFB6C1"],
    description: "Luxurious reds and pinks for an intimate atmosphere",
    tags: ["romantic", "velvet", "red", "intimate"]
  },
  {
    keyword: "energetic startup",
    category: "moods",
    colors: ["#FF6B35", "#004E89", "#1A8FE3", "#00A8CC", "#7209B7"],
    description: "Bold, modern colors that inspire innovation",
    tags: ["bold", "modern", "tech", "vibrant"]
  },
  {
  keyword: "sage & blush",
  category: "moods",
  colors: ["#B7C9B7", "#E8C5C5", "#F5F1ED", "#D4B5B0", "#A8B5A8"],
  description: "Muted sage green with dusty rose blush tones - calming and sophisticated",
  tags: ["pastel", "calm", "sophisticated", "neutral"]
},
{
  keyword: "citrus burst",
  category: "moods",
  colors: ["#FF6B35", "#F7931E", "#FFD23F", "#06FFA5", "#4ECDC4"],
  description: "Energizing citrus colors with fresh mint accents - pure joy and optimism",
  tags: ["bright", "citrus", "energetic", "optimistic"]
},
{
  keyword: "kawaii cafe",
  category: "moods",
  colors: ["#FFB6C1", "#FFCCCB", "#E0FFFF", "#F0FFF0", "#FFFACD"],
  description: "Super cute pastel colors perfect for kawaii-style cafes and brands",
  tags: ["kawaii", "cute", "pastel", "cafe"]
},
{
  keyword: "cozy reading nook",
  category: "moods",
  colors: ["#8B4513", "#D2691E", "#F5DEB3", "#FFEFD5", "#2F4F4F"],
  description: "Warm, bookish colors for the perfect reading atmosphere",
  tags: ["cozy", "reading", "warm", "bookish"]
},
{
  keyword: "birthday party",
  category: "moods",
  colors: ["#FF69B4", "#FFD700", "#32CD32", "#87CEEB", "#FF6347"],
  description: "Cheerful, festive colors that spark celebration and joy",
  tags: ["festive", "celebration", "cheerful", "party"]
},
{
  keyword: "cozy sunday",
  category: "moods",
  colors: ["#F5F5DC", "#E6E6FA", "#D3D3D3", "#C0C0C0", "#B0C4DE"],
  description: "Relaxed, muted tones for peaceful downtime",
  tags: ["relaxed", "peaceful", "muted", "lazy"]
},
{
  keyword: "study motivation",
  category: "moods",
  colors: ["#4169E1", "#32CD32", "#FFD700", "#FF6347", "#DDA0DD"],
  description: "Energizing yet focused colors to boost productivity",
  tags: ["productive", "energizing", "focus", "study"]
},
{
  keyword: "pastel rainbow",
  category: "moods",
  colors: ["#FFB3BA", "#FFDFBA", "#FFFFBA", "#BAFFC9", "#BAE1FF"],
  description: "Soft rainbow pastels that bring gentle joy and whimsy",
  tags: ["pastel", "rainbow", "whimsical", "gentle"]
},
{
  keyword: "grandmother's quilt",
  category: "moods",
  colors: ["#DDA0DD", "#F0E68C", "#98FB98", "#FFB6C1", "#E6E6FA"],
  description: "Soft, comforting colors of handmade granny squares and vintage quilts",
  tags: ["comfort", "vintage", "granny square", "handmade"]
},
{
  keyword: "cozy cabin",
  category: "moods",
  colors: ["#8B4513", "#CD853F", "#F4A460", "#FFEFD5", "#2F4F4F"],
  description: "Warm, stable colors that provide comfort and security",
  tags: ["comfort", "stability", "cozy", "warm"]
},
{
  keyword: "afternoon tea",
  category: "moods",
  colors: ["#D2691E", "#F4A460", "#FFEFD5", "#E6E6FA", "#DDA0DD"],
  description: "Gentle, reassuring colors of a peaceful tea time",
  tags: ["comfort", "peaceful", "tea", "gentle"]
},
{
  keyword: "cotton comfort",
  category: "moods",
  colors: ["#FFFAF0", "#F5F5DC", "#E6E6FA", "#D3D3D3", "#C0C0C0"],
  description: "Soft, reliable neutrals that feel like cotton comfort",
  tags: ["comfort", "cotton", "soft", "reliable"]
},
{
  keyword: "warm embrace",
  category: "moods",
  colors: ["#CD853F", "#D2691E", "#F4A460", "#FFEFD5", "#8B4513"],
  description: "Enveloping warm tones that provide emotional stability",
  tags: ["warm", "comfort", "stability", "embrace"]
},
{
  keyword: "zen garden",
  category: "moods",
  colors: ["#F5F5F5", "#E8E8E8", "#D3D3D3", "#A9A9A9", "#696969"],
  description: "Balanced, stable grays for mindful tranquility",
  tags: ["zen", "stability", "balanced", "mindful"]
},
{
  keyword: "library quiet",
  category: "moods",
  colors: ["#8B4513", "#A0522D", "#D2691E", "#F5DEB3", "#2F4F4F"],
  description: "Scholarly browns and muted tones for focused concentration",
  tags: ["quiet", "scholarly", "focused", "muted"]
},

{
  keyword: "digital meditation",
  category: "moods",
  colors: ["#F0F8FF", "#E0F2E7", "#D4E4F7", "#C5D9ED", "#B8C5D1"],
  description: "Calm tech-inspired blues and whites for digital meditation",
  tags: ["calm", "digital", "peaceful"]
},
  {
    keyword: "golden curry burst",
    category: "moods",
    colors: ["#FFC300", "#FFB000", "#E08D00", "#C77C00", "#A65F00"],
    description: "Radiant golden yellow with spicy tones — energy, optimism, vibrancy",
    tags: ["yellow", "warm", "vibrant", "optimistic"]
  },
  {
    keyword: "calm meditation",
    category: "moods",
    colors: ["#E8F4F8", "#B8E6B8", "#87CEEB", "#D8BFD8", "#F0F8FF"],
    description: "Gentle, soothing colors for peace and reflection",
    tags: ["calm", "peaceful", "soft", "meditation"]
  },
  {
    keyword: "butter & cherry",
    category: "moods",
    colors: ["#FFEB99", "#FFD65E", "#FF6B6B", "#C72C48", "#6B1E40"],
    description: "Soft yellow “butter” meets vibrant cherry red tones — playful contrast, warm energy",
    tags: ["warm", "bright", "cheerful", "contrast"]
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
    keyword: "candlelight glow",
    category: "moods",
    colors: ["#2F1B14", "#8B4513", "#CD853F", "#FFD700", "#FFE4B5"],
    description: "Golden, soft tones of flickering candlelight",
    tags: ["warm", "soft", "glow", "intimate"]
  },
  {
    keyword: "professional office",
    category: "moods",
    colors: ["#2C3E50", "#34495E", "#7F8C8D", "#BDC3C7", "#ECF0F1"],
    description: "Clean, professional grays and blues for business",
    tags: ["professional", "clean", "corporate", "neutral"]
  },
  {
    keyword: "rainy day",
    category: "moods",
    colors: ["#708090", "#A9A9A9", "#C0C0C0", "#4682B4", "#D3D3D3"],
    description: "Cool grays and blues of a soft rainy afternoon",
    tags: ["calm", "cool", "gray", "soothing"]
  },
  {
    keyword: "lazy day",
    category: "moods",
    colors: ["#97B3AE", "#D2E0D3", "#F0DDD6", "#F2C3B9", "#D6CBBF"],
    description: "Warm, neutral tones for a relaxed atmosphere",
    tags: ["relaxed", "warm", "pastel", "cozy"]
  },
  {
    keyword: "butter & cherry",
    category: "moods",
    colors: ["#FFEB99", "#FFD65E", "#FF6B6B", "#C72C48", "#6B1E40"],
    description: "Soft yellow “butter” meets vibrant cherry red tones — playful contrast, warm energy",
    tags: ["warm", "bright", "cheerful", "contrast"]
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
    keyword: "hong kong neon harbour",
    category: "places",
    colors: ["#fc3232ff", "#FF9F1C", "#00B7FF", "#FFD700", "#1C2331"],
    description: "Fiery red lanterns, golden signs, neon blue reflections over harbour night, dark skies",
    tags: ["neon", "urban", "night", "hong kong"]
  },
  {
    keyword: "tropical resort",
    category: "places",
    colors: ["#00CED1", "#20B2AA", "#FFD700", "#FF6347", "#FFFFFF"],
    description: "Bright, vacation-inspired tropical colors",
    tags: ["tropical", "bright", "vacation", "turquoise"]
  },
  {
    keyword: "Ocean Sorbet",
    category: "places",
    colors: ["#D9895B", "#F2E9E9", "#46658C", "#4A6D8C", "#2D2D2D"],
    description: "With oceanblues and peachy corals, this palette has a touch of exotic",
    tags: ["ocean", "tropical", "refreshing", "bright"]
  },
  {
    keyword: "rustic cabin",
    category: "places",
    colors: ["#8B4513", "#A0522D", "#D2691E", "#F4A460", "#FFEFD5"],
    description: "Warm, natural wood tones of a mountain retreat",
    tags: ["rustic", "wood", "natural", "cozy"]
  },
  {
    keyword: "brighton beach",
    category: "places",
    colors: ["#f1784cff", "#fde24bff", "#1E90FF", "#00CED1", "#FFFFFF"],
    description: "Vibrant beach huts and sunny seaside vibes",
    tags: ["beach", "bright", "seaside", "vibrant"]
  },
  {
  keyword: "jeju island breeze",
  category: "places",
  colors: ["#7c7c7cff", "#6db06dff", "#F58430", "#f4edafff", "#20B2AA"],
  description: "Fresh ocean breeze and green landscapes of Korea's Jeju Island",
  tags: ["jeju", "korean", "ocean", "fresh"]
},
{
  keyword: "yufuin hot spring",
  category: "places",
  colors: ["#486f59ff", "#9a8f85ff", "#D4B996", "#F5E6D3", "#ff5441ff"],
  description: "Peaceful earth tones inspired by Yufuin's natural hot springs, wooden ryokan architecture, and misty mountain mornings in Oita Prefecture",
  tags: ["japanese", "hot spring", "peaceful", "earth tone"]
},
{
  keyword: "toledo golden hour",
  category: "places",
  colors: ["#DAA520", "#CD853F", "#D2691E", "#F4A460", "#8B4513"],
  description: "Warm golden stones and terracotta roofs of historic Toledo, Spain",
  tags: ["toledo", "spanish", "golden", "historic"]
},
{
  keyword: "chiang mai temple",
  category: "places",
  colors: ["#88af90ff", "#c07a58ff", "#fce8c2ff", "#98432cff", "#ffc219ff"],
  description: "Golden temples and vibrant colors of Northern Thailand's cultural heart",
  tags: ["chiang mai", "thai", "temple", "cultural"]
},
{
  keyword: "cyberpunk alley",
  category: "places",
  colors: ["#FF00FF", "#00FFFF", "#FF0080", "#8A2BE2", "#000000"],
  description: "Neon-soaked dystopian streets with electric pink and cyan",
  tags: ["cyberpunk", "neon", "dystopian", "electric"]
},

   {
    keyword: "harbor dusk",
    category: "places",
    colors: ["#191970", "#483D8B", "#6A5ACD", "#708090", "#FFB347"],
    description: "Deep blues and amber reflections of a seaside evening",
    tags: ["dusk", "harbor", "blue", "calm"]
  },
  {
  keyword: "cyber bloom",
  category: "places",
  colors: ["#00FFFF", "#FF1493", "#FF7033", "#ADFFAD", "#282A3E"],
  description: "Futuristic neon garden with dark tech undertones",
  tags: ["neon", "futuristic", "tech", "vibrant"]
},
{
  keyword: "warm concrete",
  category: "places",
  colors: ["#D6CCC2", "#EDEDE9", "#F5EFE7", "#E3D5CA", "#D5BDAF"],
  description: "Soft concrete and stone tones with warm undertones - modern architectural inspiration",
  tags: ["neutral", "modern", "warm", "concrete"]
},
{
  keyword: "moroccan spice market",
  category: "places",
  colors: ["#D2691E", "#8B4513", "#FF6347", "#DAA520", "#CD853F"],
  description: "Warm spice colors of bustling North African markets",
  tags: ["warm", "spice", "exotic", "vibrant"]
},
  {
    keyword: "city skyline",
    category: "places",
    colors: ["#1C1C1C", "#4A4A4A", "#7A7A7A", "#A8A8A8", "#E0E0E0"],
    description: "Urban grays and silvers of a metropolitan landscape",
    tags: ["urban", "modern", "gray", "metropolitan"]
  },
  {
    keyword: "enchanted forest",
    category: "places",
    colors: ["#013220", "#145A32", "#228B22", "#66CDAA", "#ADFF2F"],
    description: "Mystical greens and glowing tones of a magical woodland",
    tags: ["forest", "mystical", "green", "enchanted"]
  },
  {
    keyword: "garden party",
    category: "places",
    colors: ["#859E91", "#C3D0A8", "#F0EEE2", "#F7E0E4", "#99AC73"],
    description: "Bright, cheerful colors for a festive outdoor gathering",
    tags: ["garden", "pastel", "peaceful"]
  },
  {
  keyword: "fish and chips shop",
  category: "places",
  colors: ["#DAA520", "#F4A460", "#8FBC8F", "#2E8B57", "#F5F5DC"],
  description: "Golden crispy colors with fresh green mushy peas - classic British comfort",
  tags: ["british", "comfort food", "golden", "classic"]
},
{
  keyword: "pizza parlor",
  category: "places",
  colors: ["#E16E0E", "#536304", "#B92F17", "#EA9109", "#F5DEB3"],
  description: "Rich tomato red, golden cheese, and fresh herb green of pizza perfection",
  tags: ["pizza", "italian", "comfort food", "vibrant"]
},
{
  keyword: "candy shop",
  category: "places",
  colors: ["#FF1493", "#00CED1", "#FFD700", "#32CD32", "#FF69B4"],
  description: "Sweet, vibrant colors of a childhood candy store dream",
  tags: ["candy", "sweet", "childhood", "vibrant"]
},
{
  keyword: "bakery bliss",
  category: "places",
  colors: ["#DEB887", "#F4A460", "#FFEFD5", "#D2691E", "#8B4513"],
  description: "Warm bread and pastry colors with rich coffee undertones",
  tags: ["bakery", "warm", "bread", "cozy"]
},
{
  keyword: "digital matrix",
  category: "places",
  colors: ["#00FF41", "#003300", "#008F11", "#39FF14", "#000000"],
  description: "Green digital rain and matrix code aesthetics",
  tags: ["cyberpunk", "digital", "matrix", "code"]
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
  keyword: "terracotta dreams",
  category: "seasons",
  colors: ["#E2725B", "#D4A574", "#F4E4BC", "#C8956D", "#A0522D"],
  description: "Rich terracotta and clay tones with cream highlights - artisanal pottery inspiration",
  tags: ["warm", "earthy", "artisanal", "terracotta"]
},
  {
    keyword: "spring bloom",
    category: "seasons",
    colors: ["#FFB6C1", "#98FB98", "#87CEEB", "#FFFFE0", "#DDA0DD"],
    description: "Fresh, blooming colors of springtime awakening",
    tags: ["spring", "fresh", "bloom", "pastel"]
  },
  {
    keyword: "terra cotta sunset",
    category: "seasons",
    colors: ["#D46A47", "#BF4E30", "#A13F2B", "#F2C19F", "#EDE0D4"],
    description: "Muted terracotta & burnt clay hues paired with sandy tones, grounded & artisanal",
    tags: ["earthy", "warm", "artisanal", "sunset"]
  },
  {
    keyword: "desert bloom",
    category: "seasons",
    colors: ["#C19A6B", "#FFD700", "#FF69B4", "#FF7F50", "#98FB98"],
    description: "Bright blossoms and sandy tones of desert in spring",
    tags: ["desert", "spring", "bloom", "colorful"]
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
  {
    keyword: "sunrise glow",
    category: "seasons",
    colors: ["#FF4500", "#FF8C00", "#FFD700", "#FFA07A", "#FFFACD"],
    description: "Warm, glowing colors of the morning sun",
    tags: ["sunrise", "warm", "bright", "hopeful"]
  },
  {
    keyword: "Retro Christmas",
    category: "seasons",
    colors: ["#7A1008", "#E22413", "#E2D7AC", "#3A8232", "#2F5323"],
    description: "Classic red and green with a vintage holiday feel",
    tags: ["christmas", "retro", "festive", "classic"]
  },
  {
  keyword: "lunar new year",
  category: "seasons",
  colors: ["#DC143C", "#FFD700", "#FF6347", "#8B0000", "#FFA500"],
  description: "Auspicious red and gold colors for prosperity and celebration",
  tags: ["lunar new year", "auspicious", "festive", "traditional"]
},
{
  keyword: "cherry blossom festival",
  category: "seasons",
  colors: ["#FFB6C1", "#FFC0CB", "#98FB98", "#F0E68C", "#FFFFFF"],
  description: "Delicate pink blossoms with fresh spring greens",
  tags: ["cherry blossom", "spring", "delicate", "festival"]
},
{
  keyword: "halloween magic",
  category: "seasons",
  colors: ["#FF4500", "#800080", "#000000", "#FFD700", "#228B22"],
  description: "Spooky yet magical colors of autumn Halloween nights",
  tags: ["halloween", "spooky", "magical", "autumn"]
},
{
  keyword: "y2k millennium",
  category: "seasons",
  colors: ["#FF00FF", "#00FFFF", "#FFFF00", "#FF69B4", "#7CFC00"],
  description: "Electric millennium colors of the Y2K era and digital optimism",
  tags: ["y2k", "millennium", "electric", "digital"]
},
{
  keyword: "y2k frosted tips",
  category: "seasons",
  colors: ["#E0E0E0", "#C0C0C0", "#00BFFF", "#FF1493", "#32CD32"],
  description: "Metallic silver with bright accent colors of early 2000s fashion",
  tags: ["y2k", "metallic", "fashion", "2000s"]
},
{
  keyword: "new millennium party",
  category: "seasons",
  colors: ["#800080", "#FF00FF", "#00CED1", "#FFD700", "#FF4500"],
  description: "Celebratory colors of the year 2000 countdown party",
  tags: ["y2k", "party", "celebration", "2000"]
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
    keyword: "olive & shadows",
    category: "styles",
    colors: ["#556B2F", "#708238", "#9BBF9E", "#C8D6B9", "#F5F0E1"],
    description: "Earthy greens with shadowy olive, balanced with soft neutrals — ideal as a ‘new neutral’ palette",
    tags: ["green", "olive", "neutral", "soft"]
  },
  {
  keyword: "cotton candy dreams",
  category: "styles",
  colors: ["#FFE1E6", "#E1F5E1", "#E6E1FF", "#FFF5E1", "#E1FFFF"],
  description: "Ultra-soft pastels reminiscent of cotton candy and sweet dreams",
  tags: ["pastel", "soft", "dreamy", "sweet"]
},
{
  keyword: "neon naturals",
  category: "styles",
  colors: ["#39FF14", "#FF073A", "#1B03A3", "#FFD700", "#FF6600"],
  description: "Electric brights balanced with natural undertones",
  tags: ["neon", "bold", "electric", "modern"]
},
{
  keyword: "2025 trends",
  category: "styles",
  colors: ["#373737", "#748794", "#768578.", "#C0777C", "#F4EEF1"],
  description: "A trendy, balanced palette for 2025 with warm and cool tones",
  tags: ["trendy", "balanced", "earthy", "2025"]
},
{
  keyword: "midnight luxe",
  category: "styles",
  colors: ["#0D1B2A", "#1B263B", "#415A77", "#778DA9", "#E0E1DD"],
  description: "Deep midnight blues with silver accents - luxury and sophistication",
  tags: ["luxury", "sophisticated", "blue", "elegant"]
},
{
  keyword: "bubble tea aesthetic",
  category: "styles",
  colors: ["#fbc4a7", "#ffb467", "#583b39", "#f0dfc5", "#85695d"],
  description: "Soft, milky pastels inspired by popular bubble tea flavors",
  tags: ["bubble tea", "aesthetic", "milky", "trendy"]
},
{
  keyword: "unicorn magic",
  category: "styles",
  colors: ["#FF69B4", "#9370DB", "#00CED1", "#FFD700", "#f15aabff"],
  description: "Magical, iridescent colors that sparkle with unicorn dreams",
  tags: ["unicorn", "magical", "sparkle", "fantasy"]
},
{
  keyword: "pastel goth",
  category: "styles",
  colors: ["#E6E6FA", "#FFB6C1", "#98FB98", "#DDA0DD", "#2F2F2F"],
  description: "Soft pastels balanced with dark gothic undertones",
  tags: ["pastel", "goth", "soft", "dark"]
},
{
  keyword: "dreamy pastels",
  category: "styles",
  colors: ["#FFE1E6", "#E1FFE1", "#E1E1FF", "#FFFFE1", "#E1FFFF"],
  description: "Ultra-soft dreamy pastels for ethereal, cloud-like aesthetics",
  tags: ["pastel", "dreamy", "soft", "ethereal"]
},
  {
    keyword: "cosmic purple twilight",
    category: "styles",
    colors: ["#4B0082", "#6A0DAD", "#9932CC", "#DA70D6", "#F8F0FF"],
    description: "Purple tones with mystic, futuristic / twilight vibes – cosmic and dreamy yet bold",
    tags: ["purple", "cosmic", "dreamy", "futuristic"]
  },
  {
    keyword: "cozy mocha luxury",
    category: "styles",
    colors: ["#6B4F4B", "#A68C82", "#D2B48C", "#F2E8DC", "#8F715B"],
    description: "Rich warm neutrals and mochas, reflecting comfort and quiet luxury (Mocha Mousse vibes)",
    tags: ["warm", "neutral", "cozy", "luxury"]
  },
  {
    keyword: "American Vintage",
    category: "styles",
    colors: ["#0C8D90", "#E8E3C3", "#DEA937", "#CE4A1C", "#4E3B2B"],
    description: "A nostalgic palette inspired by classic American design",
    tags: ["vintage", "american", "nostalgic", "classic"]
  },
  {
    keyword: "Matcha & Sakura",
    category: "styles",
    colors: ["#839146", "#DEE780", "#F5F1EB", "#FFFFFF", "#F7D2C4"],
    description: "Soft greens and pinks inspired by Japanese matcha and cherry blossoms — delicate, balanced, serene",
    tags: ["soft", "green", "pink", "serene"]
  },
  {
    keyword: "bohemian artistic",
    category: "styles",
    colors: ["#8B008B", "#FF6347", "#FFD700", "#20B2AA", "#CD853F"],
    description: "Creative, eclectic colors of artistic expression",
    tags: ["bohemian", "artistic", "creative", "eclectic"]
  },
  {
    keyword: "muted earth",
    category: "styles",
    colors: ["#1F4976", "#488691", "#816B58", "#4E6447", "#364D32"],
    description: "Subdued, earthy tones for a grounded aesthetic",
    tags: ["earthy", "muted", "grounded", "natural"]
  },
  {
    keyword: "my personal favourite",
    category: "styles",
    colors: ["#0A7AA6", "#0BADBF", "#7FA62D", "#D9BC2B", "#D9663D"],
    description: "A balanced, harmonious yet vintage palette with a mix of warm and cool tones",
    tags: ["It's me!", "harmonious", "warm", "cool"]
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