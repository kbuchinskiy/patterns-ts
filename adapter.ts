interface IOldInterface {
  send();
}

class ClassNeedToAdapt implements IOldInterface {
  send() {
    console.log("processing request");
  }
}

interface INewInterface {
  sendRequest();
}

class Adapter extends ClassNeedToAdapt implements INewInterface {
  sendRequest() {
    this.send();
  }
}
// class Adapter implements INewInterface {
//   sendRequest() {
//     new ClassNeedToAdapt().send();
//   }
// }

new Adapter().sendRequest();
