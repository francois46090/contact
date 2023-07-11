// créer les constantes
const form = document.querySelector('#form-contact');
const contactList = document.querySelector('.list-group');
const clearBtn = document.querySelector('.suppression-contact');
const filter = document.querySelector('#filtre');
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

function getContacts(){
    // verifier s'il y a des contacts dans le local storage

    // si oui on les affiche en créant des li.
}

// ajout contacts

function addContact(e){

    if(contactInput.value ===''){
        alert('Ajoutez un contact avant de valider');
    }
    //affichage des contacts dans des li

    const li = document.createElement('li');
    li.className='list-group-item';
    li.appendChild(document.createTextNode(contactInput.value));

    //  création d'une balise a avec un icon pour supprimer le contact

    const link = document.createElement('a');
    link.className = 'delete-item';
    link.innerHTML =  '<i class="fas fa-times fa-pull-right"></i>'; 

    li.appendChild(link);
    contactList.appendChild(li);

  
    //nettoyer les champs

    contactInput.value='';
    e.preventDefault();

}
function storeContactInLocalStorage(){}

function clearContacts(){}

function clearContactsFromLocalStorage(){}

function removeContact(){}

function filterContacts(){}
