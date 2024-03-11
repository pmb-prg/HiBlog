import {CircularProgress} from "@nextui-org/react";

// import { Link } from "react-router-dom";
import styles from './Post.module.css';
import { useQuery } from "@apollo/client";
import {GET_BLOGS_INFO} from "../graphql/queriess";
import CardEl from "../shared/CardEl";
import CardLoading from "../shared/CardLoading";

const id = [1, 2, 3, 4 ,5];


function Post() {

  const {loading, data, errors} = useQuery(GET_BLOGS_INFO)

    

  return (
    <div  className={styles.container}>
        <h3 className={styles.postsHead}>Posts</h3>
        {!loading ? data.posts.map((post) => <CardEl {...post} key={post.id} />) : id.map((key) => <CardLoading key={key} />)}
    </div>
  )
}

export default Post



