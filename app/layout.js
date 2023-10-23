import './globals.css'
import styles from './styles.module.css'
// import { Quicksand } from 'next/font/google'
import Image from 'next/image';
import face from '../public/icon_face.svg'
import twitter from '../public/icon_twitter.svg'
import inkdi from '../public/icon_inkid.svg'


export const metadata = {
  title: 'Travel Landing Page',
}

// const quicksand = Quicksand({
//   subsets: ['latin'],
//   display: 'swap',
// })

function Logo({x, y}){
  return (
    <p style={{left: x, top: y }} className={styles.logo}>Ready<span className={styles.comercial}>&</span>Go</p>
  );
}

function ItemMenu({nome}){
  return (
    <p className={styles.itemMenu}>{nome}</p>
  );
}

function Menu({children, x, y}){
  return(
    <ul style={{left: x, top: y}} className={styles.menu}>
      {children.map((itemMenu) => (
        <li key={itemMenu.nome}>{itemMenu}</li>
      ))}
    </ul>
  );
}
//aaaa

//aaaa
function Titulo({x, y}){
  return (
    <h1 style={{left: x, top: y }} className={styles.titulo}>Your perfect honeymoon</h1>
  );
}
function Texto({x, y}){
  return (
    <h2 style={{left: x, top: y }} className={styles.texto}>Mayami is more than a honeymoon destination – it’s a perfect romantic spot for couples who like  spending time in beach. </h2>
  );
}
//aaaaa
function Icon({x, y}){
  return (
    <p style={{left: x, top: y }} className={styles.icon}><Image src='/phone_icon.png'width={19} height={19}/></p>
  );
  
}

//aaaaa
function Contato({x, y}){
  return (
    <p style={{left: x, top: y }} className={styles.contato}>+38(097)8849989</p>
  );
}

function SocialMedia({x, y, children}){
  return(
    <div style={{left: x, top: y}}className={styles.socialMedia}>
      {children}
    </div>
  );
}

function Media({imagem}){
  return(
    <div className={styles.media}>
      <Image src={imagem}/>
      
    </div>

  );
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body  className={styles.corpo}>
        <header>
          <Logo x={135} y={53}/>
          
          <Menu x={435} y={60}>
            
            <ItemMenu nome="Home"/>
            <ItemMenu nome="About"/>
            <ItemMenu nome="Contact"/>
            <ItemMenu nome="Blog"/>
            <ItemMenu nome="Videos"/>

          </Menu>

          <Icon></Icon>
          <Contato></Contato>

        </header>
        
        <main>
        
          <Titulo></Titulo>
          <Texto></Texto>
          {children}
          
        </main>
        
        <footer>

          <SocialMedia x={1175} y={843}>

            <Media imagem={face}/>
            <Media imagem={twitter}/>
            <Media imagem={inkdi}/>

          </SocialMedia>
       
        </footer>
      </body>
    </html>
  )
}