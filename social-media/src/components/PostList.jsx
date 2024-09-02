import { useContext, useEffect, useState } from "react";
import Post from "./Post";
import { PostList as PostListData } from "../store/posts-list-store";
import WelcomeMessage from "./WelcomeMessage";
import Loading from "./Loading";

const PostList = () => {
  const { postList, addInitialPosts } = useContext(PostListData);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    const controller = new AbortController();
    const signal = controller.signal;
    fetch("https://dummyjson.com/posts", { signal })
      .then((res) => res.json())
      .then((data) => {
        addInitialPosts(data.posts);
        setLoading(false);
      });

    //called when user moves to a different component, or it gets destroyed
    return () => {
      console.log("Cleaning up useEffect");
      controller.abort();
    };
  }, []);
  return (
    <>
      {loading && <Loading />}
      {!loading && postList.length === 0 && <WelcomeMessage></WelcomeMessage>}
      {!loading &&
        postList.map((post) => <Post key={post.id} post={post}></Post>)}
    </>
  );
};

export default PostList;
