// O hook useNavigate serve da mesma coisa do Link ou do NavLink, porem nos temos que executar dentro de uma funcao como se fosse um evento.
import { useNavigate } from 'react-router-dom'

function Home() {

    let usuario = false

    // Instanciar o useNavigate
    const navigate = useNavigate()

    function GoToProducts(){
        navigate("/produtos/0")
    }

    // Um simples exemplo de como seria uma das diversas posibilidade se o usuario esta logado ou nao.
    function Dashboard(){
        if (usuario){
            navigate("/dashboard")
        } else {
            alert("Logue para entrar na Dashboard")
            navigate("/dashboard")
        }
    }

    return(
        <>
            <h1>
                Home
            </h1>

            <button onClick={GoToProducts}>Produtos</button>
        </>
    )
}

export default Home