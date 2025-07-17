import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { WeeklyGoals } from "@/components/WeeklyGoals";
import { 
  Dumbbell, 
  Users, 
  TrendingUp, 
  Zap, 
  Calendar,
  Target,
  Award,
  Activity
} from "lucide-react";
import { Link } from "react-router-dom";

const quickStats = [
  {
    label: "Entrenamientos esta semana",
    value: "4/5",
    icon: Target,
    color: "text-endurance",
    bgColor: "bg-endurance/10"
  },
  {
    label: "Calorías quemadas",
    value: "2,450",
    icon: Zap,
    color: "text-power",
    bgColor: "bg-power/10"
  },
  {
    label: "Tiempo total",
    value: "180 min",
    icon: Activity,
    color: "text-focus",
    bgColor: "bg-focus/10"
  },
  {
    label: "Racha actual",
    value: "12 días",
    icon: Award,
    color: "text-energy",
    bgColor: "bg-energy/10"
  }
];

const quickActions = [
  {
    title: "Iniciar Entrenamiento",
    description: "Comienza tu rutina de hoy",
    icon: Dumbbell,
    link: "/exercises",
    gradient: "bg-gradient-energy"
  },
  {
    title: "Ver Entrenadores",
    description: "Consulta con expertos",
    icon: Users,
    link: "/discover",
    gradient: "bg-gradient-strength"
  },
  {
    title: "Mi Progreso",
    description: "Revisa tus estadísticas",
    icon: TrendingUp,
    link: "/profile",
    gradient: "bg-gradient-wellness"
  }
];

const Index = () => {
  return (
    <div className="min-h-screen" style={{background: 'linear-gradient(135deg, #f8fffe 0%, #e8f5f3 100%)'}}>
      <div className="max-w-7xl mx-auto p-6 space-y-8">
        {/* Welcome Section */}
        <div className="text-center space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-primary bg-clip-text text-transparent">
            ¡Bienvenido de vuelta!
          </h1>
          <p className="text-xl max-w-2xl mx-auto" style={{color: '#025951'}}>
            Continúa tu viaje fitness y alcanza tus metas con nuestro sistema completo de entrenamiento
          </p>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {quickStats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <Card key={index} className="bg-card/50 border-border/50 hover:bg-card transition-all duration-200">
                <CardContent className="p-4 text-center space-y-2">
                  <div className={`${stat.bgColor} p-2 rounded-lg w-fit mx-auto`}>
                    <IconComponent className={`h-5 w-5 ${stat.color}`} />
                  </div>
                  <div className="text-xl font-bold" style={{color: '#034155'}}>{stat.value}</div>
                  <div className="text-xs" style={{color: '#02735E'}}>{stat.label}</div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Weekly Goals */}
        <WeeklyGoals />

        {/* Quick Actions */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {quickActions.map((action, index) => {
            const IconComponent = action.icon;
            return (
              <Link key={index} to={action.link}>
                <Card className={`${action.gradient} border-5 text-white hover:shadow-intense transition-all duration-200 cursor-pointer group`}>
                  <CardHeader className="pb-4">
                    <div className="flex items-center space-x-3">
                      <div className="bg-white/20 p-3 rounded-lg group-hover:scale-110 transition-transform duration-200">
                        <IconComponent className="h-6 w-6" />
                      </div>
                      <div>
                        <CardTitle className="text-lg">{action.title}</CardTitle>
                        <p className="text-sm text-white/80">{action.description}</p>
                      </div>
                    </div>
                  </CardHeader>
                </Card>
              </Link>
            );
          })}
        </div>

        {/* Today's Recommendation */}
        <Card className="bg-card border-border/50">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Calendar className="h-5 w-5 text-primary" />
              <span>Recomendación del Día</span>
            </CardTitle>
          </CardHeader>
          
          <CardContent className="space-y-4">
            <div className="bg-gradient-primary p-6 rounded-lg text-primary-foreground">
              <h3 className="font-bold text-lg mb-2">🔥 Entrenamiento HIIT de 25 minutos</h3>
              <p className="text-sm mb-4">
                Perfecto para un miércoles intenso. Combina cardio y fuerza para maximizar tu tiempo.
              </p>
              <Link to="/exercises/hiit">
                <Button className="bg-white/20 text-white hover:bg-white/30 border-0">
                  Empezar Ahora
                </Button>
              </Link>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
              <div className="space-y-2">
                <h4 className="font-medium" style={{color: '#034155'}}>Lo que trabajarás:</h4>
                <ul className="space-y-1" style={{color: '#02735E'}}>
                  <li>• Resistencia cardiovascular</li>
                  <li>• Fuerza funcional</li>
                  <li>• Quema de grasa</li>
                </ul>
              </div>
              <div className="space-y-2">
                <h4 className="font-medium" style={{color: '#034155'}}>Beneficios:</h4>
                <ul className="space-y-1" style={{color: '#02735E'}}>
                  <li>• Quemar hasta 350 calorías</li>
                  <li>• Efecto afterburn 6+ horas</li>
                  <li>• Mejorar tu VO2 max</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Index;
