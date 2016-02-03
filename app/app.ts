import { Component } from 'angular2/core';
import { bootstrap } from 'angular2/platform/browser';
import { ShoppingList } from './shopping-list';

@Component({
    selector: 'my-app',
    template: '<h1>Hello, Angular 2 World!</h1><shopping-list></shopping-list>',
    directives: [ShoppingList]
})
export class AppComponent { } 

bootstrap(AppComponent);