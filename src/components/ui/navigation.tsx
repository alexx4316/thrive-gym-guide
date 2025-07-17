import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { MessageCircle, Calendar, Home, Compass, User, Dumbbell, LogOut, Settings } from "lucide-react";
import { Button } from "./button";
import { Badge } from "./badge";
import { cn } from "@/lib/utils";
import { Chat } from "@/components/Chat";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const getCurrentDate = () => {
  const now = new Date();
  const options: Intl.DateTimeFormatOptions = { 
    weekday: 'long', 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  };
  return now.toLocaleDateString('es-ES', options);
};

export function Navigation() {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const navigate = useNavigate();
  const userName = localStorage.getItem("userName") || "Usuario";
  const userEmail = localStorage.getItem("userEmail") || "";

  const handleLogout = () => {
    localStorage.removeItem("isAuthenticated");
    localStorage.removeItem("userEmail");
    localStorage.removeItem("userName");
    navigate("/login");
  };

  return (
    <nav className="border-b backdrop-blur-md" style={{backgroundColor: 'rgba(248, 255, 254, 0.95)', borderColor: '#e8f5f3'}}>
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <span className="text-xl font-bold" style={{color: '#02735E'}}>
              RiwiFit
            </span>
          </div>

          {/* Center Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            <NavLink to="/" className={({ isActive }) => 
              cn(
                "px-4 py-2 rounded-lg transition-all duration-200 flex items-center space-x-2",
                isActive 
                  ? "text-white shadow-glow" 
                  : "hover:bg-green-50"
              )
            } style={({isActive}) => isActive ? {background: 'linear-gradient(135deg, #02735E 0%, #038C3E 100%)'} : {color: '#025951'}}>
              <Home className="h-4 w-4" />
              <span>Inicio</span>
            </NavLink>
            
            <NavLink to="/discover" className={({ isActive }) => 
              cn(
                "px-4 py-2 rounded-lg transition-all duration-200 flex items-center space-x-2",
                isActive 
                  ? "text-white shadow-glow" 
                  : "hover:bg-green-50"
              )
            } style={({isActive}) => isActive ? {background: 'linear-gradient(135deg, #02735E 0%, #038C3E 100%)'} : {color: '#025951'}}>
              <Compass className="h-4 w-4" />
              <span>Descubrir</span>
            </NavLink>
            
            <NavLink to="/exercises" className={({ isActive }) => 
              cn(
                "px-4 py-2 rounded-lg transition-all duration-200 flex items-center space-x-2",
                isActive 
                  ? "text-white shadow-glow" 
                  : "hover:bg-green-50"
              )
            } style={({isActive}) => isActive ? {background: 'linear-gradient(135deg, #02735E 0%, #038C3E 100%)'} : {color: '#025951'}}>
              <Dumbbell className="h-4 w-4" />
              <span>Ejercicios</span>
            </NavLink>
            
            <NavLink to="/profile" className={({ isActive }) => 
              cn(
                "px-4 py-2 rounded-lg transition-all duration-200 flex items-center space-x-2",
                isActive 
                  ? "text-white shadow-glow" 
                  : "hover:bg-green-50"
              )
            } style={({isActive}) => isActive ? {background: 'linear-gradient(135deg, #02735E 0%, #038C3E 100%)'} : {color: '#025951'}}>
              <User className="h-4 w-4" />
              <span>Perfil</span>
            </NavLink>
          </div>

          {/* Right Section */}
          <div className="flex items-center space-x-4">
            {/* Date Display */}
            <div className="hidden lg:flex items-center space-x-2 px-3 py-2 rounded-lg" style={{backgroundColor: 'rgba(2, 115, 94, 0.1)'}}>
              <Calendar className="h-4 w-4" style={{color: '#025951'}} />
              <span className="text-sm font-medium" style={{color: '#034155'}}>
                {getCurrentDate()}
              </span>
            </div>
            
            {/* Chat Button */}
            <Button 
              variant="outline" 
              size="sm" 
              className="relative border-green-600 text-green-700 hover:bg-green-50"
              onClick={() => setIsChatOpen(true)}
            >
              <MessageCircle className="h-4 w-4" />
              <span className="hidden sm:inline ml-2">Chat</span>
              <Badge 
                variant="destructive" 
                className="absolute -top-2 -right-2 h-5 w-5 rounded-full p-0 flex items-center justify-center"
                style={{backgroundColor: '#0CF25D', color: '#034155'}}
              >
                3
              </Badge>
            </Button>

            {/* User Menu */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="relative h-8 w-8 rounded-full">
                  <Avatar className="h-8 w-8">
                    <AvatarImage src="https://images.unsplash.com/photo-1494790108755-2616b612b786?w=32&h=32&fit=crop&crop=face&auto=format" alt="Avatar" />
                    <AvatarFallback style={{backgroundColor: '#02735E', color: 'white'}}>
                      {userName.split(' ').map(n => n[0]).join('').slice(0, 2).toUpperCase()}
                    </AvatarFallback>
                  </Avatar>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56" align="end" forceMount>
                <DropdownMenuLabel className="font-normal">
                  <div className="flex flex-col space-y-1">
                    <p className="text-sm font-medium leading-none" style={{color: '#034155'}}>{userName}</p>
                    <p className="text-xs leading-none" style={{color: '#025951'}}>
                      {userEmail}
                    </p>
                  </div>
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem asChild>
                  <NavLink to="/profile" className="w-full flex items-center">
                    <User className="mr-2 h-4 w-4" />
                    <span>Perfil</span>
                  </NavLink>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Settings className="mr-2 h-4 w-4" />
                  <span>Configuración</span>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={handleLogout} className="text-red-600">
                  <LogOut className="mr-2 h-4 w-4" />
                  <span>Cerrar sesión</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </div>
      
      <Chat isOpen={isChatOpen} onClose={() => setIsChatOpen(false)} />
    </nav>
  );
}