import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  ArrowRight, 
  Building2, 
  Users, 
  BarChart3, 
  Settings,
  Bell,
  Search,
  Plus
} from 'lucide-react';

interface TenantPageProps {
  params: {
    slug: string;
  };
}

// Generate static params for static export
export async function generateStaticParams() {
  return [
    { slug: 'acme' },
    { slug: 'techstart' },
    { slug: 'globaltech' },
    { slug: 'startupxyz' },
    { slug: 'innovate' },
    { slug: 'nexus' }
  ];
}

export default function TenantPage({ params }: TenantPageProps) {
  const tenantName = params.slug.charAt(0).toUpperCase() + params.slug.slice(1);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      {/* Tenant Navigation */}
      <nav className="bg-white/80 backdrop-blur-md border-b border-slate-200/50 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-4">
              <div className="w-8 h-8 bg-gradient-to-br from-purple-600 to-blue-600 rounded-lg flex items-center justify-center">
                <Building2 className="w-5 h-5 text-white" />
              </div>
              <div>
                <span className="text-xl font-bold text-slate-900">{tenantName}</span>
                <Badge className="ml-2 bg-green-100 text-green-700 border-green-200">Active</Badge>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="sm">
                <Bell className="w-4 h-4" />
              </Button>
              <Button variant="ghost" size="sm">
                <Search className="w-4 h-4" />
              </Button>
              <Button variant="outline" size="sm">
                <Settings className="w-4 h-4 mr-2" />
                Settings
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-slate-900 to-purple-800 bg-clip-text text-transparent">
              Welcome to {tenantName}
            </h1>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Your dedicated workspace for managing customers, analytics, and business operations.
            </p>
          </div>

          {/* Quick Actions */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
            {[
              { icon: <Users className="w-5 h-5" />, label: "Add User", color: "from-blue-500 to-cyan-500" },
              { icon: <BarChart3 className="w-5 h-5" />, label: "View Analytics", color: "from-purple-500 to-pink-500" },
              { icon: <Settings className="w-5 h-5" />, label: "Configure", color: "from-green-500 to-emerald-500" },
              { icon: <Plus className="w-5 h-5" />, label: "Create Project", color: "from-orange-500 to-red-500" }
            ].map((action, index) => (
              <Button 
                key={index}
                className={`h-20 flex-col bg-gradient-to-r ${action.color} hover:scale-105 transition-transform duration-200 text-white border-0`}
              >
                {action.icon}
                <span className="mt-2 text-sm">{action.label}</span>
              </Button>
            ))}
          </div>

          {/* Dashboard Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Users Card */}
            <Card className="hover:shadow-xl transition-all duration-300 bg-white/70 backdrop-blur-sm">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium text-slate-600">Total Users</CardTitle>
                <Users className="h-4 w-4 text-slate-600" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-slate-900">2,847</div>
                <p className="text-xs text-slate-600">+12% from last month</p>
                <div className="mt-4">
                  <div className="flex items-center space-x-2">
                    <div className="w-full bg-slate-200 rounded-full h-2">
                      <div className="bg-gradient-to-r from-blue-500 to-cyan-500 h-2 rounded-full" style={{ width: '75%' }}></div>
                    </div>
                    <span className="text-sm text-slate-600">75%</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Revenue Card */}
            <Card className="hover:shadow-xl transition-all duration-300 bg-white/70 backdrop-blur-sm">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium text-slate-600">Monthly Revenue</CardTitle>
                <BarChart3 className="h-4 w-4 text-slate-600" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-slate-900">$45,231</div>
                <p className="text-xs text-slate-600">+8.5% from last month</p>
                <div className="mt-4">
                  <div className="flex items-center space-x-2">
                    <div className="w-full bg-slate-200 rounded-full h-2">
                      <div className="bg-gradient-to-r from-green-500 to-emerald-500 h-2 rounded-full" style={{ width: '85%' }}></div>
                    </div>
                    <span className="text-sm text-slate-600">85%</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Projects Card */}
            <Card className="hover:shadow-xl transition-all duration-300 bg-white/70 backdrop-blur-sm">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium text-slate-600">Active Projects</CardTitle>
                <Building2 className="h-4 w-4 text-slate-600" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-slate-900">127</div>
                <p className="text-xs text-slate-600">+3 new this week</p>
                <div className="mt-4">
                  <div className="flex items-center space-x-2">
                    <div className="w-full bg-slate-200 rounded-full h-2">
                      <div className="bg-gradient-to-r from-purple-500 to-pink-500 h-2 rounded-full" style={{ width: '65%' }}></div>
                    </div>
                    <span className="text-sm text-slate-600">65%</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Recent Activity */}
          <Card className="mt-8 bg-white/70 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-slate-900">Recent Activity</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[
                  { action: "New user registered", user: "Sarah Johnson", time: "2 minutes ago", type: "user" },
                  { action: "Project completed", user: "Marketing Team", time: "1 hour ago", type: "project" },
                  { action: "Payment received", user: "Client Corp", time: "3 hours ago", type: "payment" },
                  { action: "Settings updated", user: "Admin", time: "1 day ago", type: "settings" }
                ].map((activity, index) => (
                  <div key={index} className="flex items-center space-x-4 p-4 rounded-lg bg-slate-50/50 hover:bg-slate-100/50 transition-colors">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                      activity.type === 'user' ? 'bg-blue-100 text-blue-600' :
                      activity.type === 'project' ? 'bg-purple-100 text-purple-600' :
                      activity.type === 'payment' ? 'bg-green-100 text-green-600' :
                      'bg-orange-100 text-orange-600'
                    }`}>
                      {activity.type === 'user' ? <Users className="w-4 h-4" /> :
                       activity.type === 'project' ? <Building2 className="w-4 h-4" /> :
                       activity.type === 'payment' ? <BarChart3 className="w-4 h-4" /> :
                       <Settings className="w-4 h-4" />}
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-medium text-slate-900">{activity.action}</p>
                      <p className="text-xs text-slate-600">{activity.user} • {activity.time}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Call to Action */}
          <div className="mt-12 text-center">
            <Card className="bg-gradient-to-r from-purple-600 to-blue-600 border-0 text-white">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-4">Ready to grow your business?</h3>
                <p className="text-purple-100 mb-6 max-w-md mx-auto">
                  Unlock advanced features and analytics to take your {tenantName} workspace to the next level.
                </p>
                <Button className="bg-white text-purple-600 hover:bg-slate-50">
                  Upgrade Now
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}