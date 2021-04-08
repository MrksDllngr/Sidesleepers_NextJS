import Layout from "../../components/LayoutComponents/Layout";
import {fetchContent} from "../../helpers/helpers";
import UpcomingEvents from "../../components/live/UpcomingEvents.js";
import PreviousEvents from "../../components/live/PreviousEvents";

function Live (props) {

    const {live} = props;
    
   
    
    const followingEvents = live.filter(event => event.Upcoming === true);
    const previousEvents = live.filter(event=> event.Upcoming === false);
    
return(
    <Layout>
        <UpcomingEvents events={followingEvents}/>
        <PreviousEvents events = {previousEvents} />
    </Layout>
)
}

export async function getStaticProps({preview = false}){
  

    const live = await fetchContent("lives", preview);

   

    return {
        props: { live: live, preview: preview},
      };

}

export default Live