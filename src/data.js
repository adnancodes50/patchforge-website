import {
  BadgeCheck,
  Factory,
  Gem,
  Globe2,
  Mail,
  MapPin,
  MessageCircle,
  Palette,
  PackageCheck,
  Phone,
  ShieldCheck,
  Sparkles,
  Star,
  Truck,
  Upload,
  Zap,
} from 'lucide-react';

export const brandName = 'TMY Sports wear';

export const navItems = [
  ['Categories', '#categories'],
  ['Gallery', '#gallery'],
  ['Process', '#process'],
  ['FAQ', '#faq'],
  ['Quote', '#quote'],
];

export const stats = [
  ['150+', 'Countries shipped'],
  ['5,000+', 'Custom orders'],
  ['24 hr', 'Artwork response'],
  ['4.9/5', 'Average rating'],
];

export const categories = [
  {
    title: 'Embroidered',
    heading: 'Embroidered Patches',
    desc: 'Classic raised-thread patches with a premium uniform finish for clubs, brands, events, and corporate apparel.',
    images: [
      '/gallery/patch-us-flag.png',
      '/gallery/patch-knox-lodge.png',
      '/gallery/patch-new-york-apple.png',
    ],
    points: ['Dense colorfast stitching', 'Merrowed or laser-cut borders', 'Iron-on, sew-on, or Velcro backing'],
  },
  {
    title: 'PVC Rubber',
    heading: 'PVC Rubber Patches',
    desc: 'Flexible molded patches with crisp 2D or 3D detail, built for tactical gear, outdoor kits, and modern streetwear.',
    images: [
      '/gallery/patch-tactical-pvc-pack.png',
      '/gallery/patch-get-some-airsoft.png',
      '/gallery/patch-thantrue-labels.png',
    ],
    points: ['Waterproof flexible rubber', 'Raised 3D molded artwork', 'Matte, gloss, and glow options'],
  },
  {
    title: 'Woven',
    heading: 'Woven Patches',
    desc: 'Fine-yarn labels for small lettering, sharp marks, and premium apparel drops that need a clean flat profile.',
    images: [
      '/gallery/patch-letter-s.png',
      '/gallery/patch-between-the-trees.png',
      '/gallery/patch-rlsc-wildlife.png',
    ],
    points: ['High-definition logo detail', 'Thin flexible construction', 'Excellent for retail collections'],
  },
  {
    title: 'Leather',
    heading: 'Leather Labels',
    desc: 'Debossed, embossed, or laser-etched leather labels that give denim, caps, bags, and luxury goods a refined finish.',
    images: [
      '/gallery/patch-thantrue-labels.png',
      '/gallery/patch-knox-lodge.png',
      '/gallery/patch-between-the-trees.png',
    ],
    points: ['Genuine or synthetic leather', 'Embossed and debossed artwork', 'Premium fashion-grade texture'],
  },
  {
    title: 'Hoodies',
    heading: 'Custom Hoodies',
    desc: 'Premium custom hoodies with embroidered patches, printed graphics, and brand-ready finishing for teams, streetwear, and wholesale drops.',
    images: [
      '/gallery/hoodie-burgundy.png',
      '/gallery/hoodie-black-custom.png',
      '/gallery/hoodie-beige-roses.png',
      '/gallery/hoodie-pink-graphic.png',
      '/gallery/hoodie-black-solitude.png',
      '/gallery/hoodie-maroon.png',
    ],
    points: ['Custom embroidery and print options', 'Soft fleece blanks in multiple colors', 'Wholesale and small-run friendly'],
  },
];

export const galleryFilters = ['All', 'Patches', 'Hoodies', 'T-Shirts'];

export const gallery = [
  ['Get-Some Airsoft Patch', '/gallery/patch-get-some-airsoft.png', 'Patches'],
  ['Tactical PVC Pack', '/gallery/patch-tactical-pvc-pack.png', 'Patches'],
  ['Thantrue Label Set', '/gallery/patch-thantrue-labels.png', 'Patches'],
  ['Knox Lodge Emblem', '/gallery/patch-knox-lodge.png', 'Patches'],
  ['US Flag Embroidered', '/gallery/patch-us-flag.png', 'Patches'],
  ['Letter S Circle Patch', '/gallery/patch-letter-s.png', 'Patches'],
  ['Between The Trees', '/gallery/patch-between-the-trees.png', 'Patches'],
  ['RLSC Wildlife Badge', '/gallery/patch-rlsc-wildlife.png', 'Patches'],
  ['New York Apple Patch', '/gallery/patch-new-york-apple.png', 'Patches'],
  ['Burgundy Custom Hoodie', '/gallery/hoodie-burgundy.png', 'Hoodies'],
  ['Black Logo Hoodie', '/gallery/hoodie-black-custom.png', 'Hoodies'],
  ['Beige Rose Hoodie', '/gallery/hoodie-beige-roses.png', 'Hoodies'],
  ['Pink Graphic Hoodie', '/gallery/hoodie-pink-graphic.png', 'Hoodies'],
  ['Solitude Wolf Hoodie', '/gallery/hoodie-black-solitude.png', 'Hoodies'],
  ['Plain Black Hoodie', '/gallery/hoodie-black-plain.png', 'Hoodies'],
  ['Maroon Pullover Hoodie', '/gallery/hoodie-maroon.png', 'Hoodies'],
  ['Hurricane Graphic Tee', '/gallery/tee-hurricane-yellow.png', 'T-Shirts'],
  ['Navy & White Tee Pair', '/gallery/tee-navy-white-pair.png', 'T-Shirts'],
  ['Navy Crew Tee', '/gallery/tee-navy-plain.png', 'T-Shirts'],
  ['Porsche 911 Tee', '/gallery/tee-porsche-maroon.png', 'T-Shirts'],
  ['Rider Motorbike Tee', '/gallery/tee-rider-red.png', 'T-Shirts'],
  ['Cyan Blank Tee', '/gallery/tee-cyan-plain.png', 'T-Shirts'],
  ['Blue Stone Navy Tee', '/gallery/tee-bluestone-navy.png', 'T-Shirts'],
];

export const reasons = [
  [Factory, 'Factory-Level Precision', 'Production-ready embroidery, molding, cutting, backing, and finishing managed through one quality workflow.'],
  [Sparkles, 'Premium Material Options', 'Metallic thread, glow yarn, 3D PVC relief, felt, twill, leather, woven labels, and iron-on finishes.'],
  [ShieldCheck, 'Proofed Before Production', 'Artwork is reviewed for color, detail, size, border, and backing before your order moves to manufacturing.'],
  [Truck, 'Worldwide Delivery', 'Secure packaging, reliable courier options, and tracking support for domestic and international shipments.'],
];

export const process = [
  [Upload, 'Share Your Design', 'Send a logo, sketch, reference image, or brief with quantity, size, and backing preferences.'],
  [Palette, 'Receive a Proof', 'We convert your idea into a production-ready digital proof with material and finish recommendations.'],
  [Zap, 'Approve Production', 'Once the quote and proof are approved, your patches move into controlled manufacturing.'],
  [PackageCheck, 'Quality Check & Ship', 'Every order is inspected, packed securely, and shipped with tracking details.'],
];

export const testimonials = [
  ['Avery Stone', 'Outdoor Apparel Founder', 'Our PVC patches needed to feel premium, not promotional. TMY Sports wear nailed the finish, depth, and packaging.'],
  ['Mina Torres', 'Events Director', 'The digital proof was clear, the quote was fast, and the final embroidered badges looked exactly like the approved mockup.'],
  ['Cal Brooks', 'Team Operations', 'We ordered uniform patches across three sizes. The colors stayed consistent and the reorder process was simple.'],
];

export const faqs = [
  ['What patch types can TMY Sports wear manufacture?', 'We produce embroidered, PVC, leather, woven, chenille, sublimated, and iron-on patches with multiple backing options.'],
  ['Can I order a small quantity first?', 'Yes. We support flexible starter runs for new designs and wholesale pricing for larger production quantities.'],
  ['How fast can I receive a quote?', 'Most quote requests receive an artwork review and pricing response within 24 business hours.'],
  ['Do you help with artwork cleanup?', 'Yes. Send your logo, sketch, or reference image and our team will prepare a clean production proof before manufacturing.'],
  ['Do you ship worldwide?', 'Yes. Orders can be packed for international delivery with tracking through reliable courier partners.'],
];

export const contact = [
  [MapPin, 'Address', 'Sialkot, Pakistan'],
  [Phone, 'Phone / WhatsApp', '+92 327 3168157'],
  [Mail, 'Email', 'miantaaha43@gmail.com'],
  [Globe2, 'Worldwide Orders', 'USA, UK, UAE, EU, and global delivery'],
];

export const footerLinks = {
  Products: ['Embroidered Patches', 'PVC Patches', 'Woven Patches', 'Leather Patches'],
  Company: ['About', 'Bulk Orders', 'Artwork Help', 'Contact'],
  Support: ['FAQ', 'Shipping', 'Reorders', 'Privacy'],
};

export const iconSet = { BadgeCheck, Gem, MessageCircle, Star };
