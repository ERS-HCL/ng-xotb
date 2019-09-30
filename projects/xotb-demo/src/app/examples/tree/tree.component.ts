import { Component } from '@angular/core';
import { NODES } from './mock-nodes';
import { ITreeNode } from 'projects/tree/src/public-api';

@Component({
  templateUrl: './tree.component.html'
})
export class DemoTreeComponent {
  title = 'Angular tree like structure';

  nodes: ITreeNode[] = NODES; // pull here from the server.

  handleSelect(node) {
    console.log(node);
  }
}
