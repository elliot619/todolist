import React from 'react';
import TodoBody from './TodoBody';
import {connect} from 'react-redux';
import store from '../redux/store';

class TodoMain extends React.Component {
    state = {
        listName: "",
        error: ""
    };

    componentWillMount() {
        store.dispatch({type: "INIT_LIST", payload: {}});
    }

    render() {
        return (
            <main role="main" className="container">
                {!this.hasList() && <div className="createList">
                    <label className="h5">Wow, no to-do list yet. Start by
                        typing it's name</label>
                    <input type="text" maxLength="30" name="listName" value={this.state.listName}
                           onChange={this.updateState} className="form-control col-md-5 list__name"/>
                    <p className="help-block text-danger">{this.state.error}</p>
                    <button className="btn btn-info" onClick={this.createList}>Create list</button>
                </div>}
                {this.hasList() && <TodoBody/>}
            </main>);
    }

    updateState = (event) => {
        this.setState({[event.target.name]: event.target.value});
    };

    hasList = () => {
        return this.props.list.name && this.props.list.name.length > 0;
    };

    createList = () => {
        if (this.state.listName.length >= 5) {
            let tmp = {...this.state};

            store.dispatch({type: "CREATE_LIST", payload: {name: this.state.listName}});

            tmp.error = "";
            tmp.listName = "";

            this.setState(tmp);
        } else {
            this.setState({"error": "Too short"})
        }
    };
}

const mapStateToProps = (state) => ({
    list: state.list
});

export default connect(mapStateToProps)(TodoMain);