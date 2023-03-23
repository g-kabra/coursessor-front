import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';
import { MoonIcon, SunIcon } from '@heroicons/react/24/solid'

export default function ToggleDarkMode() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const handleThemeChange = (newTheme) => {
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
  };

  if (!mounted) return null;

  return (
    <button role={"switchToDark"}
      onClick={() => handleThemeChange(theme === 'dark' ? 'light' : 'dark')}
      className="flex items-center justify-center rounded-full p-4 transition-colors duration-300 focus:outline-none mr-3 mt-1"
    >
      {theme === 'dark' ? (
        <SunIcon className="h-6 w-6 text-yellow-500" />
      ) : (
        <MoonIcon className="h-6 w-6 text-gray-300" />
      )}
    </button>
  );
}
