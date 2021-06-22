// fetch('http://localhost:3333/api/candidates')
//     .then(response => response.json())
//     .then(data => {
//         console.log(data);
//     })

// fetch('http://localhost:3333/api/candidates')
//     .then(response => response.json())
//     .then(data => {
//         console.log(data);
//     })


// fetch('http://localhost:3333/api/reports')
//     .then(response => response.json())
//     .then(data => {
//         console.log(data);
//     })

// fetch('http://localhost:3333/api/users')
//     .then(response => response.json())
//     .then(data => {
//         console.log(data);
//     })
const data = {
    "email": "dev@dev.com",
    "password": "$2a$10$Ht9ATCnB3LhyEpPg.c/GOuLzkMYD2WRPZ3ZtFVP.uVCrx.nW/rwVq"
}


fetch('http://localhost:3333/login', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
}).then(response => console.log(response))
