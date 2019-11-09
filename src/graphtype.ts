export class GlobalDesc {
}

export class NodeField {
}

export class Algorithm {
}

type Defaults = {globals:object, nodes:object[]};

export abstract class GraphType {
  title: string;
  description:string;
  node_fields: NodeField[];
  global_descs: GlobalDesc[];
  algorithms: Algorithm[];

  constructor(title: string, description: string) {
    this.title = title;
    this.description = description;
    this.node_fields = this.make_node_fields();
    this.global_descs = this.make_global_descs();
    this.algorithms = this.make_algorithms();
  }

  abstract make_node_fields(): NodeField[];
  abstract make_global_descs(): GlobalDesc[];
  abstract make_algorithms(): Algorithm[];
  abstract make_defaults():Defaults;
}

class InfoGraphType extends GraphType {

  constructor() {
    super("Graphviz", "_graphviz");
  }

  make_node_fields(): NodeField[] {
    throw new Error("Method not implemented.");
  }
  make_global_descs(): GlobalDesc[] {
    throw new Error("Method not implemented.");
  }
  make_algorithms(): Algorithm[] {
    throw new Error("Method not implemented.");
  }
  make_defaults(): Defaults {
    return {
      globals: {},
      nodes: []
    };
  }
}

export const DEFAULT_GRAPH_TYPE = new InfoGraphType();
export const GRAPH_TYPES = [];
