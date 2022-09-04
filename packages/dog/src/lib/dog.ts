import { Animal } from "shared-nx-animal";

export class Dog extends Animal {
  constructor() {
    super();
    console.log("A dog is created");
  }
}
