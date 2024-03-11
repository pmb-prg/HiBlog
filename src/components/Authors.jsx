import styles from  './Authors.module.css'
import {GET_AUTHORS_INFO} from "../graphql/queriess"
import { useQuery } from "@apollo/client";
import AuthorEl from "../shared/AuthorEl";
import AuthorLoading from "../shared/AuthorLoading";

const id = [1, 2, 3, 4];


function Authors() {

  const {loading, data, errors} = useQuery(GET_AUTHORS_INFO)

  return (
    <div className={styles.container}>
        <h3 className={styles.head}>Authors</h3>
        { !loading ? data.authors.map((auth) => <AuthorEl {...auth} key={auth.id} />) : id.map((key) => <AuthorLoading key={key} />)}
    </div>
  )
}

export default Authors