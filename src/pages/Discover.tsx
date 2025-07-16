import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Users, 
  Dumbbell, 
  ChefHat, 
  Star, 
  Crown, 
  Zap,
  Heart,
  Target,
  Brain
} from "lucide-react";
import { Link } from "react-router-dom";

const trainers = [
  {
    id: 1,
    name: "Elena Fitness",
    specialty: "Entrenamiento Funcional",
    rating: 4.9,
    image: "💪",
    description: "Especialista en fuerza y acondicionamiento físico",
    isPremium: false
  },
  {
    id: 2,
    name: "Marco Nutrition",
    specialty: "Nutrición Deportiva",
    rating: 4.8,
    image: "🥗",
    description: "Experto en planes alimentarios personalizados",
    isPremium: true
  },
  {
    id: 3,
    name: "Sofia Yoga",
    specialty: "Mindfulness & Yoga",
    rating: 5.0,
    image: "🧘‍♀️",
    description: "Maestra certificada en yoga y meditación",
    isPremium: false
  },
  {
    id: 4,
    name: "Alex Power",
    specialty: "Powerlifting",
    rating: 4.9,
    image: "🏋️‍♂️",
    description: "Campeón nacional de levantamiento de pesas",
    isPremium: true
  }
];

const exerciseCategories = [
  {
    id: "cardio",
    name: "Cardio",
    icon: Heart,
    color: "bg-power",
    exercises: 45,
    description: "Quema calorías y mejora tu resistencia"
  },
  {
    id: "strength",
    name: "Fuerza",
    icon: Zap,
    color: "bg-energy",
    exercises: 38,
    description: "Desarrolla músculo y potencia"
  },
  {
    id: "yoga",
    name: "Yoga",
    icon: Brain,
    color: "bg-recovery",
    exercises: 25,
    description: "Flexibilidad y equilibrio mental"
  },
  {
    id: "hiit",
    name: "HIIT",
    icon: Target,
    color: "bg-focus",
    exercises: 20,
    description: "Entrenamientos de alta intensidad"
  }
];

export default function Discover() {
  return (
    <div className="min-h-screen bg-background p-6">
      <div className="max-w-7xl mx-auto space-y-8">
        {/* Header */}
        <div className="text-center space-y-2">
          <h1 className="text-4xl font-bold bg-gradient-primary bg-clip-text text-transparent">
            Descubrir
          </h1>
          <p className="text-muted-foreground text-lg">
            Encuentra entrenadores expertos y ejercicios personalizados
          </p>
        </div>

        {/* Trainers Section */}
        <section className="space-y-6">
          <div className="flex items-center space-x-2">
            <Users className="h-6 w-6 text-primary" />
            <h2 className="text-2xl font-bold">Entrenadores Virtuales</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {trainers.map((trainer) => (
              <Card key={trainer.id} className="bg-card hover:bg-card/80 transition-all duration-200 hover:shadow-glow border-border/50">
                <CardHeader className="text-center pb-4">
                  <div className="text-4xl mb-2">{trainer.image}</div>
                  <div className="flex items-center justify-center space-x-2">
                    <CardTitle className="text-lg">{trainer.name}</CardTitle>
                    {trainer.isPremium && (
                      <Crown className="h-4 w-4 text-energy" />
                    )}
                  </div>
                  <div className="flex items-center justify-center space-x-1">
                    <Star className="h-4 w-4 fill-energy text-energy" />
                    <span className="text-sm font-medium">{trainer.rating}</span>
                  </div>
                  <Badge variant="secondary" className="text-xs">
                    {trainer.specialty}
                  </Badge>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  <p className="text-sm text-muted-foreground text-center">
                    {trainer.description}
                  </p>
                  
                  <div className="space-y-2">
                    <Link to={`/trainer/${trainer.id}`}>
                      <Button className="w-full bg-gradient-primary border-0 hover:shadow-glow">
                        Ver Entrenador
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Exercise Categories */}
        <section className="space-y-6">
          <div className="flex items-center space-x-2">
            <Dumbbell className="h-6 w-6 text-primary" />
            <h2 className="text-2xl font-bold">Categorías de Ejercicios</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {exerciseCategories.map((category) => {
              const IconComponent = category.icon;
              return (
                <Link key={category.id} to={`/exercises/${category.id}`}>
                  <Card className="bg-card hover:bg-card/80 transition-all duration-200 hover:shadow-glow border-border/50 cursor-pointer group">
                    <CardContent className="p-6 text-center space-y-4">
                      <div className={`${category.color} p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-200`}>
                        <IconComponent className="h-8 w-8 text-white" />
                      </div>
                      
                      <div>
                        <h3 className="font-bold text-lg">{category.name}</h3>
                        <p className="text-sm text-muted-foreground">
                          {category.exercises} ejercicios
                        </p>
                        <p className="text-xs text-muted-foreground mt-1">
                          {category.description}
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              );
            })}
          </div>
        </section>

        {/* Recipes Section */}
        <section className="space-y-6">
          <div className="flex items-center space-x-2">
            <ChefHat className="h-6 w-6 text-primary" />
            <h2 className="text-2xl font-bold">Nutrición y Recetas</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="bg-gradient-energy border-0 text-white">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Crown className="h-5 w-5" />
                  <span>Plan Premium</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-2 text-sm">
                  <li>✅ Plan alimentario semanal personalizado</li>
                  <li>✅ Chat con IA nutricional</li>
                  <li>✅ Sugerencias basadas en tus alimentos</li>
                  <li>✅ Recetas detalladas paso a paso</li>
                </ul>
                <Link to="/recipes/premium">
                  <Button className="w-full bg-white text-energy hover:bg-white/90">
                    Acceder al Plan Premium
                  </Button>
                </Link>
              </CardContent>
            </Card>
            
            <Card className="bg-card border-border/50">
              <CardHeader>
                <CardTitle>Plan Gratuito</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>✅ Recetas básicas predeterminadas</li>
                  <li>✅ Tips nutricionales generales</li>
                  <li>❌ Chat con IA (Premium)</li>
                  <li>❌ Planes personalizados (Premium)</li>
                </ul>
                <Link to="/recipes/free">
                  <Button variant="outline" className="w-full">
                    Ver Recetas Gratuitas
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </section>
      </div>
    </div>
  );
}