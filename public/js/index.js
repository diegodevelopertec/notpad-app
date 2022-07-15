"use strict";
var el = function (e) { return document.querySelector(e); };
var btnOpenModal = el('.start-modal'); ///botao abrir Modal 
var btnCancelNote = el('#cancel-note'); //botao fechar Modal
var btnAddNote = el('#add-note'); //botao adicionar nova anotação
var containerModal = el('#container-modal'); //container Modal
var containerMainNotes = el('.container-content'); //container das anotações
var titulo;
var conteudo;
var divCard;
var d = new Date();
var listNotes = [];
var addNewNote = function () {
    var titleInput = el('#cx-title');
    var contentInput = el('#cx-anotacao');
    if (titleInput.value !== '' && contentInput.value !== '') {
        titulo = titleInput.value;
        conteudo = contentInput.value;
        listNotes.push({
            id: listNotes.length + 1,
            title: titulo,
            content: conteudo,
            dateNote: d.toLocaleDateString()
        });
        var newNote = document.createElement('span');
        newNote.innerHTML = "\n                \n                <div class=\"card-model\">\n                <div class=\"card-info\">\n                         <div class=\"info-title\">".concat(titleInput.value, "</div>\n                         <div class=\"info-dataNote\">").concat(d.toLocaleDateString(), "</div>\n                    \n                </div>\n                <div class=\"cx-content\">\n                    <textarea name=\"\" id=\"card-note\" class=\"note-no-edit\"  cols=\"30\" rows=\"10\">").concat(contentInput.value, "</textarea>\n                 </div>\n                \n            </div>\n                \n                \n                ");
        containerMainNotes.insertBefore(newNote, containerMainNotes.childNodes[0]);
        console.log(listNotes);
        titleInput.value = '';
        contentInput.value = '';
        containerModal.style.display = 'none';
        containerMainNotes.style.opacity = '1.0';
    }
    else {
        alert('Os campos não estão preenchidos');
    }
};
var openModal = function () {
    if (containerModal.style.display = 'none') {
        containerModal.style.display = 'flex';
        containerMainNotes.style.opacity = '0.5';
    }
};
var closeModal = function () {
    if (containerModal.style.display = 'flex') {
        containerModal.style.display = 'none';
        containerMainNotes.style.opacity = '1.0';
    }
};
btnCancelNote.addEventListener('click', closeModal);
btnOpenModal.addEventListener('click', openModal);
btnAddNote.addEventListener('click', addNewNote);
