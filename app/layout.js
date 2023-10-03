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

function Contato({telefone}){
  return(
    <div className={styles.contato}>
      <img src='phone_icon.png' alt='Phone'/>
      <span>{telefone}</span>
    </div>
  );
}


function Titulo({x,y}){
  return(
    <h1 style={{left: x, top: y}}className={styles.titulo}>Your perfect honeymoon</h1>
  );
}

function Texto({x,y}){
  return(
    <h2 style={{left: x, top: y}}className={styles.texto}>Mayami is more than a honeymoon destination – it's a perfect romantic spot for couples who like  spending time in beach.</h2>
  );
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body> 
        
        <header className={styles.cabecalho}>
          <Logo x = {135} y = {53}/>
          
          <Menu x = {435} y = {60}>
          
            <ItemMenu  nome = "Home"/>
            <ItemMenu  nome = "About"/>
            <ItemMenu  nome = "Contact"/>
            <ItemMenu  nome = "Blog"/>
            <ItemMenu  nome = "Vídeo"/>
                      
          </Menu>
         
         <Contato className={styles.contato} telefone={'+38(097)8849989'}/>

         
        </header>
        
        
        <main>
          <Titulo x = {135} y = {238}></Titulo>

          <Texto x = {135} y = {465.4}></Texto>
          {children}
        </main>
        
        </body>
    </html>
  )
}
