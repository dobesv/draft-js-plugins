declare module 'draft-js-resizeable-plugin' {
  import { DraftDecorator } from 'draft-js';
  import { EditorPlugin } from 'draft-js-plugins-editor';
  type ResizeableEditorPlugin = EditorPlugin & { decorator: DraftDecorator };
  const createResizeablePlugin: () => ResizeableEditorPlugin;
  export default createResizeablePlugin;
}
