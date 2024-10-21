import { instance } from "@/api/instance";
import Post from "@/components/post";

export default async function Home() {
  const { data } = await instance.get("/");

  return (
    <>
      <h1 className="mb-4 text-left text-2xl font-bold">홈</h1>
      {data.map((e: any) => (
        <Post key={e._id} {...e} />
      ))}
    </>
  );
}
