// create variable var,let,cons ile oluştururuz
//    var a=19;
//    console.log(a);

/* NUMBER
 var a = 1*; number
 var b = 3.14; number
console.log(type of a,b);
//STRİNG
var name = "Mert ";
console.log(type of name);//string datatype
 //Boolean
 var a = true;
 console.log(type of a)//boolean 
 
it just gets true or false
 
//NULL
 var a=null;
 a= empty variable

 //UNDEFİNED= tanımsız
var a;

console.log(a);
//undefined

referance
var number =[1,2,4];
console.log(number);
//1,2,4
console.log(number[0]);
//1

OBJECT
var person = {
 name:"mert",
 age:24
}
console.log(person);

var date=new Date();

FUNCTİON 
var merhaba = function(){
console.log("merhaba")
}
console.log(merhaba);
//merhaba

//Var
 var name="merttopuz";
 console.log(name);
 name ="merti";
 console.log(name);
 merttopuz
 mert

//Let
 let name ="mert";
  //hata verir var ile tanımlarsa aynı isimle tanımlayablirsin
 let name ="mertingo"
 console.log(name);
  
//Const(sabit):ilk başta verdiğin değeri değiştiremezsin
const name="mert";
console.log(name);
name="mertin"
hata verir
const a;
a=10;
console.log(a)
hata verir a Yı olşturdun zaman sonradan değer veremezsin

const a=[1,2,3];
console.log(a);
a=[1,2,3,4,5,6];
console.log(a);
hata verir
 a.push(6);
 ile ekleyebilriz const diziye
 mülakat sorusu

  js. geliştiriciler artık let ve const kullanıyor


*/
/*
let value;
//veri tiplerini string e çevirme işlemleri:
value= String (123);
value=String(3.15)
console.log(value);
value=String(funciton() {console.log()});
value=String([13,,4]);
her şey tring e çevrilerbilir
diğer yollu 
(10).toString();
//veri tiplerini sayılara çevirme
 value= Number("123");number
 value=Number(null);nubmer
 value=Number(undefined);//not a number
value=Number("hello");/7not a number
sadece stringlerin içinde sayı varsa yada nul veri tipi çevrilir diğerleri çevirlemz

value=parseFloat("3.14")//içindeki ondalıkllı kısmı alır ve tekrar sayıyaa çevirir 3.14
value=parseınt("3")//asyıya çevirir

 */
/*
opt ve math objects:
let value;
const value1=10;
const value2=20;
 console.log(value1+value2);
 console.log(value1-value2);
 console.log(value1/value2);
 console.log(value1*value2);

 //math objesi
 Marh.PI
 Math.E(logoritma)
 Math.round():sayıyı yuvarlar
 Math.ceil(3.2):4 yukaru yuvarlar
 Math.floar(3.7):3 aşağı yuvarlar
Math.sqrt(16):4
Math.abs(-10):mutlak değer
Math.pow(8,3):8 in 3. kuvveti
Math.max(10,-1,3);en yüksek sayıyı gösterir 
Math.min 
Math.random(): 0ile bir arası rastgele sayı üretir
MAth.random()*20: 0 ile 20 arası
MAth.random()*20+1:1ile 21
MAth.floar(random()*20+1):1ile 20
     
//string metodları
 let value;

const firstname = "mert";
const lastname ="ali";
const langs ="phyton,java,c";
value = firstname +" "+ lastname;
value = "mustafa";
value = value +" " +"çoşkun";// value+="mustafa",
//mustafa   çoşkun
console.log(value);
//string içindeki karakter sayısı 
 value= firstname.length;
value = firstname.concat(" ",lastname," "," caz");//istedğin kadar parametre concat la ekleyeblirsin
tüm harfler küçültür:
value = firstname.toLowerCase();
uppercase büyütür

value = firstaname[0]; ilk harfini alır
son eleman için 
value=firstname[firstname.length-1]; ile son elemana girer

//Infex of: verdiğimiz karakterin kaçıncı indexte olduğunu gösterir
value =firsname.indexof("L");
 içinde aradığımız krakter yoksa -1 sonucunu return eder

 //Char At
 value=firstname.charAt(0); 0.indexteki karakteri verir üstteki daha kolay

 //Split!!!: virügllerle ayrılmış elemanlar varsa bunları tek tek almamızı sağlar
  value = langs.split(",");
   
  //Replace:stringin içinden belli bir yeri değiştirmek istersek replace methodunu kullanbilriiz
mesele phyton yerine css yazalım
value =lengs.replace("phyton","css");
değişmiş oldu
 //Includes:string in içindeki belli alanları sorgulamak için kullanılır mesela
 langs içinde java varmı ?
 value =lengs.includes("java");
 eğer varsa true döndürür
 yoksa false döner
 
 //Ders 11 es6 ile gelen teplate literal
 stringleri biçimlendirmemizi kolaylaştırır
 // const name ="mert";
  // const departman = " bilgisayar";
  // const salary = 1000;
  //  const a ="isim" + name  +"\n"+ "Departman" + departman +"\n"+ "salary"+ salary 
  //  console.log(a);
//daha kolay teplate literal kullnarak yazma yöntemi
const a = `isim:${name}\nDepartmant:${departman}\nsalary:${salary}`;
console.log(a);
function a(){
  return "merhaba";
}  
const html = `
  <ul>
  <li>${name}</li>
  <li>${departman}</li>
  <li>${salary}</li>
  <li>${10/4}</li>
  <li>${a()}</li>
  
  </ul>
  
  `;
  document.body.innerHTML = html;


  // Array 2 iekiilde oluşturulur
/*   const numbers = [43,56,33];
 const number2 = new Array (1,2,3,4,6);
   


 let value ; 
 const numbers = [43,56,37,58];
 const lengs =["phyton","java","c"];
 const a =["merhaba",22,null,undefined,3.14];


 value = numbers.length;
 //uzunluk
 value= numbers[0];
 //ilk eleman
 value = [numbers.length-1];
indexteki değeri değiştirme
 numbers[2]=1000;
index of
value = indexOf(1000); 2değerini verir
numbers.push(2000); sona eğer ekleme çıkarma pop
numbers.unshift() başına dğer ekleeme
sonundan değer çıkarma numbers.pop()
başınan eleman atma numbers.shift()
belli bir indexten belli bir indexe değer atma numbers.splice(0,3)
numbers.reverse ile array i tersine çevirirsin
numbers.sort() ssadece ilk rakamlara bakarak sıralar
küçükten büyüğe sıralaama
value = numbers.sort(function(x,y){
  return x-y;
  
});
console.log(value);
büyükten küçüğe:
value=numbers.sort(function(x,y){
    return y-x;

});
console.log(value);
 source:mozilla javascript


 //OBJECT
  let value;
 const programmer = {
    name:"mert",
    age :25,
    email:"mertttopuz@hotmail.com",
    langs:["phyton,java,c"],
    address:{
      //iç içe objeler yazabiliriz
      city:"ankara",
      street:"bahçelievler"
    },
     work : function(){
       console.log("programcı çalışıyor");
     }
  }
  //özelliklerine erişmek için
   value = programmer.name;//genelde kullanıdğım
  //  value = programmer ["name"];
   value = programmer.address.city;
   value = programmer.work();
    //array içinde obje oluşturma 
   const programmers =[
       {
         name:"mustafa",age:24  },
        { name:"ali",age:23  }
    ]
   value = programmers[0].name;
   console.log(value);


 //Date object and methods
let value;

//  const now = new Date();//şuanki zamanı almamızı sağlar
 const date1 = new Date("11-25-1996 06:15:02"); //25 kasım
 const date2 = new Date("November 25 1996");
 const date3 = new Date("11/25/1996");
 value = date1.getMonth();// ocak ayı 0 an başlar kasım ın yılın hangi ayı olduğun söyler
 value = date1.getDate();//kasım ayının hangi gü olduğu
 value = date1.getDay();//25 kasım hangi gün

 value = date1.getHours();//saat bilgisni
 value = date1.getMinutes();//saat bilgisni
 value = date1.getSeconds();//saat bilgisni
 value = date1.getMilliseconds();//saat bilgisni

  date1.setMonth(7);//ayı değiştirme
  date1.setDate(15);//o ayın hangi gün olduğunu değiştircez 15inde
  date1.setFullYear(1995);
  date1.setHours(0);//doğum saatini 
  date1.setMinutes(15);
  date1.setSeconds(25);
  date1.setMilliseconds(2);
  value = date1
                       
 console.log(value);
 
 
 //karşılaştırma opt
 
 ==  2 değerin eşit olup olmadığı bir tarafta sayı diğer tarafta string varsa 2 side strig algılar çevirilir
 === değerler ve tipler aynı mı dye kontrol eder
 != eşit değilse
 !== hem tip hem değer eşit değilse
 > 
 <
 >=
 <=
//mantıksal bağlaçlar (logic)

not opt: ! tersine çeviririz
and opt: &&
 console.log((2==4))&& ("ahmet "== "ahmet")
koşullardan en az biri bile false olursa genel sonuç false döner
 or opt:||
 en az biri bile true olursa genel sonuç true döner ama 2vside false olurssa genel sonuçta true olur
// if example
const process = 1;
  if(process == 1){

    console.log("işlem1");
  }
  else if(process == 2){
  console.log("işlem2");
  }
  else if(process == 3){
    console.log("işlem3");
    }
    else if(process == 4){
      console.log("işlem4");
      }
      else{
        console.log("geçersiz işlem");
      }
 
      //Ternary operatör
   console.log(number === 100 ? "sayı 100": "sayı 100 değil");
   kısaca döngü yaratma şekli
   ayrıca if koşulu sadece tek işlem içeriyorsa
   süslü parantez kullanmaya bilrsin
 

   //Switch - Case 
   const number = 10;
  switch(number == 10)
  {
   case 1:
     console.log("işlem1");
     break;
    
    case 2:
       console.log("işlem2");
    break;
    
    case 3 : 
    console.log("işlem3");
    break;
   default:
     //yukarıdaki durumlara girmez default a girsin
     console.log("geçeriz işlem");
 //break:case den çıkması için kullanılır
eğer ilk break içıkarırsak 2 döngüye girer  
son döngüde break kullanmazsakta döngüden çıkar
}

//Functions
 function merhaba(name,age){
   if(typeof name === "undefined" name ="bilgiyok"){

   }
    if(typeof age === "undefined" age ="bilgiyok"){

   }
    console.log(`isim:${name}\n yas:${age}`);
   }
   merhaba("murat",25)
   merhaba("ayşe",3);
   merehaba();//bilgi yok 
  }
  diğer yok default inf
  function merhaba(name="bilgi yok",age= "bilgi yok"){
    console.log(`isim:${name}\n yas:${age}`);
   }
   merhaba("murat");  murat bilgiyok
   
   ----
   function square(x){

   console.log(x*x);
   }
  function cube(x){

    console.log(x*x*x);
  }
  let a = square(12);
  return kullanmadığımız için nan verdi
  a= cube(a);
  //144 NAN
function square(x){

   return x*x;
   }
  function cube(x){

  return x*x*x;
  }
  let a = square(12);//let a = cube(square(12));
  a= cube(a);
  
  console.log(a);
 :return fonksionu tamaemen sonlandırır returnden sonra gelen hiç bir zaman çalışmaz
 
 //function expression: değişkeni fonk eşitlemek
   
const merhaba = function(){

  console.log("merhaba");
}
   

//immediately invoked func. expression(IIFE):tanımlandığı yerde çalışan fonk
   (function(name){
    console.log( "merhaba"+ name);

  })("MERT");


  //objenin içinde fonk vara methoddur, dışında ise fonk' dur.
       const database = {
//1 propterty 4 method
    host:"localhost",
    add:  function(){
      console.log("eklendi");
    } ,
    get:function(){
      console.log("elde edildi");
    },
    update:function(id){
    console.log(`id:${id} Güncellendi`);
    },
    delete:function(id){
    console.log(`id:${id} Silindi`);
    }
  }
  console.log(database.host);
  database.add();
  database.delete(10);
  

  //while: döngüleri döngüden çıkana kadar işlemi yapar
    let i = 0;
while(i<10){

console.log(i);
    i++;
}

 //break and continue
let i = 0 ;
  while(i<10){
    console.log(i);
    if(i == 5){
      break;
    }
    i++;
  }
  // 0 dan 5 e kadar
 
  döngünün herhang bi yerinde continue yazarsan döngü bloğunun gerisi çalıştırılmadan en başa dönüp tekrar koşulu kontol eder
let i = 0;
while(i<10){
  if(i==3 ||  i==5){
  continue;
  }
  console.log(i);
  i++;
}
0-1-2
3 e geldiği zaman continue görür tekrar başa döner sonsuz döngü oluşur
 çözüm için
let i = 0;
while(i<10){
  if(i==3 ||  i==5){
     i++;
    continue;
  }
  console.log(i);
  i++;
}
0123456789

//Do-While: en az bir defa çalışma garantisi var,
let i = 0;

do{
  console.log(i);
  i++;

}while(i<10);

//For
 const langs = ["phyton","js","java"];
 
 let index = 0;

 while(index < langs.length){
   console.log(langs[index]);
   index++;
 }
 for ile
const langs = ["phyton","js","java"];
 //yerine
 for( let index = 0;index<langs.length;index++){
   console.log(langs[index]);
 }
 const langs = ["ali","li","mert"];

 langs.forEach(function(lang,index){
  console.log(langs,index);


  //map func
const users = [
   {name:"mert",age:12},
   {name:"ali",age:13}
 ];
 //name deki isimleri alığ ayrı bi dizi oluşturmak için map kullanılabilir

 const names = users.map(function(user){
  return user.name;
 });
 const ages= users.map(function(user){
  return user.age;
 });
 console.log(ages);
 console.log(names);

 })
 
 //for in loop
const user = {
  name:"mert",
  age:25
};
for(let key in user){
  // user ın tüm property lerini gezin name, age i al
  
  console.log(key,user[key]);
}

 name mert
 age 25
 
 //Window object
 console.log(this);//this üzerinde bulunduğumuz obje
 
 //Alert
 alert("merhaba"); pop-up açar
 //confirm
const cevap = confirm("emin misin?");
console.log(cevap);//ok e basarsan true gelir
.........................
const cevap = confirm("emin misin");
 if(cevap){
   console.log("doğrudur");
 }
 else{
   console.log("by");
 
 //kullanıcıdan input alma
    const cevap = prompt("2 + 2 = ?");
   console.log(cevap);
  if (cevap == 4){
    console.log("doğru cevap");
  }
  else{
    console.log("bys");
  }

 //window
   let value;
   value = window.location;
 value = window;
 value = window.location;
 value = window.location.origin;
 value = window.location.host;
 value = window.location.hostname;
 value = window.location.port;
 value = window.location.href;
 value = window.outerHeight;//yükseklik ve genişlik
 value = window.outerWidth;
 value = window.innerHeight;//üstlere bakmadan sayfanın yüksekliğini verir
 
 console.log(value);
 .................
  if(confirm("sayfa yenilensin")){
    window.location.reload 
}
else{
  console.log("sayfa yenilenmedi")
}
 //çubuk ne kadar sağ kaydırılmış
 let value ;
value = window.scrollX;yada scrollY de yapabilriiz
console.log(value);
  
//Scope(kapsam) kavramı:değişkenin nerelerde varo olabilir ?
3 scope çeşidir var
1-global scope:herhagi bir fonk içinde veya koşul durumuunda olmayan

var value1 = 10;
 let value2 = 20;
 const value3 = 30;   

 function func(){

  var value1 = 40;
  let value2 = 50;
  const value3 = 60;
  console.log(value1,value2,value3);
 }
 //func çağrıldıktan sonra çalışır sonrasında içindeki veriler silinir o yüzden 
 // birbirine karışmaz
 func();
 console.log(value1,value2,value3);

2-func. scope:fonk. içinde olan

3-block scope:koşul durumu içinde olan

if(true){

  var a = 10;
  let b = 20;
  const c = 30;

}

*/
/*
  //DOM manipulation:documan object model
  html etiketleri bir araya gelerek dom u oluşturur
 dokuman üzerinde elementlerimizi js ile manipule edebiliriz
   
 -script etiketleri görme
 let value ;
value = document ; 
value = document.scripts.length
value = document.scripts[0];
 

-linkler 
let value ;
value = document ; 
value =document.links;
value= document.links[0];
value= document.links[document.links.length-1];
value= document.links[document.links.length-1].getAttribute("class");//bu linkin class özellğini almak için attiribute
value= document.links[document.links.length-1].getAttribute("href");//bu linkin href özellğini almak için attiribute
value= document.links[document.links.length-1].clasName aynı şey//bu linkin href özellğini almak için attiribute
value= document.links[document.links.length-1].clasList aynı şey//bu linkin href özellğini almak için attiribute

-formlar
let value ;
value = document ; 
value =document.forms;
value =document.forms.length;
value =document.forms[0];
value =document.forms[0].id;//id öz alma
value =document.forms[0].getAttribute("id");//id öz alma
value =document.forms[length-1];
value =document.forms["form"];//form name varsa
value =document.forms[0].name;
value =document.forms[0].getattirubte("name");

-element seçme id ye göre:
bir formu id ile seçme örneği
  let element ; 

  element  = document.getElementById("todo-form");
  console.log(element);

  -element seçme class ismine göre
 let element ; 

  element  = document.getElementsByClassName("list-group-item");
  element  = document.getElementsByClassName("list-group-item")[0];
  element  = document.getElementsByClassNama("card-header");
  

  -element tag a göre seçme
let element ; 

  element  = document.getElementsByTagName("li");
  element  = document.getElementsByTagName("div");


  - query selector-css selector (en iyisi)
let element ; 
 element = document.querySelector("#todo-form");
 element = document.querySelector("#tasks-title");


 -element seçme ve style dğiştirme



 // css ile class ı list group item olan
 element = document.querySelector(".list-group-item");
//sayfadaki li ler seçemek
element = document.querySelector("li");
//divler için
element = document.querySelector("div");
// 

  console.log(element);

  -queryselectorall ile tüm elementleri gösterebilriiz
  let element ; 
 element = document.querySelectorAll(".list-group-item");
 element.forEach(function(el){
   console.log(el)
 })

  console.log(element);
  
const element = document.querySelector("#clear-todos");
  
console.log(element.id);
console.log(element.className);
console.log(element.classList[1]);
console.log(element.textContent);//elementlerintex kısımlarını verir
console.log(element.innerHTML);//element içindeki html etiketleri
console.log(element.href);
console.log(element.href);
console.log(element.style);//elementin css öz
//style ve element öz değiştirme 
 
element.className = "btn-btn-warning";
element.style.color = "#000";
element.style.marginLeft = "20px";
element.href = "http";//bi yere gitmesi çin


console.log(element);

// const element = document.querySelector("#clear-todos");

// element.textContent  ="silin";
// //html ekleme
// element.innerHTML ="<span style ='color:green'> silin</span>"
// // tüm li leri seçmek için ve yazıların rengini değştirmek ve bacgroun
// const elements = document.querySelectorAll("#.list-group-item");
// elements.forEach(function(el){
//   el.style.color = "red";
//   el.style.background ="#000";
// });
//son li yi yada herhangi li yi sçmek için
//ilki 2.3 seçmek sonuncu seçim

//  element2 = document.querySelector("li:first-child");
//  element2 = document.querySelector("li:last-child");
//  element2 = document.querySelector("li:nth-child(2)");
//  element2 = document.querySelector("li:nth-child(3)");
//  element2= docuent.queryselector("li:nth-child(odd)"); 1,3,5,7 ler, seçer
//  element2= docuent.queryselector("li:nth-child(even)"); 2,4,6,8 ler, seçer


 //element2 de foreach ile gezinme
//  element2.foreach(function(el){
//    el.style.color ="red";
//  })
// console.log(element2);


-DİNAMİK ELEMENT OLUŞTURMA

let value ; 
 
const todoList =document.querySelector(".list-group");
const todo = document.querySelector(".list-group-item:nth-child(2)");
const cardrow = document.querySelector(".card-row");


value = todoList;
value = todo;
value = cardrow;
 
//child nodes
value = todoList.childNodes;
// value = todoList.childNodes[0]; satır atlamalarıda sayar sadece
//elementleri alması için
value = todoList.children;
//ilk element
value = todoList.children[0];
//son
value = todoList.children[todoList.children.length-1];
value = todoList.children[0].textContent =" değişti";

//cardrow 2. çocuğu ve 2. çocuğun 1. elementi değiştirme değiştirme 
value = cardrow.children[2];
value = cardrow.children[2.].children[1].textContent="deiştir";

value= todoList;
value= todoList.children[0];
//kısa yöntemi
value = todoList.firstElementChild;
//lastelementchild
value = todoList.children.length;
//üsttekinin diğer yolu
value = todoList.childElementCount;

value =cardrow;
//un üstündeki div i conteiner ı almak için
value = cardrow.parentElement;
//element kardeşlerini bulma
value = todo;
//bir önceki kardeşe git
value = todo.previousElementSibling;
//2 sonraki kardeşe git
value = todo.nextElementSibling.nextElementSibling;

console.log(value);


//Dinamik olarak element oluşturma ekleme


//yeni element oluşturma

const newLink = document.createElement("a");
const cardbody = document.getElementsByClassName("card-body")[1];

newLink.id = "clear-todos";
newLink.className ="btnbtn-danger";
newLink.href="htpp.............";
newLink.target = "_blank";

//textcontent ile yazıları değiştirme
newLink.textContent ="farklı sayfaya git";
//2. yol daha güvenli olan yol text node oluşturup ekleme
const text = document.createTextNode("naber");
//card badynin sonuna koyucaz
cardbody.appendChild(text);
console.log(cardbody);
//newlink e yazı ekleme
newLink.appendChild(document.createTextNode("farklı yere git"));
//sonuna newlink i ekliyoruz
cardbody.appendChild(newLink);

console.log(newLink);

//Dinami element Silme
 
 const todoList = document.querySelector("ul.list-group");
 const todoList = document.querySelector("li.list-group-item");
//remove
todos[0].remove();
//remove child
todoList.removeChild(todoList.lastElementChild);
todoList.removeChild(todos[3]);

 console.log(todos);
 console.log(todoList);


 //elementleri birbirleriyle değiştirme

const cardbody = document.querySelectorAll(".card-body");

const newElement = document.createElement("h3");

h3.className = "card-title";
newElement.id ="tasks-title";
newElement.textContent = "yeni todolar";
//eski element
const oldelement = document.querySelector("#tasks-title");

cardbody.replaceChild(newElement,oldelement);

console.log(cardbody);



//dinamik olarak öz. ekleme ve çıkarma


//input class için
// const todoİnput = document.getElementById("todo");
// let element;
// element = todoİnput;
// element = todoİnput.classList;//kaç class var
// element = todoİnput.className = "form-control newClass";//class ekleme
// todoİnput.classList.add("newClass")//class ekleme diğer yol
// todoİnput.classList.add("newClass2")//class ekleme diğer yol
// //classlisten form control çıkarma
// todoİnput.classList.remove("form-control");
// //---------
// element = todoİnput.placeholder;
// element = todoİnput.getAttribute("placeholder");
// //inputa özellik ekleme place holderı değiştirip naber yazma
// todoİnput.setAttribute("placeholder","naber");
// todoİnput.setAttribute("title","input");
// //required isminde attribute varsa true yoksa false dön hasattribute
// // element =todoİnput.hasAttribute("required");
// //name özelliğini kaldırmak
// todoİnput.removeAttribute("name");
// console.log(element);
------------------------------------------------------------------------
EVENTLER
 
ilk olarak todo arayın alanına erişmek için filter id de erişiyoruz
const filterInput = document.getElementById("filter");
console.log(filterInput);
---
evet atamada ilk yöntem fokus ile event atama örneği:

const filterInput = document.getElementById("filter");
filterInput.onfocus = function(){
  console.log("merhaba");
}
2.yöntem tek fonk işleri halledebiliyoruz addEventListenerla(event atama) ilk olarak hangi event oluştuğunu söylüyoruz
event oluştuğunda fonk çalıştırıcaz



const filterInput = document.getElementById("filter");
filterInput.addEventListener("focus",function(e){
  console.log(e);
  console.log(e.type);//focus 
  console.log(e.target);//event nerede oluşmuş
  console.log(e.target.placeholder);
  console.log(e.target.className);
  // console.log("merhaba");
});

//submit eventi çalıştırma tıkladığımızda 
const filterInput = document.getElementById("filter");
// formsubmit olduğunda eventi çalıştırmak istiyoruz
const todoForm = document.getElementById("todo-form");
todoForm.addEventListener("submit",submitForm);

function submitForm(e){
  console.log("submit eventi");
   e.preventDefault();
}
//default olarak sayfa yenilendiği için çok kısa süre gördük hep görmek için
//e.preventdefault kullanıcaz işlemlerin en altında yapmamız güveli olucak

-KLAVYE EVENTLERİ

//keypress: 
ilk olarak herhangi bi tuşa basınca event çalıştırma
document.addEventListener("keypress",run);
function run(e){
  console.log("naber");
}
.....................................
tuşu özelleştirmek içinn which kullanıcaz
document.addEventListener("keypress",run);

function run(e){
  console.log(e.which);//ascı karakterlerini verir
  // console.log(e.key);//hangi tuşa bastığını görmek için
  // console.log("naber");
}


//keydown:tuşa bastığımız anda event tetiklenir

document.addEventListener("keydown",run);
function run(e){
  console.log(e.key);//yukaru aşağı tuşunuda algılar bastığımız anda

}

//keyup:birtane tuşu bıraktığımız anda oluşur
document.addEventListener("keyup",run);
function run(e){
 
   console.log(e.key);
}
..................................
const header = document.querySelector(".card-header");
const todoInput = document.querySelector("#todo");
todoInput.addEventListener("keyup",changeText);

function changeText(e){
// bir input alanından değer almak için önce nerede olduğunu onra value ile değerini alablriz

  header.textContent = e.target.value;//üst bölümede aynısını gelir
  // console.log(e.target.value);
}

-MOUSE EVENTLERİ
 cardbody üzerinde mosuseeventi yapıcaz
2 tane class olduğu için birincisini gösterdik
 
//ilk olarak Click eventi
const cardBody = document.querySelectorAll(".card-body")[1];
const title = document.querySelector("#tasks-title");
//title üzerinden click eventi oluşturmak
title.addEventListener("click",run);

function run(e){
  console.log(e.type);
}
...................................
//double click eventi
const cardBody = document.querySelectorAll(".card-body")[1];

const title = document.querySelector("#tasks-title");
//title üzerinden click eventi oluşturmak
title.addEventListener("dblclick",run);

function run(e){
  console.log(e.type);
}

//mousedown eventi
const cardBody = document.querySelectorAll(".card-body")[1];

const title = document.querySelector("#tasks-title");
//title üzerinden click eventi oluşturmak
title.addEventListener("mousedown",run);

function run(e){
  console.log(e.type);
}

//mouseup eventi:tıklamadan elimizi çektiğimizde oluşur
const cardBody = document.querySelectorAll(".card-body")[1];

const title = document.querySelector("#tasks-title");
//title üzerinden click eventi oluşturmak
title.addEventListener("mouseup",run);

function run(e){
  console.log(e.type);
}

//mouseover :elemente geldiğimiz anda oluşur


const cardBody = document.querySelectorAll(".card-body")[1];

const title = document.querySelector("#tasks-title");
//title üzerinden click eventi oluşturmak
title.addEventListener("mouseover",run);

function run(e){
  console.log(e.type);
}


//mouseout:elementten çıktığımız anda
const cardBody = document.querySelectorAll(".card-body")[1];

const title = document.querySelector("#tasks-title");
//title üzerinden click eventi oluşturmak
title.addEventListener("mouseover",run);

function run(e){
  console.log(e.type);
}

//mouseenter:sadece elemente girdiğimiz zaman çalışır  & mouseleave:sadece cardbody den çıktığımızda çalışır
const cardBody = document.querySelectorAll(".card-body")[1];

const title = document.querySelector("#tasks-title");
//title üzerinden click eventi oluşturmak
cardBody.addEventListener("mouseenter",run);
cardBody.addEventListener("mouseleave",run);

function run(e){
  console.log(e.type);
}

//Input Eventleri
filter alanını seçicez

-Dom contente loaded eventi:sayfanın yüklenmesi bittiğinde çalışır
const filter = document.getElementById("filter");

document.addEventListener("DOMContentLoaded",load);

function load(e){

  console.log( "sayfa geldi");
}

1-focus eventi = girdiğimiz odak yaptığımız heran çalışır
const filter = document.getElementById("filter");

filter.addEventListener("focus",run);

function run(e){

  console.log(e.type);
}


2-blur: odaktan çıkınca çalışır

const filter = document.getElementById("filter");

filter.addEventListener("focus",run);
filter.addEventListener("blur",run);
function run(e){
  console.log(e.type);
}

3-Paste event:bir şey yapıştırıldığı anda oluşur
4-copy event: kopyaladığımız anda
const filter = document.getElementById("filter");

filter.addEventListener("paste",run);
filter.addEventListener("copy",run);

function run(e){

  console.log(e.type);
}

5-cut event:
const filter = document.getElementById("filter");

filter.addEventListener("cut",run);


function run(e){

  console.log(e.type);
}

6-select:yazının tamamını yada belli kısını seçince çalışır
const filter = document.getElementById("filter");

filter.addEventListener("select",run);


function run(e){

  console.log(e.type);
}

//Event capturing Event Bubbling


1-Event Bubbling: en içten çağrılan event dışa doğru kabarcık şeklinde kasama yapar
document.querySelector(".container").addEventListener("click",function(){
  console.log("div container");
});
document.querySelector(".card.row").addEventListener("click",function(){
  console.log("card row");
});
document.querySelectorAll(".card-body")[1].addEventListener("click",function(){
  console.log("card-body");
});
 
2-Event Capturing(delegation):olay yakalama
örnekte card body de herhanbi yere basmamımza rapmen yne click i yakalıyor
const cardBody = document.querySelectorAll(".card-body")[1];
cardBody.addEventListener("click",run);
function run(e){

  console.log("naber");
}
...........................
const cardBody = document.querySelectorAll(".card-body")[1];
cardBody.addEventListener("click",run);
function run(e){
if(e.target.className === "fa fa-remove"){
  console.log("silme işlemi");}
if(e.target.id ==="filter"){
  console.log("filtreleme");
}
if(e.target.id ==="clear todos"){
  console.log("tüm tasklarısilme işlemi")
}
}

//Session(oturum) storage: oturumumuz açık kaldığı sürece session ile depoladığımız veriler durur
key value değerleriyle verileri depolamamızı sağlar
 
Key-Value:


//buttonları seçmek

const add = document.querySelector("#add");
const del = document.querySelector("#delete");
const clear = document.querySelector("#clear");

//inputlar

const addkey = document.querySelector("#addkey");
const addvalue = document.querySelector("#addvalue");
const deletekey = document.querySelector("#deletekey");

add.addEventListener("click",addItem);
del.addEventListener("click",deleteItem);
clear.addEventListener("click",clearItem);

function addItem(e){
 //inputtan gelen değerleri alma
 //sekme sadece (oturum) açık olduğunda bilgiler kalır
  sessionStorage.setItem(addkey.value,addvalue.value);

}
function deleteItem(e){
//bir keye karşılık gelen değeri silme remove
sessionStorage.removeItem(deletekey.value);  

}
function clearItem(e){
//tüm verileri silmek için
  sessionStorage.clear();
}


Local Storage:değerleri ster consoldan ister js de silebilirsn aksi halde değerler hep orda kalır


//setitem

// localStorage.setItem("hareket","burgee");
// localStorage.setItem("tekrar",50);

//clear local storage
// localStorage.clear();

// localStorage.setItem("hareket","burgee");
// localStorage.setItem("tekrar",50);
//get item ile var mı diye sorgulayabiliriz

// console.log(localStorage.getItem("sport"));

// if(localStorage.getItem("sport") === null)
// {
//   console.log("sorguladığınız veri yok");
// }
// else{
//   console.log("bulunuyor");
// }

//local storage a array yazma local storage sadece string değer kabul ettiği için array yazma:

// const todos = ["todo1","todo2","todo3"];
// // localStorage.setItem("todos",todos);
// // console.log(localStorage.getItem("todos"));//string olarak almak zorunda kaldık
// //direkt array olarak almak için JSON kullandık
// // localStorage.setItem("toos",JSON.stringify(todos));
// const value= JSON.parse(localStorage.getItem("todos"));//her elemanı ttek tek array gösterir

// console.log(value);


*/
 
//aldığımız değeri array e atayıp local storage yazma
//ilk olarak formu seçicez

const form = document.getElementById("todo-form");
const todoInput = document.getElementById("todo");

form.addEventListener("submit",addTodo);

function addTodo(e){
  //inputtan değeri alıcaz
   const value = todoInput.value;
  let todos;
  if(localStorage.getItem("todos") ===null){
    todos = [];
  }
    else
    {
      //array olarak aldık
      todos =JSON.parse(localStorage.getItem("todos"));
    }
  
 
    todos.push(value);
    

    localStorage.setItem("todos",JSON.stringify(todos));

  e.preventDefault();

}
