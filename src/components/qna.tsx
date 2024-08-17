import Image from "next/image";
import User from "@/assets/user.svg";

export default function QNA() {
  return (
    <div className="mx-auto mb-4 max-w-md rounded-lg bg-white p-4">
      <div className="mb-2 flex items-start">
        <div className="flex h-10 w-10 items-center justify-center rounded-full">
          <Image width={40} height={40} src={User} alt="user" />
        </div>
        <div className="ml-3">
          <p className="font-semibold text-gray-700">김동욱</p>
          <p className="text-sm text-gray-500">@d0ngwook7 · 2일전</p>
        </div>
      </div>
      <div className="text-gray-800">
        대충질문입니다?대충질문입니다?대충질문입니다?대충질문입니다?대충질문입니다?대충질문입니다?
      </div>
    </div>
  );
}
