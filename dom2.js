var form = document.getElementById('addform');
var ul = document.getElementById('list-group');

form.addEventListener('submit', setlocalStorage)
window.addEventListener('DOMContentLoaded', ()=>{
    axios.get('https://crudcrud.com/api/74c468408b454e348d13bb19d875edac/basicInfo')
.then((res)=>{for(i in res.data){
    let x = res.data[i]
    showOnScreen(x)

}})
})


//localstorage.setitem
function setlocalStorage(e){
    e.preventDefault();
    
    var Name = e.target.visitor_name.value;
    var email = e.target.visitor_email.value;
    var phone = e.target.visitor_phone.value;
    var data = {Name , email , phone};
    axios.post('https://crudcrud.com/api/74c468408b454e348d13bb19d875edac/basicInfo', data)
    .then((res)=> showOnScreen(res.data))
    .catch((err)=>console.log(err))

    
    //localStorage.setItem(email, JSON.stringify(data));
    
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
    const edit = document.createElement('button')
    edit.className = 'btn btn-dark float-right edit'
    edit.appendChild(document.createTextNode('Edit'))
    
    edit.onclick = () => {
        localStorage.removeItem(data.email)
        ul.removeChild(li)
        document.getElementById('yourname').value=data.Name;
        document.getElementById('email').value=data.email;
        document.getElementById('phone').value=data.phone;
        

    }

    li.appendChild(btn)
    li.appendChild(edit)
    ul.appendChild(li)

}
