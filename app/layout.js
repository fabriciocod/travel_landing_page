import './globals.css'




export const metadata = {
  title: 'Trave Landing Page',
  
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body> {children}</body>
    </html>
  )
}
