import TenantLayout from '@/components/tenant-layout';
import { getTenantConfig } from '@/lib/tenant-config';

export default function GettingStarted() {
  const config = getTenantConfig('docs');

  return (
    <TenantLayout config={config}>
      <div className="bg-gray-50 min-h-screen py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-center mb-8">Getting Started</h1>
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-lg p-8 shadow-md mb-8">
              <h2 className="text-2xl font-bold mb-4">Installation</h2>
              <div className="bg-gray-100 rounded p-4 mb-4">
                <code className="text-sm">npm install @multi-tenant/platform</code>
              </div>
              <p className="text-gray-600">
                Install our platform package to get started with multi-tenant development.
              </p>
            </div>
            
            <div className="bg-white rounded-lg p-8 shadow-md mb-8">
              <h2 className="text-2xl font-bold mb-4">Configuration</h2>
              <div className="bg-gray-100 rounded p-4 mb-4">
                <pre className="text-sm"><code>{`{
  "tenants": {
    "tenant1": {
      "name": "Tenant One",
      "domain": "tenant1.localhost:3000"
    }
  }
}`}</code></pre>
              </div>
              <p className="text-gray-600">
                Configure your tenant settings in the configuration file.
              </p>
            </div>
          </div>
        </div>
      </div>
    </TenantLayout>
  );
}