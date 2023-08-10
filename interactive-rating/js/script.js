const submit = () => {
    let activediv = document.getElementById('active');
    let star = document.getElementById('star');
    let text = document.getElementById('text');
    let numbers = document.getElementById('numbers');
    var input = document.getElementById('submit');

    activediv.style.display = 'flex';
    star.style.display = 'none';
    text.style.display = 'none';
    numbers.style.display = 'none';
    input.style.display = 'none';

    print(button);
}

const print = (button) => {
    let text_alternative = document.getElementById('text-print');
    text_alternative.innerHTML=`You Selected ${button} out of 5`;
}

var value_button = document.querySelectorAll('#numbers button');
value_button.forEach(btn=>{
    btn.addEventListener("click", function(e){
        e.target.value;
        print(e.target.value);
    })
})

document.getElementById('submit').addEventListener("click", function(){
    submit();
})
