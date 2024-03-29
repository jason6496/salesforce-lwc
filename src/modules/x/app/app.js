import { LightningElement } from 'lwc';

export default class App extends LightningElement {
  value = 'inProgress';

  get options() {
    return [
      { label: 'New', value: 'new' },
      { label: 'In Progress', value: 'inProgress' },
      { label: 'Finished', value: 'finished' },
    ];
  }

  handleChange(event) {
    this.value = event.detail.value;
  }

  // this function will mandate if the input should be required or not.
  get isRequired() {
    return this.value === 'finished';
  }
}
