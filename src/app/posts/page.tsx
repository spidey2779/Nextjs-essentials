import PostList from "@/components/postList";
import { Suspense } from "react";
export interface post {
  id: number;
  title: string;
  body: string;
  tags: string[];
  reactions: { likes: number; dislikes: number };
  views: number;
  userId: number;
}

const Page = async () => {
  return (
    <main className="text-center pt-16 px-5">
      <h1 className="text-4xl md:text-5xl font-bold mb-5">All Posts</h1>
      <Suspense fallback={"Loading..."}>
        <PostList />
      </Suspense>
    </main>
  ); 
};

export default Page;

