import TenantLayout from '@/components/tenant-layout';
import { getTenantConfig } from '@/lib/tenant-config';

export default function Tenant1About() {
  const config = getTenantConfig('tenant1');

  return (
    <TenantLayout config={config}>
      <div className="bg-gray-50 min-h-screen py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-center mb-8">About Tenant One</h1>
          <div className="max-w-3xl mx-auto">
            <p className="text-lg text-gray-600 mb-6">
              Tenant One is a specialized business solution designed to meet the unique needs of our enterprise clients.
            </p>
            <p className="text-lg text-gray-600 mb-6">
              Our platform provides advanced analytics, team collaboration tools, and seamless API integrations to help your business thrive.
            </p>
            <div className="bg-white rounded-lg p-8 shadow-md">
              <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
              <p className="text-gray-600">
                To provide cutting-edge solutions that empower businesses to achieve their goals through innovative technology and exceptional service.
              </p>
            </div>
          </div>
        </div>
      </div>
    </TenantLayout>
  );
}