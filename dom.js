//console.dir(document);          
//console.log(document.head);
//console.log(document.body);  
//console.log(document.images);
//console.log(document.all);    
//console.log(document.all[24]);

                
//getElementById                                               
//const main=(document.getElementById("main"));
//console.log(main);            
//main.textContent="BOSS";                                                      
//const head = document.getElementById("header-title");
//head.textContent="THE BOSS";        
//head.style.border="solid 5px black";
                       
//getElementByClass                                                                          
//const items = document.getElementsByClassName("list-group-item");
//console.log(items);                        
//items[0].innerHTML="<h1>I Am The Boss</h1>"
//items[0].style.border="dashed 5px blue"
//items[0].style.fontStyle="italic"
//items[2].style.background="green"
//const items = document.getElementsByTagName("li");
//for(var i = 0  ; i < items.length ; i++ ){

//    items[i].style.fontWeight="bold";
 //   items[i].style.color="red";
//    items[i].textContent= "I Am item " + i
//}





//const title = document.getElementsByClassName("title")
//console.log(title)                                                        
//title[0].style.fontWeight='bold'
//title[0].style.color="green"  

/*query selector all
const items=document.querySelectorAll(".list-group-item")
items[1].style.background="green"
items[1].textContent="i am green"
items[1].style.color="green"
//items[2].remove()
*/
/*const odd = document.querySelectorAll("li:nth-child(odd)")
for(var i =0; i<odd.length;i++){
    odd[i].style.background="green"
}
const even = document.querySelectorAll("li:nth-child(even)")
for(var i =0; i<even.length;i++){
    even[i].style.background="pink"
}*/
// Traversing The DOM
const items = document.querySelector('#items')
items.parentNode.style.background='yellow' //can use .parentnode to access parent items
// .parentelement is same as .parentNode use to manipulate the parent element 

//childNode return node list including whitespaces linebreaks 
//to overcome the problem we can use children
//items.childNodes[0].style.background='black' 
items.children[0].style.background='green'


// firstchild and first element child / lastchild and last element child
//items.firstElementChild.innerHTML='<h1>hello brother</h1>'
//items.lastElementChild.innerHTML='<h1>hello brother again</h1>'
//console.log(items.children)
  
//nextsibling and nextelementsibling / previoussibling and previouselementsibling
items.previousElementSibling.style.color='blue'

// creating element and inserting them using Dom
//create element
const div = document.createElement('div')
div.className='hello';
div.id='hello1'
div.setAttribute('title','Hello World')
const divtext = document.createTextNode('Hello world');
div.appendChild(divtext)
const h1=document.querySelector('h1');
document.querySelector('header .container').insertBefore(div, h1)
div.style.fontSize=('50px')

const newdiv = document.createElement('div')
div.className='hello';
div.id='hello2'
const newdivtext = document.createTextNode('Hello world');
newdiv.appendChild(newdivtext)
const item=document.querySelector('.item');
const section = document.querySelector('.contain')
section.insertBefore(newdiv, item)
