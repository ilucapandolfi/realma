import './globals.css'

export const metadata = {
  title: 'Realma',
  description: 'Visual media platform',
}

export default function RootLayout({ children }) {
  return (
    <html lang="it" className="dark">
      <body className="bg-zinc-950 text-zinc-100 min-h-screen antialiased">
        {children}
      </body>
    </html>
  )
}
