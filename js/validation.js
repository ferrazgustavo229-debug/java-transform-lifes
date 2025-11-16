export function initValidation() {
    const form = document.getElementById("formCadastro");
    const msgErro = document.getElementById("msgErro");

    form.addEventListener("submit", function (event) {
        event.preventDefault();

        const nome = document.getElementById("nome").value.trim();
        const email = document.getElementById("email").value.trim();

        if (nome.length < 3) {
            msgErro.textContent = "O nome precisa ter no mínimo 3 caracteres.";
            return;
        }

        if (!email.includes("@") || !email.includes(".")) {
            msgErro.textContent = "Email inválido. Verifique e tente novamente.";
            return;
        }

        msgErro.style.color = "green";
        msgErro.textContent = "Cadastro realizado com sucesso!";
        form.reset();
    });
}
