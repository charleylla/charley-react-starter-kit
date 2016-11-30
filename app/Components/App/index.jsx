import React from "react";

import Nav from "../Nav";

const APP = React.createClass({
    componentDidMount(){
        console.log("OK")
    },
    render(){
        return(
            <div>
                <button>首页...</button>
                <Nav></Nav>
                {this.props.children}
            </div>
        );
    }
});

export default APP;