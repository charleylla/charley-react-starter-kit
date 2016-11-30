import React from "react";
import {Link,IndexLink} from "react-router";
import {browserHistory} from "react-router";
import style from "./style.scss";

const Nav = React.createClass({
    handleClick(e){
        e.preventDefault();
        browserHistory.push("/");
    },

    render(){
        return(
            <div>
                <ul>
                    <li>
                        <IndexLink activeClassName={style.active} to="/">Index</IndexLink>
                    </li>
                    <li><Link activeClassName={style.active} to="/about">About</Link></li>
                    <li><Link activeClassName={style.active} to="/user">User</Link></li>
                </ul>
                <ul>
                    <li>
                        <button onClick={this.handleClick}>To Index</button>
                    </li>
                </ul>
            </div>
        );
    }
});

export default Nav;