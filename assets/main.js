const html = document.documentElement;
const darkModeToggle = document.getElementById('darkModeToggle');

// Dark mode toggle
const setDarkMode = (isDark) => {
    if (isDark) {
        html.classList.add('dark');
        localStorage.setItem('theme', 'dark');
    } else {
        html.classList.remove('dark');
        localStorage.setItem('theme', 'light');
    }
};

darkModeToggle.addEventListener('click', () => {
    const isDark = !html.classList.contains('dark');
    setDarkMode(isDark);
});

// Initialize dark mode based on system preference or saved preference
const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
    setDarkMode(savedTheme === 'dark');
} else {
    setDarkMode(window.matchMedia('(prefers-color-scheme: dark)').matches);
}
