import { useQuery } from "@apollo/client"
import { GET_POST_COMMENTS } from "../../graphql/queriess"
import { Card, Avatar, Divider } from "@nextui-org/react"

function Comments({slug}) {

    const {loading, data, error} = useQuery(GET_POST_COMMENTS, {variables: {slug}})

  return (
    <div className=' w-4/5'>
        <h2 className=' text--3xl font-bold'>Comments▼</h2>
        <Divider className=" my-5" />
        {data && data.comments.map((com) => 
        <Card className=" p-6 my-5" key={com.id}>
            <div className=" flex items-center">
                <Avatar isBordered size="lg" name={com.name} />
                <h3 className=" text-xl ml-5">{com.name}</h3>
            </div>
            <Divider className=" my-5" />
            <p>{com.text}</p>
            
        </Card>)}
        {data && data.comments.length == 0 && <Card className=" p-6 my-5"> <h2 className=" text-center">No Comment</h2> </Card>}
    </div>
  )
}

export default Comments