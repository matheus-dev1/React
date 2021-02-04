export function Avatar (props) {
    //Em vez de este bloco esta dentro de Comment, ele esta em um arquivo
    //externo para ficar simplificar e organzar o nosso codigo.
    return (
        <img className="Avatar">
            src={props.user.AvatarUrl}
            alt={props.user.name}
        </img>
    );
}