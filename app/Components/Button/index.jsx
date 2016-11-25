import React from "react";
import style from "./style.scss";

const Button = React.createClass({
    render(){
        return(
            <div>
                <hr/>
                <button className={style.btn}>JavaScript 全栈开发，从入门到糕富帅!</button>
                <button className={style.btn}>在使用 React 之前，你需要耐心配置 Webpack</button>
                <button className={style.btn}>为了更友好的错误提示，你需要使用 redbox-react</button>
                <button className={style.btn}>Webpack 已经配置了两天</button>
                <button className={style.btn}>今天终于有点眉目了</button>
                <button className={style.btn}>比起 React，Webpack 简直是地狱！</button>
                <hr/>
            </div>
        );
    }
});

export default Button;