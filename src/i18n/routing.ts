import { defineRouting } from 'next-intl/routing';

export const routing = defineRouting({
  // Start with Canada English + French (Quebec). More countries added later.
  locales: ['en', 'fr'],
  defaultLocale: 'en',
  // 'as-needed' means: /en uses no prefix (root), /fr uses /fr prefix
  localePrefix: 'as-needed',
});

export type Locale = (typeof routing.locales)[number];
