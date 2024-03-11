import { Card, CardFooter, Image, CardHeader, Avatar, CardBody, Divider } from "@nextui-org/react";
import { Link } from "react-router-dom";
import styles from './CardEl.module.css'

function CardEl({author, title, coverPhoto, id, slug}) {

    const idHandler = () => {
        console.log(id, slug)
    }
  return (
    <Card className={styles.postCard}>
      <CardHeader className="pb-0 px-6 pt-0 flex-col items-start">
      <div className={styles.profile}>
      <Avatar size="lg" isBordered radius="md" src={author.avator.url} />
        <small className="text-default-600 pt-3 font-bold ml-3">{author.name}</small>
      </div>
        <Divider />
        <h4 className="font-bold text-large">{title}</h4>
      </CardHeader>
      <CardBody className={styles.cardBody}>
        <Image
          alt="Card background"
          className={styles.cardImg}
          src={coverPhoto.url}
          width={270}
        />
      </CardBody>
      <CardFooter className={styles.cardFooter}>
        <Link to={`/blogs/${slug}`} className={styles.link}>Read Blog</Link>
      </CardFooter>
    </Card>
  )
  }
export default CardEl ;