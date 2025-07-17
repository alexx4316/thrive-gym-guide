import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Dumbbell, UserPlus, LogIn, Shield, Users, BarChart3 } from "lucide-react";

export default function Demo() {
  return (
    <div className="min-h-screen p-6" style={{background: 'linear-gradient(135deg, #f8fffe 0%, #e8f5f3 100%)'}}>
      <div className="max-w-4xl mx-auto space-y-8">
        
        {/* Header */}
        <div className="text-center space-y-4">
          <div className="flex items-center justify-center space-x-3">
            <div className="p-3 rounded-full" style={{background: 'linear-gradient(135deg, #02735E 0%, #0CF25D 100%)'}}>
              <Dumbbell className="h-8 w-8 text-white" />
            </div>
            <h1 className="text-4xl font-bold" style={{color: '#034155'}}>RiwiFit</h1>
          </div>
          <p className="text-xl" style={{color: '#025951'}}>
            Tu aplicación completa de fitness y bienestar
          </p>
          <p className="text-lg" style={{color: '#038C3E'}}>
            ¡Sistema de autenticación implementado! 🎉
          </p>
        </div>

        {/* Demo Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          {/* Login Demo */}
          <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg">
            <CardHeader className="text-center">
              <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4" style={{backgroundColor: '#02735E20'}}>
                <LogIn className="h-8 w-8" style={{color: '#02735E'}} />
              </div>
              <CardTitle style={{color: '#034155'}}>Iniciar Sesión</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-center" style={{color: '#025951'}}>
                Accede a tu cuenta existente
              </p>
              <div className="space-y-2 text-sm" style={{color: '#025951'}}>
                <p>✅ Validación de formularios</p>
                <p>✅ Estados de carga</p>
                <p>✅ Manejo de errores</p>
                <p>✅ Integración con redes sociales</p>
              </div>
              <Link to="/login">
                <Button 
                  className="w-full text-white font-medium"
                  style={{background: 'linear-gradient(135deg, #02735E 0%, #038C3E 100%)'}}
                >
                  Probar Login
                </Button>
              </Link>
            </CardContent>
          </Card>

          {/* Register Demo */}
          <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg">
            <CardHeader className="text-center">
              <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4" style={{backgroundColor: '#038C3E20'}}>
                <UserPlus className="h-8 w-8" style={{color: '#038C3E'}} />
              </div>
              <CardTitle style={{color: '#034155'}}>Crear Cuenta</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-center" style={{color: '#025951'}}>
                Regístrate y únete a RiwiFit
              </p>
              <div className="space-y-2 text-sm" style={{color: '#025951'}}>
                <p>✅ Validación de contraseña</p>
                <p>✅ Confirmación de datos</p>
                <p>✅ Términos y condiciones</p>
                <p>✅ Flujo de bienvenida</p>
              </div>
              <Link to="/register">
                <Button 
                  className="w-full text-white font-medium"
                  style={{background: 'linear-gradient(135deg, #038C3E 0%, #0CF25D 100%)'}}
                >
                  Probar Registro
                </Button>
              </Link>
            </CardContent>
          </Card>

        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          <Card className="bg-white/60 backdrop-blur-sm border-0">
            <CardContent className="p-6 text-center space-y-4">
              <Shield className="h-12 w-12 mx-auto" style={{color: '#02735E'}} />
              <h3 className="font-bold text-lg" style={{color: '#034155'}}>
                Rutas Protegidas
              </h3>
              <p className="text-sm" style={{color: '#025951'}}>
                Sistema completo de protección de rutas con redirección automática
              </p>
            </CardContent>
          </Card>

          <Card className="bg-white/60 backdrop-blur-sm border-0">
            <CardContent className="p-6 text-center space-y-4">
              <Users className="h-12 w-12 mx-auto" style={{color: '#038C3E'}} />
              <h3 className="font-bold text-lg" style={{color: '#034155'}}>
                Gestión de Usuario
              </h3>
              <p className="text-sm" style={{color: '#025951'}}>
                Perfil personalizado con datos del usuario autenticado
              </p>
            </CardContent>
          </Card>

          <Card className="bg-white/60 backdrop-blur-sm border-0">
            <CardContent className="p-6 text-center space-y-4">
              <BarChart3 className="h-12 w-12 mx-auto" style={{color: '#0CF25D'}} />
              <h3 className="font-bold text-lg" style={{color: '#034155'}}>
                Estado Persistente
              </h3>
              <p className="text-sm" style={{color: '#025951'}}>
                Sesión guardada en localStorage con manejo de estado global
              </p>
            </CardContent>
          </Card>

        </div>

        {/* Instructions */}
        <Card className="bg-gradient-to-r from-green-50 to-blue-50 border-0">
          <CardContent className="p-8 space-y-4">
            <h2 className="text-2xl font-bold text-center" style={{color: '#034155'}}>
              🚀 ¡Instrucciones de Uso!
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-3">
                <h3 className="font-semibold" style={{color: '#025951'}}>Para probar el Login:</h3>
                <ul className="space-y-1 text-sm" style={{color: '#025951'}}>
                  <li>• Ingresa cualquier email válido</li>
                  <li>• Usa cualquier contraseña</li>
                  <li>• La autenticación es simulada</li>
                  <li>• Serás redirigido al dashboard</li>
                </ul>
              </div>
              <div className="space-y-3">
                <h3 className="font-semibold" style={{color: '#025951'}}>Para probar el Registro:</h3>
                <ul className="space-y-1 text-sm" style={{color: '#025951'}}>
                  <li>• Completa todos los campos</li>
                  <li>• La contraseña debe ser segura</li>
                  <li>• Acepta términos y condiciones</li>
                  <li>• Verás el flujo de bienvenida</li>
                </ul>
              </div>
            </div>
            <div className="text-center pt-4">
              <p className="text-sm font-medium" style={{color: '#038C3E'}}>
                💡 Una vez autenticado, podrás acceder a todas las páginas protegidas
              </p>
            </div>
          </CardContent>
        </Card>

      </div>
    </div>
  );
}
