# SkyWave Flight Booking Website

SkyWave is a multi-page flight booking landing experience built with React and Vite. It highlights a hero video, flight search UI, premium lounge, traveler reviews, and a simple signup flow with smooth AOS animations.

## Features

- Multi-page layout with React Router and persistent navbar/footer
- Hero video, destination cards, promo banner, and traveler reviews
- Reusable sections: search, stats, support, lounge, info, subscribe
- Responsive layout with mobile navigation and grid breakpoints
- AOS animation-on-scroll throughout the UI

## Pages & Routes

- `/` Landing page (hero, search, sections)
- `/search` Search experience + stats/brands
- `/info` Popular routes + promo
- `/lounge` Premium lounge + support
- `/support` Support highlights + stats
- `/travelers` Reviews + routes
- `/signup` Account creation form
- `*` Not found page

## Tech Stack

- React 19
- Vite 8
- React Router 7
- AOS (Animate on Scroll)
- React Icons

## Getting Started

1. Install dependencies

```bash
npm install
```

2. Start the dev server

```bash
npm run dev
```

3. Build for production

```bash
npm run build
```

4. Preview the production build

```bash
npm run preview
```

## Project Structure

- `src/App.jsx`: routing and AOS setup
- `src/pages/`: page compositions for each route
- `src/components/`: reusable UI sections
- `src/components/components.css`: main styling for sections
- `public/videos/`: hero and lounge background videos

## Notes

- Videos are loaded from `public/videos` and are referenced directly in components.
- The search form is UI-only and does not submit data.

## License

This project is for learning and demonstration purposes.
