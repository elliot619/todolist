import React from 'react';
import Header from "../components/Haeder";
import TodoMain from "../components/TodoMain";
import {Provider} from "react-redux";
import store from '../redux/store';
import '../styles/App.css';


function App() {
    return (
        <div>
            <Header/>
            <Provider store={store}>
                <TodoMain/>
            </Provider>
        </div>
    );
}

export default App;
