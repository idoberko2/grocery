export default class Item {
    constructor(name, isChecked, listId) {
        this._name = name;
        this._isChecked = isChecked;
        this._listId = listId;
    }

    getName() {
        return this._name;
    }

    getIsChecked() {
        return this._isChecked;
    }

    getListId() {
        return this._listId;
    }

    setIsChecked(value) {
        this._isChecked = value;
    }
};
