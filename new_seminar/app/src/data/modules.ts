import type { TranslationKey } from "./i18n/types";

export interface ModuleLink {
  id: string;
  href: string;
  labelKey: TranslationKey;
}

export const modules: ModuleLink[] = [
  { id: "0", href: "/modules/0-introduction", labelKey: "modules.list.0" },
  { id: "1", href: "#", labelKey: "modules.list.1" },
  { id: "2", href: "#", labelKey: "modules.list.2" },
  { id: "3", href: "#", labelKey: "modules.list.3" }
];
