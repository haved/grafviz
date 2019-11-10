import GraphType, { NodeField, GlobalDesc, Algorithm, Defaults } from './graphtype';

export default class InfoGraphType extends GraphType {
  constructor() {
    super("Graphviz", "_graphviz");
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