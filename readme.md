# Git Flow Lab

A minimal multi-file web project used to practice Git branching workflows.

---

## Project Structure

```
web-lab/
├── index.html   # structure & content
├── styles.css   # presentation layer
├── script.js    # behaviour / interaction
└── readme.md    # project documentation
```

---

## Dark Theme

### How it works

The header contains a **Theme** button (`#theme-toggle`). Clicking it switches the page between light and dark mode.

| Step | What happens |
|------|-------------|
| 1 | User clicks the **Theme** button in the nav |
| 2 | `script.js` checks the current value of `data-theme` on `<body>` |
| 3 | If absent / not `"dark"` → sets `data-theme="dark"` and updates the icon to 🌙 |
| 4 | If already `"dark"` → removes the attribute and updates the icon to ☀️ |
| 5 | The chosen preference is written to `localStorage` under the key `gitflow-theme` |
| 6 | On the next page load, `script.js` reads `localStorage` and reapplies the saved theme automatically |

### CSS implementation

`styles.css` defines all visual values as **CSS custom properties** on `:root` (light defaults).
A second block overrides those variables when the `[data-theme="dark"]` selector is active:

```css
:root {
  background: #f6f8fa;
  color: #000000;
}

[data-theme="dark"] {
  background: #000000;
  color: #ffffff;
}
```


### Relevant files

| File | Change |
|------|--------|
| `index.html` | Added `id="theme-toggle"` and `aria-label` to the button; added `.icon` and `.label` spans |
| `styles.css` | Added `[data-theme="dark"]` token block; styled `#theme-toggle`; added CSS transitions |
| `script.js` | New file — wires up click listener, applies/persists theme |

---

Update the version to 1.0.0
