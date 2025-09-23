# 🎨 ColorSketcher

A modern, interactive color palette generator that helps designers and artists discover perfect color combinations from images, keywords, and themes.

<img width="1568" height="621" alt="Image" src="https://github.com/user-attachments/assets/7d480c23-171f-4088-b054-ca55387360fe" />

## 🌐 Website
https://colorsketcher.vercel.app/

## ✨ Features

### 🖼️ Image Color Extraction
- **Upload any image** and automatically extract dominant colors
- **Manual color picker** with precise 6×6 pixel grid preview
- **Mobile-optimized** with long-press functionality for touch devices
- **Complete image display** - no cropping, works with any aspect ratio

### 🎯 Precise Color Selection
- **Desktop**: Hover over images to see real-time color preview
- **Mobile**: Long-press to preview, release to select center color
- **Pixel-perfect sampling** from 6×6 grid around cursor/touch point
- **Click any grid box** to select that exact pixel color

### 🏷️ Keyword-Based Palettes
Colors palettes from descriptive keywords like: (most of them are from pinterest, ai generated and self-collection)
- **Nature**: "forest morning", "ocean depths", "desert sunset"
- **Moods**: "cozy cafe", "energetic startup", "zen garden"
- **Places**: "parisian bistro", "tokyo neon", "scandinavian home"
- **Seasons**: "autumn harvest", "spring bloom", "winter wonderland"
- **Styles**: "vintage retro", "modern minimalist", "bohemian artistic"

### 🎨 Theme Collections
Pre-designed color themes with psychological insights:
- 🌅 **Sunset** - Warm & cozy
- 🌊 **Ocean** - Cool & fresh
- 🌲 **Forest** - Natural & earthy
- 🌸 **Pastel** - Soft & dreamy
- 📼 **Retro** - Vintage vibes
- ⚫ **Minimalist** - Classic & timeless

### 💡 Smart Features
- **Color psychology insights** for each palette
- **Responsive design** for desktop and mobile
- **Real-time preview** of colors as you explore
- **Export capabilities** for design workflows
- **Intuitive UI** with sketchy, artistic design inspired by my sketch book

## 🚀 Live Demo

src ="https://github.com/user-attachments/assets/7a0688fb-6314-414e-9f38-79ff3bc37668"


## 🛠️ Tech Stack 
(This is a AI-assisted coding project that not all code was written by me.)
(My main role was user experience and ui design, as well as adding new color palette to the database)

### Frontend
- **React 18** with TypeScript
- **Vite** for fast development and building
- **Tailwind CSS** for styling
- **Lucide React** for icons
- **Canvas API** for image processing

### Backend
- **Express.js** with TypeScript
- **Multer** for image upload handling
- **Node.js** runtime environment

### Deployment
- **Vercel** for hosting and deployment
- **GitHub** for version control
- **Auto-deployment** from main branch

## 📱 Mobile Features

ColorSketcher is fully optimized for mobile devices:

- **Touch-friendly interface** with large tap targets
- **Long-press color picking** (500ms hold to activate)
- **Drag to preview** different areas while holding
- **Auto-select on release** - no need to tap tiny grid boxes
- **Responsive layout** that adapts to all screen sizes
https://github.com/user-attachments/assets/6e8469a6-5bae-4954-abaa-15846689b8d0

## 🎯 Use Cases

### For Designers
- **Brand color exploration** from reference images
- **Website color scheme** generation
- **UI/UX color palette** creation
- **Print design** color matching

### For Artists
- **Digital art** color reference
- **Traditional painting** palette planning
- **Color harmony** exploration
- **Mood board** creation

### For Developers
- **CSS color variables** extraction
- **Theme development** assistance
- **Design system** color definition
- **Accessibility** color testing

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ installed
- npm or yarn package manager
- Modern web browser

### Local Development

1. **Clone the repository**
```bash
git clone https://github.com/yourusername/ColorSketcher.git
cd ColorSketcher
```

2. **Install dependencies**
```bash
npm install
```

3. **Start development server**
```bash
npm run dev
```

4. **Open your browser**
```
http://localhost:5000
```

### Building for Production

```bash
npm run build
```

## 📖 How to Use

### 1. Image Color Extraction
1. **Upload an image** by dragging/dropping or clicking the upload area
2. **Choose your method**:
   - Click "Auto Extract Colors ✨" for automatic detection
   - Click "Manual Picker 🎨" for precise selection

### 2. Manual Color Picking
**Desktop:**
- Hover over the image to see 6×6 pixel preview
- Click any pixel box to add that color to your palette

**Mobile:**
- Long-press on the image (hold for 0.5 seconds)
- Drag your finger to preview different areas
- Release to automatically select the center color

### 3. Keyword Generation
1. **Type descriptive words** like "sunset beach" or "cozy cafe"
2. **Browse categories**: Nature, Moods, Places, Seasons, Styles
3. **Click any palette** to use those colors
4. **Scroll down** to see psychological insights

### 4. Theme Selection
- **Click theme buttons** to instantly apply curated color schemes
- **Each theme** includes psychological insights about the colors
- **Mix and match** with other generation methods

## 🎨 Color Palette Database

ColorSketcher includes **150+ carefully curated palettes** across categories:

- **🌿 Nature** (40+ palettes): Forest, ocean, desert, floral themes
- **😊 Moods** (35+ palettes): Cozy, energetic, calm, romantic vibes  
- **🏛️ Places** (30+ palettes): Global destinations and iconic locations
- **🍂 Seasons** (25+ palettes): Seasonal colors and celebrations
- **🎨 Styles** (20+ palettes): Design movements and aesthetics

### Adding New Color Palettes
1. **Fork the repository**
2. **Edit** `client/src/utils/keyword-palettes.ts`
3. **Add your palette** following the existing format:
```typescript
{
  keyword: "your theme name",
  category: "nature|moods|places|seasons|styles",
  colors: ["#HEX1", "#HEX2", "#HEX3", "#HEX4", "#HEX5"],
  description: "Descriptive text about the palette",
  tags: ["relevant", "searchable", "keywords"]
}
```

## 🙏 Acknowledgments

- **Color theory** inspiration from design communities
- **AI tools** replit ai on basic structure & claude code for coding consult & claude, ChatGPT for prompting & vercel ai for deploying the website
- **Open source libraries** that made this possible

## 📞 Contact



**Made with 💖 for designers, artists, and color enthusiasts**

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/yourusername/ColorSketcher)
