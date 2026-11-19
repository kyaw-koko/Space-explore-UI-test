Build a modern, interactive Bento Grid health & biometric telemetry dashboard that syncs real-time health data from a smart fitness band/wearable, heavily inspired by the layout, dark aesthetic (`#07080d` background, `#0b0d15` card surfaces), and cursor-following spotlight glow effects of the provided Tech Stack Bento Grid component.
### Technical Requirements
- Framework: React (Next.js App Router compatible), TypeScript, Tailwind CSS (with `shadcn/ui` project structure inside `/components/ui/smart-band-health-bento.tsx`).
- Styling & Animations: Keep the custom `GlowCard` wrapper with radial-gradient cursor spotlight, border glow, subtle hover grid mask, smooth number counting (`useAnimatedNumber`), and `@media (prefers-reduced-motion: reduce)` support.
- Icons & Assets: Use `lucide-react` icons (e.g., `HeartPulse`, `Activity`, `Watch`, `BatteryCharging`, `Footprints`, `Flame`, `Moon`, `Droplets`) for clean medical/fitness UI indicators.
### Layout & Bento Grid Cards (4-column desktop grid, 2-column tablet, 1-column mobile)
1. **Card 1: Live Heart Rate (BPM) & Biometric Zones (Large Card - `sm:col-span-2 lg:row-span-2`, Rose/Indigo Glow)**
   - **Header:** "Live Heart Rate" with a pulsing green `Synced` / `Live` badge.
   - **Headline Metric:** Animated live BPM counter (e.g., `74 bpm`) with `resting` (e.g., `62 bpm`) and `peak` (e.g., `128 bpm`) stats.
   - **Interactive SVG Area Chart:** Smooth real-time BPM waveform over the last 60 seconds with hover crosshair and floating glassmorphism tooltip showing exact timestamp and heart rate reading.
   - **Real-Time Vital Signs Breakdown (Bottom 2x2 list):** Live status indicators (green/amber/red dots) for key wearable vitals:
     - `SpO2 Blood Oxygen` (`98%`)
     - `HRV (Stress)` (`64 ms`)
     - `Skin Temp` (`36.5°C`)
     - `Respiratory` (`15 rpm`)
2. **Card 2: Wearable Sync & Health Event Log (Tall Card - `sm:col-span-2 lg:col-span-1 lg:row-span-2`, Fuchsia/Violet Glow)**
   - **Header:** `band-sync.log` with macOS-style window dots.
   - **Animated Feed:** Auto-scrolling terminal-style live sync stream showing BLE packet transfers, sensor calibrations, and health milestone alerts (e.g., `$ ble-sync --device "PulseBand Pro"`, `✓ Optical PPG sensor calibrated`, `› Streaming HRV & SpO2 packets…`, `✓ Daily step goal (8,500) reached`, `● Synced to Cloud Health Vault`).
3. **Card 3: Daily Wellness & Recovery Scores (Small Card - Emerald Glow)**
   - **Header:** "Wellness Score"
   - **4 Animated Circular Progress Rings:** Displaying scores out of 100 for `Sleep` (92), `Readiness` (88), `Activity` (95), and `Stress Bal` (84) with hover drop-shadow glow.
4. **Card 4: Active Steps & Cadence Tracker (Small Card - Cyan Glow)**
   - **Header:** "Steps / hr" with `Live` badge.
   - **Metric & Bar Chart:** Animated live daily step counter (e.g., `8,420`) above a 16-bar real-time vertical activity bar chart showing hourly movement intensity.
5. **Card 5: Connected Sensors & Wearable Modules (Wide Bottom Card - `sm:col-span-2 lg:col-span-4`, Amber Glow)**
   - **Header:** "Active Wearable Sensors"
   - **8 Interactive Sensor Badges:** Grid of 8 interactive cards (`PPG Heart`, `SpO2 Optical`, `3-Axis Accel`, `ECG Sensor`, `Temp Probe`, `Sleep Stage`, `VO2 Max`, `BLE 5.3 Sync`) with custom icons, firmware/sampling rate tags (e.g., `100Hz`), and accent colors.
   - **Dynamic Description Footer:** Hovering or focusing on any sensor smoothly updates the bottom description bar with technical details on how the smart band measures that metric (e.g., *"PPG Optical Sensor · Continuous green & infrared light pulse wave monitoring at 100Hz"*).
### Deliverable
- Provide setup instructions if `shadcn/ui`, Tailwind CSS, or TypeScript are missing, explain why placing reusable UI primitives in `/components/ui` keeps the architecture clean, and output the complete, strongly-typed `smart-band-health-bento.tsx` component along with a `demo.tsx` usage example.

### Skills
https://www.tasteskill.dev/ https://github.com/miqdadbadjuber/anti-slop please use this skill and fix the UI


Build a complete, standalone, responsive Deep-Sky & Astronomy Image Explorer web page ("Nakshatra Sky / နက္ခတ္တ ကောင်းကင်ပြတိုက်") using ONLY **semantic HTML5, custom CSS3, Vanilla JavaScript (ES6+), and Tailwind CSS** (via Tailwind Play CDN so it runs immediately with zero build tools or React/Node dependencies).

### Core Localization & Typography Requirements (Myanmar + English Bilingual Support)
1. **Pyidaungsu Font Integration:**
   - Load **Pyidaungsu** (Unicode Myanmar font) via `@font-face` / Google & Myanmar font CDN fallbacks (`'Pyidaungsu', 'Noto Sans Myanmar', 'Padauk', sans-serif`) alongside `Instrument Serif` and `Inter` for English typography.
   - Apply language-aware CSS rules (`html[lang="my"]`) that automatically adjust line-height (`1.75` for Burmese script so diacritics/tall glyphs never clip) and font-family to `'Pyidaungsu'` whenever Burmese is active.
2. **Instant MM / EN Language Switcher (Vanilla JS + `localStorage`):**
   - Place a sleek glassmorphism **`EN | မြန်မာ`** toggle pill inside the top floating navbar (and mobile drawer).
   - Store all UI copy, navigation links, hero headlines, wavelength labels, astronomical object titles, and modal descriptions in a clean `TRANSLATIONS` dictionary object inside `script.js` using `data-i18n` attributes in `index.html`.
   - Clicking the toggle must instantaneously translate every text element on the page without reloading and persist the selected language in `localStorage`.

### File Structure to Generate
1. `index.html` — Semantic HTML5 markup with `data-i18n` attributes on all translatable elements, Tailwind CSS CDN, Lucide Icons CDN (`unpkg.com/lucide@latest`), and Google/Pyidaungsu font stylesheets.
2. `styles.css` — Custom CSS variables, `@font-face` rules for `Pyidaungsu`, language-specific typography rules (`html[lang="my"]`), `@keyframes fadeSlideIn` staggered entrance animations, glassmorphism backdrop filters, and `prefers-reduced-motion` support.
3. `script.js` — Vanilla JS handling:
   - Bilingual (`en` / `my`) translation engine with `localStorage` persistence.
   - Mobile navigation menu drawer toggle.
   - Interactive sky-wavelength switcher (`Visible Spectrum` / `အလင်းရောင်စဉ်`, `Infrared (JWST)` / `အနီအောက်ရောင်ခြည်`, `Deep Nebula` / `နက်ဗျူလာမြင်ကွင်း`) that crossfades the hero background image and updates live astronomical coordinates.
   - Filterable Deep-Sky Gallery (`All` / `အားလုံး`, `Nebulae` / `နက်ဗျူလာများ`, `Galaxies` / `ဂလက်ဆီများ`, `Star Clusters` / `ကြယ်အစုအဝေးများ`) and click-to-inspect Lightbox Modal with bilingual astronomical explanations.

### Page Sections & Bilingual Content Details
1. **Floating Glassmorphism Pill Navbar:**
   - Brand Logo: Custom inline SVG constellation/telescope icon + `"Nakshatra Sky"` (EN) / `"နက္ခတ္တ"` (MM).
   - Navigation Links (`Sky Map` / `ကောင်းကင်မြေပုံ`, `Deep-Sky Gallery` / `နက္ခတ်ပြခန်း`, `Constellations` / `နက္ခတ်တာရာများ`).
   - Language Toggle Pill (`EN / မြန်မာ`) + Primary White Pill CTA (`"Launch Sky Map"` / `"ကောင်းကင်မြေပုံဖွင့်ရန်"`).
2. **Full-Screen Atmospheric Hero Section (`min-h-screen`):**
   - High-resolution Unsplash deep-space Milky Way background (`https://images.unsplash.com/photo-1462331940025-496dfbfc7564?auto=format&fit=crop&w=2000&q=85`) with dark vignette overlay.
   - Announcement Pill Badge: `"Live Data"` / `"တိုက်ရိုက်ဒေတာ"` — `"Explore High-Res Nebulae, Galaxies & Night Sky Maps"` / `"ကြည်လင်ပြတ်သားသော နက်ဗျူလာများ၊ ဂလက်ဆီများနှင့် ညကောင်းကင်မြေပုံများကို လေ့လာပါ"`.
   - Hero Headline: `"Explore the Hidden Wonders of the Night Sky"` (EN) / `"ညကောင်းကင်ယံ၏ လျှို့ဝှက်ဆန်းကြယ်မှုများကို လေ့လာစူးစမ်းပါ"` (MM).
   - Interactive Wavelength Switcher + Primary/Secondary CTA buttons + Bottom Observatory Survey Strip (`NASA SkyView`, `ESA / Hubble`, `JWST Archive`, `Sloan Digital Sky`, `IAU Star Catalog`).
3. **Interactive Deep-Sky Image Explorer Grid & Lightbox Modal:**
   - Cards featuring verified Unsplash astrophotography (e.g., `M42 Orion Nebula` / `အိုရီယွန် နက်ဗျူလာ`, `M31 Andromeda Galaxy` / `အန်ဒရိုမီဒါ ဂလက်ဆီ`, `NGC 3372 Carina Nebula` / `ကာရီနာ နက်ဗျူလာ`, `M45 Pleiades` / `ဖျောက်ဆိပ်ကြယ်စု`), distance in light-years (`အလင်းနှစ်`), and bilingual detail modal on click.

### Code Quality & Burmese Script Rendering Rules
- Ensure `line-height: 1.75` and adequate vertical padding on buttons/badges when `lang="my"` is active so Burmese vowel signs (`အပေါ်/အောက် သရသင်္ကေတများ`) never overlap or clip.
- Ensure zero console errors and `Escape` key support to close modals and mobile menus.



https://stitch.google.com/preview/4893117845401669263?node-id=2db2418f3c714060bd14ddd3a7c582a7Build a complete, standalone, responsive Deep-Sky & Astronomy Image Explorer web page ("Nakshatra Sky") using ONLY **semantic HTML5, custom CSS3, Vanilla JavaScript (ES6+), and Tailwind CSS** (via Tailwind Play CDN so it runs immediately with zero build tools or React/Node dependencies).

### File Structure to Generate
Create clean, modular files in the workspace:
1. `index.html` — Complete markup with Google Fonts (`Instrument Serif` and `Inter`), Tailwind CSS CDN, Lucide Icons CDN (`unpkg.com/lucide@latest`), and accessible semantic sections.
2. `styles.css` — Custom CSS variables, `@keyframes fadeSlideIn` staggered entrance animations, smooth glassmorphism backdrop filters, subtle starfield/nebula vignette overlays, and custom scrollbar styling.
3. `script.js` — Vanilla JS for mobile navigation drawer toggle, interactive sky-wavelength switcher (Visible Light, Infrared, X-Ray deep-sky views), interactive constellation/nebula filter tabs, and modal lightbox preview for inspecting sky images.

### Design & Visual System (Inspired by Modern Space & Glassmorphism Hero UI)
- **Color Palette:** Deep cosmos background (`#09090b`), dark obsidian glass cards (`rgba(255, 255, 255, 0.05)` with `backdrop-blur-md` and `1px solid rgba(255, 255, 255, 0.12)` borders), crisp white headings (`#fafafa`), and soft slate descriptions (`#a1a1aa`).
- **Typography:** `Instrument Serif` (regular, tight tracking) for large hero display headlines; `Inter` for clean UI navigation, badges, and metadata.

### Page Sections & Interactive Features

1. **Full-Screen Atmospheric Hero Section (`min-h-screen relative isolate overflow-hidden`):**
   - **Dynamic Background Layer:** High-resolution deep-space Milky Way / Nebula background image from Unsplash (`https://images.unsplash.com/photo-1462331940025-496dfbfc7564?auto=format&fit=crop&w=2000&q=85`) with a dark radial/linear gradient overlay so text remains highly legible.
   - **Floating Pill Navbar:**
     - Left: Custom inline SVG constellation/telescope logo + `"Nakshatra Sky"` brand mark.
     - Center/Right (Desktop): Glassmorphism pill container (`rounded-full bg-white/5 px-1.5 py-1.5 ring-1 ring-white/10 backdrop-blur`) with links (`Sky Map`, `Deep-Sky Gallery`, `Nebulae & Galaxies`, `Constellations`) and a white pill CTA button (`"Launch Sky Map"` with arrow icon).
     - Mobile: Working hamburger menu button that smoothly toggles a glassmorphism mobile dropdown drawer via `script.js`.
   - **Hero Content (Staggered `fadeSlideIn` animations):**
     - **Top Pill Badge:** White `"Live Data"` tag + `"Explore High-Res Nebulae, Galaxies & Night Sky Maps"`.
     - **Main Headline (`Instrument Serif`):** `"Explore the Hidden"` / `"Wonders of the Night Sky"`.
     - **Subtitle:** `"Inspect deep-sky astrophotography, trace ancient constellations, and analyze high-resolution celestial imagery captured across visible and infrared wavelengths."`
     - **Interactive Wavelength Switcher Pill (Vanilla JS):** A sleek segmented toggle (`Visible Spectrum`, `Infrared (JWST)`, `Deep Nebula`) that dynamically crossfades the hero background image and updates the live celestial coordinate readout (e.g., `RA 05h 35m 17s · Dec -05° 23′ 28″`).
     - **CTA Buttons:** Primary glass pill button (`"Explore Sky Atlas"`) that smoothly scrolls to the gallery, and secondary button (`"View Nebula Gallery"`).
   - **Observatory & Open-Sky Data Strip:** Bottom 5-column strip featuring crisp monochrome inline SVG badges for `NASA SkyView`, `ESA / Hubble`, `JWST Archive`, `Sloan Digital Sky`, and `IAU Star Catalog`.

2. **Interactive Deep-Sky Image Explorer Grid (Below Hero):**
   - Filterable card grid (`All Objects`, `Nebulae`, `Galaxies`, `Star Clusters`) powered by Vanilla JS with real Unsplash astronomy images, catalog codes (e.g., `M42 Orion Nebula`, `M31 Andromeda Galaxy`, `NGC 3372 Carina Nebula`), distance in light-years, and click-to-inspect lightbox modal showing full object telemetry.

### Code Quality Rules
- Ensure zero console errors, clean event delegation in `script.js`, keyboard `Escape` key support to close the mobile menu and lightbox modal, and `prefers-reduced-motion` accessibility support in `styles.css`.https://github.com/miqdadbadjuber/anti-slop https://www.tasteskill.dev/