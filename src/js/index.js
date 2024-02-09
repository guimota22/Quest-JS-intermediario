var inputs = document.querySelectorAll('input[type="text"');
const botao = document.getElementById('botao');

botao.addEventListener("click", () => {
    verificarVazio();
});

function verificarVazio() {
    inputs.forEach(function(input, index) {
        const campoObrigatorio = document.querySelectorAll('.campo-obrigatorio')[index];
        if (input.value === "") {
            input.style.borderColor = "red";
            campoObrigatorio.textContent = "campo obrigatório";
        } else {
            input.style.borderColor = "#00C22B";
            campoObrigatorio.textContent = "";
        }
    });
}