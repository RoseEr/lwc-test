import { LightningElement, api } from 'lwc';

export default class StarshipHex extends LightningElement {

    @api hexId;
    @api ship;
}