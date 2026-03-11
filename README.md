# Benneth Affordable House and Lot — Official Website

A professional real estate website for **Benneth Affordable House and Lot**, based in Novaliches, Quezon City, Philippines.

---

## 🏠 About

Benneth Affordable House and Lot connects Filipino families with quality, affordable homes across:
- Novaliches, Quezon City
- Cavite (Dasmariñas, Tagaytay)
- Bulacan
- Batangas

With flexible **Pag-IBIG** and **bank financing** options, and dedicated **OFW assistance** (100% online processing).

📞 **Contact:** 0976 090 7814  
📍 **Address:** Novaliches, Quezon City, Philippines  
🌐 **Facebook:** [Benneth Affordable House and Lot](https://www.facebook.com/BennethAffordableHouseandLot)

---

## 📁 Project Structure

```
benneth-website/
├── index.html                  # Homepage
├── about.html                  # About page
├── property-listings.html      # All property listings
├── property-detail.html        # Single property detail
├── services.html               # Services overview
├── services-detail.html        # Service detail page
├── contact.html                # Contact page
├── faqs.html                   # FAQs
├── testimonials.html           # Client testimonials
├── team.html                   # Our team
├── blog-post.html              # Blog / Tips listing
├── single-post.html            # Single blog post
├── pricing.html                # Pricing
├── 404-page.html               # 404 error page
├── css/
│   ├── style.css               # Main template styles
│   ├── border.css              # Border utilities
│   ├── swiper.css              # Swiper slider styles
│   └── benneth.css             # ⭐ Benneth brand overrides
├── js/
│   ├── index.js                # Main template JS
│   └── benneth.js              # ⭐ Benneth custom JS (floating CTA, etc.)
├── img/
│   ├── benneth-logo.jpg        # Benneth logo (with text)
│   ├── benneth-logo-2.jpg      # Benneth logo (icon only)
│   └── ...                     # Property & template images
├── icon/                       # Favicons and service icons
├── font/                       # Custom fonts (Manrope, Playfair)
└── lib/                        # Bootstrap, FontAwesome, Swiper
```

---

## 🚀 Deployment (GitHub Pages)

### Option 1: GitHub Pages (Free)

1. Push this repository to GitHub
2. Go to **Settings → Pages**
3. Set **Source** to `main` branch, folder `/` (root)
4. Your site will be live at `https://yourusername.github.io/benneth-website/`

### Option 2: Custom Domain

1. Follow Option 1 above
2. In **Settings → Pages → Custom domain**, enter your domain (e.g. `www.bennethrealty.com`)
3. Add a `CNAME` file to the repo root containing your domain name
4. Point your domain's DNS to GitHub Pages IPs

### Option 3: Netlify (Recommended for Forms)

1. Drag and drop this folder to [netlify.com/drop](https://app.netlify.com/drop)
2. Or connect your GitHub repo for automatic deployments
3. Set a custom domain in Netlify settings

---

## ✏️ Customization Guide

### Update Contact Info
Search for `0976 090 7814` across all HTML files and replace with the correct number.

### Update Property Listings
Edit `property-listings.html` and `property-detail.html` with real property data.

### Change Brand Colors
Edit `css/benneth.css` — all Benneth brand colors are defined at the top using CSS variables.

### Replace Logo
Replace `img/benneth-logo.jpg` with your updated logo file (keep the same filename, or update all HTML references).

### Replace Property Images
Replace files in the `img/` folder:
- `gallery-1.jpg` through `gallery-8.jpg` — property gallery photos
- `listing-1.jpg` through `listing-6.jpg` — listing card backgrounds
- `hero-1.jpg` through `hero-3.jpg` — hero slideshow images
- `about-1.jpg` — about section photo

---

## 🛠️ Built With

- **HTML5 / CSS3 / JavaScript**
- **Bootstrap 5** — responsive grid and components
- **Swiper.js** — property image carousel
- **FontAwesome 6** — icons
- **CountUp.js** — animated statistics counters
- **Google Fonts** — Manrope + Playfair Display

---

## 📄 License

Template base: Crescent Real Estate HTML Template by Zaderon.  
Customized for Benneth Affordable House and Lot © 2026. All rights reserved.
