import { BookmarkIcon, MessageCircleMoreIcon } from "lucide-react";
import User from "@/assets/user.svg";
import Image from "next/image";
import 좋아요 from "@/components/좋아요";

interface PostProps {
  username: string;
  title: string;
  content: string;
  createdAt: string;
  comments: any[];
}

export default async function Post({
  username,
  title,
  content,
  createdAt,
  comments,
}: PostProps) {
  return (
    <div className="mb-4 max-w-sm rounded-lg border bg-white p-4">
      <div className="mb-4 flex items-center">
        <div className="flex h-10 w-10 items-center justify-center rounded-full">
          <Image width={40} height={40} src={User} alt="user" />
        </div>
        <div className="ml-3">
          <p className="font-semibold text-gray-700">{username}</p>
          <p className="text-sm text-gray-500">
            @d0ngwook7 · {createdAt.slice(0, 10)}
          </p>
        </div>
      </div>
      <div className="font-bold text-gray-800">{title}</div>
      <div className="mb-4 text-gray-600">{content}</div>
      <Image
        src="https://via.placeholder.com/400x300"
        alt="Food"
        className="mb-4 h-[200px] w-full rounded-lg object-cover"
        width={341}
        height={200}
      />
      <div className="flex justify-between">
        <div className="flex gap-2">
          <좋아요 />
          <div className="flex items-center space-x-1 text-gray-500">
            <MessageCircleMoreIcon className="h-4 w-4" />
            <span>댓글 {comments.length}</span>
          </div>
        </div>
        <div className="flex items-center space-x-1 text-gray-500">
          <BookmarkIcon className="h-4 w-4" />
          <span>저장</span>
        </div>
      </div>
    </div>
  );
}
