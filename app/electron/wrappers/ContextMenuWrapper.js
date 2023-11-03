class ContextMenuWrapper {
    static clearRendererBindings() {
      window.api.contextMenu.clearRendererBindings();
    }
  
    static onReceive(channel, callback, id) {
      window.api.contextMenu.onReceive(channel, callback, id);
    }
  }
  
  export default ContextMenuWrapper;
  