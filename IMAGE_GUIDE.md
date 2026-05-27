# 📸 How to Add Your Own Images

## Method 1: Local Images (Recommended for Your Portfolio)

### Step 1: Create the Images Folder
Your images go in the `public/images` folder:

```
public/
├── images/
│   ├── cards/          <- Images for the card stack (8 images total)
│   │   ├── project1.jpg
│   │   ├── project2.jpg
│   │   ├── project3.jpg
│   │   ├── project4.jpg
│   │   ├── detail1.jpg
│   │   ├── detail2.jpg
│   │   ├── detail3.jpg
│   │   └── detail4.jpg
│   └── portfolio/      <- Images for completed jobs section
│       ├── job1.jpg
│       ├── job2.jpg
│       └── ...
```

### Step 2: Update CardGroups.jsx

Open `src/components/CardGroups.jsx` and change the `backgroundImage` URLs:

**Before (using GitHub URLs):**
```jsx
backgroundImage: 'https://raw.githubusercontent.com/TomJohnH/streamlit-cv/main/images/small1.jpg'
```

**After (using your local images):**
```jsx
backgroundImage: '/images/cards/detail1.jpg'
```

**Complete example:**
```jsx
const cardData = [
  {
    type: 'little',
    backgroundImage: '/images/cards/detail1.jpg',  // Small decorative image
    index: 1
  },
  {
    type: 'big',
    backgroundImage: '/images/cards/project1.jpg',  // Your best project
    link: 'https://behance.net/yourproject',
    index: 2
  },
  {
    type: 'little',
    backgroundImage: '/images/cards/detail2.jpg',
    index: 3
  },
  {
    type: 'big',
    backgroundImage: '/images/cards/project2.jpg',
    link: 'https://instagram.com/yourhandle',
    index: 4
  },
  // ... continue for all 8 cards
]
```

### Step 3: Add Your Images

1. **Save your images** to `public/images/cards/`
2. **Name them** as referenced in CardGroups.jsx
3. **Refresh the page** - changes appear instantly!

## Image Specifications for Best Results

### For Card Stack Images:

**Big Cards (Your Projects):**
- Size: 800x1120px minimum (5:7 ratio)
- Format: JPG (optimized) or PNG
- File size: Keep under 500KB each
- Content: Your best design work, mockups, or portfolio pieces

**Little Cards (Details/Accents):**
- Size: 400x560px minimum (5:7 ratio)
- Format: JPG or PNG
- File size: Keep under 200KB each
- Content: Detail shots, textures, process work, or brand elements

### For Projects Showcase Section:

**Project Thumbnails:**
- Size: 600x800px minimum (3:4 ratio works well)
- Format: JPG (optimized)
- File size: Keep under 300KB each
- Content: Completed client work, case studies, or personal projects

## Method 2: Using Online Images (Quick Start)

If you want to use images hosted elsewhere (like Behance, Dribbble, or your own website):

```jsx
backgroundImage: 'https://your-image-hosting.com/project1.jpg'
```

**Popular image hosts:**
- Imgur (upload and get direct link)
- Cloudinary (free tier)
- Your own website/server
- GitHub repository (like current setup)

## Quick Image Optimization Tips

Before adding images:

1. **Resize** them to the recommended dimensions
2. **Compress** using tools like:
   - TinyPNG (https://tinypng.com)
   - Squoosh (https://squoosh.app)
   - ImageOptim (Mac)
3. **Save** as JPG at 80-90% quality
4. **Use PNG** only if you need transparency

This keeps your portfolio fast and professional! 🚀
