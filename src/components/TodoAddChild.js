import React from 'react';
import store from '../redux/store';

export default class TodoAddChild extends React.Component {
    state = {
        childName: "",
        error: ""
    };

    render() {
        return (
            <div className="form-group col-sm-10">
                <div className="input-group ">
                    <div className="input-group-prepend">
                        <button onClick={this.addChild}
                                className={!this.props.isGrandChild ? "btn btn-success" : "btn btn-info"}>+
                        </button>
                    </div>
                    <input type="text" maxLength="20" minLength="5" name="childName" value={this.state.childName}
                           placeholder={!this.props.isGrandChild ? "Add task" : "Add sub task"}
                           onChange={this.updateState} className="form-control"/>
                </div>
                {this.state.error.length > 0 && <p className="help-block text-danger">{this.state.error}</p>}

            </div>
        );
    }

    updateState = (event) => {
        this.setState({[event.target.name]: event.target.value});
    };

    addChild = () => {

        if (this.state.childName.length > 4) {
            store.dispatch({
                type: "ADD_CHILD",
                payload: {
                    child: {
                        name: this.state.childName,
                        children: []
                    },
                    isGrandchild: this.props.isGrandChild,
                    childId: this.props.index
                }
            });

            this.setState({childName: "", error: ""});
        } else {
            this.setState({"error": "Too short"});
        }
    }
}