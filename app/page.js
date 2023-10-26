import styles from './page.module.css'
import Image from 'next/image'
import hawaii from '../public/hawaii.png'
import seta from '../public/arrow-right.svg'
import cyprus from '../public/cyprus.png'
import bali from '../public/bali.png'
import ellipse from '../public/ellipse.svg'
import nuvem from '../public/nuvem.png'

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

function Botao({x,y}){
  return(
    <button style={{left: x, top: y}}className={styles.botao}>Start</button>
  );
}

function Cards({x,y, children}){
  return(
    <div style={{left: x, top: y}}className={styles.cards}>
      {children}
    </div>
  );
}

function Card({localidade, imagem,}){
  return(
    <div className={styles.card}>
      <div className={styles.cabecalhoCard}>
      <p className={styles.localidade}>{localidade}</p>
      <Image src={seta}/>
      </div>
      <Image className={styles.imagem} src={imagem}/>
    </div>
  );
}

function Palmeira({x, y, children}){
  return(
    <div style={{left: x, top: y}}className={styles.palmeira}>
      {children}
    </div>
  );
}

function Forma ({imagem}){
  return(
    <div className={styles.forma}>
      <Image src={imagem}/>
    </div>
  );
}

export default function Home() {
  return (
    <>
      <Botao x={135} y={601.72}/>

      <Cards x={135} y={801}>
        <Card localidade="Hawaii" imagem={hawaii}/>
        <Card localidade="Cyprus" imagem={cyprus}/>
        <Card localidade="Bali" imagem={bali}/>
      </Cards>

      <Titulo></Titulo>
      <Texto></Texto>

      <Palmeira x={646} y={191}>

          <Forma imagem={ellipse}/>
          <Forma imagem={nuvem}/>
      </Palmeira>
    </>
   );
}
