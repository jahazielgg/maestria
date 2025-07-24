import React, { useState } from 'react';
import { Book, Settings, Person as User, Menu, Close as X } from '@mui/icons-material';
import logo from '../../../img/logo/maestria-logo.png';


const navItems = [
    { label: 'Unidades', icon: Book, to: '/' },
    { label: 'Configuración', icon: Settings, to: '/configuracion' },
];

export default function Sidebar() {
    const [activeItem, setActiveItem] = useState('Unidades');
    const [isCollapsed, setIsCollapsed] = useState(false);

    return (
        <>
            {/* Mobile overlay */}
            {isCollapsed && (
                <div 
                    className="fixed inset-0 bg-black/30 z-40 lg:hidden"
                    onClick={() => setIsCollapsed(false)}
                />
            )}
            
            <div className={`
                fixed lg:relative top-0 left-0 h-screen bg-gray-50 flex flex-col shadow-xl border-r border-gray-200 z-50
                transition-all duration-300 ease-in-out
                ${isCollapsed ? 'w-64 translate-x-0' : 'w-64 -translate-x-full lg:translate-x-0'}
            `}>
                
                <div className="h-20 flex items-center justify-between px-6 bg-white border-b border-gray-200">
                    <div className="flex items-center gap-3">
                        <img 
                            src={logo}
                            alt="Maestria" 
                            className="h-15 w-auto"
                        />
                        <h1 className="text-xl font-semibold text-gray-800" style={{fontFamily: 'Teachers, sans-serif'}}>
                            Maestria
                        </h1>
                    </div>
                    
                    {/* Mobile close button */}
                    <button
                        onClick={() => setIsCollapsed(false)}
                        className="lg:hidden p-2 rounded-lg hover:bg-gray-100 text-gray-500"
                    >
                        <X sx={{ fontSize: 20 }} />
                    </button>
                </div>

                {/* User welcome section */}
                <div className="px-6 py-5 bg-white border-b border-gray-100">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-600 to-blue-700 flex items-center justify-center shadow-sm">
                            <User sx={{ fontSize: 18 }} className="text-white" />
                        </div>
                        <div>
                            <p className="text-sm text-gray-500 font-medium" style={{fontFamily: 'Teachers, sans-serif'}}>
                                Bienvenido de vuelta
                            </p>
                            <p className="text-base font-semibold text-gray-800" style={{fontFamily: 'Teachers, sans-serif'}}>
                                Profesor
                            </p>
                        </div>
                    </div>
                </div>

                {/* Navigation */}
                <div className="flex-1 py-6 px-4">
                    <nav className="space-y-2">
                        {navItems.map(({ label, icon: Icon, to }) => (
                            <button
                                key={label}
                                onClick={() => setActiveItem(label)}
                                className={`
                                    w-full flex items-center gap-3 px-4 py-3 rounded-2xl font-medium text-left
                                    transition-all duration-200 ease-out group
                                    ${activeItem === label 
                                        ? 'bg-white shadow-sm border border-blue-100 text-blue-700' 
                                        : 'text-gray-600 hover:bg-white/60 hover:text-blue-600'
                                    }
                                `}
                                style={{fontFamily: 'Teachers, sans-serif'}}
                            >
                                <Icon 
                                    sx={{ fontSize: 20 }} 
                                    className={`
                                        transition-colors duration-200
                                        ${activeItem === label 
                                            ? 'text-blue-600' 
                                            : 'text-gray-500 group-hover:text-blue-600'
                                        }
                                    `}
                                    style={{color: activeItem === label ? '#1565C0' : undefined}}
                                />
                                <span className={`font-medium ${activeItem === label ? 'font-semibold' : ''}`}>
                                    {label}
                                </span>
                                
                                {/* Active indicator */}
                                {activeItem === label && (
                                    <div className="ml-auto w-2 h-2 rounded-full bg-blue-600" 
                                         style={{backgroundColor: '#1565C0'}} />
                                )}
                            </button>
                        ))}
                    </nav>
                </div>

            </div>

            {/* Mobile menu button */}
            <button
                onClick={() => setIsCollapsed(true)}
                className="fixed top-4 left-4 z-30 lg:hidden p-3 rounded-xl bg-white shadow-lg border border-gray-200 hover:bg-gray-50"
            >
                <Menu sx={{ fontSize: 20 }} style={{color: '#1565C0'}} />
            </button>
        </>
    );
}