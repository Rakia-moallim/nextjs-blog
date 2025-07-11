import Head from "next/head";
import Image from "next/image";
import styles from './layout.module.css';
import utilStyles from '../styles/utils.module.css';
import Link from "next/link";

const name = 'Mimi';

export  const siteTitle = 'Nextjs sampl  website';

export default function Layout({children, home}){
    return (
    <div className={styles.container}>
        <Head>
            <Link rel="icon" href="/favicon.ico"/>
            <meta name="description" content=" Learn how to bulid a persnoal website using nextjs"/>
            <meta property="og:image" content={`https://og-image.vercel.app/${encodeURI(
            siteTitle,
            )}.png?theme=light&md=0&fontsize=75px&images=https%3A%2F%2Fassets.vercel.com%2Figma%2Fupload%2Ffront%2Fassets%Fdesign%2Fnextjs-black-logo.svg`}/>
            <meta name= 'og:title' content={siteTitle} />
            <meta nme='tiwitter:card' content="summray_large_image"/>
        </Head>
        <header className={styles.header}>
            {home ? (
                <>
                <Image
                priority
                src="/images/profile.jpg"
                className={utilStyles.borderCircle}
                height={144}
                width={144}
                alt="WBlogs"
                />
              <h1 className={utilStyles.heading2Xl}>{name}</h1>
                </>
            ):(
                <>
                <Link href="/">
                <Image
                priority
                src="/images/profile.jpg"
                className={utilStyles.borderCircle}
                height={108}
                width={108}
                alt="Wblogs"
                />
                </Link>
                <h2 className={utilStyles.headingLg}>
                    <Link href="/" className={utilStyles.colorInherit}>
                    {name}
                    </Link>
                </h2>
                </>
            )}
          
        </header>
        <main>{children}</main>
        {
            !home && (
                <div className={styles.backToHome}>
                  <Link href="/">Back To Home</Link>
                </div>
            )
        }

    </div>);
}