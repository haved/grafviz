import escapeHTML from 'escape-html';

export default abstract class CodeText {
  abstract to_html():string;
}

export class ChainedCodeText extends CodeText {
  code_texts: CodeText[];

  constructor(code_texts: CodeText[]) {
    super();
    this.code_texts = code_texts;
  }

  to_html():string {
    return this.code_texts.map(code_text=>code_text.to_html()).join("");
  }
}

export class CodeTextLine extends CodeText {
  code_text: CodeText;
  
  constructor(code_text: CodeText) {
    super();
    this.code_text = code_text;
  }

  to_html():string {
    return this.code_text.to_html() + "<br>"
  }
}

export class PlainCodeText extends CodeText {
  text:string;

  constructor(text:string) {
    super();
    this.text = text;
  }

  to_html():string {
    return escapeHTML(this.text);
  }
}

export function chainMixed(...args: (CodeText | string)[]):CodeText {
  const all_code = args.map(value=>{
    if(value instanceof CodeText)
      return value;
    return new PlainCodeText(value);
  });
  return new ChainedCodeText(all_code);
}