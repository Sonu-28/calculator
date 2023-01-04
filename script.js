const ans = document.getElementById('ans');
const btn = document.querySelectorAll('.btn');
const AC = document.getElementById('clear');
const equal = document.getElementById('equal');
const back = document.getElementById('back');
for(var i = 0; i<btn.length; i++){
    btn[i].addEventListener('click', function(e) {
        let value = e.target.innerText;
        console.log(value);
        ans.innerText += `${value}`;
    })
}

AC.addEventListener('click', function(){
    ans.innerText = " ";
})

equal.addEventListener('click', function(){
    if(ans.innerText.length == 0){
        ans.innerText = " ";
    } else {
        let x = ans.innerText;
        let y = eval(x);
        ans.innerText = y;
    }
})

back.addEventListener('click', function(){
   let len = ans.innerText.length;
   let ans1 = ans.innerText.slice(0, len-1);
   ans.innerText = ans1;
})

