# Customization Guide for Graphic Designers

## 🎨 Making It Yours

### 1. Adding a Custom Background Image

Add your background image to the `public` folder, then update `index.html`:

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="/vite.svg" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet">
    <title>Your Name - Portfolio</title>
    <style>
      :root {
        /* Add your background image */
        --bg-image: url('/your-background.jpg');
        
        /* Adjust overlay darkness (0 = transparent, 1 = opaque) */
        --bg-overlay: rgba(15, 12, 41, 0.7);
      }
    </style>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.jsx"></script>
  </body>
</html>
```

**Tips for background images:**
- Use high-resolution images (1920x1080 or higher)
- Keep the subject subtle (abstract patterns, textures, or blurred photos work best)
- Adjust `--bg-overlay` to ensure cards remain visible (0.5 to 0.8 works well)

### 2. Adding Your Name/Title

Uncomment the header section in `src/App.jsx`:

```jsx
function App() {
  return (
    <div className="app">
      <div className="portfolio-header">
        <h1>Your Name</h1>
        <p>Graphic Designer & Visual Artist</p>
      </div>
      
      <CardGroups />
    </div>
  )
}
```

### 3. Updating Your Portfolio Cards

Edit `src/components/CardGroups.jsx` to add your work:

```jsx
const cardData = [
  {
    type: 'little',
    backgroundImage: 'https://your-image-url.com/small1.jpg',
    index: 1
  },
  {
    type: 'big',
    backgroundImage: 'https://your-image-url.com/project1.jpg',
    link: 'https://behance.net/yourportfolio',
    index: 2
  },
  // ... add more cards
]
```

**For graphic designers, link to:**
- 🎨 Behance portfolio
- 📸 Instagram (@yourhandle)
- 💼 LinkedIn profile
- 🌐 Personal website

### 4. Adjusting Card Sizes

The cards are currently set to **45vmin** for impressive display. To adjust:

**In `src/styles/CardGroups.css`:**
```css
.card-group,
.big-card {
    width: 45vmin;  /* Change this value */
}
```

**In `src/styles/Card.css`:**
```css
.little-card {
    width: 18vmin;  /* Keep proportional (about 40% of big cards) */
}
```

**Recommended sizes:**
- **Showcase mode**: 50vmin (extra large)
- **Standard**: 45vmin (current)
- **Compact**: 35vmin (original)

### 5. Color Customization

**Change the gradient background** in `src/styles/index.css`:

```css
background: linear-gradient(135deg, #0f0c29 0%, #302b63 50%, #24243e 100%);
```

**Popular designer palettes:**
- **Warm**: `linear-gradient(135deg, #ff6b6b 0%, #ee5a6f 50%, #c44569 100%)`
- **Cool**: `linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%)`
- **Dark Teal**: `linear-gradient(135deg, #134e5e 0%, #71b280 100%)`
- **Rose Gold**: `linear-gradient(135deg, #ed4264 0%, #ffedbc 100%)`

### 6. Animation Adjustments

**Speed up/slow down animations** in `src/styles/Card.css`:

```css
.card {
  transition: transform 800ms cubic-bezier(.05, .43, .25, .95);
}
```

- **Faster**: `600ms` (snappy)
- **Slower**: `1000ms` (smooth)
- **Bouncy**: Use `cubic-bezier(.68, -0.55, .27, 1.55)`

### 7. Adding More Cards

To add more portfolio pieces, simply add more objects to the `cardData` array:

```jsx
{
  type: 'big',
  backgroundImage: 'url-to-your-work',
  link: 'https://link-to-project',
  index: 9  // Increment the index
}
```

**Best practices:**
- Alternate between 'big' and 'little' cards for visual rhythm
- Use your best 4 projects for the big cards
- Use detail shots or process images for little cards
- Maintain consistent image quality (square or portrait orientation works best)

## 🚀 Professional Enhancements for Designers

### Add a Logo
Place your logo in `public/logo.png` and update `index.html`:
```html
<link rel="icon" type="image/png" href="/logo.png" />
```

### Social Media Icons
Add icon links above or below the card stack for easy access to your profiles.

### Case Study Links
Make the big cards link to detailed case studies on your website or Behance.

### Analytics
Add Google Analytics or Plausible to track visitors.

### Custom Domain
Deploy to Vercel/Netlify and connect your custom domain for a professional touch.

## 📱 Responsive Considerations

The design is responsive by default, but test on:
- Desktop (1920x1080)
- Tablet (iPad)
- Mobile (iPhone)

Adjust card sizes in media queries if needed for smaller screens.

## 🎯 Deployment Tips

1. **Build for production:**
   ```bash
   npm run build
   ```

2. **Deploy to Vercel (recommended):**
   ```bash
   npm i -g vercel
   vercel
   ```

3. **Or deploy to Netlify:**
   - Drag the `dist` folder to Netlify
   - Or connect your Git repository

## 💡 Design Tips

1. **Image Selection**: Use high-quality images showcasing your best work
2. **Consistency**: Keep a cohesive color palette across your portfolio pieces
3. **Storytelling**: Each card should tell part of your design story
4. **Hierarchy**: Place your #1 project as the first big card (Card 2)
5. **Personal Touch**: Add your signature or personal brand elements

---

**Need help?** The portfolio is built with React + Vite for maximum flexibility. All code is modular and easy to customize!
