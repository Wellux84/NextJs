'use client';
import { useTheme } from './contexts/ThemeContext';
import Navigation from './components/Navigation';

export default function Home() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div
      style={{
        backgroundColor: theme === 'dark' ? '#222' : '#fff',
        color: theme === 'dark' ? '#fff' : '#000',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        gap: '2rem',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '2rem',
      }}
    >
      <h1>Current Theme: {theme}</h1>
      <button
        onClick={toggleTheme}
        style={{
          padding: '0.5rem 1rem',
          border: 'none',
          borderRadius: '4px',
          backgroundColor: theme === 'dark' ? '#555' : '#ddd',
          cursor: 'pointer',
        }}
      >
        Toggle Theme
      </button>
      <Navigation />
      <h2>This is the toggle app test home page</h2>
    </div>
  );
}
