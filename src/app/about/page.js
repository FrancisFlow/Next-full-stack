import Image from "next/image";
import Button from "@/components/button/Button";

import StyleSheet from "./about.module.css";
const AboutPage = () => {
    return ( 
        <>
       <div className={StyleSheet.container}>
        <div className={StyleSheet.imgContainer}>
            <Image className={StyleSheet.img} fill={true} src="https://images.pexels.com/photos/5940837/pexels-photo-5940837.jpeg?auto=compress&cs=tinysrgb&w=1600"
            alt="about hero image" 
            />
            <div className={StyleSheet.imgText}>
                <h1 className={StyleSheet.imgTitle} >Digital Storytellers</h1>
                <h2 className={StyleSheet.imgDesc} >Handcrafting award winning digital experiences</h2>
            </div>
        </div>
        <div className={StyleSheet.textContainer}>
            <div className={StyleSheet.item}>
                <h1 className={StyleSheet.title} >Who Are We?</h1>
                <p className={StyleSheet.desc} >Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Tempore, facere quasi obcaecati aut dolor labore atque reiciendis harum tenetur officia temporibus nostrum porro culpa? Autem ut eum id minima, debitis atque vel ipsa ad blanditiis reiciendis nam libero voluptas in, nisi aspernatur voluptate illo ratione!
                     Exercitationem quisquam fugiat aut commodi?
                     
                     <br /> <br />
                     Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                     Ad, eum? Consequuntur, eveniet doloremque incidunt illum veniam cumque ipsum voluptatem ullam amet voluptates impedit iusto asperiores dignissimos deserunt explicabo suscipit officiis nostrum voluptatibus assumenda ducimus enim pariatur dolorem, nisi at? 
                     Saepe consectetur obcaecati sapiente nobis fuga atque accusantium aliquid sint cupiditate.
                     </p>

            </div>

            <div className={StyleSheet.item}>
                <h1 className={StyleSheet.title} >
                    What we Do
                </h1>
                <p className={StyleSheet.desc} >
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Error culpa necessitatibus hic saepe totam dicta minus, ipsam quaerat, incidunt recusandae aliquid voluptate asperiores, eos odit aperiam neque at omnis. Minus, labore dolore ab veritatis voluptatibus officiis numquam officia magnam odio, error doloremque molestias id voluptates reiciendis odit. Iure ad nihil cumque dignissimos, alias tempore, iste quia deleniti adipisci accusantium culpa, aperiam laborum fuga. Quisquam obcaecati molestias culpa, inventore tenetur libero.
                    <br />
                    <br />
                    - Dynamic Websites
                    <br />
                    - Fast and Handy 
                    <br />
                    - Mobile apps
                </p>

                <Button url="/contact" text="Contact" />
            </div>

        </div>

       </div>
        </>
     );
}
 
export default AboutPage;