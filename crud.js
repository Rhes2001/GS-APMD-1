document.querySelector("#salvar").addEventListener("click", cadastrar);

const categoria = 'Selecione a Categoria de Despesa';

function validar(despesa) {
    const keys = Object.keys(despesa);
    const arr = [];
    for (let key of keys) {
        const campo = document.querySelector(`#${key}`);
        if (despesa[key].length < 1 || despesa[key] == categoria) {
            campo.classList.add("is-invalid");
            campo.classList.remove("is-valid");
            arr.push(false);
            return;
        }
        campo.classList.remove("is-invalid");
        campo.classList.add("is-valid");
        arr.push(true);
    }
    return arr.every((el) => el == true);
}

function cadastrar({ target }) {
    const fornecedor = document.querySelector("#cliente");
    const valor = document.querySelector("#descricao");
    const categoria = document.querySelector("#categoria");

    const despesa = {
        fornecedor: fornecedor.value,
        valor: valor.value,
        categoria: categoria.value,
    };

    if (!validar(despesa)) {
        return;
    }

    document.querySelector(".card-body").innerHTML += createCard(despesa);
}

function deleteService(card) {
    document.querySelector(`#card${card}`).remove();
}

function createCard(despesa) {
    const data = new Date();
    const cards = document.querySelectorAll(".card");
    return `
 <div id="card${cards.length}">
 <div class="card">
 <div class="card-header">
 ${despesa.fornecedor}
 </div>
 <div class="card-body">
 <p class="card-text">${data}</p>
 <p class="card-text">Valor: ${despesa.valor}</p>
 <p>
 <span class="badge text-bg-warning">Pendente</span>
 </p>
 <a href="#" class="btn btn-success">
 <i class="bi bi-check-lg"></i>
 </a>
 <a href="#" onclick="deleteService(${cards.length})" class="btn btn-danger">
 <i class="bi bi-trash"></i>
 </a>
 </div>
 </div> <!-- card -->
</div> <!-- col -->
 ` //template literals
}
