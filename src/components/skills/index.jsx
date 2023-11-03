import styled from "styled-components";
import { Container } from "../../shareComponents/share";
import StackCard from "./stackCard";
import { stackData } from "./stackData";

const Skills = () => {
  return (
    <Container title="SKILLS" id="skills">
      <GridBox>
        {stackData.map((stack) => {
          const logo = stack.logo;
          const title = stack.stackTitle;
          const description = stack.description;

          return <StackCard key={title} logo={logo} stackTitle={title} description={description} />;
        })}
      </GridBox>
    </Container>
  );
};

export default Skills;

const GridBox = styled.div`
  margin-top: 48px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 40px;
`;
