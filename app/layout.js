import './globals.css'
import styles from './styles.module.css'

export const metadata = {
  title: 'Trave Landing Page',
  
}

function Logo(){
  return(
    <p className={styles.logo}>Ready<span className={styles.comercial}>&</span>Go</p>
  );
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body> 
        
        <header>
          <Logo/>
        </header>
        
        
        <main>
          {children}
        </main>
        
        </body>
    </html>
  )
}
