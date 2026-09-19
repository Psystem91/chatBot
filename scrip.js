const whatsappNumber = "525534810115"
//const whatsappNumber = "525532536329"
function openChat(){
    document.getElementById("chatContainer").style.display = "block";
}
function closeChat(){
    document.getElementById("chatContainer").style.display = "none";
}
function addMessage(text, type){
    const chatMessages = document.getElementById("chatMessenger");
    const message = document.createElement("div");
    message.classList.add("message");
    message.classList.add(type);
    message.innerHTML = text;
    chatMessages.appendChild(message);
    chatMessages.scrollTop = chatMessages.scrollHeight;
}
function selectOption(option){
    //console.log("opcion seleccionada:", option);
    switch(option){
        case "Informacion":
            addMessage("Solicitar Informacion","user");
            setTimeout(function(){
                addMessage("Claro ¿Que informacion necesitas","bot")
            },1000);
            break;
        
        case "servicios":
            addMessage("Quiero conocer tus servicios","user");
            setTimeout(function(){
                addMessage(
                    `Nuestros Servicio son:
                    <br><br>
                    Desarrollo de sofware
                    <br><br>
                    Pagina Web
                    <br><br>
                    Automatizacion de sofware
                    <br><br>
                    Chatbots
                    <br><br>
                    Base de datos
                    <br><br>
                    Excel/Power BI`,
                    "bot"
                )
            },1000);
            break;
        
        case "cita":
            addMessage("Quiero Agendar una Cita", "user");
            setTimeout(function(){
                addMessage(
                    `Excelente
                    <br><br>
                    Para comenzar escribe:
                    <br><br>
                    <b>Mi nombre es:</b>
                    Seguido de tu nombre`, "bot"
                ) 
            },1000);
        
        case "operador":
            addMessage("Quiero hablar con un asesor", "user");
            setTimeout(function(){
                addMessage(
                    `Claro
                    <br><br>
                    Puedes continuar directamente con unos de nuestros asesores
                    <br><br>
                    <button id"operatorButton" onclick="openWhatsapp()"> Abrir Whatsapp</button>`, "bot"
                )
            },1000);

    }   
}
function sendMessage(){
    const input = document.getElementById("userInput");
    //console.log(input);
    const text = input.value.trim();
    if(text === ""){
        return;
    }
    addMessage(text,"user");
    input.value = "";
    setTimeout(function(){
        botResponse(text);
    },1000);
}
function botResponse(text){
    const message = text.toLowerCase();
    if(
        text.includes("Hola") ||
        text.includes("hola") ||
        text.includes("buen dia") ||
        text.includes("buenas tardes") ||
        text.includes("buenas noches")
        ){
            addMessage(`¡Hola!
            <br><br>
            ¿En que podemos ayudarte?`, "bot");
        }
        else if(
            text.includes("precio") ||
            text.includes("costo") ||
            text.includes("cotizacion") ||
            text.includes("cotizacion")
        ){
            addMessage(
                `Con gusto podemos realizar una cotizacion.
                <br><br>
                Indicame que servicio necesitas`,"bot"
            );
        }
        else if(
            text.includes("cita") ||
            text.includes("agendar")
        ){
            addMessage(
                `Claro.
                <br><br>
                POdemos ayudarte a programar una cita`, "bot"
            );
        }
        else if(
            text.includes("mi nombre es")
            ){
                let nombre = text.replace("mi nombre es", "");
                addMessage(
                    `Mucho gusto<br>${nombre}<br>
                    <br><br>
                    ¿Que dia desea programar una cita?`, "bot"
                );
            }
            else{
                addMessage(
                    `Gracias por tu mensaje
                    <br><br>
                    Para una atencion mas especifica puedes comunicarte con uno
                    de nuestros asesores
                    <br><br>
                    <button id"operatorButton" onclick"openWhatsApp()">
                        Hablar por WhatsApp</botton>`, "bot"
                );
            }

}
function openWhatsapp(){
    const message = encodeURIComponent(
        "Hola, me comunique desde el chatbot de la pagina web y necesito ayuda"
    );
    const url = "https://wa.me/" +
    whatsappNumber +
    "?text=" +
    message;
    window.open(url, "_blank");
}
document.getElementById("userInput").addEventListener("keydown", function(event){
    if(event.key === "Enter"){
        sendMessage();
    }
});