import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-subtle overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="absolute top-20 left-20 w-72 h-72 bg-gradient-accent rounded-full blur-3xl opacity-20 animate-float"></div>
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-primary rounded-full blur-3xl opacity-20 animate-float" style={{ animationDelay: '3s' }}></div>
      
      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="max-w-4xl mx-auto animate-fade-in">
          <div className="mb-8">
            <span className="inline-block px-4 py-2 bg-accent/10 text-accent font-medium rounded-full text-sm mb-6 animate-scale-in">
              🚀 Practice Makes Perfect
            </span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent leading-tight">
            Practice Your VC Pitch with 
            <span className="block">AI-Powered Feedback</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed">
            Get realistic feedback from AI investors trained on thousands of successful pitches. 
            Improve your clarity, confidence, and funding chances before the real meeting.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link to="/setup">
              <Button variant="hero" size="lg" className="text-lg px-8 py-4 h-auto">
                Try Your Pitch Now
                <ArrowDown className="ml-2 animate-bounce" />
              </Button>
            </Link>
            
            <Button variant="outline" size="lg" className="text-lg px-8 py-4 h-auto" asChild>
              <a href="#how-it-works">
                See How It Works
              </a>
            </Button>
          </div>
          
          <div className="mt-16 text-sm text-muted-foreground">
            ✨ No signup required to try • 🎯 Get instant feedback • 🔒 Your pitch stays private
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-muted-foreground/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-muted-foreground/30 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;