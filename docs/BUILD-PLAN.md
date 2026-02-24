# Dark Mode Toggle Build Plan

Tool: Claude (Local app)
Feature: Dark mode toggle with localStorage persistence

Step 1: Add CSS custom properties for both themes
Refactor src/index.css to define light and dark color variables under named classes (e.g., .dark) instead of only relying on prefers-color-scheme. This is the foundation everything else builds on.

Step 2: Create a useDarkMode custom hook
Write src/hooks/useDarkMode.js with a hook that reads from localStorage on init, stores state, and syncs changes back to localStorage. Keeps theme logic in one place.

Step 3: Apply the theme class to <html> or <body>
In App.jsx, consume the hook and toggle a dark class on document.documentElement. Test by manually flipping it in DevTools to confirm CSS variables switch.

Step 4: Build a DarkModeToggle component
Create src/components/DarkModeToggle.jsx — a simple button that calls the toggle function from the hook. No styling yet, just wiring the click to state.

Step 5: Render the toggle in the UI
Add <DarkModeToggle> to App.jsx. Confirm the class toggles on click and the page colors change.

Step 6: Fix TodoList.jsx hardcoded colors
Replace the inline hardcoded light-theme colors in TodoList.jsx with CSS variables so the component responds to the theme class.

Step 7: Style the toggle button
Add CSS to make the toggle look polished in both themes — icon swap, accessible label, hover state.

Step 8: Verify localStorage persistence
Manually test: set dark mode, refresh the page, confirm it loads in dark mode. Also test that system preference is respected as a fallback when no preference is stored.