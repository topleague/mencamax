# Menca v3 — fixes

1. **Mobile search now works.** Root cause: Header.astro rendered
   `<SearchButton />` and `<ThemeToggle />` twice (once for desktop, once
   for mobile) — same HTML ids in two places, so `getElementById` always
   grabbed the hidden desktop copy. Rewrote the header so each renders
   exactly once, shown at every breakpoint via CSS only. This also fixes
   the same bug in the theme toggle (see #3).

2. **Classic post layout reverted to v1** — date/author text is back
   inside the featured-image overlay, untouched. The round-avatar
   AuthorMeta treatment now only appears on the new `layout: "split"`
   posts, matching the specific reference design that showed it.

3. **Dark/light toggle now actually works on mobile** — same root cause
   and same fix as #1.

4. **Wide images made easier** — no HTML needed. In any post body, write:

       ![wide: optional caption](https://your-image-url.jpg)

   and it renders full-width automatically. (The manual
   `<img class="wide-image">` approach from v2 still works too, if you
   prefer writing HTML directly.)
