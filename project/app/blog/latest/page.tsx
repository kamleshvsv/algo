import TenantLayout from '@/components/tenant-layout';
import { getTenantConfig } from '@/lib/tenant-config';

export default function LatestPosts() {
  const config = getTenantConfig('blog');

  const posts = [
    {
      title: "Advanced Multi-Tenant Architecture",
      content: "Deep dive into building scalable multi-tenant systems...",
      date: "2025-01-15",
      author: "Engineering Team"
    },
    {
      title: "Database Isolation Strategies",
      content: "Learn about different approaches to tenant data isolation...",
      date: "2025-01-12",
      author: "Database Team"
    },
    {
      title: "Frontend Multi-Tenancy Patterns",
      content: "Best practices for building multi-tenant user interfaces...",
      date: "2025-01-08",
      author: "Frontend Team"
    }
  ];

  return (
    <TenantLayout config={config}>
      <div className="bg-gray-50 min-h-screen py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-center mb-8">Latest Posts</h1>
          <div className="max-w-4xl mx-auto space-y-8">
            {posts.map((post, index) => (
              <article key={index} className="bg-white rounded-lg p-8 shadow-md">
                <h2 className="text-2xl font-bold mb-4">{post.title}</h2>
                <div className="flex items-center text-sm text-gray-500 mb-4">
                  <span>{post.author}</span>
                  <span className="mx-2">•</span>
                  <span>{post.date}</span>
                </div>
                <p className="text-gray-600 leading-relaxed">{post.content}</p>
                <button className="mt-4 text-orange-600 hover:text-orange-800 font-medium">
                  Read More →
                </button>
              </article>
            ))}
          </div>
        </div>
      </div>
    </TenantLayout>
  );
}