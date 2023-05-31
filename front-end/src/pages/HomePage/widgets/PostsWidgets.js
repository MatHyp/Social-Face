import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import { baseUrl } from '../../../config.js';
import PostWidget from "./PostWidget";
import { setPosts } from "../../../state";
const PostsWidget = ({ path }) => {
  const dispatch = useDispatch();
  // const [post, setPost] = useState([]);
  const posts = useSelector((state) => state.posts);
  const getPosts = async () => {
    const response = await fetch(`${baseUrl}/${path}`, {
      method: "GET",
    });

    const data = await response.json();
    console.log(data);
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
