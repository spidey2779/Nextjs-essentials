import { createPost } from "@/actions/actions";

const Page = async () => {
  return (
    <main className="text-center pt-16">
      <h1 className="text-4xl md:text-5xl font-bold mb-5">Create Post</h1>
      <form
        action={createPost}
        className="flex flex-col max-w-[400px] mx-auto gap-2 my-10"
      >
        <input
          type="text"
          name="title"
          placeholder="Title for new post"
          className="border-2 rounded px-3 h-10"
        />
        <textarea
          name="body"
          placeholder="Body content for new post"
          className="border rounded p-3"
          rows={6}
          required
        />
        <button className="h-10 bg-blue-500 px-5 rounded text-white " type="submit">
          Submit
        </button>
        <button type="button" className="mt-[1rem] bg-zinc-800 rounded w-fit self-center text-white py-2 px-4">Logout</button>
      </form>
    </main>
  );
};

export default Page;
