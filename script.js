// ==========================================================================
// CONFIGURAÇÃO DO TEMA (CLARO / ESCURO)
// ==========================================================================

const temaBtn = document.getElementById("temaBtn");

temaBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark");

    if(document.body.classList.contains("dark")){
        temaBtn.innerHTML = "☀️"; 
    } else {
        temaBtn.innerHTML = "🌙"; 
    }
});

// ==========================================================================
// VALIDAÇÃO DO FORMULÁRIO DE CONTATO
// ==========================================================================

const form = document.getElementById("formContato");

form.addEventListener("submit", function(event){
    event.preventDefault();

    const nome = document.getElementById("nome").value.trim();
    const email = document.getElementById("email").value.trim();
    const mensagem = document.getElementById("mensagem").value.trim();

    if(nome === "" || email === "" || mensagem === ""){
        alert("Preencha todos os campos.");
        return; 
    }

    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if(!regexEmail.test(email)){
        alert("Digite um e-mail válido.");
        return; 
    }

    alert("Mensagem enviada com sucesso!");
    form.reset();
});