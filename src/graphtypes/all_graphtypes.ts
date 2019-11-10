import InfoGraphType from './info';
import Treep from './treep'

// The list is here in this special file because something goes wrong
// with the `super()` calls when the objects are created right bellow the GraphType superclass
export const DEFAULT_GRAPH_TYPE = new InfoGraphType();
export const GRAPH_TYPES = [new Treep()];
