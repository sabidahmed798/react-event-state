// import { Suspense } from "react";
import { Suspense } from "react";
import "./App.css";
// import Posts from "./posts";
import Posts from "./Comment";
import Comments from "./Comment";

// import Batter from './Batter'
// import Cart from './Cart'
// // import Cart from './Cart'
// // import Counter from './Counter'
// import StateExample from './StateExample'

// const usersDataPromise = async() =>{
//   const res = await fetch('https://jsonplaceholder.typicode.com/users')

//   const data = await res.json();
//   return data;
// }

// const postDataPromise = async () => {
//   const res = await fetch("https://jsonplaceholder.typicode.com/posts");
//   const data = await res.json();
//   return data;
// };

const commentDataPromise = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/comments");
  const data = await res.json();
  return data;
};

function App() {
  return (
    <>
      <Suspense fallback={<p>Loading Comment data.. </p>}>
        <Comments commentDataPromise={commentDataPromise()}></Comments>
      </Suspense>
      {/* <Suspense fallback={<p>Loading Posts Data...</p>}>
        <Posts postsDataPromise={ postDataPromise() }></Posts>
      </Suspense> */}
    </>
  );
}

export default App;
