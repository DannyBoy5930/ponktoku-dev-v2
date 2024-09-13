import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  getDefaultPathname,
  languages,
  useI18n,
} from "@/lib/internationalization";

import { DotIcon, LanguagesIcon } from "lucide-react";

export default function LanguageDropdown({ url }: { url: URL }) {
  const { lang, p } = useI18n(url);

  const pathname = getDefaultPathname(url);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon">
          <LanguagesIcon className="h-5 w-5" />
          <span className="sr-only">select language</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {Object.entries(languages).map(([language, label]) => (
          <DropdownMenuItem key={language} className="justify-between" asChild>
            <a href={p(pathname, language)}>
              {label}
              {language === lang && <DotIcon />}
            </a>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
