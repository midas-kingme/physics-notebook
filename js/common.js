
/**
 * Physics Notebook - Common Utilities
 * Handles Theme persistence and Initialization
 */

const ThemeManager = {
    init() {
        this.setupTheme();
        this.bindEvents();
    },

    setupTheme() {
        // Check localStorage first, fallback to 'light'
        const savedTheme = localStorage.getItem('physics-notebook-theme') || 'light';
        document.body.setAttribute('data-theme', savedTheme);
    },

    toggle() {
        const current = document.body.getAttribute('data-theme');
        const next = current === 'light' ? 'dark' : 'light';

        document.body.setAttribute('data-theme', next);
        localStorage.setItem('physics-notebook-theme', next);

        // Dispatch event for canvases to redraw colors
        window.dispatchEvent(new CustomEvent('theme-changed', { detail: next }));
    },

    bindEvents() {
        const btn = document.getElementById('themeBtn');
        if (btn) {
            btn.addEventListener('click', () => this.toggle());
        }

        // Also listen for logo click in top left if it sometimes acts as toggle? 
        // No, logo is navigation.
    }
};

// Immediate execution to prevent flash IF this script is loaded in head deferred
// But we actually want to run `setupTheme` ASAP.
// Optimally, a small inline script in head handles the initial set, but this works traversing the DOM once body exists


// Expose for usage
// GitHub Stats
const GitHubStats = {
    repo: 'CasberryIndia/Physics-Notebook',

    init() {
        this.fetchStars();
    },

    async fetchStars() {
        const starCountEl = document.getElementById('starCount');
        if (!starCountEl) return;

        // Visual loading state
        starCountEl.style.opacity = '0.5';

        try {
            // Check session storage first to avoid rate limits
            const cached = sessionStorage.getItem('physics-notebook-stars');
            if (cached) {
                starCountEl.textContent = cached;
                starCountEl.style.opacity = '1';
                return;
            }

            const response = await fetch(`https://api.github.com/repos/${this.repo}`);
            if (response.ok) {
                const data = await response.json();
                const stars = this.formatCount(data.stargazers_count);
                starCountEl.textContent = stars;
                sessionStorage.setItem('physics-notebook-stars', stars);
            } else {
                starCountEl.textContent = '--';
            }
        } catch (e) {
            console.warn('Failed to fetch stars:', e);
            starCountEl.textContent = '--';
        } finally {
            starCountEl.style.opacity = '1';
        }
    },

    formatCount(count) {
        if (count >= 1000) {
            return (count / 1000).toFixed(1) + 'k';
        }
        return count;
    }
};

window.ThemeManager = ThemeManager;

document.addEventListener('DOMContentLoaded', () => {
    ThemeManager.init();
    GitHubStats.init();
    // Initialize Lucide icons if library is present
    if (window.lucide) {
        window.lucide.createIcons();
    }
});
