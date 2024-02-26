
import MainHeader from '@/components/main-header/main-header';
import './globals.css';

export const metadata = {
  title: 'Star War',
  description: 'Star war collection',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <MainHeader />

        {children}
      </body>
    </html>
  );
}
