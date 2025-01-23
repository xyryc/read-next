const DynamicPost = async ({ params }) => {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${params?.postId}`
  );
  const singlePost = await res.json();
  console.log(singlePost);

  return (
    <div className="container mx-auto px-4">
      <div className="max-w-screen-sm mx-auto border p-6 rounded-md my-16">
        <h2 className="capitalize text-2xl font-bold border-b-2 pb-4 mb-4">
          {singlePost?.title}
        </h2>

        <p className="font-mono leading-8">{singlePost?.body}</p>

        <div className="border-t-2 mt-4 pt-4 grid grid-cols-2">
          <p className="text-sm font-serif font-thin">
            Posted by UserId: {singlePost?.userId}
          </p>
          <p className="text-sm font-serif font-thin">
            Post Id: {singlePost?.id}
          </p>
        </div>
      </div>
    </div>
  );
};

export default DynamicPost;
