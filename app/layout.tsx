import type { Metadata } from 'next'
import { Open_Sans } from 'next/font/google'
import './globals.css'
import { ClerkProvider } from '@clerk/nextjs';
import { ThemeProvider } from '@/components/providers/theme-provider';
import { ModalProvider } from '@/components/providers/modal-provider';
import { cn } from '@/lib/utils';
import { SocketProvider } from '@/components/providers/socket-provider';
import { QueryProvider } from '@/components/providers/query-provider';

const openSans = Open_Sans({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Gaming Hub',
  description: 'A place to connect',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider>
      <html lang="en" suppressHydrationWarning>
        <body className={cn(openSans.className, "bg-white dark:bg-[#313338]")}>
          <SocketProvider>
            <ThemeProvider
              attribute='class'
              defaultTheme='dark'
              enableSystem
              storageKey='gaming-hub-theme'
            >
              <ModalProvider />
              <QueryProvider>
                {children}
              </QueryProvider>
            </ThemeProvider>
          </SocketProvider>
        </body>
      </html>
    </ClerkProvider>
  )
}
