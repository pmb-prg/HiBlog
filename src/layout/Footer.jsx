import { Card, Divider, User } from "@nextui-org/react"
import { IoIosArrowDropupCircle } from "react-icons/io"; 
import { GET_AUTHOR_INFO } from "../graphql/queriess";
import { useQuery } from "@apollo/client";
import styles from "./Footer.module.css";
import ScrollToTop from "react-scroll-to-top";

//------------------------------------------------------------------//
function Footer() {

    const {loading, data, error} = useQuery(GET_AUTHOR_INFO, {variables: {slug: "pourya-moradi"}})


    const goToTopHandler = () => {
        window.scrollTo({top: 0, behavior: "smooth"})
    }

//-------------------------------------------------------------------//
  return (
    <div  className={styles.container}>
        <div className={styles.element}>
        <p className="font-bold text-inherit text-2xl"><span className=" text-sky-500">Hi</span>Blog</p>
        <Card className=" p-2 px-3 rounded-full">
            <User   
                name="PMBPG"
                description="Front-End Developer"
                avatarProps={{
                    src: `${data && data.author.avator.url}`
                }}
            />
        </Card>
        </div>
        <Divider orientation="vertical" className="hidden sm:block" />
        <Divider className="sm:hidden" />
        <div className={styles.element}>
            <p>pmbpg@yahoo.com</p>
            <p>Created With ❤️ By PMBPG</p>
        </div>
        <p onClick={goToTopHandler} className=" absolute text-3xl border-2 rounded-full p-6 top-[-25px] left-3 cursor-pointer"><IoIosArrowDropupCircle /></p>
    </div>
  )
}

export default Footer