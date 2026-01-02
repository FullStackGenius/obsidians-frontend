import type { Metadata } from 'next';
import "./adminlte.css";
import 'bootstrap-icons/font/bootstrap-icons.css';
import { Source_Sans_3 } from 'next/font/google';
export const metadata: Metadata = {
  title: 'AdminLTE v4 | Dashboard',

  description:
    'AdminLTE is a Free Bootstrap 5 Admin Dashboard, fully accessible with WCAG 2.1 AA compliance.',

  authors: [{ name: 'ColorlibHQ' }],

  keywords: [
    'bootstrap 5',
    'admin dashboard',
    'adminlte',
    'charts',
    'tables',
    'accessible admin panel',
  ],

  viewport: {
    width: 'device-width',
    initialScale: 1,
    userScalable: true,
  },

  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#007bff' },
    { media: '(prefers-color-scheme: dark)', color: '#1a1a1a' },
  ],

  other: {
    'color-scheme': 'light dark',
    'supported-color-schemes': 'light dark',
  },
};
export const adminFont = Source_Sans_3({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  variable: '--font-admin',
});
export default function RootLayout({ children }) {
  

  return (
    <>
    <div className={`admin-layout ${adminFont.variable}`}>
      {children}
      </div>
    </>
  );
}
