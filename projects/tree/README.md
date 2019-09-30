# Tree
Tree is a graphical control element that presents a hierarchical view of information. Each item (often called a branch or a node) can have a number of subitems

## Usages

#### module.ts
```javascript

...
import { XotbTreeModule } from 'ng-xotb/tree';

@NgModule({
    imports:[XotbTreeModule]
    ...
})

...
```

#### component.html
```html
<xotb-tree [treeData]="nodes" (onSelect)="handleSelect($event)"></xotb-tree>
```

#### component.ts
```javascript

...

import { ITreeNode } from 'ng-xotb/tree';

@Component({
    templateUrl:'./component.html',
    ...
})
export class DemoComponent {

    nodes: ITreeNode[] = NODES; // pull here from the server.

    handleSelect(node) {
        console.log(node);
    }
}

...
```

## API
 
#### <xotb-tree>

| Property | Description | Type | Default |
| --- | --- | --- | --- |
| `[treeData]` | JSON array of `ITreeNode` object.  | `ITreeNode[]` |  |
| `(onSelect)` | Emits when we click on tree node | `EventEmitter<ITreeNode>` |  |