import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Header from "./Header";
import HomePage from "./HomePage";
import Footer from "./Footer";
import NavBar from "./NavBar";
// import Links from "./Links";
import Example from "./Example";
import Main from "./Main";
import HomePage2 from "./HomePage2";
import HomePage2Main from "./HomePage2main";
import Sa from "./SA";
const Routing = () => {
    return (
        <div>
            <BrowserRouter>

                {/*<HomePage/>*/}

                <Switch>
                    <Route to="/" exact component={HomePage2}/>

                </Switch>

            </BrowserRouter>
        </div>
    );
};

export default Routing;