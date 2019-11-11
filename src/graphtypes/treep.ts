import GraphType, { NodeField, GlobalDesc, Algorithm, Defaults } from './graphtype';
import * as PC from '@/pseudocode';

const text = `\
<h2>Treep</h2>
The treep is a binary tree where each node gets assigned a random number used to probabilisticly balance the tree.
`

export default class Treep extends GraphType {
  constructor() {
    super("Treep", text);
  }
  
  make_node_fields(): NodeField[] {
    return [
      new NodeField("random", PC.type_u64, PC.code("rand()")),
      new NodeField("left", PC.type_NodeOptMutPtr, PC.null_value),
      new NodeField("right", PC.type_NodeOptMutPtr, PC.null_value),
      new NodeField("children", PC.type_NodeOptMutPtr, PC.number(0))
    ];
  }
  make_global_descs(): GlobalDesc[] {
    return [
      //new GlobalDesc("node_pool", )
    ];
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
