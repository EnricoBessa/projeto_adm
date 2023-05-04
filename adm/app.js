// declara um conjunto inicial de contatos
var db_contatos_inicial = {
    "data": [
        {
            "id": 1,
            "titulo": "Leanne Graham",
            "subtitulo": "Belo Horizonte",
            "autor": "amigos",
            "data": "Sincere@april.biz",
            "texto": "1-770-736-8031",
            "website": "hildegard.org"
        },
        {
            "id": 2,
            "titulo": "Leanne Graham",
            "subtitulo": "Belo Horizonte",
            "autor": "amigos",
            "data": "Sincere@april.biz",
            "texto": "1-770-736-8031",
            "website": "hildegard.org"
        },
        {
            "id": 3,
            "titulo": "Leanne Graham",
            "subtitulo": "Belo Horizonte",
            "autor": "amigos",
            "data": "Sincere@april.biz",
            "texto": "1-770-736-8031",
            "website": "hildegard.org"
        },
        {
            "id": 4,
            "titulo": "Leanne Graham",
            "subtitulo": "Belo Horizonte",
            "autor": "amigos",
            "data": "Sincere@april.biz",
            "texto": "1-770-736-8031",
            "website": "hildegard.org"
        },
        {
            "id": 5,
            "titulo": "AAAA",
            "subtitulo": "Belo Horizonte",
            "autor": "amigos",
            "data": "Sincere@april.biz",
            "texto": "1-770-736-8031",
            "website": "hildegard.org"
        },
        {
            "id": 6,
            "nome": "Mrs. Dennis Schulist",
            "cidade": "Rio de Janeiro",
            "categoria": "trabalho",
            "email": "Karley_Dach@jasper.info",
            "telefone": "1-477-935-8478",
            "website": "ola.org"
        },
        {
            "id": 7,
            "nome": "Kurtis Weissnat",
            "cidade": "Belo Horizonte",
            "categoria": "amigos",
            "email": "Telly.Hoeger@billy.biz",
            "telefone": "210.067.6132",
            "website": "elvis.io"
        },
        {
            "id": 8,
            "nome": "Nicholas Runolfsdottir V",
            "cidade": "Belo Horizonte",
            "categoria": "familia",
            "email": "Sherwood@rosamond.me",
            "telefone": "586.493.6943",
            "website": "jacynthe.com"
        },
        {
            "id": 9,
            "nome": "Glenna Reichert",
            "cidade": "Betim",
            "categoria": "amigos",
            "email": "Chaim_McDermott@dana.io",
            "telefone": "(775)976-6794",
            "website": "conrad.com"
        },
        {
            "id": 10,
            "nome": "Clementina DuBuque",
            "cidade": "São Paulo",
            "categoria": "amigos",
            "email": "Rey.Padberg@karina.biz",
            "telefone": "024-648-3804",
            "website": "ambrose.net"
        }
    ]
}

// Caso os dados já estejam no Local Storage, caso contrário, carrega os dados iniciais
var db = JSON.parse(localStorage.getItem('db_contato'));
if (!db) {
    db = db_contatos_inicial
};

// Exibe mensagem em um elemento de ID msg
function displayMessage(msg) {
    $('#msg').html('<div class="alert alert-warning">' + msg + '</div>');
}

function insertContato(contato) {
    // Calcula novo Id a partir do último código existente no array (PODE GERAR ERRO SE A BASE ESTIVER VAZIA)
    let novoId = 1;
    if (db.data.length != 0) 
      novoId = db.data[db.data.length - 1].id + 1;
    let novoContato = {
        "id": novoId,
        "titulo": contato.titulo,
        "subtitulo" : contato.subtitulo,
        "autor": contato.autor,
        "data" : contato.data,
        "texto": contato.texto,
        "website": contato.website
    };

    // Insere o novo objeto no array
    db.data.push(novoContato);
    displayMessage("Contato inserido com sucesso");

    // Atualiza os dados no Local Storage
    localStorage.setItem('db_contato', JSON.stringify(db));
}

function updateContato(id, contato) {
    // Localiza o indice do objeto a ser alterado no array a partir do seu ID
    let index = db.data.map(obj => obj.id).indexOf(id);

    // Altera os dados do objeto no array
    db.data[index].titulo = contato.titulo,
    db.data[index].subtitulo = contato.subtitulo,
    db.data[index].autor = contato.autor,
    db.data[index].data = contato.data,
    db.data[index].texto = contato.texto,
    db.data[index].website = contato.website

    displayMessage("Contato alterado com sucesso");

    // Atualiza os dados no Local Storage
    localStorage.setItem('db_contato', JSON.stringify(db));
}

function deleteContato(id) {    
    // Filtra o array removendo o elemento com o id passado
    db.data = db.data.filter(function (element) { return element.id != id });

    displayMessage("Contato removido com sucesso");

    // Atualiza os dados no Local Storage
    localStorage.setItem('db_contato', JSON.stringify(db));
}