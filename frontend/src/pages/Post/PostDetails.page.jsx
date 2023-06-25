import DOMAIN from "../../services/endpoint";
import axios from "axios";
import { Container } from "@mantine/core";
import { useLoaderData } from "react-router-dom";
import { ArticleCardImage } from "../../components/misc/ArticleCardImage";


function PostDetailsPage() {
  const post = useLoaderData();
  return (
    <Container>
      <p>This page shows post details!</p>
      <p>{post.title} </p>
      <ArticleCardImage {...post} />

    </Container>
  );
}

export const postDetailsLoader = async ({ params }) => {
  // do something with this
  const id=params.id
  const res = await axios.get(`${DOMAIN}/api/posts/${id}`)
  
  return res.data;
};

export default PostDetailsPage;

