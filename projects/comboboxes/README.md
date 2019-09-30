# Combobox

A Combobox is a commonly used GUI widget (or control). Traditionally, it is a combination of a drop-down list or list box and a single-line editable text box that allows a user to either type a value directly or select a value from the list. The term "combo box" is sometimes used to mean a "drop-down list".


## Usages

#### module.ts
```javascript

...

import { XotbComboboxesModule } from 'ng-xotb/controls/comboboxes';

@NgModule({
    imports:[XotbComboboxesModule]
    ...
})

...
```

#### component.html
```html
<xotb-combobox
    label="Make a choice"
    [options]="options"
    [(open)]="open"
    [(selection)]="selection"
    (selectionChange)="handlerChange($event)"
    >
    <input xotbCombobox placeholder="Select an Option"  />
</xotb-combobox>
```

#### component.ts
```javascript

...

import { FormControl, Validators } from '@angular/forms';

@Component({
    templateUrl:'./component.html',
    ...
})
export class DemoComponent {
    options = ['One', 'Two', 'Three'];

    selection: string = null;

    open:boolean = false;
    
    handlerChange= e => {
        console.log(e);
    }
}

...
```

# Autocomplete

An Auto Completion is a mechanism frequently used in the websites to provide the user with a list of suggested options for the beginning of the word, which he/she has typed in a text box. The user can then select an item from the list to be displayed in the input field.

#### autocomplete.component.html
```html
<xotb-combobox
  label="Who is your favorite superhero?"
  [options]="filteredHeroes$ | async"
  [(open)]="open"
  [(selection)]="superhero"
  variant="lookup"
>
  <input
    xotbCombobox
    type="text"
    placeholder="Hint: type `man` or `r`"
    [formControl]="inputCtrl"
  />
</xotb-combobox>
```

#### autocomplete.component.ts
```javascript

...

import { FormControl, Validators } from '@angular/forms';

@Component({
    templateUrl:'./component.html',
    ...
})
export class DemoComponent {
    superheroes = [
        'Hulk',
        'Flash',
        'Superman',
        'Batman',
        'Spiderman',
        'Iron Man',
        'Thor',
        'Wolverine',
        'Deadpool'
    ];
    filteredHeroes$: Observable<any[]>;
    superhero: string = null;

    inputCtrl = new FormControl();

    open: boolean;

    constructor() {
        this.filteredHeroes$ = this.inputCtrl.valueChanges.pipe(
        startWith(''),
        map(val => (!val ? [...this.superheroes] : this.filter(val)))
        );
    }

    private filter(value: string): any[] {
        const filterValue = value.toLowerCase();
        return this.superheroes.filter(
        hero => hero.toLowerCase().indexOf(filterValue) > -1
        );
    }
}

...
```

## API
 
#### <xotb-file-upload>

| Property | Description | Type | Default |
| --- | --- | --- | --- |
| `[variant]` | Changes purpose/styles of the input | `'base' | 'lookup'` | `'base'` |
| `[selection]` | Accepts a string or array of values that are currently selected | `any` | `false` |
| `[open]` | Whether menu with options is visible | `boolean` | `false` |
| `[multiple]` | Allows multiple selections | `boolean` | `false` |
| `[label]` | Input label | `string | TemplateRef` |  |
| `[visibleLength]` | Determines the height of the menu. If set to 0 it will display all available options | `0 | 5 | 7 | 10` | `5` |
| `[loading]` | Whether options are loading | `boolean` | `false` |
| `[loadingMore]` | Whether you are dynamically loading in more items to the menu | `boolean` | `false` |
| `[closeOnSelection]` | Whether a mouse/keyboard selection should close menu | `boolean` | `true` |
| `[options]` | Array of unique items in the menu | `string[] | XotbComboboxOptionItem[]` |  |
| `[selectionValueFn]` | Function that calculates diplayed value on the input element | `(string[]): string` | `Function` |
| `(openChange)` | Emits event when the menu should show or hide | `EventEmitter<boolean>` | `false` |
| `(selectionChange)` | Emits with the newly selected items based on user's actions | `EventEmitter` |  |