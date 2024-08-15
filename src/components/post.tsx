import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import {
  EllipsisVerticalIcon,
  HeartIcon,
  MessageCircleIcon,
} from "lucide-react";
import Image from "next/image";

export default function Post() {
  return (
    <Card className="my-4 flex max-w-[480px] flex-col gap-2 border-none">
      <CardHeader className="flex h-10 flex-row items-center justify-between py-0">
        <div className="flex items-center gap-2">
          <Avatar>
            <AvatarImage src="https://avatars.githubusercontent.com/u/148404537?s=64&v=4"></AvatarImage>
          </Avatar>
          <strong>감자전</strong>
        </div>
        <Button variant="ghost" size="icon">
          <EllipsisVerticalIcon className="h-4 w-4" />
        </Button>
      </CardHeader>
      <CardContent className="pb-0">
        <p className="text-lg font-semibold">
          제목제목제목제목제목제목제목제목제목제목제목
        </p>
        <p>내용내용내용내용내용내용내용내용내용내용내용내용내용</p>
      </CardContent>
      <AspectRatio ratio={1 / 1}>
        <Image
          src="https://quabdfrttgah10486813.cdn.ntruss.com/upload/mgz/46/20210723_12494.png"
          alt="main"
          fill
          className="object-cover sm:rounded-md"
        />
      </AspectRatio>
      <CardFooter>
        <div className="flex gap-1">
          <Button variant="ghost">
            <HeartIcon className="mr-2 h-4 w-4" />
            <p className="text">222</p>
          </Button>
          <Button variant="ghost">
            <MessageCircleIcon className="mr-2 h-4 w-4" />
            <p className="text">222</p>
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
}
