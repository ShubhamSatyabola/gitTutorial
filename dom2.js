var form = document.getElementById('addform');
var array = []

form.addEventListener('submit', setlocalStorage)
//localstorage.setitem
function setlocalStorage(e){
    e.preventDefault();
    
    var Name = e.target.visitor_name.value;
    var email = e.target.visitor_email.value;
    var phone = e.target.visitor_phone.value;
    var data = {"name":Name , "email":email , "phone":phone };
    
    array.push(data)

    data_serialized = JSON.stringify(array);
    
    
    //for (var item=0 ; item < array.length ; i++)
    localStorage.setItem('data', data_serialized);
    //localStorage.setItem('username', Name);
    
    //localStorage.setItem('Email', email);
    
    //localStorage.setItem('Phone', phone);
}



