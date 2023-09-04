function adduser(){
    user_name=document.getElementById("name1").value;
    password=document.getElementById("pwd1").value;
    
    localStorage.setItem("name of the user",user_name);
    localStorage.setItem("password of the user",password);
    window.location="mihome.html";
}