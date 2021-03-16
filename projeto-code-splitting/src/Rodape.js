const date = new Date()
function Rodape(){
    return(
        <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
        >
            &copy; Recode Pro {date.getFullYear()}
        </a>
    )
}

export default Rodape