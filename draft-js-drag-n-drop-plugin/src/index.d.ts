declare module 'draft-js-drag-n-drop-plugin' {
  import { DraftDecorator } from 'draft-js';
  import { EditorPlugin } from 'draft-js-plugins-editor';

  type DragNDropEditorPlugin = EditorPlugin & {
    decorator: DraftDecorator;
  };

  const createBlockDndPlugin: () => DragNDropEditorPlugin;
  export default createBlockDndPlugin;
}
