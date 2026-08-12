export default function ListaLinguagens() {
    const linguagens = ["JavaScript", "Python", "Java", "C#", "Ruby"];
    return (
        <div>
            <h3>Linguagens de Programação:</h3>
            <ul style={{ listStyleType: "none", padding: 0 }}>
                {linguagens.map((linguagem, index) => (
                    <li key={index}>{index + 1} - {linguagem}</li>
                ))}
            </ul>
        </div>
    );
}