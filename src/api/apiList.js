import db from './firebase';

export default class ApiList {
    static getList() {
        // const sections = [
        //     {
        //         name: 'section 1',
        //         id: 'section1',
        //         items: [
        //             { name: 'mush1', isChecked: false, id: 'mush1' },
        //             { name: 'mush2', isChecked: true, id: 'mush2' }
        //         ]
        //     },
        //     {
        //         name: 'section 2',
        //         id: 'section2',
        //         items: [
        //             { name: 'shputz3', isChecked: false, id: 'mush3' }
        //         ]
        //     }
        // ];

        const sections = db
            .ref('/user/sections')
            .once('value', snapshot => snapshot.val());

        return sections;
    }
};
