import "./globals.css";
export const metadata = {
  title: "Stormbreakers - The Open Chronicle",
  description: "Viking is the binding. Scripture is the pages. The King is the center.",
};
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-[#040404] text-zinc-100 antialiased selection:bg-amber-900/30">
        {children}
      </body>
    </html>
  );
}
