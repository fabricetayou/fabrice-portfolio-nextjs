import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Fabrice Tayou — Développeur web',
  description:
    'Portfolio de Fabrice Tayou, développeur web. Découvrez son parcours, ses compétences et contactez-le pour votre prochain projet.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}
