'use client';

import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { 
  LayoutDashboard,
  Users,
  Building2,
  Settings,
  Plus,
  Search,
  Bell,
  MoreHorizontal,
  ArrowUpRight,
  Globe,
  Shield,
  Activity
} from 'lucide-react';

export default function DashboardPage() {
  const [activeTab, setActiveTab] = useState('overview');

  const sidebarItems = [
    { id: 'overview', label: 'Overview', icon: <LayoutDashboard className="w-4 h-4" /> },
    { id: 'tenants', label: 'Tenants', icon: <Building2 className="w-4 h-4" /> },
    { id: 'users', label: 'Users', icon: <Users className="w-4 h-4" /> },
    { id: 'settings', label: 'Settings', icon: <Settings className="w-4 h-4" /> },
  ];

  const tenants = [
    { name: 'Acme Corp', domain: 'acme.tenanthub.com', users: 145, status: 'active', plan: 'Professional' },
    { name: 'TechStart', domain: 'techstart.tenanthub.com', users: 89, status: 'active', plan: 'Starter' },
    { name: 'GlobalTech', domain: 'globaltech.tenanthub.com', users: 234, status: 'active', plan: 'Enterprise' },
    { name: 'StartupXYZ', domain: 'startupxyz.tenanthub.com', users: 45, status: 'inactive', plan: 'Starter' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      <div className="flex">
        {/* Sidebar */}
        <div className="w-64 bg-white/80 backdrop-blur-md border-r border-slate-200/50 min-h-screen">
          <div className="p-6">
            <div className="flex items-center space-x-2 mb-8">
              <div className="w-8 h-8 bg-gradient-to-br from-purple-600 to-blue-600 rounded-lg flex items-center justify-center">
                <Building2 className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                Admin
              </span>
            </div>
            
            <nav className="space-y-2">
              {sidebarItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => setActiveTab(item.id)}
                  className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg text-left transition-all duration-200 ${
                    activeTab === item.id
                      ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-lg'
                      : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900'
                  }`}
                >
                  {item.icon}
                  <span className="font-medium">{item.label}</span>
                </button>
              ))}
            </nav>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1">
          {/* Header */}
          <header className="bg-white/80 backdrop-blur-md border-b border-slate-200/50 p-6">
            <div className="flex justify-between items-center">
              <div>
                <h1 className="text-2xl font-bold text-slate-900 capitalize">{activeTab}</h1>
                <p className="text-slate-600">Manage your multi-tenant platform</p>
              </div>
              <div className="flex items-center space-x-4">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-4 h-4" />
                  <Input 
                    placeholder="Search..." 
                    className="pl-10 w-64 bg-white/50"
                  />
                </div>
                <Button variant="ghost" size="sm">
                  <Bell className="w-4 h-4" />
                </Button>
                <Button className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700">
                  <Plus className="w-4 h-4 mr-2" />
                  Add Tenant
                </Button>
              </div>
            </div>
          </header>

          {/* Content */}
          <main className="p-6">
            {activeTab === 'overview' && (
              <div className="space-y-6">
                {/* Stats Cards */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                  {[
                    { title: 'Total Tenants', value: '24', change: '+12%', icon: <Building2 className="w-5 h-5" />, color: 'from-blue-500 to-cyan-500' },
                    { title: 'Active Users', value: '2,847', change: '+8%', icon: <Users className="w-5 h-5" />, color: 'from-purple-500 to-pink-500' },
                    { title: 'Revenue', value: '$45,231', change: '+15%', icon: <ArrowUpRight className="w-5 h-5" />, color: 'from-green-500 to-emerald-500' },
                    { title: 'Uptime', value: '99.9%', change: '+0.1%', icon: <Activity className="w-5 h-5" />, color: 'from-orange-500 to-red-500' }
                  ].map((stat, index) => (
                    <Card key={index} className="hover:shadow-xl transition-all duration-300 bg-white/70 backdrop-blur-sm">
                      <CardContent className="p-6">
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="text-sm font-medium text-slate-600">{stat.title}</p>
                            <p className="text-2xl font-bold text-slate-900">{stat.value}</p>
                            <p className="text-xs text-green-600">{stat.change} from last month</p>
                          </div>
                          <div className={`p-3 rounded-lg bg-gradient-to-r ${stat.color}`}>
                            <div className="text-white">
                              {stat.icon}
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>

                {/* Recent Activity */}
                <Card className="bg-white/70 backdrop-blur-sm">
                  <CardHeader>
                    <CardTitle className="text-slate-900">Recent Activity</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {[
                        { action: 'New tenant created', tenant: 'Acme Corp', time: '2 minutes ago', type: 'success' },
                        { action: 'User limit reached', tenant: 'TechStart', time: '1 hour ago', type: 'warning' },
                        { action: 'Payment received', tenant: 'GlobalTech', time: '3 hours ago', type: 'success' },
                        { action: 'Domain configured', tenant: 'StartupXYZ', time: '1 day ago', type: 'info' }
                      ].map((activity, index) => (
                        <div key={index} className="flex items-center space-x-4 p-4 rounded-lg bg-slate-50/50 hover:bg-slate-100/50 transition-colors">
                          <div className={`w-2 h-2 rounded-full ${
                            activity.type === 'success' ? 'bg-green-500' :
                            activity.type === 'warning' ? 'bg-yellow-500' :
                            'bg-blue-500'
                          }`}></div>
                          <div className="flex-1">
                            <p className="text-sm font-medium text-slate-900">{activity.action}</p>
                            <p className="text-xs text-slate-600">{activity.tenant} • {activity.time}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            )}

            {activeTab === 'tenants' && (
              <div className="space-y-6">
                <Card className="bg-white/70 backdrop-blur-sm">
                  <CardHeader>
                    <CardTitle className="text-slate-900">All Tenants</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {tenants.map((tenant, index) => (
                        <div key={index} className="flex items-center justify-between p-4 rounded-lg border border-slate-200 hover:shadow-md transition-all duration-200">
                          <div className="flex items-center space-x-4">
                            <div className="w-10 h-10 bg-gradient-to-br from-purple-100 to-blue-100 rounded-lg flex items-center justify-center">
                              <Building2 className="w-5 h-5 text-purple-600" />
                            </div>
                            <div>
                              <h4 className="font-semibold text-slate-900">{tenant.name}</h4>
                              <p className="text-sm text-slate-600 flex items-center">
                                <Globe className="w-3 h-3 mr-1" />
                                {tenant.domain}
                              </p>
                            </div>
                          </div>
                          <div className="flex items-center space-x-4">
                            <div className="text-right">
                              <p className="text-sm font-medium text-slate-900">{tenant.users} users</p>
                              <Badge className={`text-xs ${
                                tenant.status === 'active' 
                                  ? 'bg-green-100 text-green-700 border-green-200' 
                                  : 'bg-red-100 text-red-700 border-red-200'
                              }`}>
                                {tenant.status}
                              </Badge>
                            </div>
                            <Badge variant="outline" className="text-xs">
                              {tenant.plan}
                            </Badge>
                            <Button variant="ghost" size="sm">
                              <MoreHorizontal className="w-4 h-4" />
                            </Button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            )}

            {activeTab === 'users' && (
              <div className="space-y-6">
                <Card className="bg-white/70 backdrop-blur-sm">
                  <CardHeader>
                    <CardTitle className="text-slate-900">User Management</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-center py-12">
                      <Users className="w-12 h-12 text-slate-400 mx-auto mb-4" />
                      <h3 className="text-lg font-semibold text-slate-900 mb-2">User management coming soon</h3>
                      <p className="text-slate-600">Advanced user management features are in development.</p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            )}

            {activeTab === 'settings' && (
              <div className="space-y-6">
                <Card className="bg-white/70 backdrop-blur-sm">
                  <CardHeader>
                    <CardTitle className="text-slate-900">Platform Settings</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-center py-12">
                      <Settings className="w-12 h-12 text-slate-400 mx-auto mb-4" />
                      <h3 className="text-lg font-semibold text-slate-900 mb-2">Settings panel coming soon</h3>
                      <p className="text-slate-600">Platform configuration options are in development.</p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            )}
          </main>
        </div>
      </div>
    </div>
  );
}