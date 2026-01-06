// app/[locale]/docs/layout.tsx
import { source } from "@/lib/source";
import { DocsLayout } from "fumadocs-ui/layouts/notebook";
import { baseOptions } from "@/lib/layout.shared";
import Image from "next/image";

export default async function Layout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const { nav, ...base } = baseOptions();

  return (
    <DocsLayout
      // Jika parser: 'dir' sudah diset di source.ts,
      // getPageTree(locale) hanya akan mengambil isi DI DALAM folder id atau en.
      tree={source.getPageTree(locale)}
      {...base}
      nav={{ ...nav }}
    >
      {children}
    </DocsLayout>
  );
}
