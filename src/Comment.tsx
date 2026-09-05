import { use } from "react";

export default function Comments({ commentDataPromise }) {
  const comments = use(commentDataPromise);
  console.log(comments);
  return <div></div>;
}
