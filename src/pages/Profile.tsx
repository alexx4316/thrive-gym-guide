import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { 
  User, 
  Weight, 
  Activity, 
  TrendingUp, 
  Calendar,
  Target,
  Flame,
  Clock,
  Award
} from "lucide-react";

const userStats = {
  name: "María González",
  weight: 65,
  height: 168,
  bodyFat: 18.5,
  muscleMass: 28.2,
  joinDate: "Enero 2024"
};

const weeklyActivities = [
  { day: "Lun", completed: true, type: "Cardio", duration: 45 },
  { day: "Mar", completed: true, type: "Fuerza", duration: 60 },
  { day: "Mié", completed: false, type: "Yoga", duration: 30 },
  { day: "Jue", completed: true, type: "HIIT", duration: 25 },
  { day: "Vie", completed: true, type: "Fuerza", duration: 50 },
  { day: "Sáb", completed: false, type: "Cardio", duration: 40 },
  { day: "Dom", completed: false, type: "Descanso", duration: 0 }
];

const progressData = [
  { month: "Ene", weight: 68, bodyFat: 22 },
  { month: "Feb", weight: 67, bodyFat: 20.5 },
  { month: "Mar", weight: 66, bodyFat: 19.2 },
  { month: "Abr", weight: 65, bodyFat: 18.5 }
];

const achievements = [
  { id: 1, title: "Primera Semana", description: "Completaste tu primera semana de entrenamiento", icon: "🎯", earned: true },
  { id: 2, title: "Constancia", description: "15 días consecutivos entrenando", icon: "🔥", earned: true },
  { id: 3, title: "Fuerza", description: "Aumentaste 10kg en sentadilla", icon: "💪", earned: true },
  { id: 4, title: "Cardio Master", description: "50 sesiones de cardio completadas", icon: "❤️", earned: false },
  { id: 5, title: "Yogui", description: "20 sesiones de yoga", icon: "🧘‍♀️", earned: false },
  { id: 6, title: "Transformer", description: "Perdiste 5kg", icon: "⚡", earned: true }
];

export default function Profile() {
  const completedThisWeek = weeklyActivities.filter(activity => activity.completed).length;
  const totalCaloriesBurned = 2450; // Calculated from weekly activities
  const totalWorkoutTime = 180; // Minutes this week
  
  // Obtener datos del usuario autenticado
  const userName = localStorage.getItem("userName") || userStats.name;
  const userEmail = localStorage.getItem("userEmail") || "";

  return (
    <div className="min-h-screen p-6" style={{background: 'linear-gradient(135deg, #f8fffe 0%, #e8f5f3 100%)'}}>
      <div className="max-w-7xl mx-auto space-y-8">
        {/* Header */}
        <div className="text-center space-y-2">
          <h1 className="text-4xl font-bold bg-gradient-primary bg-clip-text text-transparent">
            Mi Perfil
          </h1>
          <p className="text-lg" style={{color: '#025951'}}>
            Seguimiento de tu progreso y estadísticas
          </p>
        </div>

        {/* User Info & Quick Stats */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* User Info */}
          <Card className="bg-gradient-strength border-0 text-white">
            <CardHeader className="text-center">
              <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1494790108755-2616b612b786?w=80&h=80&fit=crop&crop=face&auto=format" 
                  alt="Foto de perfil" 
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
              <CardTitle className="text-xl" style={{color: '#034155'}}>{userName}</CardTitle>
              <p style={{color: '#025951'}}>Miembro desde {userStats.joinDate}</p>
            </CardHeader>
            
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-4 text-center">
                <div>
                  <div className="text-2xl font-bold">{userStats.weight}kg</div>
                  <div className="text-sm text-white/70">Peso actual</div>
                </div>
                <div>
                  <div className="text-2xl font-bold">{userStats.height}cm</div>
                  <div className="text-sm text-white/70">Estatura</div>
                </div>
                <div>
                  <div className="text-2xl font-bold">{userStats.bodyFat}%</div>
                  <div className="text-sm text-white/70">Grasa corporal</div>
                </div>
                <div>
                  <div className="text-2xl font-bold">{userStats.muscleMass}%</div>
                  <div className="text-sm text-white/70">Masa muscular</div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Weekly Summary */}
          <Card className="bg-card border-border/50">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Calendar className="h-5 w-5 text-primary" />
                <span>Esta Semana</span>
              </CardTitle>
            </CardHeader>
            
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <Target className="h-4 w-4 text-endurance" />
                    <span className="text-sm">Entrenamientos</span>
                  </div>
                  <span className="font-bold">{completedThisWeek}/7</span>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <Flame className="h-4 w-4 text-power" />
                    <span className="text-sm">Calorías</span>
                  </div>
                  <span className="font-bold">{totalCaloriesBurned}</span>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <Clock className="h-4 w-4 text-focus" />
                    <span className="text-sm">Tiempo total</span>
                  </div>
                  <span className="font-bold">{totalWorkoutTime}min</span>
                </div>
              </div>
              
              <Progress value={(completedThisWeek / 7) * 100} className="h-2" />
              <p className="text-xs text-muted-foreground text-center">
                {Math.round((completedThisWeek / 7) * 100)}% de tu meta semanal
              </p>
            </CardContent>
          </Card>

          {/* Progress Chart Placeholder */}
          <Card className="bg-card border-border/50">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <TrendingUp className="h-5 w-5 text-primary" />
                <span>Progreso</span>
              </CardTitle>
            </CardHeader>
            
            <CardContent className="space-y-4">
              <div className="space-y-3">
                {progressData.map((data, index) => (
                  <div key={data.month} className="flex items-center justify-between">
                    <span className="text-sm font-medium">{data.month}</span>
                    <div className="flex space-x-4 text-sm">
                      <span className="text-power">{data.weight}kg</span>
                      <span className="text-focus">{data.bodyFat}%</span>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="pt-2 border-t border-border/50">
                <div className="flex justify-between text-xs text-muted-foreground">
                  <span>Peso perdido: 3kg</span>
                  <span>Grasa reducida: 3.5%</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Weekly Activity Grid */}
        <Card className="bg-card border-border/50">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Activity className="h-5 w-5 text-primary" />
              <span>Actividad Semanal</span>
            </CardTitle>
          </CardHeader>
          
          <CardContent>
            <div className="grid grid-cols-7 gap-2">
              {weeklyActivities.map((activity, index) => (
                <div
                  key={index}
                  className={`p-4 rounded-lg text-center transition-all duration-200 ${
                    activity.completed
                      ? 'bg-endurance text-white shadow-glow'
                      : activity.type === 'Descanso'
                      ? 'bg-muted/50 text-muted-foreground'
                      : 'bg-muted/20 text-muted-foreground border border-border/50'
                  }`}
                >
                  <div className="font-bold text-sm">{activity.day}</div>
                  <div className="text-xs mt-1">{activity.type}</div>
                  {activity.duration > 0 && (
                    <div className="text-xs mt-1">{activity.duration}min</div>
                  )}
                  {activity.completed && (
                    <div className="text-xs mt-1">✓</div>
                  )}
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Achievements */}
        <Card className="bg-card border-border/50">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Award className="h-5 w-5 text-primary" />
              <span>Logros</span>
            </CardTitle>
          </CardHeader>
          
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {achievements.map((achievement) => (
                <div
                  key={achievement.id}
                  className={`p-4 rounded-lg border transition-all duration-200 ${
                    achievement.earned
                      ? 'bg-gradient-energy border-0 text-white shadow-glow'
                      : 'bg-muted/20 border-border/50'
                  }`}
                  style={!achievement.earned ? {color: '#034155'} : {}}
                >
                  <div className="text-center space-y-2">
                    <div className="text-2xl">{achievement.icon}</div>
                    <div className="font-bold text-sm">{achievement.title}</div>
                    <div className="text-xs">{achievement.description}</div>
                    {achievement.earned && (
                      <Badge className="bg-white/20 text-white text-xs">
                        Desbloqueado
                      </Badge>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}