import {createBrowserRouter, Navigate} from "react-router-dom";
import {MainPage} from "./Pages/mainPage";
import {HobbiesPage} from "./Pages/hobbiesPage";
import {BiographyPage} from "./Pages/biographyPage";
import {MyMotoPage} from "./Pages/myMotoPage";
import {BasketballPage} from "./Pages/basketballPage";
import {MainLayout} from "./layout/MainLayout";

let routers = createBrowserRouter([
    {path:'' ,element:<MainLayout/>, children:[
            {index:true, element:<Navigate to={'main'}/>},
            {path:'/main', element:<MainPage/>},
            {path:'/hobbies', element:<HobbiesPage/>},
            {path:'/basketball', element:<BasketballPage/>},
            {path:'/mymoto', element:<MyMotoPage/>},
            {path:'/biography', element:<BiographyPage/>}
        ]},

])


export {
    routers
}