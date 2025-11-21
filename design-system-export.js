/**
 * homegrowbook Design System JavaScript
 * 
 * Diese Datei enthält alle JavaScript-Funktionen für das homegrowbook Design.
 * Beinhaltet: Dropdown-Funktionalität, automatische Jahreszahl, Event-Handler
 * 
 * Version: 1.0
 * Letzte Aktualisierung: 2025
 */

// ============================================
// AUTOMATIC YEAR IN FOOTER
// ============================================

/**
 * Setzt die aktuelle Jahreszahl automatisch im Footer
 * Voraussetzung: Ein Element mit id="year" muss existieren
 */
function setCurrentYear() {
  const yearElement = document.getElementById('year');
  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }
}

// Jahreszahl beim Laden der Seite setzen
document.addEventListener('DOMContentLoaded', setCurrentYear);
// Fallback für ältere Browser / wenn DOMContentLoaded nicht verfügbar
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', setCurrentYear);
} else {
  setCurrentYear();
}

// ============================================
// DROPDOWN FUNCTIONALITY
// ============================================

/**
 * Toggelt ein Dropdown-Menü auf/zu
 * @param {string} id - Die ID des Dropdown-Elements
 */
function toggleDropdown(id) {
  const dropdown = document.getElementById(id);
  if (dropdown) {
    dropdown.classList.toggle('active');
  }
}

/**
 * Schließt alle Dropdown-Menüs
 */
function closeAllDropdowns() {
  const dropdowns = document.querySelectorAll('.dropdown');
  dropdowns.forEach(dropdown => {
    dropdown.classList.remove('active');
  });
}

/**
 * Schließt Dropdown-Menüs wenn außerhalb geklickt wird
 */
function handleDropdownOutsideClick(event) {
  const dropdowns = document.querySelectorAll('.dropdown');
  dropdowns.forEach(dropdown => {
    if (!dropdown.contains(event.target)) {
      dropdown.classList.remove('active');
    }
  });
}

// Event-Listener für Outside-Clicks hinzufügen
document.addEventListener('click', handleDropdownOutsideClick);

// ============================================
// UTILITY FUNCTIONS
// ============================================

/**
 * Smooth Scroll zu einem Element
 * @param {string} selector - CSS-Selektor des Ziel-Elements
 * @param {number} offset - Optionaler Offset in Pixeln (default: 0)
 */
function smoothScrollTo(selector, offset = 0) {
  const element = document.querySelector(selector);
  if (element) {
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - offset;

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    });
  }
}

/**
 * Initialisiert alle Anchor-Links für Smooth Scrolling
 * Anchor-Links müssen das Attribut data-smooth-scroll haben
 */
function initSmoothScrollLinks() {
  const links = document.querySelectorAll('a[data-smooth-scroll]');
  links.forEach(link => {
    link.addEventListener('click', function(e) {
      const href = this.getAttribute('href');
      if (href.startsWith('#')) {
        e.preventDefault();
        smoothScrollTo(href, 80); // 80px offset für sticky navbar
      }
    });
  });
}

// Smooth Scroll initialisieren wenn DOM geladen ist
document.addEventListener('DOMContentLoaded', initSmoothScrollLinks);

// ============================================
// ACCESSIBILITY ENHANCEMENTS
// ============================================

/**
 * Ermöglicht Dropdown-Steuerung per Tastatur (ESC zum Schließen)
 */
function handleDropdownKeyboard(event) {
  if (event.key === 'Escape') {
    closeAllDropdowns();
  }
}

document.addEventListener('keydown', handleDropdownKeyboard);

// ============================================
// MOBILE MENU HANDLING (Optional)
// ============================================

/**
 * Optional: Mobile Menu Toggle
 * Aktiviere dies wenn du ein Mobile Burger Menu hinzufügen möchtest
 */
function toggleMobileMenu() {
  const mobileMenu = document.querySelector('.nav-right');
  const body = document.body;
  
  if (mobileMenu) {
    mobileMenu.classList.toggle('mobile-active');
    body.classList.toggle('menu-open');
  }
}

// ============================================
// EXPORT FÜR MODULE (optional)
// ============================================

// Wenn du ES6 Modules verwendest, kannst du diese Funktionen exportieren:
if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    setCurrentYear,
    toggleDropdown,
    closeAllDropdowns,
    smoothScrollTo,
    initSmoothScrollLinks,
    toggleMobileMenu
  };
}

// ============================================
// GLOBAL OBJECT (für direkte Verwendung)
// ============================================

// Alle Funktionen im globalen Objekt verfügbar machen
window.HGBDesignSystem = {
  setCurrentYear,
  toggleDropdown,
  closeAllDropdowns,
  smoothScrollTo,
  initSmoothScrollLinks,
  toggleMobileMenu
};

// ============================================
// USAGE EXAMPLES (als Kommentare)
// ============================================

/*
 * BEISPIEL 1: Dropdown in HTML verwenden
 * 
 * <div class="dropdown" id="myDropdown">
 *   <button class="btn btn-ghost dropdown-toggle" onclick="toggleDropdown('myDropdown')">
 *     Menu
 *   </button>
 *   <div class="dropdown-menu">
 *     <a class="dropdown-item" href="#">Item 1</a>
 *     <a class="dropdown-item" href="#">Item 2</a>
 *   </div>
 * </div>
 */

/*
 * BEISPIEL 2: Jahreszahl im Footer
 * 
 * <footer class="footer">
 *   <span>© <span id="year"></span> Dein Projekt</span>
 * </footer>
 */

/*
 * BEISPIEL 3: Smooth Scroll Links
 * 
 * <a href="#section-id" data-smooth-scroll>Zu Section scrollen</a>
 */

/*
 * BEISPIEL 4: Programmatisch Dropdown steuern
 * 
 * // Dropdown öffnen/schließen
 * HGBDesignSystem.toggleDropdown('myDropdown');
 * 
 * // Alle Dropdowns schließen
 * HGBDesignSystem.closeAllDropdowns();
 * 
 * // Smooth Scroll zu einem Element
 * HGBDesignSystem.smoothScrollTo('#my-section', 100);
 */
