window.addEventListener('DOMContentLoaded', () => {
    var submit = document.getElementById('submit');
    const Store = require('electron-store');

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
        
        store.set('name', sample);
        console.log(store.get('name'));
    })
})