import { useState } from "react"
import EventDashboard from "../../features/events/dashboard/EventDashboard"
import NavBar from "./nav/NavBar"

import {Container} from 'semantic-ui-react'


function App() {
 
  const [formOpen,setFormOpen]=useState(false)

  return (
    <>
   <NavBar setFormOpen={setFormOpen}></NavBar>
   
   <Container className="main"> 

   <EventDashboard setFormOpen={setFormOpen} formOpen={formOpen}></EventDashboard>

   </Container>
  
   </>
  )
}

export default App
