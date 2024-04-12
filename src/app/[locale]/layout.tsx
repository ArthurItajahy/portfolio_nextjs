import {NextIntlClientProvider, useMessages} from 'next-intl';
import {notFound} from 'next/navigation';
 
export default function LocaleLayout({children, params: {locale}}) {
  // ...
 
  // Receive messages provided in `i18n.ts`
  const messages = useMessages();
 
  return (
    <html lang={locale}>
      <body>
        <NextIntlClientProvider locale={locale} messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
    )
  }