const readline = require('readline');
//const currentYear=new Date();


const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


function kriptuj(tekst,broj){
 let kriptovano = [];

            for(let i = 0; i < tekst.length; i++) {
                let ch = tekst[i];

                if(!isNaN(ch)) {
                  let broj = Number(ch) +1;
                    kriptovano.push(broj);
                
                } else {
                    
                    let kod = ch.charCodeAt(0);
                    let noviKod = kod + 1;
                    let novoSlovo = String.fromCharCode(noviKod);
                    kriptovano.push(novoSlovo);
                }
            }

       return kriptovano.join('');
}
function dekriptuj(tekst){
     let dekriptovano = [];

            for(let i = 0; i < tekst.length; i++) {
                let znak = tekst[i];

                if(!isNaN(znak)) {
                    dekriptovano.push(String(Number(znak) - 1));
                } else {
                    let kod = znak.charCodeAt(0);
                    let noviKod = kod - 1;
                    let novoSlovo = String.fromCharCode(noviKod);
                    dekriptovano.push(novoSlovo);
                }
            }

            return dekriptovano.join('');
}
    rl.question("Unesi opciju (1 = kriptuj, 2 = dekriptuj): ", function(opcija) {
    rl.question("Unesi tekst: ", function(tekst) {
        if(opcija === "1") {
           console.log("Kriptovani tekst:",kriptuj(tekst));
 
        } 
        else if(opcija === "2") {
           console.log("Dekriptovani tekst",dekriptuj(tekst));
        } 
        else {
            console.log(" Pogrešna opcija.");

        }

        rl.close();
    });
});
