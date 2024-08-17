import Post from "@/components/post";

export default function Home() {
  return (
    <>
      <h1 className="mb-4 text-left text-2xl font-bold">홈</h1>
      {Array.from({ length: 5 }, (v, i) => i).map((e) => (
        <Post key={e} />
      ))}
    </>
  );
}
