import escapeHTML from 'escape-html';

export class CodeText {
  private _html: string;
  private constructor(html: string) {
    this._html = html;
  }

  get html(): string {
    return this._html
  }

  static of_plain(text: string) {
    return new CodeText(escapeHTML(text));
  }

  static of_html(html: string) {
    return new CodeText(html);
  }
}

export function css_class(code: CodeText, css_class:string) {
  return CodeText.of_html(`<span class=${css_class}>${code.html}</span>`);
}

export function chain(...args: (CodeText|string)[]):CodeText {
  const all_code = args.map(val=> {
    if(val instanceof CodeText)
      return val
    return code(val);
  });
  return CodeText.of_html(all_code.map(val=>val.html).join(""));
}

// == All the good stuff bellow here ==

export function code(text: string, css?:string):CodeText {
  if(css)
    return css_class(code(text), css);
  return CodeText.of_plain(text);
}

export function number(num: string|number) {
  if(typeof num === "number")
    num = `${num}`;
  return code(num, "number");
}

export function field(text: string) {
  return code(text, "field");
}

export function plain_type(name:string):CodeText {
  return code(name, "plain_type");
}

export function keyword_type(name:string):CodeText {
  return code(name, "keyword_type");
}

const ref = code("&", "type_reference");
const mut = code("mut ", "keyword");
const mut_ref = chain(ref, mut);
export function pointer(to:CodeText, mutable:boolean):CodeText {
  return chain(mutable?mut_ref:ref, to);
}

const qmark = code("?", "optional");
export function optional(of:CodeText) {
  return chain(of, qmark);
}

export const type_colon = code(":", "colon")
export const spaced_assignment = code(" = ");
export const semicolon = code(";");
export const null_value = code("null", "literal");

export const type_Node = plain_type("Node");
export const type_NodePtr = pointer(type_Node, false);
export const type_NodeMutPtr = pointer(type_Node, true);
export const type_NodeOptMutPtr = optional(type_NodeMutPtr);
export const type_u8 = keyword_type("u8");
export const type_u32 = keyword_type("u32");
export const type_i32 = keyword_type("i32");
export const type_u64 = keyword_type("u64");
export const type_i64 = keyword_type("i64");