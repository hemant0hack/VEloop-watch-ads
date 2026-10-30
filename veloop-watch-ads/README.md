# VELOOP Rewards - Watch Ads

A responsive advertisement-reward dashboard built with React and Vite. Users can explore demo advertisements, simulate watching ads, and view their reward balance and earnings history.

## Features

- Dark premium fintech-inspired UI
- Responsive sidebar and navigation
- Advertisement cards with reward and duration details
- Simulated ad-watching experience with countdown timer
- Reward balance, earnings statistics, and recent history
- Weekly earnings chart
- Daily streak and progress tracking
- Bonus Ads page at `/watchAd-bonus`
- Loading skeletons and success notifications
- LocalStorage-based demo data persistence
- Responsive layout for mobile, tablet, and desktop

## Tech Stack

- React
- Vite
- JavaScript
- Bootstrap 5
- CSS Modules
- Lucide React
- Recharts
- React Router DOM

## Installation

```bash
git clone https://github.com/hemant0hack/VEloop-watch-ads.git
cd VEloop-watch-ads/veloop-watch-ads
npm install
npm run dev
```

Open the local URL shown by Vite, usually `http://localhost:5173`.

## Production Build

```bash
npm run build
npm run preview
```

## Project Structure

```text
src/
├── assets/
├── components/
├── data/
├── hooks/
├── pages/
├── App.jsx
├── main.jsx
└── index.css
```

## Demo Limitations

This is a frontend demonstration using dummy advertisement data. Ad playback, reward calculation, and LocalStorage persistence are simulated. No real advertisement network, payment system, or backend reward verification is integrated.

## Deployment

The application can be deployed with Vercel or Netlify. For Vercel, use:

- Framework preset: Vite
- Build command: `npm run build`
- Output directory: `dist`

## Author

VELOOP Rewards - Frontend Internship Project
