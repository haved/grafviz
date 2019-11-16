import * as PC from '@/pseudocode';

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

export class GlobalDesc {
  title: string;
  initializer: PC.CodeText;
  creator_function:()=>any;

  constructor(title: string, initializer: PC.CodeText, creator_function:()=>any) {
    this.title = title;
    this.initializer = initializer;
    this.creator_function = creator_function;
  }
  
  to_codetext():PC.CodeText {
    return PC.chain(PC.global(this.title), ":= ", this.initializer, ";");
  }
}

export class Parameter {
  name: string;
  type: PC.CodeText;

  constructor(name: string, type: PC.CodeText) {
    this.name = name;
    this.type = type;
  }

  to_codetext() {
    return PC.chain(PC.parameter(this.name), ": ", this.type);
  }
}

export class Algorithm {
  name: string;
  parameteres: Parameter[];
  shown:{val:boolean} = {val:true};

  constructor(name: string, parameters: Parameter[]) {
    this.name = name;
    this.parameteres = parameters;
  }

  to_signature_codetext():PC.CodeText {
    let result = PC.chain(PC.func(this.name), "(");
    return result;
  }

  to_codetext_lines():PC.CodeText[] {
    return [PC.code("Hei")];
  }
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