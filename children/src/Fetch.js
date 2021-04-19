import React from 'react';

function Fetch(props) {
    let [cep, setCep] = React.useState([])

    // eslint-disable-next-line react-hooks/exhaustive-deps
    React.useEffect(async () => {
        const response = await fetch('https://viacep.com.br/ws/78735135/json/')
        const data = await response.json()
        console.log(data)
        setCep(data)
    }, [])

    return(
        <>
            {/* Aqui eu vou passar a funcao filha do meu elemento um valor, e quando eu chamar uma funcao como elemento filho na chamda deste componente(Fetch) ele vai receber o valor dentro de props.children() */}
            {props.children(cep)}
        </>
    )

}

export default Fetch