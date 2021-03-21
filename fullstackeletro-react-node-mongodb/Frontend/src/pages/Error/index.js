import './styles.css'
import '../../App.css'
import { Link } from 'react-router-dom'

function Error(){

    return(
        <div className="Error">
            <div className="jumbotron">
                <h1 className="display-4">Error 404</h1>
                <p className="lead">Esta pagina nao existe ou esta fora do ar</p>
                <hr className="my-4"/>
                <p>Caso o problema persistir ou tiver alguma duvida entre em contado pelo e-mail: fullstackeletro@dev.com</p>
                <p className="lead">
                    <Link className="btn btn-fs btn-lg text-light" to="/" role="button">Voltar para a pagina principal</Link>
                </p>
            </div>
        </div>
    )
}

export default Error