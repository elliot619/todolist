import React from 'react';
import TodoAddChild from "./TodoAddChild";
import store from '../redux/store';
import {Collapse} from 'react-collapse';
import {confirmAlert} from "react-confirm-alert";
import 'react-confirm-alert/src/react-confirm-alert.css';

export default class TodoChild extends React.Component {
    state = {opened: false};

    render() {
        return (
            <li className="list__child">
                <label>
                    <a href="#" className="badge badge-danger" onClick={this.deleteItem}>x</a>
                    &nbsp;
                    <button className="collapse-trigger"
                            onClick={() => this.setState({opened: !this.state.opened})}>{this.props.name}</button>
                </label>
                <Collapse isOpened={this.state.opened}>
                    <TodoAddChild isGrandChild={true} index={this.props.index}/>
                    <ul className="list__grandchildren collapsable">
                        {this.props.children.map((c, i) => <GrandChild name={c.name} key={i} index={i}
                                                                       parent={this.props.index}/>)}
                    </ul>
                </Collapse>
            </li>
        );
    }

    deleteItem = () => {
        confirmAlert({
            message: 'Are you sure to delete this task?.',
            buttons: [
                {
                    label: 'Yes',
                    onClick: () => {
                        store.dispatch({type: "REMOVE_CHILD", payload: {index: this.props.index}});
                    }
                },
                {
                    label: 'No'
                }
            ]
        });

    };
}

class GrandChild extends React.Component {
    render() {
        return (
            <li className="list__grandchild">
                <label>
                    <a href="#" className="badge badge-danger" onClick={this.deleteItem}>x</a>
                    &nbsp;
                    <label className="list__child__label">{this.props.name}</label>
                </label>
            </li>);
    }


    deleteItem = () => {
        confirmAlert({
            message: 'Are you sure to delete this sub task?.',
            buttons: [
                {
                    label: 'Yes',
                    onClick: () => {
                        store.dispatch({
                            type: "REMOVE_CHILD",
                            payload: {parent: this.props.parent, index: this.props.index, isGrandchild: true}
                        });
                    }
                },
                {
                    label: 'No'
                }
            ]
        });

    }
}