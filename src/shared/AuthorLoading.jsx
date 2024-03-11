import {Card, Skeleton} from "@nextui-org/react";
function AuthorLoading() {
  return (
    <Card className="max-w-[300px] w-full flex flex-col lg:flex-row lg:px-3 justify-center items-center gap-3 py-4 rounded-lg">
    <div>
      <Skeleton className="flex rounded-full w-14 h-14"/>
    </div>  
    <div className="w-full flex flex-col gap-2 items-center">
      <Skeleton className="h-3 w-3/5 rounded-lg"/>
    </div>
    <div>
      <Skeleton className="flex rounded-lg w-16 h-10"/>
    </div> 
  </Card>
  )
}

export default AuthorLoading