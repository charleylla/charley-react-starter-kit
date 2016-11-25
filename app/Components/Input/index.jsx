import React from "react";
import style from "./style.scss";

const Input = React.createClass({
    render(){
        return(
            <div>
                <input type="text" placeholder = "enter your notes.."/>
                <input className={style.middle +" "+style.orange} type="text" placeholder = "enter your notes.."/>
                <input className={`${style.middle} ${style.red}`} type="text" placeholder = "enter your notes.."/>
                {
                    // 后面的 className 会覆盖前面的
                    // 还有种方案:可以和 props 结合使用:
                    // className = {[a,b,c].join("")}
                    // [a,b,c] -> 可以换做是 props 或者 state
                }
                <input className={style.middle} className={style.pink} type="text" placeholder = "enter your notes.."/>
                <input className={style.big} type="text" placeholder = "enter your notes.."/>
            </div>
        );
    },
});

export default Input;