import React from "react";
import ReactDOM from "react-dom";
// 引入路由
import {Router,Route,browserHistory,IndexRoute,Redirect} from "react-router";

// 引入组件
import App from "./Components/App";
import About from "./Components/About";
import User from "./Components/User";



ReactDOM.render((<Router history={browserHistory}>
    <Route path="/" component={App}>
        <Route path="/user" component={User}></Route>
        <Route path="/about" component={About}></Route>
    </Route>
</Router>
),document.querySelector("#app"));

{
    // 在访问 / 时只加载 App 组件，如果访问 /about 则先加载 App 组件，再加载 About 组件
    // 嵌套路由要想生效，需要在外层组件中使用 {this.props.children}
    // <Route path="/" component={App} >
    //     <Route path="/about" component={About} />
    //     <Route path="/user" component={User} />
    // </Route>
}
{
    // 获取参数：{this.props.params.paramName}
    // 获取查询字符串：{this.props.location.query.queryName}
    // 此外，通过这些对象还可以获取其他的参数
    // <Route path="/" component={App} />
    // <Route path="/about(/:where)" component={About} />
    // <Route path="/user/:name" component={User} />
}
{
    // IndexRoute 选择一个默认的组件
    // <Route path="/" component={App} >
    // <IndexRoute component={About} />
    // <Route path="/about" component={About} />
    // <Route path="/user" component={User} />
    // </Route>
}
{
    // const Nav = React.createClass({
    //     render(){
    //         return(
    //             <div>
    //                 <ul>
    //                     <li>
    // 导航到首页需要使用 IndexLink 组件，从 react-router 引入
    //                         <IndexLink activeClassName={style.active} to="/">Index</IndexLink>
    //                     </li>
    //                     <li><Link activeClassName={style.active} to="/about">About</Link></li>
    //                     <li><Link activeClassName={style.active} to="/user">User</Link></li>
    //                 </ul>
    //             </div>
    //         );
    //     }
    // });

}
{
    // 使用 browserHistory 和 路由跳转
    // const Nav = React.createClass({
    //     handleClick(e){
    //         e.preventDefault();
    // push 到 browserHistory 中，实现路由跳转，借助 History API
    //         browserHistory.push("/");
    //     },

    //     render(){
    //         return(
    //             <div>
    //                 <ul>
    //                     <li>
    //                         <IndexLink activeClassName={style.active} to="/">Index</IndexLink>
    //                     </li>
    //                     <li><Link activeClassName={style.active} to="/about">About</Link></li>
    //                     <li><Link activeClassName={style.active} to="/user">User</Link></li>
    //                 </ul>
    //                 <ul>
    //                     <li>
    //                         <button onClick={this.handleClick}>To Index</button>
    //                     </li>
    //                 </ul>
    //             </div>
    //         );
    //     }
    // });
}