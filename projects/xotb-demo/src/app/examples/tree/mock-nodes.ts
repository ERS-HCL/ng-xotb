import { ITreeNode } from 'projects/tree/src/public-api';

export const NODES: ITreeNode[] = [
  {
    name: 'Africa',
    showChildren: false,
    hasChildren: true,
    children: [
      {
        name: 'Algeria',
        showChildren: false,
        hasChildren: true,
        children: [
          {
            name: 'Algeris',
            showChildren: false,
            children: []
          },
          {
            name: 'Algeria child 2',
            showChildren: false,
            children: []
          }
        ]
      },
      {
        name: 'Angola',
        showChildren: false,
        children: []
      },
      {
        name: 'Benin',
        showChildren: false,
        children: []
      }
    ]
  },
  {
    name: 'Asia',
    showChildren: false,
    hasChildren: true,
    children: [
      {
        name: 'Afghanistan',
        showChildren: false,
        hasChildren: true,
        children: [
          {
            name: 'Kabul',
            showChildren: false,
            children: []
          }
        ]
      },
      {
        name: 'Armenia',
        showChildren: false,
        children: []
      },
      {
        name: 'Azerbaijan',
        showChildren: false,
        children: []
      }
    ]
  },
  {
    name: 'Europe',
    showChildren: false,
    hasChildren: true,
    children: [
      {
        name: 'Romania',
        showChildren: false,
        hasChildren: true,
        children: [
          {
            name: 'Bucuresti',
            showChildren: false,
            children: []
          }
        ]
      },
      {
        name: 'Hungary',
        showChildren: false,
        children: []
      },
      {
        name: 'Benin',
        showChildren: false,
        children: []
      }
    ]
  },
  {
    name: 'North America',
    showChildren: false,
    children: []
  }
];
