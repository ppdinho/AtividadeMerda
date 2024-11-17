
function formatarTelefone(telefone) {
    telefone = telefone.replace(/\D/g, '');
    if (telefone.length <= 2) {
        return `(${telefone}`;
    }
    if (telefone.length <= 6) {
        return `(${telefone.slice(0, 2)}) ${telefone.slice(2)}`;
    }
    return `(${telefone.slice(0, 2)}) ${telefone.slice(2, 7)}-${telefone.slice(7, 11)}`;
}

function formatarCPF(cpf) {
    cpf = cpf.replace(/\D/g, ''); 
    if (cpf.length <= 3) {
        return `${cpf}`;
    }
    if (cpf.length <= 6) {
        return `${cpf.slice(0, 3)}.${cpf.slice(3)}`;
    }
    if (cpf.length <= 9) {
        return `${cpf.slice(0, 3)}.${cpf.slice(3, 6)}.${cpf.slice(6)}`;
    }
    return `${cpf.slice(0, 3)}.${cpf.slice(3, 6)}.${cpf.slice(6, 9)}-${cpf.slice(9, 11)}`;
}


function aplicarMascara(event, tipo) {
    const input = event.target;
    let value = input.value;
    
    if (tipo === 'telefone') {
        input.value = formatarTelefone(value);
    } else if (tipo === 'cpf') {
        input.value = formatarCPF(value);
    }
}


const modal = document.getElementById("modal");
const loginButton = document.getElementById("loginButton");
const closeModal = document.getElementById("closeModal");
const cadastroForm = document.getElementById("cadastroForm");


loginButton.onclick = () => {
    modal.style.display = "block";
};


closeModal.onclick = () => {
    modal.style.display = "none";
};


cadastroForm.onsubmit = (e) => {
    e.preventDefault();

    const nome = document.getElementById("nome").value;
    const email = document.getElementById("email").value;
    let telefone = document.getElementById("telefone").value;
    let cpf = document.getElementById("cpf").value;
    const senha = document.getElementById("senha").value;

    
    localStorage.setItem("usuario", JSON.stringify({ nome, email, telefone, cpf, senha }));


    alert("Cadastro realizado com sucesso! Agora é só curtir o site!");


    modal.style.display = "none";


    window.location.href = "perfil.html";
};


if (window.location.pathname === "/perfil.html") {
    const usuario = JSON.parse(localStorage.getItem("usuario"));
    if (usuario) {
        document.getElementById("usuarioNome").textContent = usuario.nome;
        document.getElementById("usuarioEmail").textContent = usuario.email;
        document.getElementById("usuarioTelefone").textContent = usuario.telefone;
        document.getElementById("usuarioCpf").textContent = usuario.cpf;
    } else {
        alert("Ops! Você não está logado. Vai lá e se cadastra.");
        window.location.href = "index.html";
    }
}
