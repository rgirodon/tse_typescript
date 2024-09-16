function greeter(person: string): string {
  return "Hello, " + person.toUpperCase();
}
  
let user: string[] = ["Bruno Sauviac"];

let welcomeMsg: string = greeter(user[0]);
  
document.body.textContent = welcomeMsg;