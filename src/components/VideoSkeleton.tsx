import { Play } from "lucide-react";
import { Skeleton } from "./ui/skeleton";

const VideoSkeleton = () => {
  return (
    <section className="py-12 px-10 md:py-16">
      <div className="section-container">
        <Skeleton className="relative bg-gray-200 aspect-video rounded-2xl flex items-center justify-center cursor-pointer">
          <div className="relative z-10 w-30 h-30 md:w-20 md:h-20 bg-[#D9D9D9] rounded-full flex items-center justify-center ">
            <Play className="w-15 h-15 md:w-10 md:h-10 text-[#B3B3B3] ml-1" />
          </div>
        </Skeleton>
        <p className="text-center text-muted-foreground mt-4 text-sm">
          Get A Free 15 Min Demo · See if it fits your business
        </p>
      </div>
    </section>
  );
};

export default VideoSkeleton;
