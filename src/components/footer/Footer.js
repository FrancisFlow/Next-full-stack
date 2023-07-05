import Image from "next/image";
import styles from "./footer.module.css";

const imgurls= [
    {
        id:1,
        src:"/images/1.png"
    },

    {
        id:2,
        src:"/images/2.png"

    },
    {
        id:3,
        src:"/images/3.png"

    },

]

const Footer = () => {
    return ( 
        <>
        <div className={styles.container}>
        <div>
            @2023 Lamamia. All rights reserved.

        </div>
        
        <div className={styles.brandlinks}>
          
            { 
            imgurls.map(imgurl =>(
                

                    <Image key={imgurl.id} className={styles.social} src={imgurl.src} height={15}
                    width={15} alt="image brand"  />
                ))
            }
           
          
            
        </div>
       

        </div>
        </>
     );
}
 
export default Footer;