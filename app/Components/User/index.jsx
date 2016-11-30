import React from "react"

const User = React.createClass({
    render(){
        console.log(this.props.params.paramName);
        return(
            <div>
                <button>User</button>
            </div>
        );
    }
})

export default User;