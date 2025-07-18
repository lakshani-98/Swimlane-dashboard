import "./globals.css";

export const metadata = {
  title: 'Swimlane Dashboard',
  description: 'Task board with swimlanes',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
