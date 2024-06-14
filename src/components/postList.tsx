import { post } from "@/app/posts/page";
import Link from "next/link";

const PostList = async () => {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  const response = await fetch("https://dummyjson.com/posts?limit=10");
  const { posts } = await response.json();
  // console.log(posts);
  return (
    <ul>
      {posts.map((post: post) => (
        <li key={post.id} className="mb-3">
          <Link href={`/posts/${post.id}`}>{post.title}</Link>
        </li>
      ))}
    </ul>
  );
};

export default PostList;
