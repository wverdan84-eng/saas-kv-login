export const metadata = {
  title: "SaaS KV Login",
  description: "SaaS com Next.js, Vercel KV e Login"
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body>
        {children}
      </body>
    </html>
  );
}
