import { MenubarButton, GraphVizUI } from './ui-model';

export class GraphVizController {
    public ui_model!: GraphVizUI;
    init_on_ui_model(ui_model:GraphVizUI) {
        this.ui_model = ui_model;
    }

    on_menubutton_clicked(id:MenubarButton) {
        this.ui_model.menubar.buttons_list[0].hidden = true;
    }
}