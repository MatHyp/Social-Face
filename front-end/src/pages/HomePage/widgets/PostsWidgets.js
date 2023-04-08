import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from "react";

import PostWidget from "./PostWidget";
import { setPosts } from "../../../state";
const PostsWidget = () => {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.posts);

  const getPosts = async () => {
    const response = await fetch("http://localhost:3001/post", {
      method: "GET",
    });

    const data = await response.json();

    dispatch(
      setPosts({
        posts: data,
      })
    );
  };

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <>
      {posts
        .slice(0)
        .reverse()
        .map(
          ({
            _id,
            firstName,
            lastName,
            picturePath,
            description,
            likes,
            createdAt,
            comments,
            userPicturePath,
          }) => {
            return (
              <PostWidget
                key={_id}
                postId={_id}
                firstName={firstName}
                lastName={lastName}
                picturePath={picturePath}
                description={description}
                likes={likes}
                createdAt={createdAt}
                comments={comments}
                userPicturePath={userPicturePath}
              />
            );
          }
        )}
    </>
  );
};

export default PostsWidget;
