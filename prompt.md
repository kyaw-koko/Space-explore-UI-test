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