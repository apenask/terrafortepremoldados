import { SiteConfig } from "../types";

const siteConfig: SiteConfig = {
  businessName: "Terraforte Premoldados",
  tagline: "PREMOLDADOS E MADEIRAS",
  logoUrl: "/LOGO1.png",
  backgroundImageUrl: "https://images.pexels.com/photos/1238864/pexels-photo-1238864.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  primaryColor: "#00238C", // Terraforte blue
  secondaryColor: "#001B6B", // Darker shade for contrast
  
  linkButtons: [
    {
      id: "website",
      label: "Orçamento rápido",
      url: "https://api.whatsapp.com/send?phone=5587998235303&text=Ol%C3%A1!%20%F0%9F%91%8B%20Acabei%20de%20ver%20sua%20p%C3%A1gina%2C%20gostaria%20de%20solicitar%20um%20or%C3%A7amento%20r%C3%A1pido.%20%F0%9F%93%8B%F0%9F%92%B0",
      icon: "Calculator"
    },
    {
      id: "catalog",
      label: "Instagram",
      url: "https://www.instagram.com/terrafortepremoldados/",
      icon: "Instagram"
    },
    {
      id: "quote",
      label: "Facebook",
      url: "https://www.facebook.com/terra.forte.premoldados.2025/?locale=pt_BR",
      icon: "Facebook"
    },
    {
      id: "contact",
      label: "Localização",
      url: "https://www.google.com/maps/search/Terra%20Forte%20Premoldados/@-7.8817,-40.0875,17z?hl=pt-BR",
      icon: "MapPin"
    },
    {
      id: "catalog-pdf",
      label: "Catálogo Completo",
      url: "https://heyzine.com/flip-book/79f6b42712.html",
      icon: "FileText"
    }
  ],
  
  products: [
    {
      id: "product1",
      name: "Blocos de Concreto",
      description: "Blocos estruturais de alta qualidade para construção",
      imageUrl: "/produtos/BLOCOC.jpeg" // Você pode adicionar sua imagem em public/produtos/blocos.jpg
    },
    {
      id: "product2",
      name: "Laje Premoldada",
      description: "Nervuras de concreto para estruturas resistentes",
      imageUrl: "/produtos/laje.jpeg" // Adicione em public/produtos/vigas.jpg
    },
    {
      id: "product3",
      name: "Canaletas",
      description: "Canaletas estruturais de alta qualidade para construção",
      imageUrl: "/produtos/canaletas1.jpeg" // Adicione em public/produtos/lajes.jpg
    },
    {
      id: "product4",
      name: "Pisos Intertravados",
      description: "Pisos Intertravados para dar vida a sua obra",
      imageUrl: "/produtos/PISOS2.jpeg" // Adicione em public/produtos/postes.jpg
    },
    {
      id: "product5",
      name: "MADEIRAS E PREMOLDADOS",
      description: "Variedade gigante de materiais que você encontra em nosso Catálogo!",
      imageUrl: "/produtos/catalogo.png" // Adicione em public/produtos/pavers.jpg
    }
  ],
  
  socialLinks: [
    {
      platform: "Instagram",
      url: "https://www.instagram.com/terrafortepremoldados/",
      icon: "Instagram"
    },
    {
      platform: "Facebook",
      url: "https://www.facebook.com/terra.forte.premoldados.2025/?locale=pt_BR",
      icon: "Facebook"
    },
    {
      platform: "WhatsApp",
      url: "https://api.whatsapp.com/send?phone=5587998235303&text=Ol%C3%A1!%20%F0%9F%91%8B%20Acabei%20de%20ver%20sua%20p%C3%A1gina%2C%20gostaria%20de%20solicitar%20um%20or%C3%A7amento%20r%C3%A1pido.%20%F0%9F%93%8B%F0%9F%92%B0",
      icon: "MessageCircle"
    }
  ],
  
  contactInfo: {
    phone: "(87) 9 9823-5303",
    email: "terrafortepremoldados@hotmail.com",
    address: "Trav. Dr. Valdir Leopercio n° 15 - Bairro: Nossa Senhora de Fátima - Ouricuri-PE"
  }
};

export default siteConfig;