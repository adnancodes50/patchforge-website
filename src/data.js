import {
  BadgeCheck,
  Boxes,
  Factory,
  Gem,
  Globe2,
  Headphones,
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
    desc: 'Classic raised-thread patches with a premium uniform finish for clubs, brands, events, and corporate apparel.',
    image: 'https://s.alicdn.com/%40sc04/kf/H2b29f72429ce4fb5afa270720bd163b74.jpg?auto=format&fit=crop&ixlib=rb-4.0.3&q=80&w=1000',
    images: [
      'https://s.alicdn.com/%40sc04/kf/H2b29f72429ce4fb5afa270720bd163b74.jpg?auto=format&fit=crop&ixlib=rb-4.0.3&q=80&w=1000',
      'https://s.alicdn.com/%40sc04/kf/He5b528513ecf4a859b60a8d2e19af500e.jpg_300x300.jpg',
      'https://s.alicdn.com/%40sc04/kf/Hafdb3c6ef8684febbd1481b833a4be4a3.jpg_300x300.jpg',
    ],
    points: ['Dense colorfast stitching', 'Merrowed or laser-cut borders', 'Iron-on, sew-on, or Velcro backing'],
  },
  {
    title: 'PVC Rubber',
    desc: 'Flexible molded patches with crisp 2D or 3D detail, built for tactical gear, outdoor kits, and modern streetwear.',
    image: 'https://s.alicdn.com/%40sc04/kf/Hd6ef4793f1074ded9fa203fbc04b80f2t.jpg?auto=format&fit=crop&ixlib=rb-4.0.3&q=80&w=1000',
    images: [
      'https://s.alicdn.com/%40sc04/kf/Hd6ef4793f1074ded9fa203fbc04b80f2t.jpg?auto=format&fit=crop&ixlib=rb-4.0.3&q=80&w=1000',
      'https://s.alicdn.com/%40sc04/kf/H6012cc3fdbd043d78e00cead3599bb60y.jpg_300x300.jpg',
      'https://s.alicdn.com/%40sc04/kf/H25a70e8f248f4c73834e4bbdc1166569g.jpg_300x300.jpg',
    ],
    points: ['Waterproof flexible rubber', 'Raised 3D molded artwork', 'Matte, gloss, and glow options'],
  },
  {
    title: 'Woven',
    desc: 'Fine-yarn labels for small lettering, sharp marks, and premium apparel drops that need a clean flat profile.',
    image: 'https://s.alicdn.com/%40sc04/kf/H238a62a5f0924fc7b79f0f6f8d26d1b78.jpg_300x300.jpg',
    images: [
      'https://s.alicdn.com/%40sc04/kf/H238a62a5f0924fc7b79f0f6f8d26d1b78.jpg_300x300.jpg',
      'https://s.alicdn.com/%40sc04/kf/H63dc6b43dc9243bf9391bb4a7e8cb4b6w.jpg_300x300.jpg',
      'https://s.alicdn.com/%40sc04/kf/Hafdb3c6ef8684febbd1481b833a4be4a3.jpg_300x300.jpg',
    ],
    points: ['High-definition logo detail', 'Thin flexible construction', 'Excellent for retail collections'],
  },
  {
    title: 'Leather',
    desc: 'Debossed, embossed, or laser-etched leather labels that give denim, caps, bags, and luxury goods a refined finish.',
    image: 'https://s.alicdn.com/%40sc04/kf/Hea8745d095e14383adc153575279885da.jpg?auto=format&fit=crop&ixlib=rb-4.0.3&q=80&w=1000',
    images: [
      'https://s.alicdn.com/%40sc04/kf/Hea8745d095e14383adc153575279885da.jpg?auto=format&fit=crop&ixlib=rb-4.0.3&q=80&w=1000',
      'https://s.alicdn.com/%40sc04/kf/H8858c43ad1724282ba4aa5cb8ebd4247g.jpg_300x300.jpg',
      'https://s.alicdn.com/%40sc04/kf/H997e4b30f7a04185a87a45dd7a3814bbv.jpg_300x300.jpg',
    ],
    points: ['Genuine or synthetic leather', 'Embossed and debossed artwork', 'Premium fashion-grade texture'],
  },
];

export const gallery = [
  ['Embroidery Brand Pack', 'https://s.alicdn.com/%40sc04/kf/H2b29f72429ce4fb5afa270720bd163b74.jpg?auto=format&fit=crop&ixlib=rb-4.0.3&q=80&w=1000', 'Embroidery'],
  ['Molded PVC Collection', 'https://s.alicdn.com/%40sc04/kf/Hd6ef4793f1074ded9fa203fbc04b80f2t.jpg?auto=format&fit=crop&ixlib=rb-4.0.3&q=80&w=1000', 'PVC'],
  ['Heritage Leather Labels', 'https://s.alicdn.com/%40sc04/kf/Hea8745d095e14383adc153575279885da.jpg?auto=format&fit=crop&ixlib=rb-4.0.3&q=80&w=1000', 'Leather'],
  ['Public Safety Set', 'https://s.alicdn.com/%40sc04/kf/He5b528513ecf4a859b60a8d2e19af500e.jpg_300x300.jpg', 'Uniform'],
  ['Detailed Woven Badge', 'https://s.alicdn.com/%40sc04/kf/H238a62a5f0924fc7b79f0f6f8d26d1b78.jpg_300x300.jpg', 'Woven'],
  ['Iron-On Retail Patch', 'https://s.alicdn.com/%40sc04/kf/Hafdb3c6ef8684febbd1481b833a4be4a3.jpg_300x300.jpg', 'Iron-On'],
];

export const reasons = [
  [Factory, 'Factory-Level Precision', 'Production-ready embroidery, molding, cutting, backing, and finishing managed through one quality workflow.'],
  [Sparkles, 'Premium Material Options', 'Metallic thread, glow yarn, 3D PVC relief, felt, twill, leather, woven labels, and iron-on finishes.'],
  [ShieldCheck, 'Proofed Before Production', 'Artwork is reviewed for color, detail, size, border, and backing before your order moves to manufacturing.'],
  [Headphones, 'Dedicated Order Support', 'Clear guidance from quote to delivery, with practical recommendations for the best patch type and finish.'],
  [Boxes, 'Wholesale & Bulk Ready', 'Flexible quantities for startups, teams, merch drops, agencies, uniform programs, and large repeat orders.'],
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
