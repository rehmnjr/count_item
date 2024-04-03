let count = 0;

let temp =  document.getElementById("add_btn");
    temp.addEventListener("click", myfunction);
function myfunction(){
    count+=1;
let updateitemtxt = document.querySelector('#countitem');
updateitemtxt.innerHTML = `Total ${count} items has been added`;


let add = `<div class="add"> ${count} Item added </div>`
document.querySelector('.cont3').innerHTML +=add; 

}


let  numberReset = document.querySelector('.reset_btn');
numberReset.addEventListener("click", resetfun);
function resetfun(){
    if(count>0){
    count=0;
    let updateitemtxt = document.querySelector('#countitem');
    updateitemtxt.innerHTML = `Total ${count} items has been added`;

document.querySelector('.cont3').innerHTML ="";
   
}
else{
    alert('0 Items Found');
}
 }

let numberRemove = document.getElementById('rmvOne');
numberRemove.addEventListener("click", rmvfun);

function rmvfun(){
    if (count>0){
  count-=1;
  let updateitemtxt = document.querySelector('#countitem');
  updateitemtxt.innerHTML = `Total ${count} items has been added`;

  let container =document.querySelector('.cont3');
  let lastdiv = container.lastElementChild;
  container.removeChild(lastdiv);
}
else{
    alert('No items are left');
}
}