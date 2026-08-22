import { ThemeProvider } from './contexts/ThemeContext';

export const metadata = {
  title: 'Theme Toggle App',
  description: 'Using Context API with App Router',
};
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
