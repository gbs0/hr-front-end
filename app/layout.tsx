import { ClerkProvider } from '@clerk/nextjs'
import './globals.css'
import { Inter } from 'next/font/google'
import { Providers } from './providers'
import { ptBR } from '@clerk/localizations'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider localization={ptBR}>
      <html lang="pt-BR">
        <head>
          <script defer={true} src="https://cdn.jsdelivr.net/npm/@tailwindcss/browser@4"></script>
        </head>
        <body className={inter.className}>
          <Providers>
            <div className="bg-gray-50 w-full">
              <div className="bg-gray-50">
                {children}
              </div>
            </div>
          </Providers>
        </body>
      </html>
    </ClerkProvider>
  )
}
