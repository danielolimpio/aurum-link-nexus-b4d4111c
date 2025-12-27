import { LucideIcon } from "lucide-react";

interface SocialIconProps {
  href: string;
  icon: LucideIcon;
  label: string;
}

const SocialIcon = ({ href, icon: Icon, label }: SocialIconProps) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="social-icon group"
      aria-label={label}
    >
      <Icon className="w-5 h-5 text-primary transition-colors group-hover:text-foreground" />
    </a>
  );
};

export default SocialIcon;
