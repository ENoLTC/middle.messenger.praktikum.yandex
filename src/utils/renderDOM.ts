import {Component} from '../components/Component';

export function render(selector: string, component: Component) {
  const root = document.querySelector(selector);
  // Можно завязаться на реализации вашего класса Block
  root!.prepend(component.getContent());
  return root;
}
