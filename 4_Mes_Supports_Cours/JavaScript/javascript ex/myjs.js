/*
let nom = "Tinikashvili";
let prenom = "Tornike";
let name = nom + " " + prenom;
let age = 26;

alert("Je m'appelle" + " " + name + "," + "et j'avais"+ " " + (age-22) + " " + "ans en l'an 2000.");
*/


/*
function Exo2(){
let nbEnfant = prompt("nombre d'enfants");
    for(let i = 0 ; i < nbEnfant ; i++){
    age = prompt("age d'enfants");
        if(age == 6 || age == 7){
            alert("Poussin");
        }else if(age == 8 || age == 9){
            alert("Pupille");
        }else if(age == 10 || age == 11) {
            alert("Minime");
        }else if(age >= 12 && age <= 17){
            alert("Cadet");
        } else{
            alert("vous etes hors categorie");
        }
    }
}
*/
/*
function getChild(){
    return prompt("nombre d'enfants");
}

function getCategorie(){
    let age =  prompt("age d'enfants");
    if(age == 6 || age == 7){
        alert("Poussin");
    }else if(age == 8 || age == 9){
        alert("Pupille");
    }else if(age == 10 || age == 11) {
        alert("Minime");
    }else if(age >= 12 && age <= 17){
        alert("Cadet");
    } else{
        alert("vous etes hors categorie");
    }
}

function Exo3(){
    let nbEnfant = getChild();
    for(let i = 0 ; i < nbEnfant ; i++){
        getCategorie();
    }
}

Exo3();
*/
/*
function calcul(){
    function mult(num1,num2) {
        alert (num1*num2);
    }
    function somme(num1,num2){
        alert (num1+num2);
    }
    function moy(num1,num2){
        alert((num1+num2)/2);
    }
    function mod(num1,num2){
        alert (num1%num2);
    }
    function nombre(){
        return parseInt(prompt("type a number"));
    }
    let number1=nombre();
    let number2=nombre();
    mult(number1,number2);
    somme(number1,number2);
    moy(number1,number2);
    mod(number1,number2);
}
calcul();
*/
/*

*/    
/*
class Complex{
    constructor(reel,imaginaire)
    {
        this.reel = reel;
        this.imaginaire = imaginaire;
    }
    toString()
    {
        return "Reel: " + this.reel + "," + "Imaginaire: " + this.imaginaire +".";
    }
    getReel(){
        return this.reel;
    }
    getimaginaire(){
        return this.imaginaire;
    }
    setReel(num1) {
        this.reel = num1;
    }
    setImaginaire(num2) {
        this.imaginaire = num2;
    }
}
var r1 = new Complex(13,14);
r1.setReel(30);
r1.setImaginaire(45);
console.log(r1.toString());
console.log(r1.getReel());
*/
/*
class Rectangle{
    constructor(longeur,largeur)
    {
        this.longeur = parseInt(longeur);
        this.largeur = parseInt(largeur);
    }
    toString()
    {
        return "longeur: " + this.longeur + "," + "largeur: " + this.largeur +".";
    }
    getlongeur(){
        return this.longeur;
    }
    getlargeur(){
        return this.largeur;
    }
    setlongeur(num1) {
        this.longeur = num1;
    }
    setlargeur(num2) {
        this.largeur = num2;
    }
    getPerimetre() {
        return 2*(this.longeur + this.largeur);
    }
    getSurface() {
        return (this.longeur*this.largeur);
    }
    
}
let rect1 = new Rectangle("2","2");
console.log((rect1.getPerimetre()));
rect1.setlargeur(prompt("Veuillez entrer une nouvelle largeur pour rect1 :"));
/*
/*
function Exo2(){
let nbEnfant = prompt("nombre d'enfants");
    for(let i = 0 ; i < nbEnfant ; i++){
    age = prompt("age d'enfants");
        if(age == 6 || age == 7){
            alert("Poussin");
        }else if(age == 8 || age == 9){
            alert("Pupille");
        }else if(age == 10 || age == 11) {
            alert("Minime");
        }else if(age >= 12 && age <= 17){
            alert("Cadet");
        } else{
            alert("vous etes hors categorie");
        }
    }
}
*/
/*
function testString() {
    let phrase1 = new String(prompt("saisir une phrase"))
    let phrase2 = new String(prompt("saisir la deuxième phrase"))
    if(phrase1.includes(phrase2) || phrase2.includes(phrase1)){
        alert(true);
    }else{
        alert(false);
    }
}
*/
/*
function testString() {
    let phrase1 = prompt("saisir une phrase")
    let phrase2 = prompt("saisir la deuxième phrase")
    if((phrase1.length > 0 && phrase2.length > 0) && (phrase1.includes(phrase2) || phrase2.includes(phrase1))){
        alert(true);
    }else{
        alert(false);
    }
}

testString();
*/
/*
    if (typeNum<num1 && typeNum!==num1) {
        prompt('type a higher number')
    }else if (typeNum>num1 && typeNum!==num1){
        prompt('type a lower number');
    }else if(typeNum==num1){
        alert('Correct');
    }
*/
/*
function randomNum(){
    let num1 = Math.round(Math.random()*2000-1000)/10;
    alert(num1);
    let typeNum;
    do {
        typeNum = prompt('type a lower number');
        if(num1<typeNum) {
            alert("lower number");
        }else if(num1>typeNum) {
            alert("higher number");
        }else if (num1 == typeNum) {
            alert('correct answer');
        }
    } while (num1!=typeNum);

}
randomNum();
*/

/*
function randomNum(){
    let num1 = Math.random()*200-100;
    let num2 = Math.round(num1*10)/10;
    console.log(num2);
    let typeNum = prompt("type a number");
    if(typeNum==num2){
        alert('Correct');
    }else {
        alert('Incorrect');
    }
}
randomNum();
*/
/*
i=0;
let semaine = ["lun","mra","mer","jeu","ven","sam"];
semaine.pop();
semaine.push("dim");
semaine[1]= "mar";

for (let valeur of semaine) {
  document.write("Element " +i+ " contains: " +semaine[i]+ "<br />");
i++;
}

document.write(semaine[2]);
*/
/*
function randomNum(){
    let num1 = Math.round(Math.random()*2000-1000)/10;
    alert(num1);
    let typeNum;
    do {
        typeNum = prompt('type a lower number');
        if(num1<typeNum) {
            alert("lower number");
        }else if(num1>typeNum) {
            alert("higher number");
        }else if (num1 == typeNum) {
            alert('correct answer');
        }
    } while (num1!=typeNum);

}
randomNum();


let date1 = new Date();
let dateLocale = date1.toLocaleString('fr-FR');


let draw=[];
function date(){
let user
do {
    user = prompt('type something');
    draw.push(user);
    if (user==0){
        alert("Le tirage au sort du " + date1 + " " +"a designe comme grand gagnant "+ draw[Math.floor((Math.random()*draw.length))]);
    }
} while (user!=0);
draw.pop();
}

date();
console.log(draw);
*/
/*
let alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h',
'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's',
't', 'u', 'v', 'w', 'x', 'y', 'z'];
i=0;
let words=['pirveli','meore','mesame','meotxe','mexute','meeqvse','meshvide','merve','mercxre','meate'];
*/
window.onload = function () {
let words = ["pirveli","meore","mesame","meotxe","mexute","meeqvse",];
let randomWord=[];
let wordTemp;
let answer=[];
let lives=2;
let victory = 0;
i=0;
wordTemp = words[Math.floor((Math.random()*words.length))];
for(let i=0; i < wordTemp.length;i++){
    randomWord.push(wordTemp.charAt(i))
    answer.push("*");
}
alert(wordTemp);
console.log(words);
console.log(randomWord);
console.log(answer);

function hangman(){
    let choice
    alert("find a word made of " + randomWord.length + " letters")
    do {
        choice = prompt(answer);
        if (randomWord.includes(choice)){
            for(let i=0;i<randomWord.length;i++){
                if(randomWord[i]==choice){
                    answer[i]=choice;
                    victory ++;
                }
        }
        } else {
            --lives;
            alert('wrong letter, you have ' + lives + ' guesses left' );   

        }
    } while (lives>0 && victory!=randomWord.length);
    if(lives==0){
        alert("game over")
    } else if (victory=randomWord.length){
        alert("congrats")
    }
}

hangman();
console.log(lives);
}





/*
                alert(randomWord.indexOf(choice)+1);

        if (randomWord.includes(choice)){
            alert(randomWord.indexOf(choice)+1);
            answer.push(choice);
        } else {
            --lives;
            alert('wrong letter, you have ' + lives + ' guesses left' );   
        }
*/


/*

for (let valeur of semaine) {
  document.write("Element " +i+ " contains: " +semaine[i]+ "<br />");
i++;
}



let date1 = new Date();
let dateLocale = date1.toLocaleString('fr-FR');


let draw=[];
function date(){
let user
do {
    user = prompt('type something');
    draw.push(user);
    if (user==0){
        alert("Le tirage au sort du " + date1 + " " +"a designe comme grand gagnant "+ draw[Math.floor((Math.random()*draw.length))]);
    }
} while (user!=0);
draw.pop();
}

date();
console.log(draw);
*/