import React from "react";
import Header from "./Header";
import Footer from "./Footer";

export default class Layout extends React.Component{
    constructor(){
        super();
        this.state = {name:"Qiita"};
    }
    render(){
        setTimeout(
            ()=>{this.setState(
                this.state.name === "Hello" ? {name:"Qiita"} : {name:"Hello"}
                );}, 1000);
        return (
            <div>
                {this.state.name}
                <Header></Header>
                <h1>It's {this.state.name} Tutorial</h1>
                <Footer></Footer>
            </div>
        );
    }
}