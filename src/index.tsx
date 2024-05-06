/* @refresh reload */
import { render } from "solid-js/web";
import App from "./App";
import "./index.css";
import { Route, Router } from "@solidjs/router";

const root = document.getElementById("root");

const Kancy = () => {
    return <div>this is kancy!</div>;
};

const Tyee = () => {
    return <div>this is tyee!</div>;
};

const Main = () => {
    return (
        <Router root={App}>
            <Route path="/kancy" component={Kancy}></Route>
            <Route path="/tyee" component={Tyee}></Route>
        </Router>
    );
};

//开发环境下执行render
if (import.meta.env.DEV && root instanceof HTMLElement) {
    render(Main, root!);
}

//默认导出
export default (el: HTMLElement) => {
    render(Main, el);
};
