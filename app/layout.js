import './globals.css'
import styles from './styles.module.css'

export const metadata = {
  title: 'Trave Landing Page',
  
}

function Logo({x,y}){
  return(
    <p style={{left: x, top: y}}className={styles.logo}>Ready<span className={styles.comercial}>&</span>Go</p>
  );
}

function ItemMenu({nome}){
  return(
    <p className={styles.itemMenu}>{nome}</p>
  );
}
/*definir o menu do site*/

function Menu({children, x, y}){
  return(
    <ul style={{left: x, top: y}}className={styles.menu}>
      {children.map((itemMenu =>
        <li key={itemMenu.nome} > {itemMenu}</li>))}
    </ul>
  );
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body> 
        
        <header>
          <Logo x = {135} y = {53}/>
          
          <Menu x = {435} y = {60}>
          
            <ItemMenu  nome = "Home"/>
            <ItemMenu  nome = "About"/>
            <ItemMenu  nome = "Contact"/>
            <ItemMenu  nome = "Blog"/>
            <ItemMenu  nome = "Vídeo"/>
          
          </Menu>

        </header>
        
        
        <main>
          {children}
        </main>
        
        </body>
    </html>
  )
}
