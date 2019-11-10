import GraphType, { NodeField, GlobalDesc, Algorithm, Defaults } from './graphtype';

const text = `\
<h2>Treep</h2>
The treep is a binary tree where each node gets assigned a random number used to probabilisticly balance the tree
`

export default class Treep extends GraphType {
  constructor() {
    super("Treep", text);
  }
  
  make_node_fields(): NodeField[] {
    return [];
  }
  make_global_descs(): GlobalDesc[] {
    return [];
  }
  make_algorithms(): Algorithm[] {
    return [];
  }
  make_defaults(): Defaults {
    return {
      globals: {},
      nodes: []
    };
  }
}
