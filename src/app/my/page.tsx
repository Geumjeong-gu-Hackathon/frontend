import QNA from "@/components/qna";

export default function Home() {
  return (
    <>
      <h1 className="mb-2 text-left text-2xl font-bold">마이페이지</h1>
      <div className="w-full rounded-lg bg-white p-6">
        <div className="flex flex-col items-center">
          <div className="mb-4 mt-8 h-36 w-36 rounded-full bg-gray-300 font-semibold"></div>
          <div className="mb-6 text-center">
            <p className="text-gray-600">ID : rkrkrk</p>
            <p className="text-gray-600">이름 : 가가가</p>
          </div>
          <div className="w-full text-left font-semibold">
            <p className="mb-2 text-gray-600">좋아요 누른 게시물</p>
            <p className="mb-2 text-gray-600">저장한 게시물</p>
            <p className="mb-2 text-gray-600">나의 Q&A</p>
          </div>
          {Array.from({ length: 5 }, (v, i) => i).map((e) => (
            <QNA key={e} />
          ))}
        </div>
      </div>
    </>
  );
}
