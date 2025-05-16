// lib/sanity.ts
import { createClient } from '@sanity/client';

export const sanity = createClient({
  projectId: '8328vsfl',       // from sanity.json or sanity.io/manage
  dataset: 'production',
  useCdn: true,
  apiVersion: '2024-01-01',           // or today's date
});
