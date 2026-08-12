export default function Compras () {
    const frutas = ["Banana", "Maçã", "Laranja"]
    return (
        <ul style={{listStyle: "none", padding: 0, margin: 0}}>
            {frutas.map(fruta => <li>{fruta}</li>)}
        </ul>
    )
}