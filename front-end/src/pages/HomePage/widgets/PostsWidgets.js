import { useSelector } from "react-redux";
import { useState, useEffect } from "react";
import PostWidget from "./PostWidget";
const PostsWidget = () => {
  const userToken = useSelector((state) => state.token);
  const [posts, setPosts] = useState([]);

  const getPosts = async () => {
    const response = await fetch("http://localhost:3001/post", {
      method: "GET",
    });

    const data = await response.json();
    console.log(data);
    setPosts(data);
  };

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <>
      {posts.map(
        ({ _id, firstName, lastName, picturePath, description, createdAt }) => {
          return (
            <PostWidget
              key={_id}
              postId={_id}
              firstName={firstName}
              lastName={lastName}
              picturePath={picturePath}
              description={description}
              createdAt={createdAt}
            />
          );
        }
      )}
    </>
  );
};

export default PostsWidget;
