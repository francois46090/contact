// créer les constantes
const form = document.querySelector('#form-contact');
const contactList = document.querySelector('.list-group');
const clearBtn = document.querySelector('.suppression-contact');
const filter = document.querySelector('filtre');
const contactInput = document.querySelector('#contact');

loadEventListeners();
// ajouter des écouteurs d'évènements

function loadEventListeners(){

    document.addEventListener('DOMContentLoaded',getContacts);
    form.addEventListener('submit',addContact);
    clearBtn.addEventListener('click',clearContacts);
    contactList.addEventListener('click',removeContact);
    filter.addEventListener('keyup',filterContacts);
}

// stockage

function getContacts(){}

// ajout contacts

function addContact(){

    //affichage des contacts dans des li


//nettoyer les champs
}
function storeContactInLocalStorage(){}

function clearContacts(){}

function clearContactsFromLocalStorage(){}

function removeContact(){}

function filterContacts(){}
