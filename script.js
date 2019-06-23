// ----------- GET DATA -----------
// fetch('https://us-central1-shop-list-78894.cloudfunctions.net/getItems')
// .then(res => {
//     return res.json()
// })
// .then(data => {
//     console.log(data);
//     data.forEach(item => {
//         console.log(item.item);
//     })
// })

// ----------- POST DATA -----------
// var data = {item: 'teacher'}
// fetch('https://us-central1-shop-list-78894.cloudfunctions.net/addItem', {
//     method: 'POST',
//     body: JSON.stringify(data),
//     headers:{
//         'Content-Type': 'application/json'
//     }
// }).then(res => res.json())
// .then(Response => console.log('success:', JSON.stringify(Response)))
// .catch(error => console.error('error:', error))

// ----------- DELETE DATA -----------
// var data = { id: '-Li47-gG_6X18lnQuRfw' }
// fetch(`https://us-central1-shop-list-78894.cloudfunctions.net/deleteItem`, {
//     method: 'DELETE',
//     body: JSON.stringify(data),
//     headers: {
//         'Content-Type': 'application/json'
//     }
// }).then(res => res.json())
//     .then(Response => console.log('success:', JSON.stringify(Response)))
//     .catch(error => console.error('error:', error))

// ----------- UPDATE DATA -----------
var data = { id: '-Li4808s4cRjhBf-KMlz', item: 'robot keanue'  }
fetch(`https://us-central1-shop-list-78894.cloudfunctions.net/updateItem`, {
    method: 'PUT',
    body: JSON.stringify(data),
    headers: {
        'Content-Type': 'application/json'
    }
}).then(res => res.json())
    .then(Response => console.log('success:', JSON.stringify(Response)))
    .catch(error => console.error('error:', error))