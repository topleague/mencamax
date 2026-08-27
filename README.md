# topleague-cleanblog-menca (v1)

Clean Blog Jekyll's hero-image post layout + Menca's sidebar/magazine
structure, rebuilt in Astro with Markdown content collections, a
light/dark toggle, and Jost (400/700/900) throughout.

## Add posts
Drop a `.md` file into `src/content/posts/`. Frontmatter:

    ---
    title: "Your Title"
    date: 2026-08-25
    excerpt: "One-line summary for the list view."
    tags: ["tag1", "tag2"]
    coverUrl: "https://example.com/image.jpg"   # optional
    ---
    Your Markdown content here.

Delete the two sample posts once you've added your own.

## Pages
- `/` — post list + sidebar
- `/<slug>/` — individual post (auto-generated from filename)
- `/tags/` and `/tags/<tag>/`
- `/about/`, `/elements/` (style guide)

## Deploy
`npm run build` → output in `dist/`. Push to GitHub, connect to Cloudflare
Pages (build command `npm run build`, output directory `dist`).
