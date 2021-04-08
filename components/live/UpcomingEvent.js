import styled from "styled-components";
import { Button } from "../ui/ui";


const EventWrapper = styled.div`
display:grid;
grid-template-columns: 1fr 2fr;
width: 980px;
margin: 2rem auto;
height:12rem;
`

const DateField = styled.div`
    height: 100%;
    background-color:${props=>props.theme.colors.alt2};
    display:flex;
    justify-content:center;
    align-items:center;
    flex-direction:column;
`

const DateText = styled.span`
font-family:${props=>props.theme.fonts.main2};
color:${props=>props.theme.colors.main3};
font-size:2rem;
`

const LocationText = styled(DateText)`
font-family:${props=>props.theme.fonts.main1};
font-size:1.5rem;
`

const EventField = styled.div`
height:100%;
background-color:${props=>props.theme.colors.main2};
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
`

const TitleText = styled(DateText)`
color:${props=>props.theme.colors.main1};
`

const Description = styled(LocationText)`
color:${props=>props.theme.colors.main1};
text-align:center;
`

const EventButton = styled(Button)`
background-color:${props=>props.theme.colors.main3};
height:3rem;
margin:0.5rem;

&:hover{
    background-color:${props=>props.theme.colors.main1};
    color:${props=>props.theme.colors.main3};
    
}
`

function UpcomingEvent(props){
    const {events} = props;


const date = new Date(events.Date).toLocaleDateString("de-DE")
    return(

        <EventWrapper>
            <DateField>
                <DateText>{date}</DateText>
                <LocationText>{events.Location}</LocationText>
            </DateField>
            <EventField>
                <TitleText>{events.Title}</TitleText>
                <Description>{events.Text}</Description>
            <EventButton>MORE</EventButton>
            </EventField>
        </EventWrapper>

    )
}
export default UpcomingEvent;