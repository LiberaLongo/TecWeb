/*parte 1:
Creiamo una variabile con un valore tra 1-6:
1. Inizializzare una var
2. Usando Math.random e Math.floor(),
	creiamo una variabile che genera un numero tra 1-6
3. Controlliamo sulla console
*/
var random1 = Math.floor(Math.random() * 6) + 1;
console.log(random1);
/*parte 2:
Completata la prima parte, creiamo una variabile che genera un percorso diverso per una immagine di un dado.
1. var e.g. imagePath
2. Usiamo concatenazione tra stringhe
	(e.g. "var x = "string" + variable + "string"...)
*/
var img1 = "images/dice" + random1 + ".png";
/*parte 3:
Facciamo lo stesso per un secondo dado.
Nella pagina dicee.html abbiamo:

<img class="img" src="images/dice6.png">

1. Inizializza una variabile per la prima e per la seconda immagine
2. Usando querySelectorAll (con il corretto indice)
	o querySelector per classe (.img)
3. Cambiamo l'attributo randomicamente al ricaricare la pagina
	(e.g. images/dice5.png)
*/
var random2 = Math.floor(Math.random() * 6) + 1;
console.log(random2);
var img2 = "images/dice" + random2 + ".png";
document.querySelector('.img1').setAttribute('src', img1);
document.querySelector('.img2').setAttribute('src', img2);
/*parte 4:
Creiamo tre blocchi di codice che gestiscono i tre casi:
quando player 1 vince, quando player 2 vince, e quando è patta
1. if random1 is greater than random2...
2. Selezioniamo l'h1 e cambiamo il testo con il relativo vincitore
*/
var titolo;
if(random1 > random2) titolo = "🚩 first player win";
else if (random1 < random2) titolo = "second player win 🚩";
else titolo = "flap (patta)";
document.querySelector('h1').innerHTML = titolo;
