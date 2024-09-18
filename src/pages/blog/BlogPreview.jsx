import { Link, useNavigate, useParams } from "react-router-dom";
import { useMemo } from "react";
import { blogPosts } from "../../utils/mockData";
import styled from "styled-components";
import { toast, ToastContainer } from "react-toastify";

const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
`;

const Image = styled.img`
  width: 100%;
  height: 400px;
  object-fit: cover;
  border-radius: 10px;
`;

const Content = styled.div`
  padding: 20px;

  .button {
    margin: 10px;
  }
`;

const Title = styled.h1`
  font-weight: bold;
  margin-bottom: 10px;
`;

const Description = styled.p`
  font-size: 18px;
  margin-bottom: 20px;
`;

const BlogPreview = () => {
  // The slug is used as a unique identifier to get the particular post
  // useParams is a hook that allows you to find an object using a unique identifier
  const { slug } = useParams();
  const post = blogPosts.find((post) => post.slug === slug);

  // usememo holds calculation that yoy do not wat to change on rerender
  const nextPost = useMemo(() => {
    const currentIndex = blogPosts.findIndex((post) => post.slug === slug);
    return blogPosts[currentIndex + 1];
  }, [slug]);
  console.log(nextPost);

  const prevPost = useMemo(() => {
    const currentIndex = blogPosts.findIndex((post) => post.slug === slug);
    // If currentIndex is 0 or less, there's no previous post
    if (currentIndex <= 0) return undefined;

    // Return the previous post if it exists
    return blogPosts[currentIndex - 1];
  }, [slug]); // include blogPosts in the dependency array

  const navigate = useNavigate();

  const notify = (msg) => toast(msg);


  const handleNext = () => {
    if (nextPost) {
      navigate(`/blog/${nextPost.slug}`);
      console.log("hi");
    }
  };

  const handlePrev = () => {
    if (!prevPost) {
      // Display an alert or handle the case where there's no previous post
      notify("No Previous Post");
      return;
    } else {
      // Navigate to the previous post
      navigate(`/blog/${prevPost.slug}`);
    }
  };
  

  // go back to the prev page
  const handleBack = () => {
    navigate(-1);
  };

  if (!post) return <div>Post not found</div>;

  return (
    <Container>
      <Image src={post.picture} alt={post.title} />
      <Content>
        <Title>{post.title}</Title>
        <Description>{post.content}</Description>

        <Link className="button" onClick={handlePrev}>
          Prev
        </Link>
        <Link className="button" onClick={handleBack}>
          Back
        </Link>
        <Link onClick={handleNext} className="button">
          Next
        </Link>
        {/* <button onClick={handleBack}>Back</button> */}
      </Content>

      <ToastContainer />
    </Container>
  );
};

export default BlogPreview;
