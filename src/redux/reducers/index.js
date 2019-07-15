import * as actions from '../actions';

const initialState = {
    list: {
        name: "",
        children: []

    }
};

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_CHILD':
            return actions.addChild(state, action.payload);
        case 'REMOVE_CHILD':
            return actions.removeChild(state, action.payload);
        case 'CREATE_LIST':
            return actions.createList(state, action.payload);
        case 'INIT_LIST':
            return actions.initList();
        default:
            return state;
    }
};

export default rootReducer;