import { useEffect, useState } from "react";

export default function ThemeSwitch() {

    const [theme, setTheme] = useState<'light' | 'dark'>('light');

    useEffect(
        () => {
            const savedTheme = localStorage.getItem('theme') as 'light' | 'dark' | null;
            if (savedTheme) {
                setTheme(savedTheme);
                applyTheme(savedTheme);
            }
        }, []
    );

    function applyTheme(theme: 'light' | 'dark') {
        const root = window.document.documentElement;
        if (theme === 'light') {
            root.classList.remove('dark');
            root.classList.add('light');
        } else if (theme === 'dark') {
            root.classList.remove('light');
            root.classList.add('dark');
        } else {
            const isSystemDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
            if (isSystemDark) {
                root.classList.remove('light');
                root.classList.add('dark');
            } else {
                root.classList.remove('dark');
                root.classList.add('light');
            }
        }
    }

    return (
        <div>

            <div className={`relative rounded-full w-12 h-6 transition duration-200 ease-linear cursor-pointer ${theme === 'dark' ? 'bg-gray-600' : 'bg-gray-300'}`}>
                <label htmlFor="theme-toggle-input"
                    className={`absolute ${theme === 'dark' ? 'left-6' : 'left-0'} bg-white border-2 mb-2 w-6 h-6 rounded-full transition-left duration-200 ease-linear`}>
                </label>
                <input
                    type="checkbox" id="theme-toggle-input"
                    className="appearance-none w-full h-full active:outline-none focus:outline-none"
                    checked={theme === 'dark'}
                    onClick={
                        (e) => {
                            const input = e.target as HTMLInputElement;
                            const selectedTheme = input.checked ? 'dark' : 'light';
                            setTheme(selectedTheme);
                            localStorage.setItem('theme', selectedTheme);
                            applyTheme(selectedTheme);
                        }
                    }
                />
            </div>
        </div>
    );
}