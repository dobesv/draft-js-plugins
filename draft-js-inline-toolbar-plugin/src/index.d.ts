declare module 'draft-js-inline-toolbar-plugin' {
  import { EditorPlugin } from 'draft-js-plugins-editor';
  const createInlineToolbarPlugin: () => EditorPlugin;
  export default createInlineToolbarPlugin;
}
