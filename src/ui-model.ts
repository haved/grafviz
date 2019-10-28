import {GraphVizController} from './controller';

export enum MenubarButton {
    Undo = 0,
    Redo,
    Pause,
    StepForward,
    Play,
    Faster,
    _END_
}
const menubar_icons = ["undo-alt", "redo-alt", "pause", "step-forward", "play", "forward", "cancel"];

enum ToggleState {
    Off=-1,
    NotToggle=0,
    On=1
}

export function toggle(val:boolean) {
    return val ? ToggleState.On : ToggleState.Off;
}

export class MenubarButtonUI {
    id: MenubarButton;
    icon_name: string;
    callback: ()=>any;
    enabled: boolean;
    toggled: ToggleState;
    hidden: boolean;
    constructor(id: MenubarButton, icon_name: string, controller: GraphVizController) {
        this.id = id;
        this.icon_name = icon_name;
        this.callback = ()=>controller.on_menubutton_clicked(id);
        this.enabled = true;
        this.toggled = ToggleState.NotToggle;
        this.hidden = false;
    }
}

export class MenubarUI {
    current_structure_name: string;
    buttons_list: MenubarButtonUI[];

    constructor(structure_name: string, controller: GraphVizController) {
        this.current_structure_name = structure_name;
        this.buttons_list = [];
        for (let id = 0; id < MenubarButton._END_; id++)
            this.buttons_list[id] = new MenubarButtonUI(id, menubar_icons[id], controller);
    }
}

export class SidebarPanelUI {
    title: string;
    constructor(title: string) {
        this.title = title;
    }
}

export class SidebarUI {
    panels: SidebarPanelUI[];
    guide_text?: string;
    constructor() {
        this.panels = [
            new SidebarPanelUI("Node type"),
            new SidebarPanelUI("Globals"),
            new SidebarPanelUI("Algorithms")]
        this.guide_text = undefined;
    }
}

/**
 * This class is passed as a prop through the vue components that make up the UI
 * The internal structure is based on the vue component hierarchy, not the most sensible model
 * I'm not sure this is what the Vue creators intended
 */
export class GraphVizUI {
    menubar: MenubarUI;
    sidebar: SidebarUI;
    controller: GraphVizController;
    constructor(controller: GraphVizController) {
        this.controller = controller;
        this.menubar = new MenubarUI("Graphviz", controller);
        this.sidebar = new SidebarUI();
        controller.init_on_ui_model(this);
    }
}
  