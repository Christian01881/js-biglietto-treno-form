



const ageBox = document.querySelector('input[name="Age"]');
const kmBox = document.querySelector('input[name="Km"]');
const button =  document.querySelector('button');
const tariffa = 0.21;
const nameUser = document.querySelector('input[name="Name"]')
const lastNameUser = document.querySelector('input[name="LastName"]')
const nome = document.querySelector('.Name2');
const lastName = document.querySelector('.LastName2')
const finalPrice = document.querySelector('.price2')
const buttonCalc = document.getElementById('Calcola')
const buttonCanc = document.getElementById('Cancella')
const CPM = document.getElementById('lista')

buttonCalc.addEventListener('click', function () {

    let surname = lastNameUser.value;
    let nameUser2 = nameUser.value;
    let age = ageBox.value;
    let km = kmBox.value;
    let price = km * tariffa.toFixed(2);
    if(age < 18){
        price = ((km * tariffa) - (price * 0.2)).toFixed(2);
    } else if(age > 65){
        price = ((km * tariffa) - (price * 0.4)).toFixed(2);
    };

    nome.innerHTML += `<span>Nome: ${nameUser2}</span>`;
    lastName.innerHTML += `<span>Cognome: ${surname}</span>`;
    finalPrice.innerHTML += `<span>${price} €</span>`;
    CPM.classList.remove('opacity-0');
});


buttonCanc.addEventListener('click', function () {

    ageBox.value = '';
    kmBox.value = '';
    lastNameUser.value = '';
    nameUser.value = '';
    nome.innerHTML = '';
    lastName.innerHTML = '';
    finalPrice.innerHTML = '';
    CPM.classList.add('opacity-0');
})




