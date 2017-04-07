import {ChatRoom} from "./ChatRoom";
import {Message} from "Messages.interface";

let chatRoom = new ChatRoom('My Room');

document.querySelector('#chatName').innerHTML = chatRoom.chatName;

let username = (<HTMLInputElement>document.querySelector('#name'));
let message = (<HTMLTextAreaElement>document.querySelector('#message'));
let messageList = document.querySelector('#messageList');

document.querySelector('#add').addEventListener('click', (ev) => {
    let userMessage: Message = {
        username: username.value,
        message: message.value,
        date: new Date()
    }

    chatRoom.addMessage(userMessage);

    let messages = chatRoom.messages;

    let result = '';
    messages.forEach( (el) => {
        result = `${result}<li>${el.username}:${el.message}</li>`
    });

    messageList.innerHTML = result;
});

/*let testMessage:Message = {
    username: 'Juan',
    message: 'Hola Mundo',
    date: new Date()
}

chatRoom.addMessage(testMessage);*/

