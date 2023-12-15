import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from './components/Navbar'
import { AppWrapper } from './context/AuthContext'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Login System',
  description: 'Login System project',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AppWrapper>
          <Navbar />
          {children}
        </AppWrapper>
      </body>
    </html>
  )
}
