import { LucideIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

type NavButtonProps = {
  icon: LucideIcon;
  href?: string;
  label: string;
};

export default function NavButton({ icon: Icon, href, label }: NavButtonProps) {
  return (
    <Button
      asChild
      variant="ghost"
      size="icon"
      aria-label={label}
      title={label}
      className="rounded-full"
    >
      {href ? (
        <Link href={href}>
          <Icon />
        </Link>
      ) : (
        <Icon />
      )}
    </Button>
  );
}