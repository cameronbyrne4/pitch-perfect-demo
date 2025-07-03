import { CheckIcon } from "lucide-react";

const Features = () => {
  const features = [
    {
      title: "AI-Powered Feedback",
      description: "Get detailed analysis on your pitch clarity, structure, and persuasiveness from AI trained on successful funding rounds.",
      icon: "🤖"
    },
    {
      title: "Multiple VC Personas",
      description: "Practice with different investor types - from aggressive partners to technical specialists and conservative LPs.",
      icon: "👥"
    },
    {
      title: "Real-Time Scoring",
      description: "See your confidence levels, filler word usage, and key message delivery scored in real-time.",
      icon: "📊"
    },
    {
      title: "Pitch Deck Analysis",
      description: "Upload your deck and get contextual feedback on how well your verbal pitch aligns with your slides.",
      icon: "📋"
    },
    {
      title: "Instant Improvement Tips",
      description: "Receive actionable suggestions to strengthen weak points and capitalize on your strengths.",
      icon: "💡"
    },
    {
      title: "Progress Tracking",
      description: "Track your improvement over time with detailed analytics and performance trends.",
      icon: "📈"
    }
  ];

  return (
    <section id="how-it-works" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
            How It Works
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our AI analyzes every aspect of your pitch to give you the edge you need to secure funding.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="p-8 rounded-2xl bg-card border border-border hover:shadow-elegant transition-all duration-300 animate-fade-in group hover:scale-105"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3 text-foreground">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
        
        <div className="bg-gradient-subtle rounded-3xl p-12 text-center">
          <h3 className="text-3xl font-bold mb-6 text-foreground">
            Ready to Perfect Your Pitch?
          </h3>
          <div className="flex flex-wrap justify-center gap-6 mb-8">
            {[
              "Upload pitch deck",
              "Select investor type", 
              "Practice your pitch",
              "Get instant feedback",
              "Improve and repeat"
            ].map((step, index) => (
              <div key={index} className="flex items-center gap-2 text-muted-foreground">
                <CheckIcon className="w-5 h-5 text-success" />
                <span>{step}</span>
              </div>
            ))}
          </div>
          <p className="text-lg text-muted-foreground">
            Join thousands of founders who've improved their pitch success rate by 40%
          </p>
        </div>
      </div>
    </section>
  );
};

export default Features;