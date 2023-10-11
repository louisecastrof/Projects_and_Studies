import AnotherComponent from "./AnotherComponent"

function FirstComponent() {
// Comentários
const name = 'Louise'
    
    return (
        <div className="firstcomponent">
            {/* Comentário no JSX */}
            <p>Primeiro Component</p>
            {/* Rodado pelo JavaScript */}
            {2 + 2}
            {/* Função definida fora do JSX */}
            <p>Nome: {name}</p>
            <AnotherComponent />
        </div>
    )
}

export default FirstComponent