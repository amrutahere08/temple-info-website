# Shri Kshetra Manjuguni Temple Website (React)

A professional, dynamic, and fully functional React website for Shri Kshetra Manjuguni temple in Sirsi, Karnataka.

## 🚀 Live Development Server

The website is currently running at: **http://localhost:5173**

## ✨ Features

- **Modern React Architecture**: Built with React 18 and Vite for optimal performance
- **Component-Based Design**: Modular, reusable components for easy maintenance
- **State Management**: React hooks (useState, useEffect) for interactive features
- **Google Material Design**: Professional aesthetics with saffron/gold theme
- **Fully Responsive**: Mobile-first design that works on all devices
- **Dynamic Interactions**: 
  - Smooth scroll navigation with active section tracking
  - Sticky header with mobile hamburger menu
  - Lightbox gallery with keyboard navigation
  - Form validation with real-time feedback
  - Intersection Observer animations
  - Scroll-to-top button
- **Performance Optimized**: Lazy loading, efficient re-renders, optimized CSS
- **Accessibility**: Semantic HTML, ARIA labels, keyboard navigation support
- **SEO Optimized**: Proper meta tags, heading structure, semantic markup

## 📁 Project Structure

```
temple-website/
├── public/
│   └── images/              # Temple photos directory
├── src/
│   ├── components/
│   │   ├── Header.jsx       # Sticky navigation
│   │   ├── Header.css
│   │   ├── Hero.jsx         # Full-screen banner
│   │   ├── Hero.css
│   │   ├── About.jsx        # Feature cards
│   │   ├── About.css
│   │   ├── History.jsx      # Animated timeline
│   │   ├── History.css
│   │   ├── Gallery.jsx      # Photo gallery with lightbox
│   │   ├── Gallery.css
│   │   ├── Timings.jsx      # Temple schedule
│   │   ├── Timings.css
│   │   ├── Location.jsx     # Google Maps integration
│   │   ├── Location.css
│   │   ├── Contact.jsx      # Contact form with validation
│   │   ├── Contact.css
│   │   ├── Footer.jsx       # Footer with links
│   │   ├── Footer.css
│   │   ├── ScrollToTop.jsx  # Scroll-to-top button
│   │   └── ScrollToTop.css
│   ├── App.jsx              # Main app component
│   ├── App.css              # Global app styles
│   ├── index.css            # Global CSS reset & utilities
│   └── main.jsx             # React entry point
├── index.html               # HTML template
├── package.json             # Dependencies
└── vite.config.js           # Vite configuration
```

## 🖼️ Adding Temple Photos

Add your temple photos to the `public/images/` folder with these exact names:

1. `temple-main.jpg` - Main temple facade (hero background)
2. `temple-entrance.jpg` - Temple entrance with Dwaja Sthambha
3. `deity-venkataramana.jpg` - Lord Venkataramana idol
4. `deity-padmavati.jpg` - Goddess Padmavati
5. `temple-carvings.jpg` - Intricate temple carvings
6. `chakra-teertha.jpg` - Chakra Teertha (temple tank)
7. `temple-hills.jpg` - Sahyadri Hills surroundings
8. `temple-festival.jpg` - Rathothsava festival
9. `temple-interior.jpg` - Temple interior

**Image Specifications:**
- Format: JPG or PNG
- Recommended Size: 1920x1280px (3:2 aspect ratio)
- File Size: Optimize to under 500KB for better performance

## 🛠️ Development

The development server is already running. Any changes you make will automatically reload in the browser.

### Available Scripts

```bash
# Development server (already running)
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Lint code
npm run lint
```

## 📦 Technologies Used

- **React 18** - UI library
- **Vite** - Build tool and dev server
- **Font Awesome 6.5.1** - Icons
- **Google Fonts** - Poppins & Inter fonts
- **CSS3** - Modern styling with Grid & Flexbox
- **JavaScript ES6+** - Modern JavaScript features

## 🎨 Customization

### Update Temple Information

Edit the respective component files in `src/components/`:
- `Timings.jsx` - Update temple timings and events
- `Contact.jsx` - Update contact details
- `Location.jsx` - Update address and Google Maps embed
- `Footer.jsx` - Update footer information

### Update Colors

Modify the CSS variables in each component's CSS file. The main theme colors are:
- Primary: `#FF6B35` (Orange)
- Saffron: `#FF9933`
- Gold: `#DAA520`
- Accent: `#DC143C` (Deep Red)

### Update Google Maps

In `Location.jsx`, replace the iframe `src` with your actual Google Maps embed code.

## 🌐 Building for Production

When ready to deploy:

```bash
npm run build
```

This creates an optimized production build in the `dist/` folder.

## 📱 Responsive Breakpoints

- Mobile: 480px and below
- Tablet: 768px
- Desktop: 1024px
- Large Desktop: 1440px+

## ♿ Accessibility Features

- Semantic HTML5 elements
- ARIA labels on interactive elements
- Keyboard navigation support (Tab, Enter, Escape, Arrow keys)
- Focus states on all interactive elements
- High contrast color ratios
- Alt text on all images

## 🔧 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📝 Notes

- This is a **frontend-only** React application
- Contact form uses client-side validation only
- For actual form submission, integrate with a backend API
- All animations are optimized for 60fps performance
- Images are lazy-loaded for better performance

## 🙏 Temple Information

**Temple**: Shri Kshetra Manjuguni  
**Also Known As**: Tirupati of Karnataka, Chikka Tirupathi  
**Location**: Manjuguni Village, Sirsi, Karnataka - 581402  
**Rating**: 4.5/5 (33 reviews)  
**Deities**: Lord Venkataramana & Goddess Padmavati  
**Architecture**: Vijayanagara Style  
**Founded**: 9th Century AD

---

**May Lord Venkataramana bless all devotees! 🕉️**
