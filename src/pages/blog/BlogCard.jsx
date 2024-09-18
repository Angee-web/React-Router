/* eslint-disable react/prop-types */
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";

const Wrapper = styled.div`
  border-top: 1px solid #ddd;
  padding: 40px 0;
  display: flex;
  gap: 20px;
  width: 875px;
  cursor: pointer;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: scale(1.05); /* Slightly scale up the card */
    box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.2); /* Add a subtle shadow */
  }

  .imageContainer {
    width: 350px;
    height: 197px;

    .blogImg,
    img {
      width: 350px;
      height: 197px;
      object-fit: cover;
    }
  }

  .contentContainer {
    display: flex;
    flex-direction: column;
    gap: 10px;
    justify-content: space-between;

    .contentItem {
      display: flex;
      flex-direction: column;
      gap: 10px;
    }

    .title {
      font-size: 30px;
      line-height: 35px;
    }

    .content {
      font-size: 20px;
      line-height: 24px;
    }

    .author {
      font-size: 20px;
      line-height: 24px;
      color: #333;
      font-style: italic;
    }
  }
`;
const BlogCard = ({ post }) => {
  const navigate = useNavigate();

  // the function allows you to go to another page using the slug as the parameter
  const handleNavigate = () => {
    navigate(`/blog/${post.slug}`);
  };

  return (
    <Wrapper>
      <div className="imageContainer">
        <img src={post.picture} alt="." className="blogImg" />
      </div>

      <div className="contentContainer">
        <div className="contentItem">
          <div className="title">{post.title}</div>
          <div className="content">{post.content.substring(0, 200)}...</div>
        </div>
        <div className="author"> </div>
        <Link onClick={handleNavigate}to={`/blog/${post.slug}`}>Read More</Link>
        {/* <botton onClick={handleNavigate}>Read More</botton> */}
        
      </div>
    </Wrapper>
  );
};

export default BlogCard;
