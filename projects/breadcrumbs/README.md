# Breadcrumbs

A breadcrumb is a graphical control element frequently used as a navigational aid in user interfaces and on web pages. It allows users to keep track and maintain awareness of their locations within programs, documents, or websites.

## Usages

#### module.ts
```javascript

...

import { XotbBreadcrumbsModule } from 'ng-xotb/navigators/breadcrumbs';

@NgModule({
    imports:[XotbBreadcrumbsModule]
    ...
})

...
```

#### component.html
```html
<xotb-breadcrumbs assistiveText="Breadcrumbs">
    <a *xotbBreadcrumb href="javascript:void(0)">Home</a>
    <a *xotbBreadcrumb routerLink="../support" href="javascript:void(0)">About</a>
</xotb-breadcrumbs>
```

#### component.ts
```javascript

...

@Component({
    templateUrl:'./component.html',
    ...
})
export class DemoComponent {}

...
```

## API
 
#### <xotb-breadcrumbs>

| Property | Description | Type | Default |
| --- | --- | --- | --- |
| [assistiveText] | Assistive text for accessibility | `string` | |
