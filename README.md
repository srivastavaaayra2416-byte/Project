# BashCraft Analyzer

BashCraft is an interactive command-intelligence dashboard. Paste a shell command to see a plain-English explanation, identify risky patterns, review safer alternatives, and retain an analysis history for the current browser session.

## Highlights

- Command overview with safety status, search, and risk filters
- Command Lab for instant, client-side pattern analysis
- Recommendations that can be approved or dismissed
- Persistent analysis history and recommendation decisions via browser storage
- Seeded demo dataset for commands and recommendations
- Light/dark theme toggle and English/Hindi interface toggle
- JSON report download
- Responsive operations-dashboard UI

## Quick start

Requirements: Node.js 18 or later.

```powershell
npm start -- 3000
```

Then open [http://localhost:3000](http://localhost:3000).

For syntax validation:

```powershell
npm run check
```

## Demo data

The dashboard loads its initial sample records from:

```text
data/demo-dashboard.json
```

The UI stores newly analyzed commands plus recommendation decisions in `localStorage`, so they remain available after refreshes in the same browser profile. Clear browser storage to reset the dashboard to its seed data.

## Current analyzer behavior

The command analyzer is intentionally static: it detects common patterns such as permanent deletion (`rm`, `-delete`) and remote script execution (`curl | bash`). It **does not execute commands** or access the filesystem.

## Project structure

```text
app.js                  Dashboard interactions and local analysis rules
index.html              App structure
styles.css              Responsive dashboard styling
data/demo-dashboard.json Seed commands and recommendations
server.mjs              Local static server and API entry point
backend.mjs             Backend prototype / API integration layer
```

## Backend integration

The frontend is designed for a backend to replace the demo dataset and local browser storage. Useful integration points include:

- Save analysis: `POST /api/analyses`
- List/filter history: `GET /api/analyses`
- Update recommendation decision: `PATCH /api/recommendations/:id`
- Load dashboard metrics: `GET /api/dashboard`

Keep the analyzer service non-executing: send commands for static inspection only, and never run submitted command text on the application server.

## License

Add the license appropriate for your project before production use.
