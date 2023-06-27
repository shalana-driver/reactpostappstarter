import DOMAIN from "../../services/endpoint";
import axios from "axios";
import { Container } from "@mantine/core";
import { useLoaderData } from "react-router-dom";
import { Grid, SimpleGrid, Skeleton, useMantineTheme, rem } from '@mantine/core';

const PRIMARY_COL_HEIGHT = rem(300);

function PostDetailsPage() {

  const post = useLoaderData();
  const theme = useMantineTheme();
  const SECONDARY_COL_HEIGHT = `calc(${PRIMARY_COL_HEIGHT} / 2 - ${theme.spacing.md} / 2)`;

  return (
    <Container my="md">
      <SimpleGrid cols={2} spacing="md" breakpoints={[{ maxWidth: 'sm', cols: 1 }]}>
        <Container height={PRIMARY_COL_HEIGHT} radius='md'><img src={post.image} style={{
          width: '400px',
          height: '600px',
          objectFit: 'cover',
        }}></img></Container>
        <Grid gutter="md">
          <Grid.Col>

            <Container>{post.title}</Container>
          </Grid.Col>
          <Grid.Col span={6}>
            <Container>{post.category}</Container>
          </Grid.Col>
          <Grid.Col span={6}>
            <Container>{post.content}</Container>
          </Grid.Col>
        </Grid>
      </SimpleGrid>
    </Container>
  );
}

export const postDetailsLoader = async ({ params }) => {
  // do something with this
  const id=params.id
  const res = await axios.get(`${DOMAIN}/api/posts/${id}`)
  console.log(res.data)
  return res.data;
};


export default PostDetailsPage;

