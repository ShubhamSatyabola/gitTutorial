var form = document.getElementById('addform');
var ul = document.getElementById('list-group');

form.addEventListener('submit', setlocalStorage)

//localstorage.setitem
function setlocalStorage(e){
    e.preventDefault();
    
    var Name = e.target.visitor_name.value;
    var email = e.target.visitor_email.value;
    var phone = e.target.visitor_phone.value;
    var data = {Name , email , phone};
    localStorage.setItem(email, JSON.stringify(data));
    showOnScreen(data);
      }
function showOnScreen(data){
    var li = document.createElement('li')
    li.className = 'list-group-item'
    li.textContent = `${data.Name}  ${data.email}  ${data.phone}`
    
    const btn = document.createElement('button')
    btn.className = 'btn btn-dark float-right Delete'
    btn.appendChild(document.createTextNode('Delete'))
    
    btn.onclick = () => {
        localStorage.removeItem(data.email)

        ul.removeChild(li)
    }
    li.appendChild(btn)

    ul.appendChild(li)

}
