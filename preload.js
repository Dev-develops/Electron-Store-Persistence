window.addEventListener('DOMContentLoaded', () => {
    var submit = document.getElementById('submit');
    const Store = require('electron-store');
    const keytar = require('keytar');

    const userSchema = {
        userid: {
            type: 'number'
        },
        name: {
            type: 'string'
        }
    }

    keytar.getPassword('electronSystem', 'loginUser').then((key) => {

        const store = new Store({
            schema: userSchema,
            encryptionKey: key
        });

        submit.addEventListener('click', () => {
            var sample = document.getElementById('sample').value;
            
            store.set('name', sample);
            console.log(store.get('name'));
        })
    })
    .catch((err) => {
        console.log("Error");
    })
})