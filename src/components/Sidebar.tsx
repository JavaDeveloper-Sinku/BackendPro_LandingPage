

import React from 'react';
import { 
  Home, 
  Users, 
  Calendar, 
  ShoppingCart, 
  FileText, 
  Settings,
  LogOut
} from 'lucide-react';

interface SidebarProps{
    activeSection: string;
    onSectionChange: (section : string) => void;
}



export const  Sidebar:React.FC<SidebarProps> =( {activeSection, onSectionChange } ) => {

    const menuItems = [
    { id: 'menu', label: 'Menu', icon: Home },
    { id: 'tables', label: 'Table Services', icon: Users },
    { id: 'reservations', label: 'Reservation', icon: Calendar },
    { id: 'orders', label: 'Orders', icon: ShoppingCart },
    { id: 'accounting', label: 'Accounting', icon: FileText },
    { id: 'settings', label: 'Settings', icon: Settings }
  ];


  return (
    <div className="w-65 bg-white border-r border-gray-200 flex flex-col">
        <div className="p-6 border-b border-gray-200">
            <div className="flex items-center space-x-4">
                <div className="w-8 h-8 bg-emerald-500 rounded-full flex items-center justify-center">
                    <Home className="w-5 h-5 text-white"/>
                 </div>
                 <h1 className="text-xl font-bold text-gray-800">RUNFAST</h1>

            </div>
        </div>

        <nav className="flex-1 p-4">
        <div className="space-y-2">
          {menuItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeSection === item.id;
            
            return (
              <button
                key={item.id}
                onClick={() => onSectionChange(item.id)}
                className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg text-left transition-colors ${
                  isActive 
                    ? 'bg-emerald-50 text-emerald-600 border border-emerald-200' 
                    : 'text-gray-600 hover:bg-gray-50'
                }`}
              >
                <Icon className="w-5 h-5" />
                <span className="font-medium">{item.label}</span>
              </button>
            );
          })}
        </div>
      </nav>
      



        <div className="p-4 border-t border-gray-200">
        <div className="flex items-center space-x-3 mb-4">
          <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
            <span className="text-white text-sm font-medium">JA</span>
          </div>
          <div>
            <p className="text-sm font-medium text-gray-800">Johnny James</p>
            <p className="text-xs text-gray-500">Admin</p>
          </div>
        </div>
        
        <button className="w-full flex items-center space-x-3 px-4 py-3 rounded-lg text-left text-gray-600 hover:bg-gray-50 transition-colors">
          <LogOut className="w-5 h-5" />
          <span className="font-medium">Logout</span>
        </button>
      </div>
  </div>  
  );
}