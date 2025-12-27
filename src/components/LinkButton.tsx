import { LucideIcon } from "lucide-react";

interface LinkButtonProps {
  href: string;
  icon: LucideIcon;
  label: string;
  delay?: string;
}

const LinkButton = ({ href, icon: Icon, label, delay = "" }: LinkButtonProps) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`link-button w-full flex items-center gap-4 opacity-0 animate-fade-in-up ${delay}`}
    >
      <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center flex-shrink-0">
        <Icon className="w-5 h-5 text-primary" />
      </div>
      <span className="flex-1 text-center pr-10">{label}</span>
    </a>
  );
};

export default LinkButton;
