import {
  type DictionaryKeys,
  type Plugins,
  getIntlayer as getIntlayerCore,
} from '@intlayer/core';
import type { IntlayerDictionaryTypesConnector, LocalesValues } from 'intlayer';
import {
  type DeepTransformContent,
  intlayerNodePlugins,
  markdownPlugin,
  solidNodePlugins,
} from './plugins';

export const getIntlayer = <T extends DictionaryKeys, L extends LocalesValues>(
  key: T,
  locale?: L,
  additionalPlugins?: Plugins[]
) => {
  const plugins: Plugins[] = [
    intlayerNodePlugins,
    solidNodePlugins,
    markdownPlugin,
    ...(additionalPlugins ?? []),
  ];

  return getIntlayerCore(key, locale, plugins) as any as DeepTransformContent<
    IntlayerDictionaryTypesConnector[T]['content']
  >;
};
