import React from 'react';

import {BrowserRouter, Switch, Route, useLocation} from "react-router-dom";

import {ToastContainer} from 'react-toastify';
import Home from "./pages/Home";
import NEwsView from "./pages/NEwsView";
import HomePage from "./components/HomePage";
import Footer from "./components/Footer";
import Login from "./pages/Login";
import AdminLayout from "./components/AdminLayout";
import NavBar from "./components/NavBar";
import AdminMenus from "./pages/AdminMenus";
import AdminNews from "./pages/AdminNews";
// import './sass/main.scss';
const App = () => {

    // const location = useLocation();


    return (
        <BrowserRouter>
            {window.location.href.includes("/admin") ? "" :
           <NavBar/>
            }
            {/*<HomePage/>*/}
            {/*<AdminLayout/>*/}
            {/*<Login/>*/}
                <Switch>
                    <Route path="/" exact componet={Home}/>
                    <Route path="/news-view" exact componet={NEwsView}/>
                    <Route path="/login" exact componet={Login}/>
                    <Route path="/admin/menus" component={AdminMenus}/>
                    <Route path="/admin/news" component={AdminNews}/>
                </Switch>

            {window.location.href.includes("/admin") ? "" :
                <Footer/>
            }


            <ToastContainer/>
        </BrowserRouter>
    );
};

export default App;