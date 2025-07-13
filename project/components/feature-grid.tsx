import { TenantConfig } from '@/lib/tenant-config';

interface FeatureGridProps {
  config: TenantConfig;
}

export default function FeatureGrid({ config }: FeatureGridProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {config.features.map((feature, index) => (
        <div
          key={index}
          className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-200"
        >
          <div className={`w-12 h-12 ${config.secondaryColor} rounded-lg flex items-center justify-center mb-4`}>
            <span className="text-2xl">{config.logo}</span>
          </div>
          <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature}</h3>
          <p className="text-gray-600">
            Discover the power of {feature.toLowerCase()} in our platform.
          </p>
        </div>
      ))}
    </div>
  );
}