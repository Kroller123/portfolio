import {createBrowserRouter, Navigate} from "react-router-dom";
import {MainPage} from "./Pages/mainPage";
import {HobbiesPage} from "./Pages/hobbiesPage";
import {MyMotoPage} from "./Pages/myMotoPage";
import {BasketballPage} from "./Pages/basketballPage";
import {MainLayout} from "./layout/MainLayout";
import {SkillsPage} from "./Pages/SkilsPage";

let routers = createBrowserRouter([
    {path:'' ,element:<MainLayout/>, children:[
            {index:true, element:<Navigate to={'main'}/>},
            {path:'/main', element:<MainPage/>},
            {path:'/hobbies', element:<HobbiesPage/>},
            {path:'/basketball', element:<BasketballPage/>},
            {path:'/mymoto', element:<MyMotoPage/>},
            {path:'/skills', element:<SkillsPage/>}
        ]},

])


export {
    routers
}