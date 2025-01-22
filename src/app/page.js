import Link from "next/link";

const HomePage = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts = await res.json();

  return (
    <div className="container mx-auto px-4 my-10">
      <h2 className="text-3xl font-bold text-center mb-10">Blog Posts</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts.map((post) => (
          <div key={post.id} className="border rounded-md p-4">
            <Link
              href={`/blog/${post.id}`}
              className="text-lg font-semibold underline capitalize text-purple-200"
            >
              {post?.title}
            </Link>
            <p className="font-mono tracking-tighter mt-2">{post?.body}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
