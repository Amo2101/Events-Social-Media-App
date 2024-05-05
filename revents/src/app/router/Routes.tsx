import { createBrowserRouter } from "react-router-dom";
import App from "../layouts/App";
import EventDashboard from "../../features/events/dashboard/EventDashboard";
import EventDetailedPage from "../../features/events/details/EventDetailedPage";
import EventForm from "../../features/events/form/EventForm";

export const router = createBrowserRouter([
    {
        path:'/',
        element:<App/>,
       
        children:[
            {path:'/events',element:<EventDashboard></EventDashboard>},
            {path:'/events/:id',element:<EventDetailedPage></EventDetailedPage>},
            {path:'/manage/:id',element:<EventForm></EventForm>},
            {path:'/createEvent',element:<EventForm></EventForm>},
        ]
    }
])