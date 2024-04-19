import { SegmentGroup,Segment, ItemGroup, Item, Icon, List, Button } from "semantic-ui-react"
import EventListAttendee from "./EventListAttendee"
import { AppEvent } from "../../../app/types/events"

type Props ={
  event:AppEvent
}

export default function EventListItem({event}:Props) {
  return (
    
       <SegmentGroup>

<Segment>

<ItemGroup>

<Item>
  <Item.Image size="tiny" circular src={event.hostPhotoURL}/>

  <Item.Content>


  <Item.Header>{event.title}</Item.Header>
  <Item.Description>Hosted by {event.hostedBy}</Item.Description>
  </Item.Content>
</Item>

</ItemGroup>


</Segment>

<Segment>
  <span>
    <Icon name='clock'/>{event.date}
    <Icon name='marker'/>{event.venue}
  </span>
</Segment>


<Segment secondary>
  <List>
    {event.attendees.map((attendee:any)=>(
      <EventListAttendee key={attendee.id} attendee={attendee}></EventListAttendee>
    ))}

  </List>
</Segment>

<Segment clearing>
<span>
 {event.description}
</span>

<Button color="teal" floated="right" content='view'></Button>
</Segment>

       </SegmentGroup>
    
  )
}
