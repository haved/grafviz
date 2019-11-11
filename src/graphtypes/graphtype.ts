import * as PC from '@/pseudocode';

export class GlobalDesc {
}

export class NodeField {
  title: string;
  type: PC.CodeText;
  init?: PC.CodeText;

  constructor(title: string, type: PC.CodeText, init?: PC.CodeText) {
    this.title = title;
    this.type = type;
    this.init = init;
  }

  to_codetext():PC.CodeText {
    let result = PC.chain(PC.field(this.title), PC.type_colon, this.type);
    if(this.init)
      result = PC.chain(result, PC.spaced_assignment, this.init);
    return PC.chain(result, PC.semicolon);
  }
}

export class Algorithm {
}

export type Defaults = {globals:object, nodes:object[]};

export default abstract class GraphType {
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