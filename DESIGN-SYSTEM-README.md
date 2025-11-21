# homegrowbook Design System - Verwendung

Dieses Design System stellt die vollständige UI-Formatierung von homegrowbook zur Verfügung, um sie einfach in andere Seiten einzubauen.

## 📦 Enthaltene Dateien

### 1. `design-system.md`
**Vollständige Dokumentation des Design Systems**
- Ausführliche Beschreibung aller Komponenten
- CSS-Variablen und Design-Tokens
- HTML-Beispiele für jede Komponente
- Responsive Design-Muster
- Verwendungsbeispiele

→ **Verwende diese Datei**, um das Design System zu verstehen und zu lernen, wie man es verwendet.

### 2. `design-system-export.css`
**Standalone CSS-Datei mit allen Styles**
- Komplettes Styling aus `styles.css`
- Gut organisiert mit Kommentaren
- Kann direkt kopiert oder verlinkt werden

→ **Verwende diese Datei**, um die Styles in dein Projekt einzubinden.

### 3. `design-system-export.js`
**JavaScript für interaktive Komponenten**
- Dropdown-Funktionalität
- Automatische Jahreszahl im Footer
- Utility-Funktionen
- Accessibility-Verbesserungen

→ **Verwende diese Datei**, um die interaktiven Features zu nutzen.

### 4. `design-system-template.html`
**HTML-Vorlage mit allen Komponenten**
- Komplette Seitenstruktur
- Mehrere Layout-Optionen
- Auskommentierte Alternativen
- Einfach anzupassen

→ **Verwende diese Datei** als Startpunkt für neue Seiten.

## 🚀 Schnellstart

### Option 1: Mit Template-Datei starten

1. Kopiere `design-system-template.html` und benenne sie um
2. Die CSS und JS Dateien müssen im gleichen Verzeichnis liegen
3. Passe den Inhalt an deine Bedürfnisse an

```bash
cp design-system-template.html meine-seite.html
# Jetzt meine-seite.html bearbeiten
```

### Option 2: In bestehendes Projekt integrieren

1. **CSS einbinden:**
```html
<link rel="stylesheet" href="design-system-export.css">
```

2. **JavaScript einbinden (vor `</body>`):**
```html
<script src="design-system-export.js"></script>
```

3. **HTML-Struktur verwenden:**
```html
<div class="page">
  <header class="navbar">
    <!-- Navigation -->
  </header>
  
  <main class="hero">
    <!-- Hauptinhalt -->
  </main>
  
  <footer class="footer">
    <!-- Footer -->
  </footer>
</div>
```

### Option 3: Styles direkt kopieren

Kopiere den Inhalt von `design-system-export.css` in deine eigene CSS-Datei:

```css
/* In deine styles.css kopieren: */
@import url('design-system-export.css');

/* Oder den Inhalt direkt einfügen */
```

## 📋 Wichtige Komponenten

### Navigation
```html
<header class="navbar">
  <div class="nav-left">
    <img src="logo.png" class="logo" alt="Logo">
    <div class="brand-text">
      <span class="brand-name">Name</span>
      <span class="brand-sub">Tagline</span>
    </div>
  </div>
  <div class="nav-right">
    <a class="btn btn-ghost" href="#">Link</a>
  </div>
</header>
```

### Buttons
```html
<!-- Primary Button -->
<a class="btn btn-accent" href="#">Aktion</a>

<!-- Secondary Button -->
<a class="btn btn-ghost" href="#">Aktion</a>
```

### Hero Section (Einfach)
```html
<main class="hero">
  <section>
    <h1 class="hero-title">Titel</h1>
    <p class="hero-subtitle">Beschreibung</p>
  </section>
</main>
```

### Hero Section (Split mit Visual)
```html
<main class="hero hero-split">
  <section>
    <!-- Linke Seite: Content -->
  </section>
  <aside class="hero-visual">
    <!-- Rechte Seite: Visual -->
  </aside>
</main>
```

### Dropdown-Menü
```html
<div class="dropdown" id="menuDropdown">
  <button class="btn btn-ghost dropdown-toggle" 
          onclick="toggleDropdown('menuDropdown')">
    Menü
  </button>
  <div class="dropdown-menu">
    <a class="dropdown-item" href="#">Item 1</a>
    <a class="dropdown-item" href="#">Item 2</a>
  </div>
</div>
```

## 🎨 Anpassungen

### Farben ändern

Passe die CSS-Variablen in `:root` an:

```css
:root {
  --accent: #57ff92;        /* Hauptakzentfarbe */
  --text-main: #f6f7fb;     /* Haupttextfarbe */
  --text-muted: #a3a8b5;    /* Sekundäre Textfarbe */
  /* ... weitere Variablen */
}
```

### Schriftarten ändern

```css
body {
  font-family: deine-schriftart, system-ui, sans-serif;
}
```

### Maximale Breite anpassen

```css
:root {
  --max-width: 1040px;  /* Ändere diesen Wert */
}
```

## 📱 Responsive Design

Das Design funktioniert automatisch auf allen Bildschirmgrößen:
- **Mobile**: < 768px
- **Desktop**: ≥ 768px

Keine zusätzliche Konfiguration nötig!

## ✨ Features

- ✅ Dark Theme (modern und augenschonend)
- ✅ Vollständig responsive
- ✅ Moderne Glassmorphism-Effekte
- ✅ Smooth Animations
- ✅ Accessibility-freundlich
- ✅ Dropdown-Menüs
- ✅ Formular-Styling
- ✅ Grid & Flexbox Layouts
- ✅ CSS-Variablen für einfache Anpassungen

## 🔧 Anforderungen

- Moderne Browser (Chrome, Firefox, Safari, Edge - aktuelle Versionen)
- CSS Grid und Flexbox Support
- CSS Custom Properties (Variablen) Support

## 📖 Weitere Informationen

Für detaillierte Dokumentation siehe `design-system.md`.

Dort findest du:
- Komplette CSS-Variablen-Referenz
- Alle Komponenten mit Beispielen
- Responsive Design-Patterns
- JavaScript-API-Dokumentation
- Tipps zur Integration

## 💡 Beispiele

Schau dir die bestehenden Seiten im Projekt an:
- `index.html` - Landing Page mit Split Layout
- `about.html` - Einfache Content-Seite
- `kontakt.html` - Formular-Seite
- `equipment.html` - Content mit Listen
- `log.html` - Komplexere Layout-Beispiele

## 🤝 Support

Bei Fragen zum Design System:
1. Lies zuerst `design-system.md`
2. Schau dir `design-system-template.html` an
3. Vergleiche mit den bestehenden Seiten im Projekt

---

**Version:** 1.0  
**Letzte Aktualisierung:** 2025  
**Basis:** homegrowbook Website
