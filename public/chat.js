let socket = io.connect('http://localhost:4000');
let output = document.getElementById('output');
let message = document.getElementById('message');
let handle = document.getElementById('handle');
let btn = document.getElementById('send');
let feedback = document.getElementById('feedback');

//on message send
btn.addEventListener('click',()=>{
    socket.emit('chat',{
        message:message.value,
        handle : handle.value
    })
});

//on message typing
message.addEventListener('keypress',()=>{
    socket.emit('typing',handle.value);
});

//recieving message
socket.on('chat',(data)=>{
    output.innerHTML+=`<p><strong>${data.handle}: </strong> ${data.message} </p>`;
});

//when someone is typing
socket.on('typing',(data)=>{
    feedback.innerHTML=`<p><em>${data} is typing... </em></p>`;
});