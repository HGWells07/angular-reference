# Angular Basics

- [Angular Basics](#angular-basics)
  - [the *app.module.ts* file](#the-appmodulets-file)
  - [Models](#models)
  - [Components](#components)
    - [Structure](#structure)
    - [PlayerListComponent example](#playerlistcomponent-example)
    - [Testing](#testing)
    - [Passing state between components child/parent](#passing-state-between-components-childparent)
      - [@Input](#input)
      - [@Output](#output)
    - [@Input and @Output example](#input-and-output-example)
  - [Routing](#routing)
  - [Directives](#directives)
  - [Observables](#observables)
  - [Pipes](#pipes)

## the *app.module.ts* file

*For a further understanding of the Angular NgModule structure check the [documentation](https://angular.io/guide/ngmodules)*

Angular takes the *app.module.ts* file as a starting point for rendering the application, here is its general structure (from this projects [app.module.ts](./../../src/app/app.module.ts)):

```ts
// all the import statements that are required

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

...

// the NgModule decorator takes a metadata 
// object that describes how to compile a 
// component's template and how to create an 
// injector at runtime.

@NgModule({
  declarations: [
    
    // All the components in the project

    AppComponent,
    ...
    PlayerListItemComponent,
  ],
  imports: [

    // All the tools and libraries (called modules)
    // to be used in the app

    BrowserModule,
    ...
    ReactiveFormsModule,
  ],
  providers: [],

  // bootstrap is the component from where
  // the tree compontnt will start rendering
  
  bootstrap: [AppComponent], 
})
export class AppModule {}
```

## Models

Models define the data structures that the app will use in its different components, it can be done using classes or interfaces

 - **Interfaces**: an interface is simply a structural contract that defines what the properties of an object should have as a name and as a type. Is structure that only exists within the context of TypeScript. The TypeScript compiler uses interfaces solely for type-checking purposes. Once your code is transpiled to its target language, it will be stripped from its interfaces since JavaScript in not typed.

Example: Player Interface: [player.ts](../../src/app/models/player.ts)

```ts
export interface Player {
  id: String;
  name: String;
  is_active: boolean;
  photo_id: String;
  position_id: String;
  team_id: String;
}
```

- **Classes**: ES6 introduced class officially to the JavaScript ecosystem. TypeScript boosts JavaScript classes with extra power such as type-checking and static properties. This also means that whenever we transpile our code to whatever target JavaScript of our choice, the transpiler will keep all of our class code present in the transpiled file. Hence, classes are present throughout all the phases of our code.

  - As always, a class has to be instanciated
  - It can have static functions or values (no need for instanciation)

Example: Player Class

```ts
class Player {
  static create(event: { 
    name: string,
    is_active: boolean, 
    team_id: string,
    position_id: string,
    photo_id: string
  }) {
    return { 
      name: event.name,
      is_active: event.is_active,
      team_id: event.team_id,
      position_id: event.position_id,
      photo_id: event.photo_id
    };
  }
}
```

*More details on [when using **classes** vs **interfaces** in typescript](https://ultimatecourses.com/blog/classes-vs-interfaces-in-typescript)*

## Components

*For a further understanding of the Angular Components structure check the [documentation](https://angular.io/guide/architecture-components)*

### Structure

- ***.component.ts*** files: Contains the logic of the component

- ***.component.html*** files: Is the visual template of the component

- ***.component.sass*** files: Styles the template of the component

- ***.component.spc.ts*** files: Tests the components logic and rendering

### PlayerListComponent example

The *player-details.component.ts* file

```ts
import { Component, OnInit } from '@angular/core';
import { Player } from './../../../models/player';
import { PlayerService } from './../../../services/player.service';

/*
  The @Component decorator identifies the class 
  immediately below it as a component class, and 
  specifies its metadata. 
*/

@Component({
  /*
    selector: when using the <app-player-list> tag
    in some HTML template Angular will render
    an instance from this component
  */
  selector: 'app-player-list',

  /*
    templateUrl: indicates what HTML template to use
    when rendering the component
  */
  templateUrl: './player-list.component.html',

  /*
    styleUrls: the styling correspondent to the
    components HTML template
  */
  styleUrls: ['./player-list.component.scss'],
})
export class PlayerListComponent implements OnInit {

  /*
    players: analog to a state in React, is a
    component level state
  */
  players: Player[] = [];

  /*
    inside the constructor one instanciates Observables
    that are basically arrays that change over time
    like data from an API, in this case, is a service
  */
  constructor(private playerService: PlayerService) {}

  /*
    ngOnInit: Analog to componentWillMount, 
  */
  ngOnInit(): void {
    this.playerService
      //the player service manages the data
      //from the players
      .getPlayers() 
      //the getPlayers() method returns an observable
      //to acces to its data we subscribe to it
      .subscribe((players) => (this.players = players));
  }
}
```

The template: *player-details.component.html* file

```html
<div>
  <div class="separation"></div>
  <div class="card">
    <app-player-list-item
      class="list-group list-group-flush"
      <!--
        *ngFor is a directive, this iterates
        the list of players that we got 
        subscribed to in the component
        and will create a 'app-player-list-item'
        for each item
      //-->
      *ngFor="let player of players"

      <!--
        This is data binding, where sending a 
        player from the ngFor and indicating
        it will be used as a prop
      //-->
      [player]="player"
    >
    </app-player-list-item>
  </div>
</div>
```

### Testing

*For further understanding of Angular Components Testing check the [documentation](https://angular.io/guide/testing-components-basics)*

### Passing state between components child/parent

#### @Input

![Data flow input](https://angular.io/generated/images/guide/inputs-outputs/input.svg)

Use the @Input() decorator in a child component or directive to let Angular know that a property in that component can receive its value from its parent component. It helps to remember that the data flow is from the perspective of the child component. So an @Input() allows data to be input into the child component from the parent component.

To illustrate the use of @Input(), lets imagine a child and parent component:

*parent.component.ts*

```ts
export class AppComponent {
  currentItem = 'Television';
}
```

Template: *parent.component.html*

```html
<app-item-detail [item]="currentItem"></app-item-detail>
```

*child.component.ts*

```ts
import { Component, Input } from '@angular/core'; // First, import Input
export class ItemDetailComponent {
  @Input() item: string; // decorate the property with @Input()
}
```

Template: *child.component.html*

```ts
<p>
  Today's item: {{item}}
</p>
```

![](https://angular.io/generated/images/guide/inputs-outputs/input-diagram-target-source.svg)

<hr />

#### @Output

![Data flow output](https://angular.io/generated/images/guide/inputs-outputs/output.svg)

Use the @Output() decorator in the child component or directive to allow data to flow from the child out to the parent.

An @Output() property should normally be initialized to an Angular EventEmitter with values flowing out of the component as events.

*parent.component.ts*

```ts
export class AppComponent {
  items = ['item1', 'item2', 'item3', 'item4'];

  addItem(newItem: string) {
    this.items.push(newItem);
  }
}
```

Template: *parent.component.html*

```html
<app-item-output (newItemEvent)="addItem($event)">
</app-item-output>
```

*child.component.ts*

```ts
import { Output, EventEmitter } from '@angular/core';

export class ItemOutputComponent {

  @Output() newItemEvent = new EventEmitter<string>();

  addNewItem(value: string) {
    this.newItemEvent.emit(value);
  }
}
```

Template *child.component.html*

```html
<label>Add an item: <input #newItem></label>
<button (click)="addNewItem(newItem.value)">
  Add to parent's list
</button>
```

### @Input and @Output example

![Data flow output](https://angular.io/generated/images/guide/inputs-outputs/input-output-diagram.svg)

## Routing

*For a further understanding of the Angular Routes API check the [documentation](https://angular.io/guide/router)*

## Directives

*For a further understanding of the Angular Directives check the [documentation](https://angular.io/guide/attribute-directives) and [testing directives](https://angular.io/guide/testing-attribute-directives)*

## Observables

*For a further understanding of the Angular Observables check the [documentation](https://angular.io/guide/observables-in-angular)*

## Pipes

*For a further understanding of the Angular Pipes check the [documentation](https://angular.io/guide/pipes) and [testing pipes](https://angular.io/guide/testing-pipes)* 



