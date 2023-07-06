import Image from "next/image";
import styles from "./contact.module.css"
const ContactPage = () => {
    return ( 
        <>
        <div className="contact">
            <h1 className="text-5xl text-center font-bold" >Let&apos;s Keep in Touch</h1>
            <div className="" >
                <div className="">
                    <Image  className={styles.contactImg} width={500} height={500} src="/images/contact.png" alt="contact hero"/>
                </div>
                <div className="">
                <form className="form">
                    <h2>Contact us</h2>
                    <div>
                        <label htmlFor="name">Name</label>
                        <input type="text" name="name" placeholder="your name"/>
                    </div>
                </form>
                </div>

            </div>
        </div>
        </>
     );
}
 
export default ContactPage;