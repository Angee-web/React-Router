import { Link, useNavigate, useParams } from "react-router-dom";
import { students } from "../../utils/mockDataTwo";

import styled from "styled-components";

const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
`;

const Content = styled.div`
  padding: 20px;
`;

// const Name = styled.h1`
//   font-weight: bold;
//   margin-bottom: 10px;
// `;

// const Age = styled.p`
//   font-size: 18px;
//   margin-bottom: 20px;
// `;

// const Gender = styled.p`
//   font-size: 18px;
//   margin-bottom: 20px;
// `;

// const Course = styled.p`
//   font-size: 18px;
//   margin-bottom: 20px;
// `;

// const Description = styled.p`
//   font-size: 18px;
//   margin-bottom: 20px;
// `;

const StudentPreview = () => {
  const { slug } = useParams();
  console.log("slug:", slug);

  const student = students.find(
    (student) => student.slug === slug
  );

  // useNavigate is a hook used to navigate between to links or pages
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1);
  };

  if (!student) {
    return (
      <Container>
        <Content>
          <h2>Student not found</h2>
          <Link onClick={handleBack}>Back</Link>
        </Content>
      </Container>
    );
  }

  return (
    <Container>
      <Content>
      <h3>{student.first_name} {student.last_name}</h3>
      <p>Email: {student.email}</p>
      <p>Phone: {student.phone_number}</p>

        <Link onClick={handleBack}>Back</Link>
        {/* <button onClick={handleBack}>Back</button> */}
      </Content>
    </Container>
  );
};

export default StudentPreview;
