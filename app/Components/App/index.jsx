import React from "react";

const APP = React.createClass({
    render(){
        return(
            <div>
                <button>首页...</button>
                {this.props.children}
            </div>
        );
    }
});

export default APP;