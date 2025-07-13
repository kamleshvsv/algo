import TenantLayout from '@/components/tenant-layout';
import FeatureGrid from '@/components/feature-grid';
import { getTenantConfig } from '@/lib/tenant-config';

export default function BlogHome() {
  const config = getTenantConfig('blog');

  const blogPosts = [
    {
      title: "Building Multi-Tenant Applications",
      excerpt: "Learn how to architect scalable multi-tenant systems with Next.js",
      date: "2025-01-15",
      author: "Tech Team"
    },
    {
      title: "Security Best Practices",
      excerpt: "Essential security considerations for multi-tenant environments",
      date: "2025-01-10",
      author: "Security Team"
    },
    {
      title: "Performance Optimization",
      excerpt: "Tips and tricks for optimizing multi-tenant application performance",
      date: "2025-01-05",
      author: "DevOps Team"
    }
  ];

  return (
    <TenantLayout config={config}>
      <div className="bg-gray-50 min-h-screen">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-orange-600 to-orange-800 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Tech Blog
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              {config.description}
            </p>
            <button className="bg-white text-orange-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Read Latest
            </button>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-12">Blog Categories</h2>
            <FeatureGrid config={config} />
          </div>
        </section>

        {/* Recent Posts */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-12">Recent Posts</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {blogPosts.map((post, index) => (
                <article key={index} className="bg-gray-50 rounded-lg p-6 hover:shadow-md transition-shadow">
                  <h3 className="text-xl font-semibold mb-3">{post.title}</h3>
                  <p className="text-gray-600 mb-4">{post.excerpt}</p>
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <span>{post.author}</span>
                    <span>{post.date}</span>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      </div>
    </TenantLayout>
  );
}