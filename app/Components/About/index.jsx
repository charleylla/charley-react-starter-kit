import React from "react"

const About = React.createClass({
    render(){
        console.log("props.params:",this.props.params);
        console.log("props.location",this.props.location);
        return(
            <div>
                <button>About Us</button>
            </div>
        );
    }

});

export default About;