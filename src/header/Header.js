import './Header.css'


function Header(props) {


    return (
        <div className='header'>
            <input onChange={props.getText}></input>
            <button onClick={props.povecaj}>increase</button>
            <div>{props.value}</div>
            <div>text: {props.input}</div>
        </div>
    )

}


export { Header }