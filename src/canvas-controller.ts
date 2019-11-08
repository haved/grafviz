import Konva from 'konva';
import { GraphViz } from './graphviz';

export class CanvasController {
    graphviz: GraphViz;
    stage: Konva.Stage;
    node_layer: Konva.Layer;

    constructor(container: HTMLDivElement, graphviz: GraphViz) {
        this.graphviz = graphviz;
        this.stage = new Konva.Stage({
            container: container,
            width: container.offsetWidth,
            height: container.offsetHeight
        });

        this.node_layer = new Konva.Layer();
        this.stage.add(this.node_layer);

        this.node_layer.add(new Konva.Circle({
            x: 200,
            y: 200,
            radius: 60,
            fill: 'red',
            stroke: 'black',
            strokeWidth: 4
        }));
        this.node_layer.draw();
    }

    update() {
        const state = this.graphviz.state;
        
    }
}