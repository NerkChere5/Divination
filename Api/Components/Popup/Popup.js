import {Component} from '../../Component.js';




class Popup extends Component {
  set visible(value) {
    this._body.setAttribute('visible', value);
  }
  
  
  
  
  _content = null;
  
  
  
  
  async _build() {
    await super._build();
    
    let _popup_button = this._body.querySelector('.popup_button');
    
    this._content = this._body.querySelector('slot');
    
    _popup_button.addEventListener('click', this._on__button_click.bind(this));
  }
  
  _on__button_click() {
    this.visible = false;
    
    this.clear();
  }
  
  
  clear() {
    for (let item of this._content.assignedElements()) {
      item.remove();
    }
  }
}


Popup.init(import.meta.url);
