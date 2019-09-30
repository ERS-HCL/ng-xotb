export interface ITreeNode {
  name: string;
  showChildren: boolean;
  children: any[];
  hasChildren?: boolean;
  selected?: boolean;
  active?: boolean;
}
