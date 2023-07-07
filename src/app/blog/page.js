import Link from 'next/link';
import styles from './blog.module.css';
import Image from 'next/image';

const BlogPage = () => {
    return ( 
        <>
        <div className={styles.mainContainer}>
            <Link href="blog/testId" className={styles.container}>
                <div className={styles.imageContainer}>
                <Image
                src="/images/apps.jpg"
                alt=""
                width={400}
                height={250}
                className={styles.image}
                />
                </div>
                <div className={styles.content}>
                    <h1 className={styles.title}>
                            Test
                    </h1>
                    <p className={styles.desc} >
                        Desc
                    </p>
                </div>
            </Link>
            <Link href="blog/akdls" className={styles.container}>
                <div className={styles.imageContainer}>
                <Image
                src="/images/apps.jpg"
                alt=""
                width={400}
                height={250}
                className={styles.image}
                />
                </div>
                <div className={styles.content}>
                    <h1 className={styles.title}>
                            Test
                    </h1>
                    <p className={styles.desc} >
                        Desc
                    </p>
                </div>
            </Link>
            <Link href="/blog/testId" className={styles.container}>
                <div className={styles.imageContainer}>
                <Image
                src="/images/apps.jpg"
                alt=""
                width={400}
                height={250}
                className={styles.image}
                />
                </div>
                <div className={styles.content}>
                    <h1 className={styles.title}>
                            Test
                    </h1>
                    <p className={styles.desc} >
                        Desc
                    </p>
                </div>
            </Link>
            <Link href="/blog/testId" className={styles.container}>
                <div className={styles.imageContainer}>
                <Image
                src="/images/apps.jpg"
                alt=""
                width={400}
                height={250}
                className={styles.image}
                />
                </div>
                <div className={styles.content}>
                    <h1 className={styles.title}>
                            Test
                    </h1>
                    <p className={styles.desc} >
                        Desc
                    </p>
                </div>
            </Link>
        </div>
        </>
     );
}
 
export default BlogPage;