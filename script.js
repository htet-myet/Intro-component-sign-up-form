const form = document.getElementById('form');
const first = document.getElementById('firstname');
const last = document.getElementById('lastname');
const password = document.getElementById('password');
const Email = document.getElementById('email');

function addChange(req){
    
    req.classList.add('error-sign');
    req.style.border = '1.5px solid red';
    req.style.color = 'hsl(0, 100%, 74%)';
    req.classList.add('input');
}

function removeChange(req){
    req.style.border = '1px solid hsl(154, 59%, 51%)';
    req.style.color = 'black';
    req.classList.remove('error-sign');
}


form.addEventListener('submit',(e)=>{
    const pattern =  /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    e.preventDefault();
    var firstName = form['firstname'].value.trim();
    var lastName =  form['lastname'].value.trim();
    var passWord =  form['password'].value.trim();
    var email = form['email'].value.trim();

   if(firstName === ''){
   errorFun('firstname','First Name cannot be empty');
   addChange(first);
   }else{
    validFun('firstname');
    removeChange(first);
   }

   if(lastName === ''){
    errorFun('lastname','Last Name cannot be empty');
    addChange(last);
    }else{
        validFun('lastname');
        removeChange(last);
    }

    if(email === ''){
    errorFun('email','Email cannot be empty');
    addChange(Email);

    }else if(!email.match(pattern)){
        errorFun('email','Looks like not an email')
    }
    else{
        validFun('email');
        removeChange(Email);
    }

    if(passWord === ''){
    errorFun('password','Password cannot be empty');
    addChange(password);
    }else{
        validFun('password');
        removeChange(password);
    }
   
})

function errorFun(field,msg){
    const span =  form[field].parentNode.querySelector('span');
    span.innerText = msg;
    span.style.opacity = 1;
    if(field !== 'email'){
      form[field].value = ' ';
    }
    
    else{
        form[field].style.color = 'hsl(0,100%,74%)';
        form[field].value = 'email@example/com';
    }
    
}

function validFun(field){
    const span = form[field].parentNode.querySelector('span');
    span.style.opacity = 0;

}


