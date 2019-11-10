import CodeText, { PlainCodeText, chainMixed } from './codetext';

export default abstract class Type {
  abstract to_codetext():CodeText;
}

export class PlainType extends Type {
  name: string;
  constructor(name: string) {
    super();
    this.name = name;
  }
  to_codetext() {
    return new PlainCodeText(name);
  }
}

export class PointerType extends Type {
  to: Type;
  constructor(to: Type) {
    super();
    this.to = to;
  }
  to_codetext() {
    return chainMixed("&", this.to.to_codetext());
  }
}

export const string = new PlainType("string");
export const char = new PlainType("char");
export const i32 = new PlainType("i32");
export const u32 = new PlainType("u32");
export const i64 = new PlainType("i64");
export const u64 = new PlainType("u64");
export const Node = new PlainType("Node");
export const Node_ptr = new PointerType(Node);
