import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/material";
import { format } from "date-fns";

import { Link } from "react-router-dom";
// const data = [
//   {
//     id: 1,
//     title: "Lizard 1",
//     image:
//       "http://phandroid.s3.amazonaws.com/wp-content/uploads/2014/10/mountain-sunset.jpg",
//   },
//   {
//     id: 2,
//     title: "Lizard 2",
//     image:
//       "http://phandroid.s3.amazonaws.com/wp-content/uploads/2014/10/mountain-sunset.jpg",
//   },
//   {
//     id: 3,
//     title: "Lizard 3",
//     image:
//       "http://phandroid.s3.amazonaws.com/wp-content/uploads/2014/10/mountain-sunset.jpg",
//   },
//   {
//     id: 4,
//     title: "Lizard 3",
//     image:
//       "http://phandroid.s3.amazonaws.com/wp-content/uploads/2014/10/mountain-sunset.jpg",
//   },
//   {
//     id: 5,
//     title: "Lizard 3",
//     image:
//       "http://phandroid.s3.amazonaws.com/wp-content/uploads/2014/10/mountain-sunset.jpg",
//   },
//   // Add more data as needed
// ];
export default function blog({
  title,
  image,
  summary,
  content,
  createdAt,
  _id,
  author,
}) {
  return (
    <section className="section">
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          p: 1,
          m: 1,
          maxWidth: "100%",
          justifyContent: "space-around",
          borderRadius: 1,
        }}
      >
        {/* {data.map((item) => ( */}
        <Card sx={{ maxWidth: 300, marginBottom: 10 }}>
          <CardMedia
            component="img"
            alt="green iguana"
            height="140"
            image={"http://localhost:3000/" + image}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {title}
            </Typography>
            <Typography>
              <p>{author?.name || "unknown"}</p>
              <time>{format(new Date(createdAt), "MMM-dd-yyyy HH:mm")}</time>
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {summary}
            </Typography>
          </CardContent>

          <CardActions>
            <Link to={`/post/${_id}`}>
              <Button size="small">Learn More</Button>
            </Link>
          </CardActions>
        </Card>
        {/* ))} */}
      </Box>
    </section>
  );
}
