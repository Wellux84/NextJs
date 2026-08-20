import '@/styles/globals.css'; 

export const metadata = {
  title: 'First Next.js App',
  description: 'Styled with global CSS',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}