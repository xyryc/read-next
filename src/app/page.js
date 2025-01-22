const HomePage = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts = await res.json();

  console.log(posts);

  return (
    <div className="container mx-auto px-4">
      <h2 className="text-3xl font-bold text-center">Blog Posts</h2>

      <div className="grid grid-cols-4">
        {posts.map((post) => (
          <div key={post._id} className="border rounded-md">{post?.title}</div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
