# homegrowbook Design System

Vollständige Formatierung und UI-Design-Dokumentation für die Integration in andere Seiten.

## Inhaltsverzeichnis

1. [CSS-Variablen](#css-variablen)
2. [Basis-Styles](#basis-styles)
3. [Layout-Komponenten](#layout-komponenten)
4. [Navigationsleiste](#navigationsleiste)
5. [Buttons](#buttons)
6. [Dropdown-Menü](#dropdown-menü)
7. [Hero-Section](#hero-section)
8. [Formulare](#formulare)
9. [Footer](#footer)
10. [JavaScript-Funktionalität](#javascript-funktionalität)
11. [Responsive Design](#responsive-design)

---

## CSS-Variablen

Das Design-System verwendet CSS-Custom-Properties für konsistente Farben, Abstände und weitere Design-Tokens:

```css
:root {
  color-scheme: dark;
  
  /* Hintergrundfarben */
  --bg: #050708;
  --bg-elevated: #0c1014;
  --bg-soft: #11161c;
  
  /* Akzentfarben */
  --accent: #57ff92;
  --accent-soft: rgba(87, 255, 146, 0.12);
  --accent-border: rgba(87, 255, 146, 0.4);
  
  /* Textfarben */
  --text-main: #f6f7fb;
  --text-muted: #a3a8b5;
  
  /* Weitere Farben */
  --pill-bg: #121820;
  --border-subtle: #1f2630;
  
  /* Border-Radius */
  --radius-lg: 18px;
  --radius-pill: 999px;
  --radius: 8px;
  
  /* Schatten */
  --shadow-soft: 0 30px 80px rgba(0, 0, 0, 0.6);
  
  /* Layout */
  --max-width: 1040px;
  --gap: 16px;
}
```

---

## Basis-Styles

### Reset und Grundeinstellungen

```css
* {
  box-sizing: border-box;
  -webkit-font-smoothing: antialiased;
}

html, body {
  height: 100%;
  margin: 0;
  padding: 0;
}

body {
  margin: 0;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "SF Pro Text", "Segoe UI", sans-serif;
  background: radial-gradient(circle at top, #101620 0, #050708 55%, #000000 100%);
  color: var(--text-main);
  line-height: 1.6;
  padding: 0;
  min-height: 100%;
}
```

### HTML-Struktur

Jede Seite sollte diese Grundstruktur verwenden:

```html
<!doctype html>
<html lang="de">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width,initial-scale=1">
  <meta name="color-scheme" content="dark">
  <title>Seitentitel</title>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <div class="page">
    <!-- Navbar -->
    <!-- Content -->
    <!-- Footer -->
  </div>
  <script>/* JavaScript hier */</script>
</body>
</html>
```

---

## Layout-Komponenten

### Page Container

Der Haupt-Container für alle Inhalte:

```css
.page {
  width: 100%;
  max-width: var(--max-width);
  padding: 16px 18px 40px;
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

@media (min-width: 768px) {
  .page {
    padding: 24px 24px 64px;
  }
}
```

**HTML-Beispiel:**
```html
<div class="page">
  <!-- Gesamter Seiteninhalt -->
</div>
```

---

## Navigationsleiste

### Navbar-Komponente

Sticky Navigation mit Logo, Brand-Text und Buttons:

```css
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 16px;
  padding: 10px 14px;
  border-radius: var(--radius-lg);
  background: rgba(6, 9, 12, 0.96);
  border: 1px solid var(--border-subtle);
  box-shadow: 0 18px 40px rgba(0, 0, 0, 0.7);
  position: sticky;
  top: 10px;
  z-index: 10;
  backdrop-filter: blur(18px);
}
```

### Navbar-Elemente

```css
/* Linker Bereich */
.nav-left {
  display: flex;
  align-items: center;
  gap: 10px;
  min-width: 0;
}

/* Logo */
.logo {
  height: 28px;
  width: 28px;
  border-radius: 8px;
  display: block;
}

@media (min-width: 768px) {
  .logo {
    height: 32px;
    width: 32px;
  }
}

/* Brand-Text */
.brand-text {
  display: flex;
  flex-direction: column;
  line-height: 1.2;
}

.brand-name {
  font-size: 1rem;
  font-weight: 600;
  letter-spacing: 0.01em;
  color: var(--text-main);
}

.brand-sub {
  font-size: 0.7rem;
  text-transform: uppercase;
  letter-spacing: 0.14em;
  color: var(--text-muted);
}

/* Rechter Bereich */
.nav-right {
  display: flex;
  gap: 10px;
  align-items: center;
}
```

**HTML-Beispiel:**
```html
<header class="navbar">
  <div class="nav-left">
    <img src="./9A9F0B7F-D874-407D-B8BB-FD17E4C85A9F.png"
         alt="homegrowbook Logo"
         class="logo">
    <div class="brand-text">
      <span class="brand-name">homegrowbook</span>
      <span class="brand-sub">Smart Indoor Growing</span>
    </div>
  </div>
  <div class="nav-right">
    <a class="btn btn-ghost" href="index.html">Home</a>
    <!-- Weitere Buttons/Dropdowns -->
  </div>
</header>
```

---

## Buttons

### Button-Varianten

```css
/* Basis-Button */
.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 7px 16px;
  border-radius: var(--radius-pill);
  border: 1px solid transparent;
  font-size: 0.86rem;
  font-weight: 500;
  text-decoration: none;
  cursor: pointer;
  transition: all 0.18s ease-out;
  white-space: nowrap;
}

/* Akzent-Button (Primary) */
.btn-accent {
  background: var(--accent);
  color: #020304;
  border-color: var(--accent);
  box-shadow: 0 12px 32px rgba(87, 255, 146, 0.35);
}

.btn-accent:hover {
  transform: translateY(-1px);
  box-shadow: 0 16px 40px rgba(87, 255, 146, 0.45);
}

/* Ghost-Button (Secondary) */
.btn-ghost {
  background: transparent;
  color: var(--text-main);
  border: 1px solid var(--border-subtle);
}

.btn-ghost:hover {
  border-color: var(--accent-border);
  background: rgba(255, 255, 255, 0.02);
}
```

### Standard-Button (für Forms)

```css
button {
  background: var(--accent);
  color: #020304;
  border: none;
  padding: 8px 14px;
  border-radius: 4px;
  cursor: pointer;
  font-weight: 500;
  transition: all 0.18s ease-out;
}

button:hover {
  transform: translateY(-1px);
  box-shadow: 0 4px 12px rgba(87, 255, 146, 0.35);
}

button[type="reset"] {
  background: rgba(255, 255, 255, 0.1);
  color: var(--text-main);
}

button[type="reset"]:hover {
  background: rgba(255, 255, 255, 0.15);
}
```

**HTML-Beispiel:**
```html
<!-- Akzent-Button -->
<a class="btn btn-accent" href="./log.html">Projekt Log</a>

<!-- Ghost-Button -->
<a class="btn btn-ghost" href="https://instagram.com" target="_blank">Instagram</a>

<!-- Standard-Button -->
<button type="submit">Absenden</button>
<button type="reset">Zurücksetzen</button>
```

---

## Dropdown-Menü

### Dropdown-Komponente

```css
.dropdown {
  position: relative;
  display: inline-block;
}

.dropdown-toggle {
  display: inline-flex;
  align-items: center;
  gap: 6px;
}

.dropdown-toggle::after {
  content: '▼';
  font-size: 0.7rem;
  transition: transform 0.2s ease;
}

.dropdown.active .dropdown-toggle::after {
  transform: rotate(180deg);
}

.dropdown-menu {
  position: absolute;
  top: calc(100% + 8px);
  right: 0;
  min-width: 180px;
  background: rgba(6, 9, 12, 0.98);
  border: 1px solid var(--border-subtle);
  border-radius: 12px;
  box-shadow: 0 18px 40px rgba(0, 0, 0, 0.7);
  backdrop-filter: blur(18px);
  padding: 8px;
  display: none;
  flex-direction: column;
  gap: 4px;
  z-index: 100;
}

.dropdown.active .dropdown-menu {
  display: flex;
}

.dropdown-item {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 10px 14px;
  border-radius: 8px;
  font-size: 0.86rem;
  font-weight: 500;
  text-decoration: none;
  color: var(--text-main);
  transition: all 0.18s ease-out;
  white-space: nowrap;
}

.dropdown-item:hover {
  background: rgba(255, 255, 255, 0.08);
  color: var(--accent);
}
```

**HTML-Beispiel:**
```html
<div class="dropdown" id="aboutDropdown">
  <button class="btn btn-ghost dropdown-toggle" onclick="toggleDropdown('aboutDropdown')">
    About us
  </button>
  <div class="dropdown-menu">
    <a class="dropdown-item" href="projekte.html">Projekte</a>
    <a class="dropdown-item" href="equipment.html">Equipment</a>
    <a class="dropdown-item" href="kontakt.html">Kontakt</a>
  </div>
</div>
```

### Language Switcher

```css
.language-switcher {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 7px 12px;
  border-radius: var(--radius-pill);
  border: 1px solid var(--border-subtle);
  background: transparent;
  color: var(--text-main);
  font-size: 0.86rem;
  font-weight: 500;
  text-decoration: none;
  cursor: pointer;
  transition: all 0.18s ease-out;
}

.language-switcher:hover {
  border-color: var(--accent-border);
  background: rgba(255, 255, 255, 0.02);
}

.language-switcher .flag {
  font-size: 1.1rem;
}
```

**HTML-Beispiel:**
```html
<a class="language-switcher" href="./en/index.html" title="Switch to English">
  <span class="flag">🇬🇧</span>
</a>
```

---

## Hero-Section

### Hero-Container

Die Hero-Section ist der Hauptinhaltsbereich:

```css
.hero {
  flex: 1;
  max-width: var(--max-width);
  width: 100%;
  margin: 26px auto 0;
  background: radial-gradient(circle at top left, #151d26 0, #0b1016 45%, #050708 100%);
  border-radius: 28px;
  padding: 22px 18px 26px;
  border: 1px solid rgba(73, 90, 110, 0.35);
  box-shadow: var(--shadow-soft);
  position: relative;
  overflow: hidden;
}

@media (min-width: 768px) {
  .hero {
    margin-top: 34px;
    padding: 30px 28px 32px;
  }
}
```

### Hero Split Layout (Zwei-Spalten)

```css
.hero.hero-split {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 60px;
  align-items: center;
}

@media (max-width: 768px) {
  .hero.hero-split {
    grid-template-columns: 1fr;
    gap: 40px;
  }
}

.hero section {
  display: flex;
  flex-direction: column;
  gap: 24px;
}
```

### Hero-Elemente

```css
/* Label mit pulsierendem Punkt */
.hero-label {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 3px 11px;
  border-radius: var(--radius-pill);
  background: rgba(9, 15, 22, 0.86);
  border: 1px solid var(--accent-border);
  color: var(--accent);
  font-size: 0.74rem;
  text-transform: uppercase;
  letter-spacing: 0.16em;
  font-weight: 500;
  width: fit-content;
}

.hero-label-dot {
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: var(--accent);
  box-shadow: 0 0 16px rgba(87, 255, 146, 0.8);
  animation: pulse 2s ease-in-out infinite;
}

@keyframes pulse {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.5; }
}

/* Titel */
.hero-title {
  font-size: 2rem;
  font-weight: 700;
  line-height: 1.1;
  margin: 0;
  color: var(--text-main);
}

@media (min-width: 768px) {
  .hero-title {
    font-size: 2.6rem;
  }
}

.hero-title .highlight {
  color: var(--accent);
}

/* Untertitel */
.hero-subtitle {
  font-size: 0.98rem;
  line-height: 1.6;
  color: var(--text-muted);
  margin: 0;
  max-width: 48rem;
}

.hero-subtitle strong {
  color: var(--text-main);
  font-weight: 700;
}

/* Actions (Button-Gruppe) */
.hero-actions {
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
}

/* Badge Row */
.hero-badge-row {
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
  margin-top: 12px;
}

.pill {
  display: inline-block;
  padding: 8px 16px;
  background: var(--pill-bg);
  border: 1px solid var(--border-subtle);
  border-radius: 999px;
  font-size: 0.85rem;
  color: var(--text-main);
}

.pill strong {
  font-weight: 700;
}
```

### Hero Visual (Mockup)

```css
.hero-visual {
  position: relative;
}

.hero-visual-inner {
  background: rgba(20, 28, 38, 0.6);
  border: 1px solid var(--border-subtle);
  border-radius: 12px;
  padding: 24px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.5);
}

.mock-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  padding-bottom: 16px;
  border-bottom: 1px solid var(--border-subtle);
}

.mock-header-left {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 0.9rem;
  font-weight: 600;
  color: var(--text-main);
}

.mock-dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: var(--accent);
}

.mock-tag {
  font-size: 0.8rem;
  padding: 4px 12px;
  background: rgba(87, 255, 146, 0.15);
  color: var(--accent);
  border-radius: 12px;
  font-weight: 600;
}

.mock-body {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.mock-main-text {
  font-size: 0.95rem;
  line-height: 1.6;
  color: var(--text-muted);
}

.mock-main-text strong {
  font-weight: 700;
  color: var(--text-main);
}

/* Metriken-Karten */
.mock-metrics {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 12px;
}

.metric-card {
  background: rgba(10, 15, 20, 0.8);
  border: 1px solid var(--border-subtle);
  border-radius: var(--radius);
  padding: 16px;
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.metric-label {
  font-size: 0.8rem;
  color: var(--text-muted);
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.metric-value {
  display: flex;
  align-items: baseline;
  gap: 6px;
  flex-wrap: wrap;
}

.metric-value strong {
  font-size: 1.4rem;
  color: var(--accent);
}

.metric-value span {
  font-size: 0.85rem;
  color: var(--text-muted);
}
```

**HTML-Beispiel (Einfach):**
```html
<main class="hero">
  <section>
    <h1 class="hero-title">Über uns</h1>
    <p class="hero-subtitle">
      Informationen über dieses Projekt.
    </p>
  </section>
</main>
```

**HTML-Beispiel (Split mit Visual):**
```html
<main class="hero hero-split">
  <section>
    <div class="hero-label">
      <span class="hero-label-dot"></span>
      <span>Projekt · Live im Aufbau</span>
    </div>
    
    <h1 class="hero-title">
      Smart Indoor Growing<br>
      <span class="highlight">mit homegrowbook</span>
    </h1>
    
    <p class="hero-subtitle">
      Ein vollautomatisiertes Grow-System auf Basis von <strong>Raspberry Pi</strong>.
    </p>
    
    <div class="hero-actions">
      <a class="btn btn-accent" href="./log.html">Projekt Log</a>
      <a class="btn btn-ghost" href="#">Instagram Updates</a>
    </div>
    
    <div class="hero-badge-row">
      <div class="pill"><strong>Raspberry Pi</strong> als Grow-Hub</div>
      <div class="pill">Automationen mit Home Assistant</div>
    </div>
  </section>
  
  <aside class="hero-visual">
    <div class="hero-visual-inner">
      <!-- Mock content hier -->
    </div>
  </aside>
</main>
```

---

## Formulare

### Kontaktformular

```css
.contact-form {
  display: flex;
  flex-direction: column;
  gap: 12px;
  max-width: 640px;
}

.contact-form label {
  display: flex;
  flex-direction: column;
  font-weight: 600;
  gap: 6px;
  color: var(--text-main);
}

.contact-form input,
.contact-form textarea {
  padding: 8px 10px;
  border: 1px solid var(--border-subtle);
  border-radius: 4px;
  font: inherit;
  background: rgba(20, 28, 38, 0.6);
  color: var(--text-main);
}

.contact-form input:focus,
.contact-form textarea:focus {
  outline: none;
  border-color: var(--accent-border);
}

.form-actions {
  display: flex;
  gap: 8px;
  margin-top: 8px;
}

.note {
  font-size: 0.9rem;
  color: var(--text-muted);
}
```

**HTML-Beispiel:**
```html
<form class="contact-form" action="#" method="post">
  <label>
    Name
    <input type="text" name="name" required>
  </label>
  <label>
    E-Mail
    <input type="email" name="email" required>
  </label>
  <label>
    Nachricht
    <textarea name="message" rows="6" required></textarea>
  </label>
  <div class="form-actions">
    <button type="submit">Absenden</button>
    <button type="reset">Zurücksetzen</button>
  </div>
</form>
```

---

## Footer

### Footer-Komponente

```css
.footer {
  margin-top: 24px;
  padding: 14px 4px 0;
  border-top: 1px solid rgba(32, 40, 52, 0.9);
  color: var(--text-muted);
  font-size: 0.74rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 8px;
}

.footer a {
  color: var(--accent);
  text-decoration: none;
}

.footer a:hover {
  text-decoration: underline;
}
```

**HTML-Beispiel:**
```html
<footer class="footer">
  <span>© <span id="year"></span> homegrowbook · Projekt im Aufbau</span>
  <span>
    Folgen auf
    <a href="https://instagram.com/homegrowbook" target="_blank" rel="noreferrer">Instagram</a>
    ·
    <a href="https://www.youtube.com/@HOMEGROWBOOK" target="_blank" rel="noreferrer">YouTube</a>
  </span>
</footer>
```

---

## JavaScript-Funktionalität

### Erforderliches JavaScript

```javascript
// Jahreszahl automatisch setzen
document.getElementById('year').textContent = new Date().getFullYear();

// Dropdown toggle function
function toggleDropdown(id) {
  const dropdown = document.getElementById(id);
  dropdown.classList.toggle('active');
}

// Close dropdown when clicking outside
document.addEventListener('click', function(event) {
  const dropdowns = document.querySelectorAll('.dropdown');
  dropdowns.forEach(dropdown => {
    if (!dropdown.contains(event.target)) {
      dropdown.classList.remove('active');
    }
  });
});
```

**Verwendung:**
- Füge dieses Script-Tag vor dem schließenden `</body>` Tag ein
- Das JavaScript wird für die Dropdown-Menüs und die Footer-Jahreszahl benötigt
- Stelle sicher, dass jedes Dropdown eine eindeutige ID hat

---

## Responsive Design

### Mobile-Optimierungen

```css
@media (max-width: 768px) {
  /* Navbar */
  .navbar {
    flex-direction: row;
    flex-wrap: nowrap;
    gap: 8px;
    padding: 10px 12px;
  }
  
  .nav-left {
    flex: 0 1 auto;
    min-width: 0;
    overflow: hidden;
  }
  
  .brand-text {
    overflow: hidden;
  }
  
  .brand-name {
    font-size: 0.85rem;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  
  .brand-sub {
    font-size: 0.6rem;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  
  .nav-right {
    flex: 1 1 auto;
    flex-shrink: 0;
    gap: 6px;
    justify-content: flex-end;
  }
  
  /* Buttons */
  .btn {
    font-size: 0.75rem;
    padding: 6px 10px;
  }
  
  /* Logo */
  .logo {
    height: 24px;
    width: 24px;
  }
  
  /* Dropdown-Pfeil ausblenden auf Mobile */
  .dropdown-toggle::after {
    display: none;
  }
  
  /* Hero */
  .hero-title {
    font-size: 2rem;
  }
  
  .hero-subtitle {
    font-size: 0.95rem;
  }
  
  /* Metrics */
  .mock-metrics {
    grid-template-columns: 1fr;
  }
}
```

### Breakpoints

Das Design-System nutzt hauptsächlich einen Breakpoint:
- **Mobile**: < 768px
- **Desktop**: ≥ 768px

---

## Typografie

### Überschriften

```css
h1 {
  margin-top: 0;
  color: var(--text-main);
}

.hero-title {
  font-size: 2rem;
  font-weight: 700;
  line-height: 1.1;
  margin: 0;
  color: var(--text-main);
}

@media (min-width: 768px) {
  .hero-title {
    font-size: 2.6rem;
  }
}
```

### Textstile

- **Haupttext**: `font-size: 0.98rem`, `color: var(--text-muted)`
- **Hervorgehobener Text**: `font-weight: 700`, `color: var(--text-main)`
- **Kleinere Labels**: `font-size: 0.74rem - 0.86rem`

---

## Zusammenfassung der wichtigsten Komponenten

### Vollständige Seiten-Struktur

```html
<!doctype html>
<html lang="de">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width,initial-scale=1">
  <meta name="color-scheme" content="dark">
  <title>Seitentitel</title>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <div class="page">
    <!-- NAVBAR -->
    <header class="navbar">
      <div class="nav-left">
        <img src="./logo.png" alt="Logo" class="logo">
        <div class="brand-text">
          <span class="brand-name">Brand Name</span>
          <span class="brand-sub">Tagline</span>
        </div>
      </div>
      <div class="nav-right">
        <a class="btn btn-ghost" href="index.html">Home</a>
        <!-- Weitere Buttons/Dropdowns -->
      </div>
    </header>

    <!-- HERO / MAIN CONTENT -->
    <main class="hero">
      <section>
        <h1 class="hero-title">Titel</h1>
        <p class="hero-subtitle">Beschreibung</p>
        <div class="hero-actions">
          <a class="btn btn-accent" href="#">Primary Action</a>
          <a class="btn btn-ghost" href="#">Secondary Action</a>
        </div>
      </section>
    </main>

    <!-- FOOTER -->
    <footer class="footer">
      <span>© <span id="year"></span> Brand Name</span>
      <span>
        Links · <a href="#">Link 1</a> · <a href="#">Link 2</a>
      </span>
    </footer>
  </div>

  <script>
    document.getElementById('year').textContent = new Date().getFullYear();
    
    function toggleDropdown(id) {
      const dropdown = document.getElementById(id);
      dropdown.classList.toggle('active');
    }
    
    document.addEventListener('click', function(event) {
      const dropdowns = document.querySelectorAll('.dropdown');
      dropdowns.forEach(dropdown => {
        if (!dropdown.contains(event.target)) {
          dropdown.classList.remove('active');
        }
      });
    });
  </script>
</body>
</html>
```

---

## Farbpalette (Quick Reference)

| Verwendung | Variable | Wert |
|------------|----------|------|
| Hintergrund | `--bg` | `#050708` |
| Hintergrund erhöht | `--bg-elevated` | `#0c1014` |
| Hintergrund weich | `--bg-soft` | `#11161c` |
| Akzentfarbe | `--accent` | `#57ff92` |
| Text (primär) | `--text-main` | `#f6f7fb` |
| Text (sekundär) | `--text-muted` | `#a3a8b5` |
| Border | `--border-subtle` | `#1f2630` |

---

## Anwendungsbeispiele

### 1. Einfache Content-Seite

Für einfache Seiten mit Text-Content:

```html
<main class="hero">
  <section>
    <h1 class="hero-title">Titel der Seite</h1>
    <p class="hero-subtitle">
      Beschreibungstext mit <strong>hervorgehobenem</strong> Inhalt.
    </p>
    <!-- Weiterer Content -->
  </section>
</main>
```

### 2. Landing-Page mit Split Layout

Für Landing-Pages mit visuellem Element:

```html
<main class="hero hero-split">
  <section>
    <div class="hero-label">
      <span class="hero-label-dot"></span>
      <span>Status · Label</span>
    </div>
    <h1 class="hero-title">
      Haupttitel<br>
      <span class="highlight">Highlighted Teil</span>
    </h1>
    <p class="hero-subtitle">Beschreibung</p>
    <div class="hero-actions">
      <a class="btn btn-accent" href="#">Primary CTA</a>
      <a class="btn btn-ghost" href="#">Secondary CTA</a>
    </div>
  </section>
  <aside class="hero-visual">
    <!-- Visual/Mockup Content -->
  </aside>
</main>
```

### 3. Formular-Seite

Für Seiten mit Kontakt- oder anderen Formularen:

```html
<main class="hero">
  <section>
    <h1 class="hero-title">Kontakt</h1>
    <form class="contact-form" action="#" method="post">
      <label>
        Name
        <input type="text" name="name" required>
      </label>
      <label>
        E-Mail
        <input type="email" name="email" required>
      </label>
      <label>
        Nachricht
        <textarea name="message" rows="6" required></textarea>
      </label>
      <div class="form-actions">
        <button type="submit">Absenden</button>
        <button type="reset">Zurücksetzen</button>
      </div>
    </form>
  </section>
</main>
```

---

## Hinweise zur Integration

1. **CSS-Datei einbinden**: Kopiere `styles.css` oder binde sie als Stylesheet ein
2. **JavaScript erforderlich**: Das JavaScript für Dropdowns und Footer ist notwendig
3. **Logo/Assets**: Passe die Pfade zu Logo und anderen Assets an
4. **Responsive**: Das Design ist mobile-first und funktioniert auf allen Bildschirmgrößen
5. **Dark Theme**: Das Design nutzt ein dunkles Farbschema (color-scheme: dark)
6. **Moderne Browser**: Das Design nutzt moderne CSS-Features (CSS Variables, Grid, Flexbox)

---

## Version

- **Design System Version**: 1.0
- **Letzte Aktualisierung**: 2025
- **Basis**: homegrowbook Website

---

## Support und Anpassungen

Dieses Design-System kann vollständig angepasst werden durch:
- Änderung der CSS-Variablen in `:root`
- Überschreiben einzelner Klassen
- Hinzufügen neuer Komponenten nach gleichem Muster

Alle Komponenten sind modular aufgebaut und können einzeln verwendet werden.
