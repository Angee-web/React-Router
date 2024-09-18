import { Outlet } from "react-router-dom";
import styled from "styled-components";
import StudentCard from "./StudentCard";
// import { students } from "../../utils/mockDataTwo";
import { useEffect, useState } from "react";
// import { AuthContext } from "../../contexts/AuthContext";
// import axios from "axios";
import axiosInstance from "../../utils/axiosInstance";

const Wrapper = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;

  .blogsList {
    margin: 0 auto;
  }

  .b {
    color: orange;
  }
`;

const Students = () => {
  const [students, setStudents] = useState([]);

  const handleStudents = async () => {
    const url = "/student";
    try {
      const res = await axiosInstance.get(url);
      console.log("res", res);
      if (res.data.status === "success") {
        setStudents(res.data.data);
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    handleStudents();
    console.log(students);
  }, [students.length]);

  return (
    <Wrapper>
      <div>
        {students.map((student) => (
          <StudentCard key={student.id} student={student} />
        ))}
      </div>
      <Outlet />
    </Wrapper>
  );
};

export default Students;
