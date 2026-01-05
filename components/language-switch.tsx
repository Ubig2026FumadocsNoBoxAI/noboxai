'use client';

import { usePathname, useRouter } from 'next/navigation';
import Image from 'next/image';

export function LanguageSwitch() {
  const pathname = usePathname();
  const router = useRouter();

  const segments = pathname.split('/').filter(Boolean);
  const docsIndex = segments.indexOf('docs');

  const langFromUrl = segments[docsIndex + 1];
  const currentLang = langFromUrl === 'id' ? 'id' : 'en';
  const nextLang = currentLang === 'id' ? 'en' : 'id';

  function toggleLanguage() {
    const nextSegments = [...segments];
    if (langFromUrl !== 'id' && langFromUrl !== 'en') {
      nextSegments.splice(docsIndex + 1, 0, nextLang);
    } else {
      nextSegments[docsIndex + 1] = nextLang;
    }
    router.push('/' + nextSegments.join('/'));
  }

  return (
    <button
      onClick={toggleLanguage}
      aria-label="Switch language"
      className="group flex h-9 w-9 items-center justify-center rounded-full border bg-background hover:bg-muted transition-all active:scale-95 shadow-sm"
    >
      <div className="relative h-6 w-6 overflow-hidden rounded-full border border-muted">
        <Image
          src={currentLang === 'id' ? '/flags/id.jpg' : '/flags/en.jpg'}
          alt={currentLang === 'id' ? 'Indonesia' : 'English'}
          fill // Pakai fill supaya mengikuti ukuran div parent-nya
          className="object-cover" // INI KUNCINYA: Biar gak gepeng
          sizes="24px"
        />
      </div>
    </button>
  );
}