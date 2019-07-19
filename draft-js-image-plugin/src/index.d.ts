declare module 'draft-js-image-plugin' {
  import { EditorState } from 'draft-js';
  import { EditorPlugin } from 'draft-js-plugins-editor';
  import { ComponentType, ImgHTMLAttributes } from 'react';

  export interface ImagePluginTheme {
    image: string;
  }

  export interface ImagePluginConfig {
    theme?: ImagePluginTheme;
    imageComponent?: ComponentType<ImgHTMLAttributes<HTMLImageElement>>;
  }

  export type ImageEditorPlugin = EditorPlugin & {
    addImage: (
      editorState: EditorState,
      url: string,
      extraData?: object,
    ) => EditorState;
  };

  const createImagePlugin: (config?: ImagePluginConfig) => ImageEditorPlugin;

  export default createImagePlugin;
}
