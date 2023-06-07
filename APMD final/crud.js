document.querySelector("#salvar").addEventListener("click", cadastrar)

const categoria = 'Selecione a Categoria'

function validar(servico){
    const keys = Object.keys(servico)
    const arr = []
    for(let key of keys){
        const campo = document.querySelector(`#${key}`)
        if(servico[key].length < 1 || servico[key] == categoria){
            campo.classList.add("is-invalid")
            campo.classList.remove("is-valid")
            arr.push(false)
            return
        }
        campo.classList.remove("is-invalid")
        campo.classList.add("is-valid")
        arr.push(true)
    }
    return arr.every((el) => el == true)
    }

function cadastrar({target}){
const cliente = document.querySelector("#cliente")
const descricao = document.querySelector("#descricao")
const categoria = document.querySelector("#categoria")


const servico = {
    cliente: cliente.value,
    descricao: descricao.value,
    categoria: categoria.value,
}

if(!validar(servico)){
    return
}

document.querySelector(".card-body").innerHTML += createCard(servico)

}
    

function deleteService(card){
    document.querySelector(`#card${card}`).remove()
}

function createCard(servico){
    const data = new Date();
    const cards = document.querySelectorAll(".card")
    return `
    <div id="card${cards.length}">
    <div class="card">
        <div class="card-header">
            ${servico.cliente}
        </div>
        <div class="card-body">
            <p class="card-text">${data}</p>
            <p class="card-text">Descrição: ${servico.descricao}</p>
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

