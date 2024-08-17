import QNA from "@/components/qna";
import { SearchIcon } from "lucide-react";

export default function Home() {
  return (
    <>
      <h1 className="mb-2 text-left text-2xl font-bold">Q&A 검색하기</h1>
      <div className="mx-auto mb-2 flex w-full items-center rounded-lg border border-gray-200 bg-white px-4 py-2">
        <input
          type="text"
          placeholder="궁금한 질문을 검색해보세요..."
          className="flex-grow text-gray-400 focus:outline-none"
        />
        <SearchIcon color="#9ca3af" className="h-5 w-5" />
      </div>
      <h1 className="mb-2 text-left text-2xl font-bold">Q&A 질문하기</h1>
      <div className="mx-auto mb-4 flex w-full items-center rounded-lg border border-gray-200 bg-white px-4 py-2">
        <input
          type="text"
          placeholder="궁금한 질문을 검색해보세요..."
          className="flex-grow text-gray-400 focus:outline-none"
        />
        <SearchIcon color="#9ca3af" className="h-5 w-5" />
      </div>
      {Array.from({ length: 5 }, (v, i) => i).map((e) => (
        <QNA key={e} />
      ))}
    </>
  );
}
