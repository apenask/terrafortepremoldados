export interface SocialLink {
  platform: string;
  url: string;
  icon: string;
}

export interface ProductItem {
  id: string;
  name: string;
  description: string;
  imageUrl: string;
}

export interface LinkButtonItem {
  id: string;
  label: string;
  url: string;
  icon?: string;
}

export interface SiteConfig {
  businessName: string;
  tagline: string;
  logoUrl: string;
  backgroundImageUrl: string;
  primaryColor: string;
  secondaryColor: string;
  linkButtons: LinkButtonItem[];
  products: ProductItem[];
  socialLinks: SocialLink[];
  contactInfo: {
    phone: string;
    email: string;
    address: string;
  };
}