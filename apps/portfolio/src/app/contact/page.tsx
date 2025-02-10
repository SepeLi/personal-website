import { serverClient as trpc } from '@personal-website/server';
import { ContactMeForm } from '@personal-website/ui';
import { cache } from 'react';

const getContactMePageContent = cache(async () => {
  const trpcCaller = await trpc();
  return trpcCaller.contactMe.getContactMePageContent();
});

export default async function Contact() {
  const { title, ...rest } = await getContactMePageContent();
  return (
    <div className="max-w-4xl mx-auto px-6 py-16">
      <h1 className="text-4xl font-bold text-gray-900 mb-8">{title}</h1>
      <ContactMeForm {...rest} />
    </div>
  );
}
