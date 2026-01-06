import { ReactNode } from "react";
import './styles.css'
import Header from "./components/header";

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="es">
      <head>
        <title>Bulltrack - Ranking de Bulls</title>
        <meta name="description" content="Ranking de Bulls: Descubre y compara los mejores toros del momento." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content="Bulltrack - Ranking de Bulls" />
        <meta property="og:description" content="Ranking de Bulls: Descubre y compara los mejores toros del momento." />
        <meta property="og:image" content="/logo/logo.png" />
        <meta property="og:type" content="website" />
        <link rel="icon" href="/logo/logo.png" type="image/png" />
      </head>
      <body className="bg-dark-green h-screen flex flex-col">
        {/* Header global */}
        <Header />

        {children}
      </body>
    </html>
  );
}