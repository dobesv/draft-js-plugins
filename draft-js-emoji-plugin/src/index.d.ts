declare module 'draft-js-emoji-plugin' {
  import { EditorPlugin } from 'draft-js-plugins-editor';
  import { List } from 'immutable';
  import { CSSProperties, ReactNode } from 'react';

  export interface EmojiPluginTheme {
    emoji?: string;

    emojiSuggestions?: string;

    emojiSuggestionsEntry?: string;
    emojiSuggestionsEntryFocused?: string;
    emojiSuggestionsEntryText?: string;
    emojiSuggestionsEntryIcon?: string;

    emojiSelect?: string;

    emojiSelectButton?: string;
    emojiSelectButtonPressed?: string;

    emojiSelectPopover?: string;
    emojiSelectPopoverClosed?: string;
    emojiSelectPopoverTitle?: string;
    emojiSelectPopoverGroups?: string;

    emojiSelectPopoverGroup?: string;
    emojiSelectPopoverGroupTitle?: string;
    emojiSelectPopoverGroupList?: string;
    emojiSelectPopoverGroupItem?: string;

    emojiSelectPopoverToneSelect?: string;
    emojiSelectPopoverToneSelectList?: string;
    emojiSelectPopoverToneSelectItem?: string;

    emojiSelectPopoverEntry?: string;
    emojiSelectPopoverEntryFocused?: string;
    emojiSelectPopoverEntryIcon?: string;

    emojiSelectPopoverNav?: string;
    emojiSelectPopoverNavItem?: string;
    emojiSelectPopoverNavEntry?: string;
    emojiSelectPopoverNavEntryActive?: string;

    emojiSelectPopoverScrollbar?: string;
    emojiSelectPopoverScrollbarThumb?: string;
  }

  export interface EmojiSuggestionsState {
    isActive?: boolean;
    focusedOptionIndex: number;
  }

  export interface EmojiSelectGroup {
    title: string;
    icon: ReactNode;
    categories: string[];
  }

  export interface EmojiPluginConfig {
    theme?: EmojiPluginTheme;
    imagePath?: string;
    imageType?: string;
    allowImageCache?: boolean;
    positionSuggestions?: (arg: {
      decoratorRect: DOMRect;
      popover: Element;
      props: { suggestions: any[] };
      state: EmojiSuggestionsState;
      filteredEmojis: List<string>;
    }) => CSSProperties;
    priorityList: { [k: string]: string | undefined };
    selectGroups: EmojiSelectGroup[];
    selectButtonContent?: string;
    toneSelectOpenDelay?: number;
    useNativeArt?: boolean;
  }

  const createEmojiPlugin: (config?: EmojiPluginConfig) => EditorPlugin;

  export default createEmojiPlugin;
}
