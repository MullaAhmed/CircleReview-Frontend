import '@/styles/globals.css'
import { Inter } from '@next/font/google'

const inter = Inter({ subsets: ['latin'] })

import {AppProvider} from '@/AppContext';

export default function App({ Component, pageProps }) {
  return (
    <main className={inter.className}>
      <AppProvider>
        <Component {...pageProps} />
      </AppProvider>
    </main>
  )
}
