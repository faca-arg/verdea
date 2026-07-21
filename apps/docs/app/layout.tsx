import type { Metadata } from "next";
import "@verdea/ui/styles.css";
import "./globals.css";

export const metadata: Metadata = {
  title: "VERDEA UI Review",
  description: "Aplicación interna para validar los componentes oficiales de VERDEA.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
