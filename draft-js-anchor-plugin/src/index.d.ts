declare module 'draft-js-anchor-plugin' {
  import { EditorPlugin } from 'draft-js-plugins-editor';
  import { AnchorHTMLAttributes, ComponentType } from 'react';

  export interface AnchorPluginTheme {
    link?: string;
    input?: string;
    inputInvalid?: string;
  }

  export interface AnchorPluginConfig {
    theme?: AnchorPluginTheme;
    placeholder?: string;
    Link?: ComponentType<AnchorHTMLAttributes<HTMLAnchorElement>>;
    linkTarget?: string;
  }

  const createAnchorPlugin: (
    config: AnchorPluginConfig,
  ) => EditorPlugin;

  export default createAnchorPlugin;
}
