import fs from 'fs';
import path from 'path';
import gray from 'gray-matter';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';

const postsDirectory = path.join(process.cwd(), 'posts');

export function getSortedPostsData(){
    const fileNames = fs.readdirSync(postsDirectory);
    const allpostData = fileNames.map((fileName) => {
        const id = fileName.replace(/\.md$/, '');
        const fullpath = path.join(postsDirectory, fileName);
        const fileContents = fs.readFileSync(fullpath, 'utf8');
        const matterResult = matter(fileContents);

        return{
            id,
            ...matterResult.data,
        };
    });

    return allpostData.sort((a, b) => {
       if(a < b){
        return 1;
       }else{
        return -1;
       }
    });
}

export function getAllPostIds() {
  const fileNames = fs.readdirSync(postsDirectory);
 
  // Returns an array:

  return fileNames.map((fileName) => {
    return {
      params: {
        id: fileName.replace(/\.md$/, ''),
      },
    };
  });
}

export async function getPostData(id) {
  const fullPath = path.join(postsDirectory, `${id}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
 
 
  const matterResult = matter(fileContents);

    const processedContent = await remark()
    .use(html)
    .process(matterResult.content);

    const contentHtml = processedContent.toString();
 
  // Combine the data with the id
  return {
    id,
    contentHtml,
    ...matterResult.data,
  };
}