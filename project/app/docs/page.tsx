import TenantLayout from '@/components/tenant-layout';
import FeatureGrid from '@/components/feature-grid';
import { getTenantConfig } from '@/lib/tenant-config';

export default function DocsHome() {
  const config = getTenantConfig('docs');

  return (
    <TenantLayout config={config}>
      <div className="bg-gray-50 min-h-screen">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-purple-600 to-purple-800 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Documentation Hub
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              {config.description}
            </p>
            <button className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Browse Docs
            </button>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-12">Documentation Categories</h2>
            <FeatureGrid config={config} />
          </div>
        </section>

        {/* Quick Start Guide */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-12">Quick Start</h2>
            <div className="max-w-3xl mx-auto">
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-purple-100 rounded-full p-2 flex-shrink-0">
                    <span className="text-purple-600 font-bold">1</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">Installation</h3>
                    <p className="text-gray-600">Get started with our platform in minutes</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-purple-100 rounded-full p-2 flex-shrink-0">
                    <span className="text-purple-600 font-bold">2</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">Configuration</h3>
                    <p className="text-gray-600">Configure your tenant settings</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-purple-100 rounded-full p-2 flex-shrink-0">
                    <span className="text-purple-600 font-bold">3</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">Deploy</h3>
                    <p className="text-gray-600">Deploy your application to production</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </TenantLayout>
  );
}