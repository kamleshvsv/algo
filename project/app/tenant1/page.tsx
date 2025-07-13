import TenantLayout from '@/components/tenant-layout';
import FeatureGrid from '@/components/feature-grid';
import { getTenantConfig } from '@/lib/tenant-config';

export default function Tenant1Home() {
  const config = getTenantConfig('tenant1');

  return (
    <TenantLayout config={config}>
      <div className="bg-gray-50 min-h-screen">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-green-600 to-green-800 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Welcome to Tenant One
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              {config.description}
            </p>
            <button className="bg-white text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Access Dashboard
            </button>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-12">Tenant One Features</h2>
            <FeatureGrid config={config} />
          </div>
        </section>

        {/* Dashboard Preview */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-12">Dashboard Overview</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-green-50 rounded-lg p-6">
                <h3 className="text-lg font-semibold mb-2">Active Users</h3>
                <p className="text-3xl font-bold text-green-600">1,234</p>
              </div>
              <div className="bg-green-50 rounded-lg p-6">
                <h3 className="text-lg font-semibold mb-2">Revenue</h3>
                <p className="text-3xl font-bold text-green-600">$45,678</p>
              </div>
              <div className="bg-green-50 rounded-lg p-6">
                <h3 className="text-lg font-semibold mb-2">Growth</h3>
                <p className="text-3xl font-bold text-green-600">+23%</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </TenantLayout>
  );
}