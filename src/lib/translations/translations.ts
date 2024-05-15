import i18n from 'sveltekit-i18n';

const config = ({
  loaders: [
    {
      locale: 'en_us',
      key: 'common',
      loader: async () => (
        await import('./en_us/common.json')
      ).default,
    },
    {
      locale: 'ja_jp',
      key: 'common',
      loader: async () => (
        await import('./ja_jp/common.json')
      ).default,
    },
  ],
});

export const { t, locale, locales, loading, loadTranslations } = new i18n(config);