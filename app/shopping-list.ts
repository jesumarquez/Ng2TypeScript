import { Component } from 'angular2/core';

interface IListItem {
    name: string;
    purchased: boolean;
}

@Component({
    selector: 'shopping-list',
    templateUrl: 'shopping-list.html'
})

export class ShoppingList {
    list: IListItem[];
    newItem: string;
    
    constructor(){
        this.list = [{
            name: 'Apples',
            purchased: false
        },{
            name: 'Oranges',
            purchased: true
        }]
    }
    
    toggleItem(item: IListItem): void {
        item.purchased = !item.purchased;
    }
    
    // addItem(itemName: string): void {
    //     this.list.push({
    //         name: itemName,
    //         purchased: false
    //     });
    // } 
    addItem(): void {
        this.list.push({
            name: this.newItem,
            purchased: false
        });
        this.newItem = '';
    }   
}