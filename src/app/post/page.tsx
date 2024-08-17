"use client";

import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <form>
      <h1 className="mb-2 text-left text-2xl font-bold">게시물</h1>
      <div className="w-full rounded-lg bg-white p-4">
        <div className="mb-4">
          <label className="text-md mb-2 block font-bold text-gray-700">
            제목
          </label>
          <input
            type="text"
            placeholder="제목을 입력하세요..."
            className="w-full rounded-lg border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="mb-4">
          <label className="text-md mb-2 block font-bold text-gray-700">
            카테고리
          </label>
          <input
            type="text"
            placeholder="카테고리를 입력하세요..."
            className="w-full rounded-lg border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="mb-4">
          <label className="text-md mb-2 block font-bold text-gray-700">
            내용
          </label>
          <textarea
            placeholder="내용을 입력하세요..."
            className="h-32 w-full rounded-lg border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          ></textarea>
        </div>
        <div className="mb-4">
          <label className="text-md mb-2 block font-bold text-gray-700">
            사진
          </label>
          <input
            type="file"
            className="w-full rounded-lg border p-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="text-right">
          <Button
            type="submit"
            onClick={(e) => {
              e.preventDefault();
            }}
          >
            등록하기
          </Button>
        </div>
      </div>
    </form>
  );
}
