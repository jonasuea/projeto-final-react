export default function BoletimStatus() {
    const nota = 7.5;
    return(
        <div>
            <strong>Nota: </strong>{nota} <br />
            <strong>Status: </strong>{nota >= 7 ? "Aprovado ✅" : "Reprovado ❌"}
        </div>
    );
}