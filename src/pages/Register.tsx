import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Progress } from "@/components/ui/progress";
import { Eye, EyeOff, Dumbbell, Mail, Lock, User, Phone } from "lucide-react";

export default function Register() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: ""
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [acceptTerms, setAcceptTerms] = useState(false);
  
  const navigate = useNavigate();

  // Validación de fortaleza de contraseña
  const getPasswordStrength = () => {
    const password = formData.password;
    let score = 0;
    if (password.length >= 8) score++;
    if (/[A-Z]/.test(password)) score++;
    if (/[a-z]/.test(password)) score++;
    if (/[0-9]/.test(password)) score++;
    if (/[^A-Za-z0-9]/.test(password)) score++;
    return score;
  };

  const passwordStrength = getPasswordStrength();
  const strengthLabels = ["Muy débil", "Débil", "Regular", "Buena", "Excelente"];
  const strengthColors = ["bg-red-500", "bg-orange-500", "bg-yellow-500", "bg-blue-500", "bg-green-500"];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    // Validaciones
    if (!acceptTerms) {
      setError("Debes aceptar los términos y condiciones");
      setIsLoading(false);
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      setError("Las contraseñas no coinciden");
      setIsLoading(false);
      return;
    }

    if (passwordStrength < 3) {
      setError("La contraseña debe ser más segura");
      setIsLoading(false);
      return;
    }

    try {
      // Simulamos registro
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Aquí iría la lógica real de registro
      localStorage.setItem("isAuthenticated", "true");
      localStorage.setItem("userEmail", formData.email);
      localStorage.setItem("userName", `${formData.firstName} ${formData.lastName}`);
      
      navigate("/welcome");
    } catch (err) {
      setError("Error al crear la cuenta. Intenta nuevamente.");
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
              <Dumbbell className="h-8 w-8 text-white" />
            </div>
            <h1 className="text-3xl font-bold" style={{color: '#034155'}}>RiwiFit</h1>
          </div>
          <p className="text-lg" style={{color: '#025951'}}>
            Crea tu cuenta y comienza tu viaje fitness
          </p>
        </div>

        {/* Formulario de registro */}
        <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg">
          <CardHeader className="text-center pb-6">
            <CardTitle className="text-2xl" style={{color: '#034155'}}>
              Únete a RiwiFit
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

              {/* Nombre y apellido */}
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="firstName" style={{color: '#034155'}}>
                    Nombre
                  </Label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4" style={{color: '#025951'}} />
                    <Input
                      id="firstName"
                      name="firstName"
                      type="text"
                      value={formData.firstName}
                      onChange={handleChange}
                      placeholder="Juan"
                      className="pl-10 border-green-200 focus:border-green-500 focus:ring-green-500"
                      required
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="lastName" style={{color: '#034155'}}>
                    Apellido
                  </Label>
                  <Input
                    id="lastName"
                    name="lastName"
                    type="text"
                    value={formData.lastName}
                    onChange={handleChange}
                    placeholder="Pérez"
                    className="border-green-200 focus:border-green-500 focus:ring-green-500"
                    required
                  />
                </div>
              </div>

              {/* Email */}
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

              {/* Teléfono */}
              <div className="space-y-2">
                <Label htmlFor="phone" style={{color: '#034155'}}>
                  Teléfono (opcional)
                </Label>
                <div className="relative">
                  <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4" style={{color: '#025951'}} />
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+57 300 123 4567"
                    className="pl-10 border-green-200 focus:border-green-500 focus:ring-green-500"
                  />
                </div>
              </div>

              {/* Contraseña */}
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
                
                {/* Indicador de fortaleza de contraseña */}
                {formData.password && (
                  <div className="space-y-2">
                    <Progress value={(passwordStrength / 5) * 100} className="h-2" />
                    <p className="text-xs flex items-center space-x-2">
                      <span style={{color: '#025951'}}>Fortaleza:</span>
                      <span className={`font-medium ${passwordStrength >= 3 ? 'text-green-600' : 'text-red-600'}`}>
                        {strengthLabels[passwordStrength] || ""}
                      </span>
                    </p>
                  </div>
                )}
              </div>

              {/* Confirmar contraseña */}
              <div className="space-y-2">
                <Label htmlFor="confirmPassword" style={{color: '#034155'}}>
                  Confirmar contraseña
                </Label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4" style={{color: '#025951'}} />
                  <Input
                    id="confirmPassword"
                    name="confirmPassword"
                    type={showConfirmPassword ? "text" : "password"}
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    placeholder="••••••••"
                    className="pl-10 pr-10 border-green-200 focus:border-green-500 focus:ring-green-500"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2"
                  >
                    {showConfirmPassword ? (
                      <EyeOff className="h-4 w-4" style={{color: '#025951'}} />
                    ) : (
                      <Eye className="h-4 w-4" style={{color: '#025951'}} />
                    )}
                  </button>
                </div>
                {formData.confirmPassword && formData.password !== formData.confirmPassword && (
                  <p className="text-xs text-red-600">Las contraseñas no coinciden</p>
                )}
              </div>

              {/* Términos y condiciones */}
              <div className="flex items-start space-x-2">
                <input
                  type="checkbox"
                  id="acceptTerms"
                  checked={acceptTerms}
                  onChange={(e) => setAcceptTerms(e.target.checked)}
                  className="mt-1 rounded border-green-300 text-green-600 focus:ring-green-500"
                  required
                />
                <label htmlFor="acceptTerms" className="text-sm" style={{color: '#025951'}}>
                  Acepto los{" "}
                  <Link to="/terms" className="hover:underline" style={{color: '#038C3E'}}>
                    Términos de Servicio
                  </Link>
                  {" "}y la{" "}
                  <Link to="/privacy" className="hover:underline" style={{color: '#038C3E'}}>
                    Política de Privacidad
                  </Link>
                </label>
              </div>

              <Button
                type="submit"
                className="w-full text-white font-medium py-3 rounded-lg transition-all duration-300 hover:shadow-glow"
                style={{background: 'linear-gradient(135deg, #02735E 0%, #0CF25D 100%)'}}
                disabled={isLoading || !acceptTerms}
              >
                {isLoading ? "Creando cuenta..." : "Crear Cuenta"}
              </Button>
            </form>

            <div className="mt-6 text-center">
              <p className="text-sm" style={{color: '#025951'}}>
                ¿Ya tienes una cuenta?{" "}
                <Link
                  to="/login"
                  className="font-medium hover:underline"
                  style={{color: '#038C3E'}}
                >
                  Inicia sesión aquí
                </Link>
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
