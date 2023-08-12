import Container from "@/components/ui/container";
import Skeleton from "@/components/ui/skeleton";
import { Spin } from "antd";
const Loading = () => {
  return (
    <div className="w-full h-full p-8 flex justify-center items-center">
      <Spin size="large" className="text-orange-600" />
    </div>
    // <Container>
    //   <div className="w-full h-full p-8">
    //     <Skeleton className="w-full aspect-square rounded-xl md:aspect-[2.4/1]" />
    //     <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
    //       <Skeleton className="aspect-square rounded-xl" />
    //       <Skeleton className="aspect-square rounded-xl" />
    //       <Skeleton className="aspect-square rounded-xl" />
    //       <Skeleton className="aspect-square rounded-xl" />
    //       <Skeleton className="aspect-square rounded-xl" />
    //       <Skeleton className="aspect-square rounded-xl" />
    //     </div>
    //   </div>
    // </Container>
  );
};

export default Loading;
