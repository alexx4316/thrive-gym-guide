import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Moon, Dumbbell, Droplets, Target } from "lucide-react";

interface Goal {
  id: string;
  title: string;
  icon: React.ComponentType<{ className?: string }>;
  current: number;
  target: number;
  unit: string;
  color: string;
  bgColor: string;
}

const goals: Goal[] = [
  {
    id: "sleep",
    title: "Descanso",
    icon: Moon,
    current: 42,
    target: 56, // 8 hours * 7 days
    unit: "horas",
    color: "text-recovery",
    bgColor: "bg-recovery/10"
  },
  {
    id: "exercise",
    title: "Ejercicio",
    icon: Dumbbell,
    current: 4,
    target: 5,
    unit: "sesiones",
    color: "text-energy",
    bgColor: "bg-energy/10"
  },
  {
    id: "water",
    title: "Hidratación",
    icon: Droplets,
    current: 18,
    target: 21, // 3L * 7 days
    unit: "litros",
    color: "text-focus",
    bgColor: "bg-focus/10"
  }
];

export function WeeklyGoals() {
  // Calculate overall average
  const overallProgress = goals.reduce((acc, goal) => {
    const percentage = (goal.current / goal.target) * 100;
    return acc + percentage;
  }, 0) / goals.length;

  const getProgressColor = (percentage: number) => {
    if (percentage >= 90) return "bg-endurance";
    if (percentage >= 70) return "bg-energy";
    if (percentage >= 50) return "bg-focus";
    return "bg-power";
  };

  return (
    <Card className="bg-gradient-wellness border-0 text-white shadow-glow">
      <CardHeader className="pb-4">
        <div className="flex items-center justify-between">
          <CardTitle className="flex items-center space-x-2">
            <Target className="h-5 w-5" />
            <span>Metas Semanales</span>
          </CardTitle>
          <Badge className="bg-white/20 text-white hover:bg-white/30">
            {Math.round(overallProgress)}% Completado
          </Badge>
        </div>
      </CardHeader>
      
      <CardContent className="space-y-6">
        {/* Overall Progress */}
        <div className="space-y-2">
          <div className="flex justify-between text-sm">
            <span className="font-medium">Progreso General</span>
            <span>{Math.round(overallProgress)}%</span>
          </div>
          <Progress 
            value={overallProgress} 
            className="h-3 bg-white/20"
          />
        </div>

        {/* Individual Goals */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {goals.map((goal) => {
            const percentage = (goal.current / goal.target) * 100;
            const IconComponent = goal.icon;
            
            return (
              <div key={goal.id} className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
                <div className="flex items-center space-x-3 mb-3">
                  <div className={`p-2 rounded-lg ${goal.bgColor}`}>
                    <IconComponent className={`h-4 w-4 ${goal.color}`} />
                  </div>
                  <div>
                    <p className="font-medium text-sm">{goal.title}</p>
                    <p className="text-xs text-white/70">
                      {goal.current} / {goal.target} {goal.unit}
                    </p>
                  </div>
                </div>
                
                <Progress 
                  value={percentage} 
                  className={`h-2 bg-white/20`}
                />
                
                <div className="flex justify-between items-center mt-2">
                  <span className="text-xs text-white/70">
                    {Math.round(percentage)}% completado
                  </span>
                  {percentage >= 100 && (
                    <Badge className="bg-endurance text-white text-xs px-2 py-0">
                      ¡Meta cumplida!
                    </Badge>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </CardContent>
    </Card>
  );
}