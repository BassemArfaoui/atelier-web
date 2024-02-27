function addTask(){
    const nom=document.getElementById("name");


    const tasklist=document.getElementById("List")
    const contenu=document.getElementById("task");


    if(nom.value.trim()!==''&& contenu.value.trim()!==''){
        const newTask=document.createElement('li');
        newTask.textContent=nom.value +" : "+ contenu.value;
        newTask.onclick=function(){
            this.removeEventListener();
        };
        
        
        tasklist.appendChild(newTask);
        nom.value='';
        contenu.value='';

    }
}