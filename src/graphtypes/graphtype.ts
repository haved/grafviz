import CodeText, {chainMixed} from '../psuedocode/codetext';
import Type from "../psuedocode/type"

export class GlobalDesc {
}

export class NodeField {
  title: string;
  type: Type;
  init?: CodeText;

  constructor(title: string, type: Type, init?: CodeText) {
    this.title = title;
    this.type = type;
    this.init = init;
  }

  to_codetext():CodeText {
    let result = chainMixed(this.title, ":", this.type.to_codetext());
    if(this.init)
      result = chainMixed(result, " = ", this.init);
    return result;
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