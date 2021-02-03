import React from "react";
import {BrowserRouter,Switch,Route} from "react-router-dom";
import Addcustomer from "./addcustomer";
import Home from "./home";

const AppRouter = () => (
                <BrowserRouter>
                        <Switch>
                            <Route path = "/" component={Home} exact />
                            <Route path ="/addcustomer" component={Addcustomer} exact/>
                    
                        </Switch>
                </BrowserRouter>
)
export default AppRouter;