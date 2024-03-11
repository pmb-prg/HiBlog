import Authors from '../components/Authors'
import Post from '../components/Post';
import styles from  './Home.module.css'
import { GET_BLOGS_INFO } from '../graphql/queriess';
import { useQuery } from '@apollo/client';
import Banner from '../components/Banner';




function Home() {
  const {error} = useQuery(GET_BLOGS_INFO)
  console.log(error)

  if(error) return <div className={styles.errorPage}>
    <h1 >Connect to <span className=' text-sky-500'>VPN</span> and then refresh the page</h1>
    <p>😥</p>
  </div>
 
  return (
    <div className={styles.container}>
      <div className={styles.homeHeader}>
        <h2 className=' text-2xl'>Welcome To</h2>
        <h1 className=' text-4xl font-bold animate-pulse'><span className=" text-sky-500">Hi</span>Blog</h1>
      </div>
      <Authors />
      <Post  />
      <Banner />
    </div>
  )
}

export default Home