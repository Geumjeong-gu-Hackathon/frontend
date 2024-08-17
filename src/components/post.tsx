import { BookmarkIcon, HeartIcon, MessageCircleMoreIcon } from "lucide-react";
import User from "@/assets/user.svg";
import Image from "next/image";

export default function Post() {
  return (
    <div className="mb-4 max-w-sm rounded-lg border bg-white p-4">
      <div className="mb-4 flex items-center">
        <div className="flex h-10 w-10 items-center justify-center rounded-full">
          <Image width={40} height={40} src={User} alt="user" />
        </div>
        <div className="ml-3">
          <p className="font-semibold text-gray-700">김동욱</p>
          <p className="text-sm text-gray-500">@d0ngwook7 · 2일전</p>
        </div>
      </div>
      <div className="font-bold text-gray-800">부산광역시 기장군 맛집</div>
      <div className="mb-4 text-gray-600">부산광역시 기장군 맛집입니다.</div>
      <Image
        src="https://via.placeholder.com/400x300"
        alt="Food"
        className="mb-4 h-[200px] w-full rounded-lg object-cover"
        width={341}
        height={200}
      />
      <div className="flex justify-between">
        <div className="flex gap-2">
          <div className="flex items-center space-x-1 text-gray-500">
            <HeartIcon className="h-4 w-4" />
            <span>좋아요 7</span>
          </div>
          <div className="flex items-center space-x-1 text-gray-500">
            <MessageCircleMoreIcon className="h-4 w-4" />
            <span>댓글 1</span>
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
