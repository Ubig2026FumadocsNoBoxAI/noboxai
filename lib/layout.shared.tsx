import type { BaseLayoutProps } from "fumadocs-ui/layouts/shared";
import Image from "next/image";
import { LanguageSwitch } from "@/components/language-switch";

export function baseOptions(): BaseLayoutProps {
  return {
    nav: {
      transparentMode: "always",
      title: (
        <div className="flex items-center gap-2">
          <Image
            src="/images/favicon-blue.png"
            alt="Nobox Logo"
            width={30}
            height={30}
            className="rounded-sm"
          />
          <span className="font-bold text-lg tracking-tight">Nobox.AI</span>
        </div>
      ),
      children: (
        <div className="flex flex-1 justify-end items-center md:mr-0 mr-12">
          <LanguageSwitch />
        </div>
      ),
    },
    links: [],
  };
}
