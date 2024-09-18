/* eslint-disable react/prop-types */
import styled from "styled-components";

const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 300px;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  background-color: #fff;
  margin: 20px;
`;

const ImageContainer = styled.div`
  width: 100%;
  img {
    width: 100%;
    height: auto;
    border-radius: 8px;
  }
`;

const Content = styled.div`
  margin-top: 15px;
  text-align: center;

  .title {
    font-size: 18px;
    font-weight: bold;
    margin-bottom: 10px;
  }

  .description {
    font-size: 14px;
    color: #555;
  }
`;

const Card = ({ post }) => {
  return (
    <CardWrapper>
      <ImageContainer>
        <img src={post.picture} alt={post.title} />
      </ImageContainer>
      <Content>
        <div className="title">{post.title}</div>
        <div className="description">{post.content}</div>
      </Content>
    </CardWrapper>
  );
};

export default Card;
