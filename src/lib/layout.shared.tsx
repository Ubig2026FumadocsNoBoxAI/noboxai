import { source } from '@/lib/source';
import { LanguageSwitch } from '../../components/language-switch';

export function baseOptions() {
  return {
    nav: {
      title: 'NoBox Docs',
      children: <LanguageSwitch />,
    },
    tree: source.pageTree,
  };
}
