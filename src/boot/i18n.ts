import { boot } from 'quasar/wrappers';
import { createI18n } from 'vue-i18n';

import messages from '../i18n';

export type MessageLanguages = keyof typeof messages;
// Type-define 'en-US' as the master schema for the resource
export type MessageSchema = typeof messages['en-US'];

// See https://vue-i18n.intlify.dev/guide/advanced/typescript.html#global-resource-schema-type-definition
/* eslint-disable @typescript-eslint/no-empty-interface */
declare module 'vue-i18n' {
  // define the locale messages schema
  export interface DefineLocaleMessage extends MessageSchema {}

  // define the datetime format schema
  export interface DefineDateTimeFormat {}

  // define the number format schema
  export interface DefineNumberFormat {}
}
/* eslint-enable @typescript-eslint/no-empty-interface */

// Déterminer la langue par défaut (navigateur ou fallback sur en-US)
const defaultLocale = () => {
  const browserLang = navigator.language;
  return browserLang.startsWith('fr') ? 'fr-FR' : 'en-US';
};

// Create i18n instance
export const i18n = createI18n({
  locale: defaultLocale(),
  fallbackLocale: 'en-US',
  legacy: false,
  messages,
});

export default boot(({ app }) => {
  // Set i18n instance on app
  app.use(i18n);
});
