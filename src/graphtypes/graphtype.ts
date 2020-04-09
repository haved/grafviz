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
  return_type?: PC.CodeText;
  lines: PC.CodeText[];

  shown:{val:boolean} = {val:false};

  constructor(name: string, parameters: Parameter[], return_type?: PC.CodeText, lines?:PC.CodeText[]) {
    this.name = name;
    this.parameteres = parameters;
    this.return_type = return_type;
    this.lines = lines ?? [];
  }

  to_signature_codetext():PC.CodeText {
    let result = PC.chain(PC.func(this.name), "(", PC.join(", ", this.parameteres.map(v=>v.to_codetext())), ")");
    if(this.return_type)
      result = PC.chain(result, ":", this.return_type);
    return PC.chain(result, PC.opening_curly);
  }

  to_codetext_lines():PC.CodeText[] {
    return this.lines;
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