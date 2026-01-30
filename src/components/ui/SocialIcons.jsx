import { Instagram, Facebook, MailOpen } from 'lucide-react';
import { SOCIAL_LINKS } from '../../config/constants';
import colors from '../../config/colors';

export default function SocialIcons() {
  const socials = [
    { Icon: Instagram, href: "https://www.instagram.com/modica_store/", label: 'Instagram' },
    { Icon: Facebook, href:"https://www.facebook.com/profile.php?id=61558393306859", label: 'Facebook' },
    { Icon: MailOpen , href:  "mailto:modicamarket71@gmail.com", label: 'Mail' }
  ];

  return (
    <div className="flex justify-center gap-6 mb-8">
      {socials.map(({ Icon, href, label }) => (
        <a 
          key={label}
          href={href} 
          target="_blank"
          rel="noopener noreferrer"
          className="w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110" 
          style={{ backgroundColor: colors.grisFonce }}
          aria-label={label}
        >
          <Icon className="w-6 h-6" style={{ color: colors.orangeRoyal }} />
        </a>
      ))}
    </div>
  );
}