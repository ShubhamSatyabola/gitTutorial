var form =document.getElementById('addForm');
var itemList = document.getElementById('items');
var filter = document.getElementById('filter');

//form submit event
form.addEventListener('submit', addItem);
//add RemoveEvent
itemList.addEventListener('click', removeItem);
//addFilterEvent
filter.addEventListener('keyup', filterItems);
//addItem
function addItem(e){
    e.preventDefault();

    //Get Input Value
    var newItem = document.getElementById('item').value;

    //create new li element
    var li = document.createElement('li');
    //addClass
    li.className = 'list-group-item';
    //add text node with input value
    li.appendChild(document.createTextNode(newItem));


    //task to add edit button
    var editBtn = document.createElement('button');
    editBtn.className='btn btn-danger btn-sm float-right edit';
    editBtn.appendChild(document.createTextNode('Edit'));
    li.appendChild(editBtn);

    
    var deleteBtn = document.createElement('button');
    deleteBtn.className='btn btn-danger btn-sm float-right delete';
    deleteBtn.appendChild(document.createTextNode('X'));
    li.appendChild(deleteBtn);
    

    itemList.appendChild(li);

}
//RemoveItem function
function removeItem(e){
    if (e.target.classList.contains('delete')){
        if(confirm('Are You Sure?')){
            var li =e.target.parentElement;
            itemList.removeChild(li)
        }
    }
}
//filterItem Function\
function filterItems(e){
    var text = e.target.value.toLowerCase();
    var items=itemList.getElementsByTagName('li');
    Array.from(items).forEach(function(item){
        var itemName=item.firstChild.textContent;
        if(itemName.toLowerCase().indexOf(text)!=-1){
            item.style.display = 'block';
        }else{
            item.style.display='none';
        }
    })


}
