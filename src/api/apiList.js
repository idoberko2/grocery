import db from './firebase';

export default class ApiList {
    static getValue(resource) {
        return new Promise((resolve, reject) => {
            db
                .ref(resource)
                .once('value', snapshot => resolve(snapshot.val()))
                .catch(error => reject(error));
        });
    }

    static getSections() {
        return ApiList.getValue('/sections');
    }

    static getItems() {
        return ApiList.getValue('/items');
    }

    static getActiveItems() {
        return ApiList.getValue('/activeItems');
    }

    static getListData() {
        const sectionsPromise = ApiList.getSections(),
            itemsPromise = ApiList.getItems(),
            activeItemsPromise = ApiList.getActiveItems();

        return new Promise((resolve, reject) => {
            Promise.all([ sectionsPromise, itemsPromise, activeItemsPromise ]).then(values => {
                const sections = values[0],
                    items = values[1],
                    activeItems = values[2];

                // Object
                //     .keys(sections)
                //     .forEach(sectionId => {
                //         sections[sectionId].itemIds = [];
                //     });
                //
                // Object
                //     .keys(items)
                //     .forEach(itemId => {
                //         sections[items[itemId].sectionId].itemIds.push(itemId);
                //     });

                resolve({
                    sections,
                    items,
                    activeItems
                });
            })
        });
    }
};
