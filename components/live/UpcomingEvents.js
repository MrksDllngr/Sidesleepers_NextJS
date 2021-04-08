import styled from "styled-components";
import { Container } from "../LayoutComponents/LayoutComponents";
import UpcomingEvent from "./UpcomingEvent";

const UpcomingWrapper = styled.div`
background-color: ${props=>props.theme.colors.main3};
width:100%;
padding-bottom: 5rem;
`
const Title = styled.h3`
color: ${props=>props.theme.colors.main1};
padding-top:2rem;
text-align:center;
font-size:3rem;

`

function UpcomingEvents(props){

    const {events} = props;

return(
    <UpcomingWrapper>
    
            <Title>Upcoming Shows</Title>

            {events.map(event => {
                return  <UpcomingEvent events={event} key = {event.id} />;
            })}

     

    </UpcomingWrapper>
)
}
export default UpcomingEvents;