let toggle = document.getElementById('toggle');
toggle.style.height='3.5rem';
toggle.style.width='3rem';
toggle.style.borderRadius='2vh';


let color = 1

toggle.addEventListener('click', ()=>{

    if (color == 1){
        document.body.style.background='lightGreen';
        color = 2
    }
    else if(color == 2)
    { document.body.style.background='pink';
        color = 3
    }
    else if(color == 3){
        document.body.style.background='skyBlue';
        color = 4
    }
    else if(color==4){
        document.body.style.background='yellow';
        color = 5
    }
    else if(color==5){
        document.body.style.background='teal';
        color = 6
    }
    else if(color==6){
        document.body.style.background='orange';
        color = 7
    }
    else if(color == 7){
        document.body.style.background='#7171ff';
        color = 1
    }
})

document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let message = document.getElementById('message').value;

    if(name && email && message) {
        alert(`Thank you, ${name}. Your message has been sent!`);
        
    } else {
        alert('Please fill out all fields.');
    }
});
