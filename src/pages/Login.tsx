import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Eye, EyeOff, Dumbbell, Mail, Lock } from "lucide-react";

export default function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    try {
      // Simulamos autenticación
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Aquí iría la lógica real de autenticación
      if (formData.email && formData.password) {
        // Guardamos el estado de autenticación en localStorage
        localStorage.setItem("isAuthenticated", "true");
        localStorage.setItem("userEmail", formData.email);
        navigate("/");
      } else {
        setError("Por favor, completa todos los campos");
      }
    } catch (err) {
      setError("Error al iniciar sesión. Intenta nuevamente.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-6" style={{background: 'linear-gradient(135deg, #f8fffe 0%, #e8f5f3 100%)'}}>
      <div className="w-full max-w-md space-y-8">
        {/* Logo y título */}
        <div className="text-center space-y-4">
          <div className="flex items-center justify-center space-x-3">
            <div className="p-3 rounded-full" style={{background: 'linear-gradient(135deg, #02735E 0%, #0CF25D 100%)'}}>
                <img src="/RiwiFit-removebg-preview.png" alt="RiwiFit Logo" className="h-25 w-30 object-contain" />
            </div>
          </div>
            <h1 className="text-3xl font-bold" style={{color: '#034155'}}>RiwiFit</h1>
          <p className="text-lg" style={{color: '#025951'}}>
            Inicia sesión en tu cuenta
          </p>
        </div>

        {/* Formulario de login */}
        <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg">
          <CardHeader className="text-center pb-6">
            <CardTitle className="text-2xl" style={{color: '#034155'}}>
              Bienvenido de vuelta
            </CardTitle>
          </CardHeader>
          
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              {error && (
                <Alert className="border-red-200 bg-red-50">
                  <AlertDescription className="text-red-700">
                    {error}
                  </AlertDescription>
                </Alert>
              )}

              <div className="space-y-2">
                <Label htmlFor="email" style={{color: '#034155'}}>
                  Correo electrónico
                </Label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4" style={{color: '#025951'}} />
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="tu@email.com"
                    className="pl-10 border-green-200 focus:border-green-500 focus:ring-green-500"
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="password" style={{color: '#034155'}}>
                  Contraseña
                </Label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4" style={{color: '#025951'}} />
                  <Input
                    id="password"
                    name="password"
                    type={showPassword ? "text" : "password"}
                    value={formData.password}
                    onChange={handleChange}
                    placeholder="••••••••"
                    className="pl-10 pr-10 border-green-200 focus:border-green-500 focus:ring-green-500"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2"
                  >
                    {showPassword ? (
                      <EyeOff className="h-4 w-4" style={{color: '#025951'}} />
                    ) : (
                      <Eye className="h-4 w-4" style={{color: '#025951'}} />
                    )}
                  </button>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <label className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    className="rounded border-green-300 text-green-600 focus:ring-green-500"
                  />
                  <span className="text-sm" style={{color: '#025951'}}>
                    Recordarme
                  </span>
                </label>
                <Link
                  to="/forgot-password"
                  className="text-sm hover:underline"
                  style={{color: '#038C3E'}}
                >
                  ¿Olvidaste tu contraseña?
                </Link>
              </div>

              <Button
                type="submit"
                className="w-full text-white font-medium py-3 rounded-lg transition-all duration-300 hover:shadow-glow"
                style={{background: 'linear-gradient(135deg, #02735E 0%, #0CF25D 100%)'}}
                disabled={isLoading}
              >
                {isLoading ? "Iniciando sesión..." : "Iniciar Sesión"}
              </Button>
            </form>

            <div className="mt-6 text-center">
              <p className="text-sm" style={{color: '#025951'}}>
                ¿No tienes una cuenta?{" "}
                <Link
                  to="/register"
                  className="font-medium hover:underline"
                  style={{color: '#038C3E'}}
                >
                  Regístrate aquí
                </Link>
              </p>
            </div>

            {/* Línea divisoria */}
            <div className="my-6 flex items-center">
              <div className="flex-1 h-px bg-green-200"></div>
              <span className="px-4 text-sm" style={{color: '#025951'}}>o</span>
              <div className="flex-1 h-px bg-green-200"></div>
            </div>

            {/* Botones de redes sociales */}
            <div className="space-y-3">
              <Button
                type="button"
                variant="outline"
                className="w-full border-green-200 hover:bg-green-50"
                onClick={() => setError("Funcionalidad próximamente")}
              >
                <svg className="h-5 w-5 mr-2" viewBox="0 0 24 24">
                  <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                  <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                  <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                  <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                </svg>
                Continuar con Google
              </Button>
              
              <Button
                type="button"
                variant="outline"
                className="w-full border-green-200 hover:bg-green-50"
                onClick={() => setError("Funcionalidad próximamente")}
              >
                <svg className="h-5 w-5 mr-2" fill="#1877F2" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
                Continuar con Facebook
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Footer */}
        <div className="text-center text-sm" style={{color: '#025951'}}>
          Al iniciar sesión, aceptas nuestros{" "}
          <Link to="/terms" className="hover:underline" style={{color: '#038C3E'}}>
            Términos de Servicio
          </Link>
          {" "}y{" "}
          <Link to="/privacy" className="hover:underline" style={{color: '#038C3E'}}>
            Política de Privacidad
          </Link>
        </div>
      </div>
    </div>
  );
}
