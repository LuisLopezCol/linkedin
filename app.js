class Storage {
  static saveMessage(messages) {
    localStorage.setItem("messages", JSON.stringify(messages));
  }

  static getMessages() {
    return localStorage.getItem("messages")
      ? JSON.parse(localStorage.getItem("messages"))
      : [];
  }

  static removeMessages() {
    localStorage.removeItem("messages");
  }
}

class Message {
  static addMessage(message, fecha, likes = 0) {
    var newMessage = {
      message: message,
      fecha: fecha,
      likes: likes,
    };
    messages.push(newMessage);
    Storage.saveMessage(messages);
  }

  //   static RemoveMessage(filter = "hola") {
  //     var messages = Storage.getMessages();
  //     console.log(messages);
  //     messages.forEach((message) => {
  //       message[0].filter((element) => element != filter);
  //     });
  //     // messages = messages.filter((element) => element != message);
  //     // Storage.removeMessages();
  //     Storage.saveMessage(messages);
  //   }
}

//Guardmos los mensajes del LS
var messages = Storage.getMessages();
Message.RemoveMessage("hola");
//Almacenar input en LS
var input = document.getElementById("userInput");
input.addEventListener("keyup", function (event) {
  if (event.keyCode === 13) {
    var userInput = document.getElementById("userInput").value;
    var date = `${new Date().getFullYear()}-${new Date().getMonth()}-${new Date().getDate()} ${new Date().getHours()}:${new Date().getMinutes()}`;
    Message.addMessage(String(userInput), String(date));
  }
});
