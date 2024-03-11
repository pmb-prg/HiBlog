import { Skeleton, Divider } from "@nextui-org/react"
import CardLoading from "../shared/CardLoading"
function AuthorPageSkeleton() {
  return (
    <div className="flex flex-col py-5 w-dvw justify-evenly items-center ">
        <Skeleton className="rounded-full w-28 h-28" />
        <Skeleton className="h-3 w-1/5 rounded-lg my-5"/>
        <Skeleton className="h-3 w-3/5 rounded-lg mb-5"/>
        <Skeleton className="h-3 w-3/5 rounded-lg mb-5"/>
        <Skeleton className="h-3 w-3/5 rounded-lg mb-5"/>
        <Skeleton className="h-3 w-3/5 rounded-lg mb-5"/>
        <Skeleton className="h-3 w-3/5 rounded-lg mb-5"/>
        <Skeleton className="h-3 w-3/5 rounded-lg mb-5"/>
        <Skeleton className="h-3 w-3/5 rounded-lg mb-5"/>
        <Skeleton className="h-3 w-3/5 rounded-lg mb-5"/>
        <Skeleton className="h-3 w-3/5 rounded-lg mb-5"/>
        <Divider className="w-4/5" />
        <div className="grid w-4/5 lg:w-3/5 grid-cols-2 gap-3">
        <Skeleton className="h-3 w-1/5 rounded-lg my-5 col-span-2"/>
        <CardLoading />
        <CardLoading />
        </div>
    </div>
  )
}

export default AuthorPageSkeleton