import { LightningElement, track } from 'lwc';

export default class HelloWorld extends LightningElement {
    @track greeting = 'World';

    changeHandler(event) {
        // this.greeting[0] = event.target.value;
        this.greeting = event.target.value;
    }
}