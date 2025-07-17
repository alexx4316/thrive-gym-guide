import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Check, Target, Dumbbell, Heart, Award } from "lucide-react";

const steps = [
  {
    id: 1,
    title: "¡Bienvenido a RiwiFit!",
    description: "Tu cuenta ha sido creada exitosamente",
    icon: Check,
    color: "#0CF25D"
  },
  {
    id: 2,
    title: "Define tus objetivos",
    description: "Personaliza tu experiencia fitness",
    icon: Target,
    color: "#038C3E"
  },
  {
    id: 3,
    title: "Comienza a entrenar",
    description: "Accede a rutinas personalizadas",
    icon: Dumbbell,
    color: "#02735E"
  },
  {
    id: 4,
    title: "Monitorea tu progreso",
    description: "Sigue tus logros y estadísticas",
    icon: Heart,
    color: "#025951"
  }
];

export default function Welcome() {
  const [currentStep, setCurrentStep] = useState(0);
  const [userName, setUserName] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const name = localStorage.getItem("userName") || "Usuario";
    setUserName(name);

    // Auto-avanzar los pasos
    const interval = setInterval(() => {
      setCurrentStep(prev => {
        if (prev < steps.length - 1) {
          return prev + 1;
        } else {
          clearInterval(interval);
          return prev;
        }
      });
    }, 1500);

    return () => clearInterval(interval);
  }, []);

  const handleContinue = () => {
    navigate("/");
  };

  const currentStepData = steps[currentStep];

  return (
    <div className="min-h-screen flex items-center justify-center p-6" style={{background: 'linear-gradient(135deg, #f8fffe 0%, #e8f5f3 100%)'}}>
      <div className="w-full max-w-lg space-y-8">
        
        {/* Progreso */}
        <div className="space-y-4">
          <div className="text-center">
            <h1 className="text-3xl font-bold mb-2" style={{color: '#034155'}}>
              ¡Hola, {userName.split(' ')[0]}! 👋
            </h1>
            <p style={{color: '#025951'}}>
              Configurando tu experiencia...
            </p>
          </div>
          
          <Progress 
            value={((currentStep + 1) / steps.length) * 100} 
            className="h-3"
          />
          
          <div className="flex justify-between text-xs" style={{color: '#025951'}}>
            <span>Paso {currentStep + 1} de {steps.length}</span>
            <span>{Math.round(((currentStep + 1) / steps.length) * 100)}%</span>
          </div>
        </div>

        {/* Card principal */}
        <Card className="bg-white/90 backdrop-blur-sm border-0 shadow-xl">
          <CardContent className="p-8 text-center space-y-6">
            
            {/* Icono animado */}
            <div 
              className="w-20 h-20 rounded-full flex items-center justify-center mx-auto transition-all duration-500 animate-pulse"
              style={{backgroundColor: currentStepData.color + '20'}}
            >
              <currentStepData.icon 
                className="h-10 w-10" 
                style={{color: currentStepData.color}}
              />
            </div>

            {/* Contenido del paso */}
            <div className="space-y-3">
              <h2 className="text-2xl font-bold" style={{color: '#034155'}}>
                {currentStepData.title}
              </h2>
              <p className="text-lg" style={{color: '#025951'}}>
                {currentStepData.description}
              </p>
            </div>

            {/* Lista de características */}
            {currentStep === steps.length - 1 && (
              <div className="space-y-4 text-left">
                <h3 className="font-semibold text-center" style={{color: '#034155'}}>
                  ¿Qué puedes hacer ahora?
                </h3>
                <div className="grid gap-3">
                  {[
                    "Acceder a rutinas personalizadas",
                    "Monitorear tu progreso diario",
                    "Chatear con IA especializada",
                    "Descubrir nuevos entrenamientos",
                    "Conectar con entrenadores"
                  ].map((feature, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <div 
                        className="w-5 h-5 rounded-full flex items-center justify-center"
                        style={{backgroundColor: '#0CF25D'}}
                      >
                        <Check className="h-3 w-3 text-white" />
                      </div>
                      <span style={{color: '#025951'}}>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Botón de continuar - solo aparece en el último paso */}
            {currentStep === steps.length - 1 && (
              <div className="pt-4">
                <Button
                  onClick={handleContinue}
                  className="w-full text-white font-medium py-3 rounded-lg transition-all duration-300 hover:shadow-glow"
                  style={{background: 'linear-gradient(135deg, #02735E 0%, #0CF25D 100%)'}}
                >
                  ¡Comenzar mi viaje fitness! 🚀
                </Button>
              </div>
            )}
          </CardContent>
        </Card>

        {/* Pasos en miniatura */}
        <div className="flex justify-center space-x-4">
          {steps.map((step, index) => (
            <div
              key={step.id}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index <= currentStep 
                  ? 'scale-125 shadow-glow' 
                  : 'opacity-30'
              }`}
              style={{
                backgroundColor: index <= currentStep ? step.color : '#e5e7eb'
              }}
            />
          ))}
        </div>

        {/* Decoraciones */}
        <div className="flex justify-center space-x-8 opacity-60">
          <Award className="h-6 w-6" style={{color: '#0CF25D'}} />
          <Dumbbell className="h-6 w-6" style={{color: '#038C3E'}} />
          <Heart className="h-6 w-6" style={{color: '#02735E'}} />
        </div>
      </div>
    </div>
  );
}
