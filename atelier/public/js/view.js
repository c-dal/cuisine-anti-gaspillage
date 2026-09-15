export function renderMessages(messages, container){
    let lignes = [];
    for(let i in messages){
        const message = messages[i];
        const user = message['role'] === 'user'?'Vous: ':'Cuity: ';
        const li = document.createElement('li');
        li.textContent = user + message['texte'];
        lignes.push(li);
    }
    container.replaceChildren(...lignes);
}