# Shri Kshetra Manjuguni Temple Website

A professional, dynamic, and fully functional frontend website for Shri Kshetra Manjuguni temple in Sirsi, Karnataka.

## 🌟 Features

- **Modern Design**: Google Material Design aesthetics with smooth animations
- **Fully Responsive**: Works perfectly on mobile, tablet, and desktop devices
- **Dynamic Interactions**: Smooth scroll navigation, lightbox gallery, form validation
- **Performance Optimized**: Lazy loading images, intersection observers, debounced scroll events
- **Accessibility**: Semantic HTML5, ARIA labels, keyboard navigation support
- **SEO Optimized**: Proper meta tags, heading structure, and semantic markup

## 📁 Project Structure

```
Krushi-Bharath/
├── index.html          # Main HTML file with all sections
├── styles.css          # Complete CSS with Material Design
├── script.js           # JavaScript for dynamic functionality
├── images/             # Directory for temple photos
│   ├── temple-main.jpg
│   ├── temple-entrance.jpg
│   ├── deity-venkataramana.jpg
│   ├── deity-padmavati.jpg
│   ├── temple-carvings.jpg
│   ├── chakra-teertha.jpg
│   ├── temple-hills.jpg
│   ├── temple-festival.jpg
│   └── temple-interior.jpg
└── README.md           # This file
```

## 🖼️ Adding Temple Photos

The website is ready to display temple photos. Please add your images to the `images/` folder with the following names:

### Required Images:

1. **temple-main.jpg** - Main temple facade (used as hero background)
2. **temple-entrance.jpg** - Temple entrance with Dwaja Sthambha
3. **deity-venkataramana.jpg** - Lord Venkataramana idol
4. **deity-padmavati.jpg** - Goddess Padmavati
5. **temple-carvings.jpg** - Intricate temple carvings and architecture
6. **chakra-teertha.jpg** - Chakra Teertha (temple tank/pond)
7. **temple-hills.jpg** - Sahyadri Hills surroundings
8. **temple-festival.jpg** - Rathothsava or festival scene
9. **temple-interior.jpg** - Temple interior view

### Image Specifications:

- **Format**: JPG or PNG
- **Recommended Size**: 1920x1280px (3:2 aspect ratio)
- **File Size**: Optimize to under 500KB for better performance
- **Quality**: High quality but web-optimized

### How to Add Images:

1. Collect photos of Shri Venkataramana Temple, Manjuguni
2. Rename them according to the list above
3. Copy them to the `images/` folder
4. The website will automatically display them in the gallery and hero section

## 🚀 How to Run

1. **Open the website**:
   - Simply double-click `index.html` to open in your default browser
   - Or right-click and choose "Open with" your preferred browser

2. **For local development**:
   ```bash
   # Using Python 3
   python -m http.server 8000
   
   # Using Node.js (if you have http-server installed)
   npx http-server
   ```
   Then open `http://localhost:8000` in your browser

## 📱 Sections

1. **Hero Section** - Full-screen banner with temple name and rating
2. **About Section** - Overview of temple significance and features
3. **History Section** - Timeline of temple's historical legacy
4. **Gallery Section** - Photo gallery with lightbox viewer
5. **Timings Section** - Temple visiting hours and prasadam details
6. **Location Section** - Google Maps integration and directions
7. **Contact Section** - Contact form and temple information
8. **Footer** - Quick links and social media

## 🎨 Design Features

- **Color Palette**: Saffron (#FF9933), Gold (#DAA520), Deep Red (#DC143C)
- **Typography**: Poppins (headings), Inter (body text)
- **Animations**: Fade-in on scroll, smooth transitions, parallax effects
- **Effects**: Glassmorphism, gradient backgrounds, hover animations

## 🔧 Customization

### Update Temple Information:

Edit `index.html` to update:
- Temple timings
- Contact details (phone, email)
- Address information
- Festival dates

### Update Google Maps:

In `index.html`, find the `<iframe>` in the Location section and replace with your actual Google Maps embed code.

### Update Colors:

In `styles.css`, modify the CSS custom properties at the top:
```css
:root {
    --color-primary: #FF6B35;
    --color-saffron: #FF9933;
    --color-gold: #DAA520;
    /* etc. */
}
```

## 📞 Contact Information

**Temple**: Shri Kshetra Manjuguni  
**Location**: Manjuguni Village, Sirsi, Karnataka - 581402  
**Rating**: 4.5/5 (33 reviews)

## 🙏 Credits

- **Design**: Modern Material Design principles
- **Icons**: Font Awesome 6.5.1
- **Fonts**: Google Fonts (Poppins, Inter)
- **Temple Information**: Based on historical research and documentation

## 📝 Notes

- This is a **frontend-only** website (no backend server)
- Contact form uses client-side validation only
- For actual form submission, integrate with a backend service or email API
- All animations are optimized for 60fps performance
- Images are lazy-loaded for better performance

---

**May Lord Venkataramana bless all devotees! 🕉️**
