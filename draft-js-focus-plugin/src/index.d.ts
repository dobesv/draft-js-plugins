declare module 'draft-js-focus-plugin' {
  import { DraftDecorator } from 'draft-js';
  import { EditorPlugin } from 'draft-js-plugins-editor';

  type FocusEditorPlugin = EditorPlugin & { decorator: DraftDecorator };

  const createFocusPlugin: () => FocusEditorPlugin;

  export default createFocusPlugin;
}
