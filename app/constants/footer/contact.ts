import { Linkedin, Mail, MapPin, Phone } from 'lucide-vue-next';
import { Instagram } from 'lucide-vue-next';
import { Twitter } from 'lucide-vue-next';
import { Facebook } from 'lucide-vue-next';
export const contactInformation = [
    {
      type: "address",
      text: "123 Main St, Lagos, Nigeria",
      icon: MapPin,
    },
    {
      type: "phone",
      text: "+234 123 456 7890",
      href: "tel:+2341234567890",
      icon: Phone,
    },
    {
      type: "email",
      text: "hello@logdr.com",
      icon: Mail,
    }
  ]

export const socials = [
    {
      href: "https://facebook.com",
      icon: Facebook,
    },
    {
      href: "https://x.com",
      icon: Twitter,
    },
    {
      href: "https://instagram.com",
      icon: Instagram,
    },
    {
      href: "https://linkedin.com",
      icon: Linkedin,
    }
  ]