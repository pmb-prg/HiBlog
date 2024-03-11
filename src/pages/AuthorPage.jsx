import { useQuery } from '@apollo/client';
import { useParams } from 'react-router-dom'
import { GET_AUTHOR_INFO } from '../graphql/queriess';
import AuthorPageSkeleton from '../skeleton/AuthorPageSkeleton';
import sanitizeHtml from 'sanitize-html';
import styles from './AuthorPage.module.css';
import { Divider } from '@nextui-org/react';
import CardEl from '../shared/CardEl';
import { useEffect } from 'react';

function AuthorPage() {
    let {slug} = useParams();

    useEffect(() => {
      window.scrollTo({top: 0, behavior: "smooth"})
    },[])

    const {loading, data, error} = useQuery(GET_AUTHOR_INFO, {variables: {slug}})
    if (loading)  return <AuthorPageSkeleton />
  return (
    <div className={styles.container}>
        <img src={data.author.avator.url} className={styles.profilePhoto} />
        <h2 className={styles.profileName}>{data.author.name}</h2>
        <h4 className=' pb-5 text-lg text-sky-500'>{data.author.field}</h4>
        <div dangerouslySetInnerHTML={{__html: sanitizeHtml(data.author.description.html)}} className=' w-3/5 flex justify-center items-center'></div>
        <Divider className='w-4/5 my-5' />
        <div className='grid grid-cols-2 w-4/5 gap-5 xl:w-3/5'>
           <h3 className='text-xl font-bold col-span-2'>{data.author.name} Blogs</h3> 
           {data.author.posts.map((post) => <CardEl {...post} key={post.id} />)}
        </div>
    </div>
  )
}

export default AuthorPage