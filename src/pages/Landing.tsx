import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Dumbbell, Target, TrendingUp, Users, Star, CheckCircle } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function Landing() {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <div className="mb-8">
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-4">
              Bienvenido a <span className="text-primary">RiwiFit</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Tu compañero perfecto para alcanzar tus objetivos de fitness. 
              Entrena, come bien y transforma tu vida.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button size="lg" className="text-lg px-8" onClick={() => navigate('/register')}>
              Comenzar Gratis
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8" onClick={() => navigate('/login')}>
              Iniciar Sesión
            </Button>
          </div>

          {/* Hero Image/Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <Card>
              <CardContent className="p-6 text-center">
                <Target className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-foreground">500+</h3>
                <p className="text-muted-foreground">Ejercicios disponibles</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6 text-center">
                <Users className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-foreground">10K+</h3>
                <p className="text-muted-foreground">Usuarios activos</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6 text-center">
                <Star className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-foreground">4.9</h3>
                <p className="text-muted-foreground">Calificación promedio</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              ¿Por qué elegir RiwiFit?
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Ofrecemos todas las herramientas que necesitas para transformar tu estilo de vida
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <Dumbbell className="h-10 w-10 text-primary mb-4" />
                <CardTitle>Entrenamientos Personalizados</CardTitle>
                <CardDescription>
                  Rutinas adaptadas a tu nivel y objetivos específicos
                </CardDescription>
              </CardHeader>
            </Card>

            <Card>
              <CardHeader>
                <Target className="h-10 w-10 text-primary mb-4" />
                <CardTitle>Seguimiento de Progreso</CardTitle>
                <CardDescription>
                  Monitorea tu evolución con gráficas detalladas y estadísticas
                </CardDescription>
              </CardHeader>
            </Card>

            <Card>
              <CardHeader>
                <TrendingUp className="h-10 w-10 text-primary mb-4" />
                <CardTitle>Planes Nutricionales</CardTitle>
                <CardDescription>
                  Recetas y planes alimentarios diseñados por nutricionistas
                </CardDescription>
              </CardHeader>
            </Card>

            <Card>
              <CardHeader>
                <Users className="h-10 w-10 text-primary mb-4" />
                <CardTitle>Entrenadores Virtuales</CardTitle>
                <CardDescription>
                  Asistentes AI especializados en diferentes disciplinas
                </CardDescription>
              </CardHeader>
            </Card>

            <Card>
              <CardHeader>
                <CheckCircle className="h-10 w-10 text-primary mb-4" />
                <CardTitle>Metas Semanales</CardTitle>
                <CardDescription>
                  Sistema de objetivos que te mantiene motivado cada día
                </CardDescription>
              </CardHeader>
            </Card>

            <Card>
              <CardHeader>
                <Star className="h-10 w-10 text-primary mb-4" />
                <CardTitle>Comunidad Activa</CardTitle>
                <CardDescription>
                  Conéctate con otros usuarios y comparte tu progreso
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Planes para todos
            </h2>
            <p className="text-xl text-muted-foreground">
              Elige el plan que mejor se adapte a tus necesidades
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Plan Gratuito</CardTitle>
                <CardDescription>Perfecto para comenzar tu journey fitness</CardDescription>
                <div className="text-3xl font-bold text-foreground mt-4">
                  $0<span className="text-lg text-muted-foreground">/mes</span>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-primary mr-3" />
                    <span>Ejercicios básicos</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-primary mr-3" />
                    <span>Seguimiento básico</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-primary mr-3" />
                    <span>Recetas limitadas</span>
                  </li>
                </ul>
                <Button className="w-full mt-6" variant="outline" onClick={() => navigate('/register')}>
                  Comenzar Gratis
                </Button>
              </CardContent>
            </Card>

            <Card className="border-primary">
              <CardHeader>
                <CardTitle className="text-2xl">Plan Premium</CardTitle>
                <CardDescription>Acceso completo a todas las funcionalidades</CardDescription>
                <div className="text-3xl font-bold text-foreground mt-4">
                  $9.99<span className="text-lg text-muted-foreground">/mes</span>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-primary mr-3" />
                    <span>Todos los ejercicios</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-primary mr-3" />
                    <span>Entrenadores AI personalizados</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-primary mr-3" />
                    <span>Planes nutricionales completos</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-primary mr-3" />
                    <span>Análisis avanzado de progreso</span>
                  </li>
                </ul>
                <Button className="w-full mt-6" onClick={() => navigate('/register')}>
                  Obtener Premium
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            ¿Listo para comenzar tu transformación?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Únete a miles de usuarios que ya están alcanzando sus objetivos con RiwiFit
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="text-lg px-8" onClick={() => navigate('/register')}>
              Crear Cuenta Gratis
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary" onClick={() => navigate('/demo')}>
              Ver Demo
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}