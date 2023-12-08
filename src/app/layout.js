import "./globals.css";

export const metadata = {
  
  title: "Jimmy Catalano - Portfolio",
  description:
    "Portfolio de Jimmy Catalano, développeur Front-end. Découvrez mes créations web et mes compétences en développement Front-end",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr" className="bg-primary relative">
      <body>{children}</body>
    </html>
  );
}
