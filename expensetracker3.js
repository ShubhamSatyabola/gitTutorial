var form = document.getElementById('addform')
var ul = document.getElementById('list-group')
form.addEventListener('submit', setlocalStorage)
function setlocalStorage(e){
    e.preventDefault();
    
    var amount = document.getElementById('ExpenseAmount').value;
    var description = document.getElementById('Description').value;
    var category = document.getElementById('Category').value;
    
    var data = {amount , description , category};
    localStorage.setItem(category, JSON.stringify(data));
    showOnScreen(data);
      }
function showOnScreen(data){
        var li = document.createElement('li')
        li.className = 'list-group-item'
        li.textContent = `${data.amount}  ${data.description}  ${data.category}`
        
        const btn = document.createElement('button')
        btn.className = 'btn btn-dark float-right Delete'
        btn.appendChild(document.createTextNode('Delete'))
        
        btn.onclick = () => {
            localStorage.removeItem(data.category)
    
            ul.removeChild(li)
        }
        const edit = document.createElement('button')
        edit.className = 'btn btn-dark float-right edit'
        edit.appendChild(document.createTextNode('Edit'))
        
        edit.onclick = () => {
            localStorage.removeItem(data.category)
            ul.removeChild(li)
            amount=data.amount;
            description=data.description;
            category=data.category;
            
    
        }
    
        li.appendChild(btn)
        li.appendChild(edit)
        ul.appendChild(li)
    
    }
    

