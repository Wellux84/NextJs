'use client';
import { useTheme } from '../../app/contexts/ThemeContext';
import Navigation from '../../app/components/Navigation';
export default function About() {
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
      <Navigation />
      <h1> This is another page</h1>
      <p>There I have only another toggle app page</p>
    </div>
  );
}