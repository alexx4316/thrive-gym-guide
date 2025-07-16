import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Clock, 
  Flame, 
  Target, 
  Users,
  Play,
  Star,
  ChevronRight
} from "lucide-react";
import { Link, useParams } from "react-router-dom";

const exercisesByCategory = {
  cardio: [
    {
      id: 1,
      name: "Running Intervalos",
      duration: 30,
      calories: 350,
      difficulty: "Intermedio",
      rating: 4.8,
      image: "🏃‍♂️",
      description: "Combina sprints con trote para máxima quema de calorías"
    },
    {
      id: 2,
      name: "Cardio Dance",
      duration: 45,
      calories: 400,
      difficulty: "Principiante",
      rating: 4.9,
      image: "💃",
      description: "Baila y quema calorías al ritmo de la música"
    },
    {
      id: 3,
      name: "Ciclismo Virtual",
      duration: 60,
      calories: 500,
      difficulty: "Avanzado",
      rating: 4.7,
      image: "🚴‍♀️",
      description: "Pedalea a través de rutas virtuales desafiantes"
    }
  ],
  strength: [
    {
      id: 4,
      name: "Push/Pull/Legs",
      duration: 50,
      calories: 250,
      difficulty: "Intermedio",
      rating: 4.9,
      image: "💪",
      description: "Rutina completa de fuerza para todo el cuerpo"
    },
    {
      id: 5,
      name: "Peso Corporal",
      duration: 25,
      calories: 180,
      difficulty: "Principiante",
      rating: 4.6,
      image: "🤸‍♂️",
      description: "Ejercicios usando solo tu peso corporal"
    },
    {
      id: 6,
      name: "Powerlifting",
      duration: 75,
      calories: 300,
      difficulty: "Avanzado",
      rating: 4.8,
      image: "🏋️‍♂️",
      description: "Sentadillas, peso muerto y press de banca"
    }
  ],
  yoga: [
    {
      id: 7,
      name: "Vinyasa Flow",
      duration: 40,
      calories: 120,
      difficulty: "Intermedio",
      rating: 4.9,
      image: "🧘‍♀️",
      description: "Fluye entre posturas con respiración consciente"
    },
    {
      id: 8,
      name: "Yoga Restaurativo",
      duration: 30,
      calories: 80,
      difficulty: "Principiante",
      rating: 4.8,
      image: "🕯️",
      description: "Relajación profunda y flexibilidad suave"
    },
    {
      id: 9,
      name: "Power Yoga",
      duration: 55,
      calories: 200,
      difficulty: "Avanzado",
      rating: 4.7,
      image: "⚡",
      description: "Yoga dinámico que construye fuerza y resistencia"
    }
  ],
  hiit: [
    {
      id: 10,
      name: "HIIT Tabata",
      duration: 20,
      calories: 280,
      difficulty: "Avanzado",
      rating: 4.9,
      image: "🔥",
      description: "4 minutos de intensidad máxima por ejercicio"
    },
    {
      id: 11,
      name: "HIIT Principiantes",
      duration: 15,
      calories: 150,
      difficulty: "Principiante",
      rating: 4.6,
      image: "⭐",
      description: "Introducción suave al entrenamiento por intervalos"
    },
    {
      id: 12,
      name: "Crossfit WOD",
      duration: 35,
      calories: 400,
      difficulty: "Avanzado",
      rating: 4.8,
      image: "🎯",
      description: "Workout of the Day estilo CrossFit"
    }
  ]
};

const categoryInfo = {
  cardio: {
    name: "Cardio",
    description: "Ejercicios cardiovasculares para mejorar tu resistencia y quemar calorías",
    color: "bg-power"
  },
  strength: {
    name: "Fuerza",
    description: "Entrenamientos de resistencia para desarrollar músculo y potencia",
    color: "bg-energy"
  },
  yoga: {
    name: "Yoga",
    description: "Práticas de yoga para flexibilidad, balance y paz mental",
    color: "bg-recovery"
  },
  hiit: {
    name: "HIIT",
    description: "Entrenamientos de alta intensidad para máximos resultados en poco tiempo",
    color: "bg-focus"
  }
};

const getDifficultyColor = (difficulty: string) => {
  switch (difficulty) {
    case "Principiante": return "bg-endurance";
    case "Intermedio": return "bg-energy";
    case "Avanzado": return "bg-power";
    default: return "bg-muted";
  }
};

export default function Exercises() {
  const { category } = useParams();
  
  if (!category || !exercisesByCategory[category as keyof typeof exercisesByCategory]) {
    return (
      <div className="min-h-screen bg-background p-6">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-bold text-center mb-8 bg-gradient-primary bg-clip-text text-transparent">
            Categorías de Ejercicios
          </h1>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {Object.entries(categoryInfo).map(([key, info]) => (
              <Link key={key} to={`/exercises/${key}`}>
                <Card className="bg-card hover:bg-card/80 transition-all duration-200 hover:shadow-glow border-border/50 cursor-pointer group">
                  <CardContent className="p-6 text-center space-y-4">
                    <div className={`${info.color} p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-200`}>
                      <Target className="h-8 w-8 text-white" />
                    </div>
                    
                    <div>
                      <h3 className="font-bold text-lg">{info.name}</h3>
                      <p className="text-sm text-muted-foreground">
                        {info.description}
                      </p>
                    </div>
                    
                    <ChevronRight className="h-5 w-5 mx-auto text-muted-foreground group-hover:text-primary transition-colors" />
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </div>
    );
  }

  const exercises = exercisesByCategory[category as keyof typeof exercisesByCategory];
  const info = categoryInfo[category as keyof typeof categoryInfo];

  return (
    <div className="min-h-screen bg-background p-6">
      <div className="max-w-7xl mx-auto space-y-8">
        {/* Header */}
        <div className="text-center space-y-4">
          <Link to="/exercises" className="inline-flex items-center text-muted-foreground hover:text-primary transition-colors">
            ← Volver a categorías
          </Link>
          <h1 className="text-4xl font-bold bg-gradient-primary bg-clip-text text-transparent">
            {info.name}
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            {info.description}
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-2xl mx-auto">
          <Card className="bg-card/50 border-border/50">
            <CardContent className="p-4 text-center">
              <div className="text-2xl font-bold text-primary">{exercises.length}</div>
              <div className="text-sm text-muted-foreground">Ejercicios</div>
            </CardContent>
          </Card>
          
          <Card className="bg-card/50 border-border/50">
            <CardContent className="p-4 text-center">
              <div className="text-2xl font-bold text-energy">
                {Math.round(exercises.reduce((acc, ex) => acc + ex.duration, 0) / exercises.length)}min
              </div>
              <div className="text-sm text-muted-foreground">Duración promedio</div>
            </CardContent>
          </Card>
          
          <Card className="bg-card/50 border-border/50">
            <CardContent className="p-4 text-center">
              <div className="text-2xl font-bold text-power">
                {Math.round(exercises.reduce((acc, ex) => acc + ex.calories, 0) / exercises.length)}
              </div>
              <div className="text-sm text-muted-foreground">Calorías promedio</div>
            </CardContent>
          </Card>
        </div>

        {/* Exercises Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {exercises.map((exercise) => (
            <Card key={exercise.id} className="bg-card hover:bg-card/80 transition-all duration-200 hover:shadow-glow border-border/50">
              <CardHeader className="pb-4">
                <div className="flex items-start justify-between">
                  <div className="text-4xl">{exercise.image}</div>
                  <div className="flex items-center space-x-1">
                    <Star className="h-4 w-4 fill-energy text-energy" />
                    <span className="text-sm font-medium">{exercise.rating}</span>
                  </div>
                </div>
                <CardTitle className="text-lg">{exercise.name}</CardTitle>
                <p className="text-sm text-muted-foreground">{exercise.description}</p>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between text-sm">
                  <div className="flex items-center space-x-1">
                    <Clock className="h-4 w-4 text-muted-foreground" />
                    <span>{exercise.duration} min</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Flame className="h-4 w-4 text-power" />
                    <span>{exercise.calories} cal</span>
                  </div>
                </div>
                
                <Badge className={`${getDifficultyColor(exercise.difficulty)} text-white`}>
                  {exercise.difficulty}
                </Badge>
                
                <Button className="w-full bg-gradient-primary border-0 hover:shadow-glow">
                  <Play className="h-4 w-4 mr-2" />
                  Comenzar Ejercicio
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}