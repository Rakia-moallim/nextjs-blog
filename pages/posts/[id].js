import Layout from "../../components/layout";
import { getAllPostIds,  getPostData } from "../../lib/posts"; 
import Head from "next/head";
import Date from "../../components/date";
import untilSyles from "../../styles/utils.module.css"

export default  function Post({postData}){
     return (
    <Layout>
      <Head>
        <title>{postData.title}</title>
      </Head>
      <article>
        <h1 className={untilSyles.headingXl}>{postData.title}</h1>
        <div className={untilSyles.lightText}>
        <Date dateString={postData.date}/>
        </div>
        {/* {postData.id}
        <br /> */}
        {/* {postData.date} */}
        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml}}/>

      </article>
    </Layout>
  );
} 


export async function  getStaticPaths(){
     const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
}

export async function  getStaticProps({params}){
         
    const postData = await getPostData(params.id);
  return {
    props: {
      postData,
    },
  };
    
}