import Post from "@/components/post";

export default function Home() {
  return (
    <main className="mb-12 mt-4 flex w-full flex-col items-center">
      {Array.from({ length: 5 }, (v, i) => i).map((e) => (
        <Post key={e} />
      ))}
    </main>
  );
}
