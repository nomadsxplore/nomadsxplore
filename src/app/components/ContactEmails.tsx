import { EMAILS } from "@/lib/content";

type ContactEmailsProps = {
  className?: string;
  linkClassName?: string;
  stacked?: boolean;
};

export default function ContactEmails({
  className = "",
  linkClassName = "text-gray-300 hover:text-orange-400 transition-colors",
  stacked = true,
}: ContactEmailsProps) {
  const entries = [
    { label: "General", email: EMAILS.general },
    { label: "Sales", email: EMAILS.sales },
    { label: "Contact", email: EMAILS.contact },
  ];

  return (
    <div
      className={`${stacked ? "space-y-2" : "flex flex-wrap gap-x-4 gap-y-1"} ${className}`}
    >
      {entries.map(({ label, email }) => (
        <div key={email} className={stacked ? "" : "inline-flex items-center gap-1"}>
          {stacked && (
            <span className="text-xs text-gray-500 uppercase tracking-wide">
              {label}
            </span>
          )}
          <a href={`mailto:${email}`} className={`block ${linkClassName}`}>
            {!stacked && label ? `${label}: ` : ""}
            {email}
          </a>
        </div>
      ))}
    </div>
  );
}
