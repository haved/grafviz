import GraphType, { NodeField, GlobalDesc, Algorithm, Parameter, Defaults } from './graphtype';
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
      new NodeField("value", PC.type_i32),
      new NodeField("left", PC.type_NodeOptMutPtr, PC.null_value),
      new NodeField("right", PC.type_NodeOptMutPtr, PC.null_value),
      new NodeField("children", PC.type_u32, PC.number(0)),
      new NodeField("random", PC.type_u64, PC.code("rand()"))
    ];
  }
  make_global_descs(): GlobalDesc[] {
    return [
      new GlobalDesc("node_pool", PC.init_NodePool, ()=>{})
    ];
  }
  make_algorithms(): Algorithm[] {
    return [
      new Algorithm("make_node", [new Parameter("value", PC.type_i32)]),
      new Algorithm("merge", [new Parameter("a", PC.type_NodeOptMutPtr), new Parameter("b", PC.type_NodeOptMutPtr)], PC.type_NodeOptMutPtr)
    ];
  }
  make_defaults(): Defaults {
    return {
      globals: {},
      nodes: []
    };
  }
}
