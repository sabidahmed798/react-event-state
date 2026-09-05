import { use } from "react";

export default function Posts({ postsDataPromise }) {
  const posts = use(postsDataPromise);
  console.log(posts);
  return <div></div>;
}
