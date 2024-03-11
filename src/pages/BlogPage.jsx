import { Link, useParams } from "react-router-dom"
import { GET_POST_INFO } from "../graphql/queriess";
import { useQuery } from "@apollo/client";
import sanitizeHtml from 'sanitize-html';
import {Avatar, CircularProgress, Divider, Chip} from "@nextui-org/react";
import styles from './BlogPage.module.css'
import WriteComment from "../components/comment/WriteComment";
import Comment from "postcss/lib/comment";
import Comments from "../components/comment/Comments";
import { useEffect, useState } from "react";
//----------------------------------------------------------//
function BlogPage() {
    const [scroll, setScroll] = useState(false)

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 0){
                setScroll(true);
            } else{
                setScroll(false);
            }
        })
    }, [scroll])


    const { slug } = useParams();
    const {loading, data, error} = useQuery(GET_POST_INFO, {variables: {slug}})


    if (loading) return <div className={styles.containerLoading}><CircularProgress size="lg" aria-label="Loading..."/></div>
//----------------------------------------------------------//
  return (
    <div className={styles.container}>
        {/* -----------------------blog Image ------------------------- */}
        <img src={data.post.coverPhoto.url} className={scroll ? styles.blogPhotoBlur : styles.blogPhoto} />
        {/* -----------------------Author ----------------------------- */}
        <div className={styles.avatorContent}>
            <Avatar isBordered color="primary" src={data.post.author.avator.url} className="w-16 h-16 md:w-20 md:h-20" />
            <div className={styles.avatorInfo}>
                <Link to={`/authors/${data.post.author.slug}`} className={styles.authorName}>{data.post.author.name}</Link>
                <p className=" text-sky-500">{data.post.author.field}</p>
            </div>
        </div>
        <Divider className=" w-4/5 my-4" />
        {/* -----------------------blog content------------------------- */}
        <div className=" w-4/5 my-8">
            <Chip color="success" variant="bordered" className=" text-xl font-bold my-2 p-4 md:p-5 md:text-2xl">{data.post.title}</Chip>
            <div dangerouslySetInnerHTML={{__html: sanitizeHtml(data.post.content.html)}} className={styles.blogContentStyles}></div>
        </div>
        {/*-------------------------comments---------------------------- */}
        <Comments slug={slug} />
        <Divider className=" w-4/5 my-4" />
        <WriteComment slug={slug} />

    </div>
  )
}

export default BlogPage