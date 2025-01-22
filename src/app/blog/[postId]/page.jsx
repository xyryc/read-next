const DynamicPost = async ({ params }) => {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${params?.postId}`
  );
  const singlePost = await res.json();
  console.log(singlePost);

  return <div>wadawd</div>;
};

export default DynamicPost;
