import './Header.css'


function Header(props) {
    const data = {
        "email": "dev@dev.com",
        "password": "developer"
    }


    fetch('http://localhost:3333/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    }).then(response => response.json())
        .then(data => console.log(data.accessToken))



    return (
        <div className='header'>
            <p>KURCINA</p>
        </div>
    )

}


export { Header }