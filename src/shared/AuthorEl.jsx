import { Avatar, Card } from "@nextui-org/react"
import { Link } from 'react-router-dom'

function AuthorEl({id, slug, name, avator}) {
  return (
    <Card className="flex flex-col items-center justify-evenly h-44 lg:flex-row lg:h-16  max-w-80">
            <Avatar isBordered color="success" src={avator.url} size="lg" />
            <p className="dark:text-white">{name}</p>
            <Link className=" bg-lime-600 py-2 px-3 text-white rounded-md" to={`/authors/${slug}`}>
                About
            </Link>
    </Card>
  )
}

export default AuthorEl