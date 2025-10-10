import { Coffee, Users, Clock, Award } from "lucide-react";
import { BookingForm } from "@/components/BookingForm";
import heroImage from "@/assets/coffee-hero.jpg";

const Index = () => {
  // Replace this with your actual n8n webhook URL
  const webhookUrl = "YOUR_WEBHOOK_URL_HERE";

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/70" />
        </div>
        
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-primary-foreground mb-6">
            BrewMasters Coffee Catering
          </h1>
          <p className="text-xl md:text-2xl text-primary-foreground/95 font-light max-w-2xl mx-auto">
            Crafting exceptional coffee experiences for your special events. 
            Fast, friendly, and fully customizable service.
          </p>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 bg-gradient-to-b from-background to-secondary/20">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
                <Coffee className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Artisan Craft</h3>
              <p className="text-muted-foreground text-sm">
                Premium specialty coffee prepared by expert baristas
              </p>
            </div>
            
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent/10 mb-4">
                <Users className="w-8 h-8 text-accent" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Any Size Event</h3>
              <p className="text-muted-foreground text-sm">
                From intimate gatherings to large corporate functions
              </p>
            </div>
            
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
                <Clock className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Fast Setup</h3>
              <p className="text-muted-foreground text-sm">
                Professional mobile espresso bar ready in minutes
              </p>
            </div>
            
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent/10 mb-4">
                <Award className="w-8 h-8 text-accent" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Custom Menus</h3>
              <p className="text-muted-foreground text-sm">
                Tailored beverage selections for your unique event
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Booking Form Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Request Your Coffee Bar Quote
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Fill out the form below and we'll create a custom quote for your event. 
              We typically respond within 24 hours.
            </p>
          </div>

          <div className="bg-card rounded-2xl shadow-[var(--shadow-soft)] p-8 md:p-12 border border-border">
            <BookingForm webhookUrl={webhookUrl} />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-primary-foreground py-8 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-sm opacity-90">
            © {new Date().getFullYear()} BrewMasters Coffee Catering. 
            Bringing exceptional coffee to your exceptional events.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
