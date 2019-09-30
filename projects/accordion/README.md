# Accordion

An accordion menu is a vertically stacked list of headers (collapsible content) that can be clicked to reveal or hide content associated with them. Accordions are useful when you want to toggle between hiding and showing large amount of content.


## Usages

#### module.ts
```javascript

...

import { XotbAccordionModule } from 'ng-xotb/containers/accordion';

@NgModule({
    imports:[XotbAccordionModule]
    ...
})

...
```

#### component.html
```html
<ul xotb-accordion [(activeName)]="active">
    <ng-template xotbAccordionSection name="A" label="Accordion Title A"
        >This is the content area for section A</ng-template
    >
    <ng-template xotbAccordionSection name="B" label="Accordion Title B"
        >This is the content area for section B</ng-template
    >
    <ng-template xotbAccordionSection name="C" label="Accordion Title C"
        >This is the content area for section C</ng-template
    >
</ul>
```

#### component.ts
```javascript

...

@Component({
    templateUrl:'./component.html',
    ...
})
export class DemoComponent {
    active = 'A';

}

...
```

## API
 
#### <xotb-accordion>

| Property | Description | Type | Default |
| --- | --- | --- | --- |
| [activeName] | Defines expanded section | `string|string[]` | |
| [multiple] | Whether we allow multiple section open at a time | `boolean` | false |
| (activeNameChanged) | Emits when the open sections are going to change, it contains all open sections. | `EventEmitter<string|string[]>` | |


#### <ng-template xotbAccordionSection>

| Property | Description | Type | Default |
| --- | --- | --- | --- |
| [name] | The unique name to use with the activeName of the accordion component. If not provided, it will be auto generated. | `string` | |
| [label] | Displayed as the title of the section | `string | TemplateRef` |  |
| [labelContext] | Context data available as local variable in label, if TemplateRef | `any` | |