import Link from "next/link";
import Layout from "../../components/layout";
import Head from "next/head";
import Script from "next/script";

export default function FirstPost(){
  //return <h1>First Post </h1>;
  // return(
  //     <Layout>
  //     <h1>First Post</h1>
  //     <h2>
  //       <Link href="/">Back to home</Link>
  //     </h2>
  //   </Layout>
  // );

  return(
    <>
      <Head>
        <title>First post</title>
        {/* <script src="tttps://connect.facebook.net/en_US/sdk.js"/> */}
      </Head>
      <Script 
        src="https://connect.facebook.net/en_US/sdk.js"
        strategy="lazyOnload"
        onLoad={() => 
          console.log(`script loaded correctly, window.FB has been populated`)
        }
      />
      <h1>First Post</h1>
      <h2>
        <Link href="/">Go Back</Link>
      </h2>
    </>
  );
}