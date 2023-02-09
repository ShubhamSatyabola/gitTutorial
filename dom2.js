//const form = document.getElementById(addform);


//form.addEventListener('submit', setlocalStorage)
//localstorage.setitem
//function setlocalStorage(e){
  //  e.preventDefault();
    var name = document.getElementById(name).value;
    var email = document.getElementById(email).value;
    var phone = document.getElementById(phone).value;
    
    localStorage.setItem('username', name);
    
    localStorage.setItem('Email', email);
    
    localStorage.setItem('Phone', phone);
//}



