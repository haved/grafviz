enum MenubarButton {
    Undo = 0,
    Redo,
    Pause,
    StepForward,
    Play,
    Faster,
    Stop
}
const menubar_icons = ["undo-alt", "redo-alt", "pause", "step-forward", "play", "forward", "stop"];

export class MenubarButtonUI {
    id: MenubarButton;
    icon_name: string;
    callback: ()=>any;
    enabled: boolean;
    toggled_off: boolean;
    hidden: boolean;
    constructor(id: MenubarButton, icon_name: string, callback:(id:MenubarButton)=>any) {
        this.id = id;
        this.icon_name = icon_name;
        this.callback = ()=>callback(id);
        this.enabled = true;
        this.toggled_off = false;
        this.hidden = false;
    }
}

export class MenubarUI {
    current_structure_name: string;
    buttons_list: MenubarButtonUI[];

    constructor(structure_name: string) {
        this.current_structure_name = structure_name;
        this.buttons_list = [];
        for (let id = 0; id <= MenubarButton.Stop; id++)
            this.buttons_list[id] = new MenubarButtonUI(id, menubar_icons[id], this.on_click.bind(this));
        this.on_running();
    }

    on_click(id: MenubarButton) {
        if(id == MenubarButton.Undo)
            this.on_running();
        if(id == MenubarButton.Stop)
            this.on_stopped();
    }

    on_stopped() {
        //TODO: Only enable if there is an undo or redo stack
        
        this.buttons_list[MenubarButton.Undo].enabled = true;
        this.buttons_list[MenubarButton.Redo].enabled = true;
        for(let id = MenubarButton.Pause; id <= MenubarButton.Stop; id++)
            this.buttons_list[id].hidden = true;
    }

    on_running() {
        this.buttons_list[MenubarButton.Undo].enabled = false;
        this.buttons_list[MenubarButton.Redo].enabled = false;
        for(let id = MenubarButton.Pause; id <= MenubarButton.Stop; id++)
            this.buttons_list[id].hidden = false;
        for(let id = MenubarButton.Pause; id <= MenubarButton.Faster; id++)
            this.buttons_list[id].toggled_off = true;
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
    constructor() {
        this.menubar = new MenubarUI("Graphviz");
        this.sidebar = new SidebarUI();
    }
}
  