import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useAppContext } from "../App";
const PostPage = () => {
  const { userInfo } = useAppContext();
  console.log("[hello]", userInfo);
  const [postInfo, setPostInfo] = useState(null);
  console.log("[postinfo]", postInfo);
  const { id } = useParams();
  console.log(id);
  useEffect(() => {
    fetch(`http://localhost:3000/post/${id}`)
      .then((res) => res.json())
      .then((data) => {
        console.log("[data]", data);
        setPostInfo(data);
      });
  }, []);
  if (!postInfo) return "not found";
  return (
    <div>
      {userInfo.id === postInfo.author._id && (
        <div>
          <Link to={`/edit/${postInfo._id}`}>
            <button>edit</button>
          </Link>
        </div>
      )}
      {/* <img src={"http://localhost:3000/" + postInfo.image} alt="hello"></img> */}
      <div dangerouslySetInnerHTML={{ __html: postInfo.content }} />
    </div>
  );
};

export default PostPage;
