import { Container } from "reactstrap";
import { PostDetails } from "../../components/postDetails";

function PostPage() {
  return (
    <Container>
      <PostDetails
        imgUrl="https://picsum.photos/300/200"
        title="Card title"
        description="Some quick example text to build on the card title and make up the
        bulk of the card‘s content."
      />
    </Container>
  );
}

export default PostPage;
