import {useState} from 'react';

export default function ContadorDuplo() {
    const [contador, setContador] = useState(0);
    console.log(contador);
    
    return (
        <div>
            <p>Contador: {contador}</p>
            <button style={{margin: "5px", background: "url('https://svgsilh.com/svg_v2/1721865.svg')", width: "50px", height: "50px", backgroundSize: "cover", backgroundRepeat: "no-repeat", backgroundPosition: "center"}} onClick={() => setContador(contador + 1)}>
                +
            </button>
            <button style={{margin: "5px", background: "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQdaT4dmWOs1v7IPa9pdr0Hvx3tP1H8cspm2gcdUuH4xC4jIvMeHVkiKf9&s=10')", width: "50px", height: "50px", backgroundSize: "cover", backgroundRepeat: "no-repeat", backgroundPosition: "center"}} onClick={() => setContador(contador - 1)}>
                -
            </button>
        </div>
    );
}