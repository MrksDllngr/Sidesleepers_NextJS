import styled from "styled-components";
import PreviousEvent from "./PreviousEvent";

const PreviousWrapper = styled.div`
  background-color: ${(props) => props.theme.colors.main1};
  width: 100%;
  padding-bottom: 5rem;
  padding-top: 2rem;
`;

const Title = styled.h3`
  color: ${(props) => props.theme.colors.main3};
  padding-top: 2rem;
  text-align: center;
  font-size: 3rem;
`;

const PreviousEventWrapper = styled.section`
  display: flex;
  flex-direction:row;
  flex-wrap:wrap;
  margin: 0 auto;
  max-width: 1280px;
  justify-content: center;
`;

function PreviousEvents(props) {
  const { events } = props;


  return (
    <PreviousWrapper>
      <Title>Previous Shows</Title>
      <PreviousEventWrapper>
        {events.map((event, index) => {
          return <PreviousEvent event={event} key={index}/>;
        })}
      </PreviousEventWrapper>
    </PreviousWrapper>
  );
}

export default PreviousEvents;
