import React from "react";
import ReactDOM from "react-dom";
// 引入路由
import {Router,Route,hashHistory,IndexRoute} from "react-router";

// 引入组件
import App from "./Components/App";
import About from "./Components/About";
import User from "./Components/User";



ReactDOM.render((<Router history={hashHistory}>
    <Route path="/" component={App} >
        <Route path="/about" component={About} />
        <Route path="/user" component={User} />
    </Route>
</Router>
),document.querySelector("#app"));