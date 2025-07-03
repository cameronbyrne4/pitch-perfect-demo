import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { Upload, Link as LinkIcon, FileText, ChevronRight } from "lucide-react";

const Setup = () => {
  const [selectedFocus, setSelectedFocus] = useState<string[]>([]);
  const [selectedPersona, setSelectedPersona] = useState<string>("");

  const focusAreas = [
    { id: "clarity", label: "Pitch Clarity", description: "Clear communication of your value prop" },
    { id: "validity", label: "Idea Validity", description: "Market opportunity and solution fit" },
    { id: "confidence", label: "Presentation Confidence", description: "Body language and vocal delivery" },
    { id: "structure", label: "Pitch Structure", description: "Logical flow and storytelling" },
    { id: "timing", label: "Time Management", description: "Pacing and key point emphasis" },
    { id: "qa", label: "Q&A Handling", description: "Responding to tough questions" }
  ];

  const vcPersonas = [
    {
      id: "aggressive",
      name: "Aggressive Partner",
      description: "Direct, challenging questions about market size and competition",
      traits: ["Critical", "Fast-paced", "Numbers-focused"],
      avatar: "🦈"
    },
    {
      id: "technical", 
      name: "Technical Specialist",
      description: "Deep dives into product architecture and scalability",
      traits: ["Detail-oriented", "Product-focused", "Technical"],
      avatar: "🔧"
    },
    {
      id: "conservative",
      name: "Conservative LP",
      description: "Risk-averse, focused on business model and defensibility", 
      traits: ["Cautious", "Business model", "Long-term view"],
      avatar: "🏦"
    },
    {
      id: "growth",
      name: "Growth Investor", 
      description: "Optimistic about scaling, interested in traction metrics",
      traits: ["Metrics-driven", "Scaling-focused", "Optimistic"],
      avatar: "📈"
    }
  ];

  const toggleFocus = (focusId: string) => {
    setSelectedFocus(prev => 
      prev.includes(focusId) 
        ? prev.filter(id => id !== focusId)
        : [...prev, focusId]
    );
  };

  return (
    <div className="min-h-screen bg-gradient-subtle">
      <div className="container mx-auto px-6 py-12">
        <div className="max-w-4xl mx-auto">
          
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
              Set Up Your Pitch Practice
            </h1>
            <p className="text-xl text-muted-foreground">
              Customize your practice session to get the most relevant feedback
            </p>
          </div>

          {/* Context Upload Section */}
          <Card className="p-8 mb-8 animate-fade-in">
            <h2 className="text-2xl font-semibold mb-6 text-foreground">
              📋 Upload Your Pitch Context
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              
              <div className="relative group">
                <Button 
                  variant="outline" 
                  className="w-full h-24 flex-col gap-2 border-2 border-dashed hover:border-accent hover:bg-accent/5 transition-all duration-300 cursor-not-allowed opacity-60"
                  disabled
                >
                  <Upload className="w-6 h-6" />
                  <span>Upload Pitch Deck</span>
                </Button>
                <div className="absolute inset-0 flex items-center justify-center bg-background/90 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Badge variant="secondary">Coming Soon</Badge>
                </div>
              </div>

              <div className="relative group">
                <Button 
                  variant="outline" 
                  className="w-full h-24 flex-col gap-2 border-2 border-dashed hover:border-accent hover:bg-accent/5 transition-all duration-300 cursor-not-allowed opacity-60"
                  disabled
                >
                  <LinkIcon className="w-6 h-6" />
                  <span>Link to Website</span>
                </Button>
                <div className="absolute inset-0 flex items-center justify-center bg-background/90 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Badge variant="secondary">Coming Soon</Badge>
                </div>
              </div>

              <div className="relative group">
                <Button 
                  variant="outline" 
                  className="w-full h-24 flex-col gap-2 border-2 border-dashed hover:border-accent hover:bg-accent/5 transition-all duration-300 cursor-not-allowed opacity-60"
                  disabled
                >
                  <FileText className="w-6 h-6" />
                  <span>Paste Text</span>
                </Button>
                <div className="absolute inset-0 flex items-center justify-center bg-background/90 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Badge variant="secondary">Coming Soon</Badge>
                </div>
              </div>
            </div>
          </Card>

          {/* Focus Areas */}
          <Card className="p-8 mb-8 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <h2 className="text-2xl font-semibold mb-6 text-foreground">
              🎯 Choose Your Focus Areas
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {focusAreas.map((area) => (
                <div
                  key={area.id}
                  onClick={() => toggleFocus(area.id)}
                  className={`p-4 rounded-lg border-2 cursor-pointer transition-all duration-300 ${
                    selectedFocus.includes(area.id)
                      ? 'border-accent bg-accent/10 shadow-glow'
                      : 'border-border hover:border-accent/50 hover:bg-accent/5'
                  }`}
                >
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="font-semibold text-foreground">{area.label}</h3>
                      <p className="text-sm text-muted-foreground mt-1">{area.description}</p>
                    </div>
                    <div className={`w-5 h-5 rounded border-2 flex items-center justify-center transition-all ${
                      selectedFocus.includes(area.id) ? 'bg-accent border-accent' : 'border-muted'
                    }`}>
                      {selectedFocus.includes(area.id) && (
                        <div className="w-2 h-2 bg-accent-foreground rounded-sm"></div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </Card>

          {/* VC Personas */}
          <Card className="p-8 mb-8 animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <h2 className="text-2xl font-semibold mb-6 text-foreground">
              👨‍💼 Select Your Investor Type
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {vcPersonas.map((persona) => (
                <div
                  key={persona.id}
                  onClick={() => setSelectedPersona(persona.id)}
                  className={`p-6 rounded-xl border-2 cursor-pointer transition-all duration-300 ${
                    selectedPersona === persona.id
                      ? 'border-accent bg-accent/10 shadow-glow transform scale-105'
                      : 'border-border hover:border-accent/50 hover:bg-accent/5 hover:transform hover:scale-102'
                  }`}
                >
                  <div className="flex items-start gap-4">
                    <div className="text-3xl">{persona.avatar}</div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-lg text-foreground">{persona.name}</h3>
                      <p className="text-muted-foreground mt-1 mb-3">{persona.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {persona.traits.map((trait, index) => (
                          <Badge key={index} variant="secondary" className="text-xs">
                            {trait}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </Card>

          {/* Start Button */}
          <div className="text-center animate-fade-in" style={{ animationDelay: '0.6s' }}>
            <Link to="/simulation">
              <Button 
                variant="hero" 
                size="lg" 
                className="text-lg px-12 py-4 h-auto"
                disabled={selectedFocus.length === 0 || !selectedPersona}
              >
                Start Pitch Practice
                <ChevronRight className="ml-2" />
              </Button>
            </Link>
            <p className="text-sm text-muted-foreground mt-4">
              {selectedFocus.length === 0 || !selectedPersona 
                ? "Please select at least one focus area and an investor type"
                : `Ready to practice with ${vcPersonas.find(p => p.id === selectedPersona)?.name} focusing on ${selectedFocus.length} area${selectedFocus.length > 1 ? 's' : ''}`
              }
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Setup;