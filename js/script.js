let numeri = [];
let numeriUtente = [];
     
    

while(numeri.length < 5){
            
    let random = Math.floor(Math.random() * 100) + 1;
            
        if(!numeri.includes(random)){
            numeri.push(random);
            let testo =`<div>${random}</div>`;
            console.log(testo);
            document.getElementById('numeri').innerHTML = numeri;  
            
        } 
        
    }
    

    

console.log(numeri);

setTimeout(function() {
    document.getElementById('numeri').innerHTML = '';
}, 3000);
     
setTimeout(function(){
    
    for(i = 0; i < 5; i++){
        // testo = classList.add('d-none')
        let ricordaNumeri = parseInt(prompt('inserisci i numeri che hai visto'));
        numeriUtente.push(ricordaNumeri);
        console.log(numeriUtente);
        // adesso ho i numeri che ha pushato l'utente

    }

},5000);





function controlloRisultati(){
    // gli voglio dire che se i numeri che ha messo l'utente sono uguali ai numeri richiesti allora scrivi bla bla....
    for(let i = 0; i < numeri.length; i++){
        let numeriAzzeccati = [];
        if(numeriUtente.includes(numeri[i])){
            numeriAzzeccati.push(numeri);
            
        }
        if(numeriUtente.length === numeriAzzeccati.length){
            const vittoria = document.getElementById('vittoria');
            vittoria.innerText =`hai vinto`;
        }else{
            const numeriUtenteElm = document.getElementById('numeri-utente');
            const numeriUtenteindovinatiElm = document.getElementById
            ('numeri-corrispondenti');
            numeriUtenteElm.innerHTML =`numeri inseriti da te: ${numeriUtente.join(' - ')}`;
            numeriUtenteindovinatiElm.innerHTML = `perso perchè hai indovinato solo questi numeri: ${numeriAzzeccati.join(' - ')}`
            
            


        }
            
    }
        
} 


controlloRisultati();