import { TenantConfig } from "@/lib/tenant-config";
import { Inter } from "next/font/google";
import { Button } from "./ui/button";

const inter = Inter({ subsets: ["latin"] });

interface TenantLayoutProps {
  children: React.ReactNode;
  config: TenantConfig;
}

export default function TenantLayout({ children, config }: TenantLayoutProps) {
  console.log(config, "config")
  return (
    <div className={`min-h-screen ${inter.className}`}>
      {/* <header className={`${config.primaryColor} text-white shadow-lg`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-3">
              <span className="text-2xl">{config.logo}</span>
              <h1 className="text-xl font-bold">{config.name}</h1>
            </div>
            <nav className="hidden md:flex space-x-6">
              <a href={`http://${config.domain}`} className="hover:text-gray-200 transition-colors">Home</a>
              {config.name === 'Tenant One' && (
                <a href={`http://${config.domain}/about`} className="hover:text-gray-200 transition-colors">About</a>
              )}
              {config.name === 'Documentation Hub' && (
                <a href={`http://${config.domain}/getting-started`} className="hover:text-gray-200 transition-colors">Getting Started</a>
              )}
              {config.name === 'Tech Blog' && (
                <a href={`http://${config.domain}/latest`} className="hover:text-gray-200 transition-colors">Latest</a>
              )}
            </nav>
          </div>
        </div>
      </header> */}

      {/* Sticky Header */}
      <header
        className={`${config.primaryColor} sticky top-0 z-30 bg-white shadow`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8 flex items-center justify-between h-16">
          <div className="text-2xl font-bold">{config.name}</div>
          {/* Dynamic Tenant Navigation */}
          <nav className="hidden md:flex space-x-8">
            {config.routes?.map((route: any) => (
              <a
                key={route.path}
                href={`https://${config.subdomain}.localhost:8000${route.path}`}
                className="text-gray-700 hover:text-gray-900"
              >
                {route.label}
              </a>
            ))}
          </nav>
          <div className="flex items-center space-x-4">
            <Button variant="outline" size="sm">
              Subscribe
            </Button>
          </div>
          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              aria-label="Toggle menu"
              className="text-gray-700 hover:text-gray-900"
            >
              ☰
            </button>
          </div>
        </div>
      </header>

      <main className="flex-1">{children}</main>

      <footer className="bg-gray-800 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <p>&copy; 2025 {config.name}. All rights reserved.</p>
            <p className="text-gray-400">Domain: {config.domain}</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
