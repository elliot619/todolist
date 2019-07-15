export function addChild(state, payload) {
    let tmp = Object.assign({}, state.list);

    if (payload.isGrandchild)
        tmp.children[payload.childId].children.push(payload.child);
    else
        tmp.children.push(payload.child);

    updateStorage(tmp);

    return {list: tmp};
}

export function removeChild(state, payload) {
    let tmp = Object.assign({}, state.list);

    if (payload.isGrandchild)
        tmp.children[payload.parent].children.splice(payload.index, 1);
    else
        tmp.children.splice(payload.index, 1);

    updateStorage(tmp);

    return {list: tmp};
}


export function createList(state, payload) {
    let tmp = Object.assign({}, state);

    tmp.list.name = payload.name;

    updateStorage(tmp.list);

    return tmp;
}

export function initList() {
    const tmp = localStorage.getItem("list");

    if (tmp)
        return {list: JSON.parse(tmp)};
}

function updateStorage(list) {
    //TODO: For purpose of demonstration and simplicity I used localStorage to save the list, but of course that a database will be a better option for this
    localStorage.setItem("list", JSON.stringify(list));
}
