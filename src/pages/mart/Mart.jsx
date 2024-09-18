import MartCard from "./MartCard";
import styled from "styled-components";
import { cars } from "../../utils/carData";

const Wrapper = styled.div`
  padding: 1rem;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 1rem;
`;

const Mart = () => {
  return (
    <Wrapper>
      {cars.map((car) => (
        <MartCard key={car.id} car={car} />
      ))}
    </Wrapper>
  );
};

export default Mart;
