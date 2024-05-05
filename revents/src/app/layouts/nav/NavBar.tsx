import { NavLink } from 'react-router-dom'
import {Menu,Container,MenuItem,Button} from 'semantic-ui-react'
import SignedOutButtons from './SignedOutButtons'
import SignedInMenu from './SignedInMenu'
import { useState } from 'react'

export default function NavBar() {

const [auth, setAuth] = useState(false)

  return (
   <Menu inverted={true} fixed='top'>

<Container>
    <MenuItem header as={NavLink} to='/'>
        <img src="/logo.png" alt="" />
        Re-Vents
    </MenuItem>

    <MenuItem as={NavLink} to='/events' name='Events'></MenuItem>

    <MenuItem>
    <Button 
    as={NavLink} to='/createEvent'
    floated='right' positive={true} inverted={true} content='Create event'></Button>
    </MenuItem>

{auth ? <SignedInMenu setAuth={setAuth} /> : <SignedOutButtons setAuth={setAuth}/>}



</Container>

   </Menu>
  )
}
