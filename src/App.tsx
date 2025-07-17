import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from "@/components/Layout";
import { ProtectedRoute, PublicRoute } from "@/components/ProtectedRoute";
import Index from "./pages/Index";
import Discover from "./pages/Discover";
import Exercises from "./pages/Exercises";
import Profile from "./pages/Profile";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Welcome from "./pages/Welcome";
import Demo from "./pages/Demo";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          {/* Página de demostración - accesible sin autenticación */}
          <Route path="/demo" element={<Demo />} />
          
          {/* Rutas públicas - solo accesibles si NO está autenticado */}
          <Route path="/login" element={
            <PublicRoute>
              <Login />
            </PublicRoute>
          } />
          <Route path="/register" element={
            <PublicRoute>
              <Register />
            </PublicRoute>
          } />
          
          {/* Ruta de bienvenida - accesible solo con autenticación */}
          <Route path="/welcome" element={
            <ProtectedRoute>
              <Welcome />
            </ProtectedRoute>
          } />

          {/* Rutas protegidas - requieren autenticación */}
          <Route path="/" element={
            <ProtectedRoute>
              <Layout />
            </ProtectedRoute>
          }>
            <Route index element={<Index />} />
            <Route path="discover" element={<Discover />} />
            <Route path="exercises" element={<Exercises />} />
            <Route path="exercises/:category" element={<Exercises />} />
            <Route path="profile" element={<Profile />} />
          </Route>
          
          {/* Ruta catch-all para páginas no encontradas */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
