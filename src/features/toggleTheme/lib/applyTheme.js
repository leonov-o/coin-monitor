export const applyTheme = () => {
    const isDarkMode =
        localStorage.theme === 'dark' ||
        (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches);

    document.documentElement.classList.toggle('dark', isDarkMode);

    return isDarkMode;
};
