# Menca v2 — what's new

- Search icon (⌘K) + light/dark toggle, always visible in header
- Responsive hamburger menu on mobile, with search + theme toggle beside it
- Round author avatar + name + date on posts (AuthorMeta.astro)
- Full-width breakout images inside post body: `<img class="wide-image" src="..." />`
- "You may also like" — 3 related posts by shared tag, with the same hover
  effect as the reference (image zoom + title color shift)
- Second post layout: add `layout: "split"` to a post's frontmatter for the
  squarish-image-left / tags+headline+author-right layout (stacks on mobile).
  Leave it out (or `layout: "classic"`) to keep the current hero-image layout.
- Tall two-column footer: avatar/bio/social on the left, gallery on the
  right (collapsible `<details>` on mobile). Add gallery image URLs to
  `SITE.gallery` in `src/site.config.ts`.
- Frogie-Regular now used natively on all headings (h1–h4); body/subheadings
  stay on Jost, exactly as specified.

New/changed frontmatter fields (all optional):
    authorAvatar: "https://.../photo.jpg"
    layout: "split"   # or omit for classic
