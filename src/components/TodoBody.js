import React from 'react';
import TodoChild from "./TodoChild";
import TodoAddChild from "./TodoAddChild";
import {connect} from "react-redux";

class TodoBody extends React.Component {
    render() {
        return (
            <div className="list">
                <h1 className="h2">{this.props.list.name}</h1>
                <TodoAddChild isGrandchild={false} childId={-1}/>
                <ul className="list__items">
                    {this.props.list.children.map((c, i) => <TodoChild key={i} index={i} name={c.name} children={c.children}/>)}
                </ul>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    list: state.list
});

export default connect(mapStateToProps)(TodoBody);