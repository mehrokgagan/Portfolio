let toggle = document.getElementById('toggle');
toggle.style.height='3.5rem';
toggle.style.width='3.5rem';
toggle.style.borderRadius='5vh';


let color = 1

toggle.addEventListener('click', ()=>{

    if (color == 1){
        document.body.style.background='skyblue';
        document.body.style.color='black';

        color = 2
    }
    else if(color == 2)
    { document.body.style.background='#414141';
        document.body.style.color='white';
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
