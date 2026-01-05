'use client';

import { source } from '@/lib/source';
import { DocsLayout } from 'fumadocs-ui/layouts/docs';
import { baseOptions } from '@/lib/layout.shared';
import { usePathname } from 'next/navigation';

export default function Layout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  
  // Ambil bahasa dari URL (/docs/id/... -> 'id')
  const segments = pathname.split('/').filter(Boolean);
  const lang = segments[1] === 'id' ? 'id' : 'en';

  // INI KUNCINYA: Memanggil tree berdasarkan bahasa
  const tree = source.getPageTree(lang);

  return (
<DocsLayout
  {...baseOptions()} // Pastikan tree sudah ada di dalam fungsi ini
>
  {children}
</DocsLayout>
  );
}