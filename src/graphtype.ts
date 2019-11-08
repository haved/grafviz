export class GraphType {
    index: number;
    title: string;
    constructor(index:number, title: string) {
      this.index = index;
      this.title = title;
    }
  }

let i = 0;
export const BLANK_GRAPH_TYPE = new GraphType(i++, "Graphviz");
const TREEP = new GraphType(i++, "Treep");
const MAXFLOW = new GraphType(i++, "Maxflow");
const BINTREE = new GraphType(i++, "Binary search tree");
const RBTREE = new GraphType(i++, "Red black tree");

export const GRAPH_TYPES = [TREEP, MAXFLOW, BINTREE, RBTREE];
  