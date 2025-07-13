export interface TenantConfig {
  [x: string]: any;
  name: string;
  domain: string;
  primaryColor: string;
  secondaryColor: string;
  logo: string;
  description: string;
  features: string[];
}

export const tenantConfigs: Record<string, TenantConfig> = {
  main: {
    name: 'Multi-Tenant Platform',
    domain: 'localhost:3000',
    primaryColor: 'bg-blue-600',
    secondaryColor: 'bg-blue-100',
    logo: '🏢',
    subdomain: 'main',
    description: 'Your comprehensive multi-tenant solution',
    features: ['Tenant Management', 'Scalable Architecture', 'Security First', 'Analytics Dashboard'],
  routes: [
      { label: 'Dashboard', path: '/'         },
      { label: 'Contact',   path: '/contact'  },
      { label: 'Blog',      path: '/blog'     },
    ],
  },
  tenant1: {
    name: 'Tenant One',
    domain: 'tenant1.localhost:3000',
    primaryColor: 'bg-green-600',
    secondaryColor: 'bg-green-100',
    logo: '🌟',
    subdomain : "tenant1",
    description: 'Specialized solutions for your business needs',
    features: ['Custom Dashboard', 'Advanced Analytics', 'Team Collaboration', 'API Integration'],
    routes: [
      { label: 'Dashboard', path: '/'         },
      { label: 'Contact',   path: '/contact'  },
      { label: 'Blog',      path: '/blog'     },
    ],
  },
  docs: {
    name: 'Documentation Hub',
    domain: 'docs.localhost:3000',
    primaryColor: 'bg-purple-600',
    secondaryColor: 'bg-purple-100',
    logo: '📚',
    description: 'Comprehensive documentation and guides',
    features: ['API Documentation', 'Getting Started', 'Best Practices', 'Code Examples']
  },
  blog: {
    name: 'Tech Blog',
    domain: 'blog.localhost:3000',
    primaryColor: 'bg-orange-600',
    secondaryColor: 'bg-orange-100',
    logo: '✍️',
    description: 'Latest insights and updates',
    features: ['Industry News', 'Technical Articles', 'Case Studies', 'Product Updates']
  }
};

export function getTenantConfig(subdomain: string): TenantConfig {
  return tenantConfigs[subdomain] || tenantConfigs.main;
}