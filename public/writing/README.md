# Writing samples

Drop PDFs (or any file) in this folder to link them from the Writing
slide in Beyond Work (`src/pages/BeyondWork/BeyondWork.jsx`).

## How to add a piece

1. Save the file here, e.g. `public/writing/urban-informality-essay.pdf`.
2. Open `src/pages/BeyondWork/BeyondWork.jsx` and find the `Writing`
   slide's `pieces` array. Add an entry:

   ```js
   pieces: [
     { title: "Urban Informality — an essay", href: "/writing/urban-informality-essay.pdf" },
   ],
   ```

3. That's it — no other code changes needed. Add as many entries as you
   like; they render as a small list of links under the Writing slide.

## External links work too

`href` doesn't have to point at a local file — it can be any URL (a
Medium post, a Google Doc, a published article, etc.):

```js
pieces: [
  { title: "Piece published on Medium", href: "https://medium.com/@you/piece" },
],
```

This README is documentation only and is not referenced by the app; it's
safe to delete once real content is in place.
