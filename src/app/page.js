import Image from 'next/image';
import Link from 'next/link';
import styles from "./page.module.css";
import Hero from "public/images/hero.png";
import Button from '@/components/button/Button';

export default function Home() {
  return (
    <>
    <div className={styles.container}>
      <div className={styles.item}>
        <h1 className="font-extrabold text-transparent text-6xl bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600" >Better design for your digital products.</h1>
        <h3 className={styles.des} >Turning your idea into Reality. We bring together the teams from the global tech industry</h3>
        <div className="btn">
          <Button url={"/portfolio"} text="See our work" />
        
          
        </div>

      </div>
      <div className={styles.item}>
        <Image className={styles.img} src={Hero} 
      alt='Hero image' />
      </div>
      
    </div>
    </>
  )
}
