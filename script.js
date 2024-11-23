const conts = document.querySelectorAll('.cont') //qureySelectorAll se sara .cont classes conts array me daal die

conts.forEach(cont => { //conts list me jitna element hai wo sab ek ek karke access hoga loop lgake forEach
    cont.addEventListener('click', () =>{ //eventlistener lgake jab user click krega tab yeh wla steps hoga
        removeAct() //ek dusra function
        cont.classList.add('active') //.classList classes ko manage krne me kaam aata hai active word add kr dega sab me
    })
})

function removeAct(){
    conts.forEach(cont => { //saara elements conts ka naam se active remove kr dega
        cont.classList.remove('active')
    })
}

//ab jo active rhega whi container pura dikhega baaki sab hide hojayga