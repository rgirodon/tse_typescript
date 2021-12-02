function greeter(person: string): string {
  return "Hello, " + person.toUpperCase();
}
  
let user: string = "Jacques Fayolle";

let welcomeMsg: string = greeter(user);
  
document.body.textContent = welcomeMsg;