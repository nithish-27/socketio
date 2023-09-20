import { Box } from "@mui/material";
import Blog from "./Blog";
import { useEffect, useState } from "react";

const Home = () => {
  const [posts, setPost] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/post").then((response) => {
      response.json().then((data) => {
        console.log("[posts]", data);
        setPost(data);
      });
    });
  }, []);
  return (
    <section>
      {posts.length > 0 &&
        posts.map((post) => {
          return <Blog {...post} key={post.id} />;
        })}
    </section>
  );
};
export default Home;
