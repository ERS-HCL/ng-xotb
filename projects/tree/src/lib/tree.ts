import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ITreeNode } from './tree-node';

@Component({
  selector: 'xotb-tree',
  templateUrl: './tree.html',
  host: {
    '[class.xotb-tree]': 'true'
  }
})
export class Tree {
  @Input() treeData: ITreeNode[];

  // tslint:disable-next-line: no-output-on-prefix
  @Output() onSelect = new EventEmitter();

  toggleChild(node: ITreeNode) {
    this.deactivateAllNode(this.treeData);
    node.showChildren = !node.showChildren;

    this.onSelect.emit({ ...node, active: true });
    setTimeout(() => (node.active = true));
  }
  handleSelect(node: ITreeNode) {
    this.deactivateAllNode(this.treeData);
    this.onSelect.emit(node);
  }

  deactivateAllNode(nodes: ITreeNode[]) {
    nodes.map(node => {
      node.active = false;
      this.deactivateAllNode(node.children);
    });
  }
}
