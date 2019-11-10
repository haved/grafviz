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

export function code(text: string) {
  return CodeText.of_plain(text);
}

export function css_class(code: CodeText, css_class:string) {
  return CodeText.of_html(`<span class=${css_class}>${code.html}</span>`);
}

export function bold(code: CodeText) {
  return CodeText.of_html(`<b>${code.html}</b>`);
}

export function chain(...args: (CodeText|string)[]):CodeText {
  const all_code = args.map(val=> {
    if(val instanceof CodeText)
      return val
    return code(val);
  });
  return CodeText.of_html(all_code.map(val=>val.html).join(""));
}

export function plain_type(name:string):CodeText {
  return css_class(code(name), "plain_type");
}

export function keyword_type(name:string):CodeText {
  return css_class(code(name), "keyword_type");
}

export function pointer(to:CodeText, mutable:boolean):CodeText {
  return chain(mutable ? "&mut " : "&", to);
}

export const type_Node = plain_type("Node");
export const type_NodePtr = pointer(type_Node, false);
export const type_NodeMutPtr = pointer(type_Node, true);
export const type_u8 = keyword_type("u8");
export const type_u32 = keyword_type("u32");
export const type_i32 = keyword_type("i32");
export const type_u64 = keyword_type("u64");
export const type_i64 = keyword_type("i64");