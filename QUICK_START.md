# Quick Reference: Adding Your Images & Projects

## 📁 Where to Put Images

```
public/
└── images/
    ├── cards/              ← Card stack images (8 images)
    │   ├── project1.jpg    ← Big card 1 (your best work)
    │   ├── detail1.jpg     ← Little card 1 (detail shot)
    │   ├── project2.jpg    ← Big card 2
    │   ├── detail2.jpg     ← Little card 2
    │   ├── project3.jpg    ← Big card 3
    │   ├── detail3.jpg     ← Little card 3
    │   ├── project4.jpg    ← Big card 4
    │   └── detail4.jpg     ← Little card 4
    └── portfolio/          ← Completed projects grid
        ├── job1.jpg
        ├── job2.jpg
        ├── job3.jpg
        └── ...
```

## 🎨 Update Card Stack Images

**File:** `src/components/CardGroups.jsx`

```jsx
const cardData = [
  {
    type: 'little',
    backgroundImage: '/images/cards/detail1.jpg',  // ← Change this
    index: 1
  },
  {
    type: 'big',
    backgroundImage: '/images/cards/project1.jpg',  // ← Change this
    link: 'https://yourlink.com',
    index: 2
  },
  // ... repeat for all 8 cards
]
```

## 💼 Update Completed Projects

**File:** `src/components/ProjectsShowcase.jsx`

```jsx
const projects = [
  {
    title: "Your Project Name",           // ← Change
    client: "Client Name",                // ← Change
    image: "/images/portfolio/job1.jpg",  // ← Change
    category: "Branding",                 // ← Change
    year: "2024"                          // ← Change
  },
  // Add more projects...
]
```

## Image Sizes

| Type | Size | Ratio | Format |
|------|------|-------|--------|
| Big Cards | 800x1120px | 5:7 | JPG |
| Little Cards | 400x560px | 5:7 | JPG |
| Portfolio Grid | 600x800px | 3:4 | JPG |

## That's It!

1. **Add images** to `public/images/`
2. **Update file paths** in the components
3. **Refresh browser** to see changes

See `IMAGE_GUIDE.md` for detailed instructions.
