import {Card, Skeleton} from "@nextui-org/react";
function CardLoading() {
  return (
    <Card className=" col-span-2 sm:col-span-1 space-y-5 p-4 h-96 " radius="lg">
      <div className="space-y-3 flex flex-col justify-between h-full">
        <Skeleton className=" w-16 rounded-2xl">
          <div className="h-16 w-16 rounded-lg bg-default-200"></div>
        </Skeleton>
        <Skeleton className="w-3/5 rounded-lg">
          <div className="h-3 w-3/5 rounded-lg bg-default-200"></div>
        </Skeleton>
        <Skeleton className="w-4/5 rounded-lg">
          <div className="h-3 w-4/5 rounded-lg bg-default-200"></div>
        </Skeleton>
      <Skeleton className="rounded-lg">
        <div className=" h-40 rounded-lg bg-default-300"></div>
      </Skeleton>
        <Skeleton className="w-2/5 rounded-lg">  
          <div className="h-8 w-2/5 rounded-lg bg-default-300"></div>
        </Skeleton>
      </div>
    </Card>
  )
}

export default CardLoading