import styled from "styled-components";
import BlogCard from "./BlogCard";
import { blogPosts } from "../../utils/mockData";

const Wrapper = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;

  .blogsList {
    margin: 0 auto;
  }

  .b{
  color:orange;
  }
`;

const Blog = () => {
  return (
    <Wrapper>
      <h1>
        <span className="b">B</span>log
      </h1>

      <div className="blogsList">
        {/* mapping through the blogposts to get each post using the id and the blogcard as a design structure */}
        {blogPosts.map((post) => (
          <BlogCard key={post.id} post={post} />
        ))}
      </div>
    </Wrapper>
  );
};

export default Blog;
