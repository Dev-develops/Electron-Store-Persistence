window.addEventListener('DOMContentLoaded', () => {
    var submit = document.getElementById('submit');

    const Store = require('electron-store');

    // json schema implementation.
    const userSchema = {
        userid: {
            type: 'number'
        },
        name: {
            type: 'string'
        },
        // zone: {
        //     type: 'string'
        // }
    }
    const store = new Store({
        schema: userSchema,
        encryptionKey: '1234567890-poiuyhjklmnb-vcxzhgfdytre-qwaszx-1234567890'
    });

    submit.addEventListener('click', () => {
        var sample = document.getElementById('sample').value;

        store.set('userid', 11111);
        store.set('name', sample);

        console.log(store.get('userid'));
        console.log(store.get('name'));
        console.log(sample);
    })
})