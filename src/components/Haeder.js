import React from "react";
//import "../styles/App.scss";

export default class Header extends React.Component {
    render() {
        return (
            <nav className="navbar navbar-dark bg-dark box-shadow">
                <div className="container d-flex justify-content-between">
                    <div className="navbar-brand d-flex align-items-center">
                        <strong>listy</strong>
                    </div>
                    <div className="navbar-expand d-flex text-white">Elliot Chavez, 2019</div>
                </div>
            </nav>);
    }
}