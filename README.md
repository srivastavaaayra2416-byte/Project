# BashCraft Analyzer

PRD-aligned demo implementation of a safe website-crawl analyzer. It uses a seeded JSON demo database and simulated crawl events so the complete dashboard works without accessing the public internet.

## Run

```powershell
npm start -- 3000
```

Open `http://localhost:3000`.

## What works

- URL validation: HTTP/HTTPS only, no credentials, malformed URLs, local/private ranges, and common SSRF targets are rejected.
- Crawl jobs: create, start, pause, resume, cancel, history, counters, live issue feed, page inspector, and graph view.
- Results: page, issue, and sitemap report tabs; health score; JSON, CSV, and valid XML sitemap exports.
- Demo database: stored in `data/bashcraft-demo-db.json`, created automatically and populated from a bounded fixture site.
- UI: EN, HI, and ES runtime translations; persisted light/dark theme; responsive screens.

## REST API

All endpoints are prefixed with `/api/v1`.

| Method | Endpoint | Purpose |
| --- | --- | --- |
| GET | `/health` | Service health |
| POST | `/crawls` | Create a crawl with `url`, `maxPages`, `maxDepth`, and `speed` |
| GET | `/crawls` | Crawl history |
| GET | `/crawls/:id` | Crawl status, results, and counters |
| POST | `/crawls/:id/start` | Start a queued crawl |
| POST | `/crawls/:id/pause` | Pause a running crawl |
| POST | `/crawls/:id/resume` | Resume a paused crawl |
| POST | `/crawls/:id/cancel` | Cancel a crawl |
| GET | `/crawls/:id/events` | Recorded crawl events |
| GET | `/crawls/:id/pages` | Crawled pages |
| GET | `/crawls/:id/links` | Link graph |
| GET | `/crawls/:id/issues` | Crawl issues |
| GET | `/crawls/:id/export?format=json|csv|xml` | Download an export |

The demo crawler intentionally does not fetch arbitrary remote websites. Swap the fixture implementation in `backend.mjs` for a worker/queue-backed crawler after adding DNS pinning, robots handling, rate limits, and the remaining production safeguards from the PRD.
