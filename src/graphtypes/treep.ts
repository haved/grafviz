import GraphType, { NodeField, GlobalDesc, Algorithm, Defaults } from './graphtype';
import { type_u64, code, number, type_NodeOptMutPtr, null_value } from '@/pseudocode';

const text = `\
<h2>Treep</h2>
The treep is a binary tree where each node gets assigned a random number used to probabilisticly balance the tree
`

export default class Treep extends GraphType {
  constructor() {
    super("Treep", text);
  }
  
  make_node_fields(): NodeField[] {
    return [
      new NodeField("random", type_u64, code("rand()")),
      new NodeField("left", type_NodeOptMutPtr, null_value),
      new NodeField("right", type_NodeOptMutPtr, null_value),
      new NodeField("children", type_NodeOptMutPtr, number(0))
    ];
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
