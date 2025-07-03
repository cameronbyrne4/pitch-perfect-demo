import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { Download, Share2, RotateCcw, Star } from "lucide-react";

const Results = () => {
  const overallScore = 88;
  const scores = {
    clarity: 92,
    confidence: 85,
    structure: 89,
    timing: 84
  };

  const transcript = [
    {
      text: "We're solving the problem of inefficient pitch preparation for startup founders.",
      comment: "Strong opening - clearly states the problem being solved.",
      sentiment: "positive"
    },
    {
      text: "Our platform uses AI to simulate real investor conversations...",
      comment: "Good explanation of the solution, but could be more specific about the technology.",
      sentiment: "neutral"
    },
    {
      text: "The market size is approximately $2.5 billion and growing...",
      comment: "Excellent use of concrete numbers to establish market opportunity.",
      sentiment: "positive"
    }
  ];

  const fillerWords = {
    um: 4,
    like: 7,
    you_know: 2,
    actually: 3
  };

  const confidenceData = [
    { time: "0:00", confidence: 75 },
    { time: "1:00", confidence: 82 },
    { time: "2:00", confidence: 88 },
    { time: "3:00", confidence: 85 },
    { time: "4:00", confidence: 91 },
    { time: "5:00", confidence: 87 }
  ];

  return (
    <div className="min-h-screen bg-gradient-subtle">
      <div className="container mx-auto px-6 py-12">
        <div className="max-w-6xl mx-auto">
          
          {/* Header */}
          <div className="text-center mb-12 animate-fade-in">
            <div className="inline-flex items-center gap-2 bg-success/10 text-success px-4 py-2 rounded-full mb-4">
              <Star className="w-4 h-4" />
              <span className="font-medium">Pitch Analysis Complete</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
              Your Pitch Scorecard
            </h1>
            <p className="text-xl text-muted-foreground">
              Here's your detailed analysis and feedback from the AI investor
            </p>
          </div>

          {/* Overall Score */}
          <Card className="p-8 mb-8 text-center animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <div className="mb-6">
              <div className="text-6xl font-bold bg-gradient-accent bg-clip-text text-transparent mb-2">
                {overallScore}/100
              </div>
              <h2 className="text-2xl font-semibold text-foreground">Overall Pitch Score</h2>
              <p className="text-muted-foreground">Strong performance with room for improvement</p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {Object.entries(scores).map(([category, score]) => (
                <div key={category} className="text-center">
                  <div className="text-3xl font-bold text-accent mb-1">{score}</div>
                  <div className="text-sm text-muted-foreground capitalize">{category}</div>
                  <div className="w-full bg-muted rounded-full h-2 mt-2">
                    <div 
                      className="bg-gradient-accent h-2 rounded-full transition-all duration-1000" 
                      style={{ width: `${score}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </Card>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            
            {/* Left Column */}
            <div className="space-y-8">
              
              {/* Confidence Over Time */}
              <Card className="p-6 animate-fade-in" style={{ animationDelay: '0.4s' }}>
                <h3 className="text-xl font-semibold mb-4">Confidence Over Time</h3>
                <div className="h-48 bg-muted/30 rounded-lg p-4 relative">
                  <div className="absolute inset-4 border-l-2 border-b-2 border-muted-foreground/20">
                    <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                      <polyline
                        points="0,25 20,18 40,12 60,15 80,9 100,13"
                        fill="none"
                        stroke="url(#confidenceGradient)"
                        strokeWidth="3"
                        className="animate-pulse"
                      />
                      <defs>
                        <linearGradient id="confidenceGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                          <stop offset="0%" stopColor="hsl(var(--accent))" />
                          <stop offset="100%" stopColor="hsl(var(--primary))" />
                        </linearGradient>
                      </defs>
                    </svg>
                  </div>
                  <div className="absolute bottom-2 left-4 text-xs text-muted-foreground">0:00</div>
                  <div className="absolute bottom-2 right-4 text-xs text-muted-foreground">5:00</div>
                  <div className="absolute top-2 left-2 text-xs text-muted-foreground">100%</div>
                  <div className="absolute bottom-8 left-2 text-xs text-muted-foreground">0%</div>
                </div>
                <p className="text-sm text-muted-foreground mt-3">
                  Your confidence peaked during the solution explanation and remained strong throughout.
                </p>
              </Card>

              {/* Filler Words */}
              <Card className="p-6 animate-fade-in" style={{ animationDelay: '0.6s' }}>
                <h3 className="text-xl font-semibold mb-4">Filler Word Analysis</h3>
                <div className="grid grid-cols-2 gap-4">
                  {Object.entries(fillerWords).map(([word, count]) => (
                    <div key={word} className="flex justify-between items-center p-3 bg-muted/30 rounded-lg">
                      <span className="font-medium capitalize">{word.replace('_', ' ')}</span>
                      <Badge variant={count <= 3 ? "secondary" : count <= 6 ? "outline" : "destructive"}>
                        {count}
                      </Badge>
                    </div>
                  ))}
                </div>
                <p className="text-sm text-muted-foreground mt-3">
                  Good control overall. Try to reduce "like" usage for more professional delivery.
                </p>
              </Card>
            </div>

            {/* Right Column */}
            <div className="space-y-8">
              
              {/* Transcript with Comments */}
              <Card className="p-6 animate-fade-in" style={{ animationDelay: '0.8s' }}>
                <h3 className="text-xl font-semibold mb-4">Key Moments & Feedback</h3>
                <div className="space-y-4 max-h-96 overflow-y-auto">
                  {transcript.map((item, index) => (
                    <div key={index} className="border-l-4 border-accent/30 pl-4 py-2">
                      <p className="text-foreground mb-2 italic">"{item.text}"</p>
                      <div className="flex items-start gap-2">
                        <Badge 
                          variant={item.sentiment === 'positive' ? 'default' : 'secondary'}
                          className="text-xs"
                        >
                          {item.sentiment === 'positive' ? '👍' : '💭'}
                        </Badge>
                        <p className="text-sm text-muted-foreground">{item.comment}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </Card>

              {/* Key Recommendations */}
              <Card className="p-6 animate-fade-in" style={{ animationDelay: '1s' }}>
                <h3 className="text-xl font-semibold mb-4">💡 Key Recommendations</h3>
                <div className="space-y-3">
                  <div className="p-3 bg-accent/10 rounded-lg border-l-4 border-accent">
                    <p className="font-medium text-accent">Strengthen Market Validation</p>
                    <p className="text-sm text-muted-foreground mt-1">
                      Include more specific customer testimonials or pilot program results.
                    </p>
                  </div>
                  
                  <div className="p-3 bg-success/10 rounded-lg border-l-4 border-success">
                    <p className="font-medium text-success">Excellent Problem Definition</p>
                    <p className="text-sm text-muted-foreground mt-1">
                      Your problem statement was clear and compelling. Keep this strength.
                    </p>
                  </div>
                  
                  <div className="p-3 bg-accent/10 rounded-lg border-l-4 border-accent">
                    <p className="font-medium text-accent">Improve Technical Details</p>
                    <p className="text-sm text-muted-foreground mt-1">
                      Be prepared with more specifics about your technology stack and scalability.
                    </p>
                  </div>
                </div>
              </Card>
            </div>
          </div>

          {/* Action Buttons */}
          <Card className="p-8 mt-8 text-center animate-fade-in" style={{ animationDelay: '1.2s' }}>
            <h3 className="text-2xl font-semibold mb-6 text-foreground">
              Want the Full Experience?
            </h3>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              This was just a preview! Get comprehensive pitch analysis, personalized coaching, 
              and access to multiple investor personas in the full version.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
              <Button variant="hero" size="lg" className="text-lg px-8 py-4 h-auto" asChild>
                <a href="https://tally.so/r/mRPQj1" target="_blank" rel="noopener noreferrer">
                  Join the Waitlist
                </a>
              </Button>
              
              <Link to="/setup">
                <Button variant="outline" size="lg" className="text-lg px-8 py-4 h-auto">
                  <RotateCcw className="mr-2" />
                  Try Another Pitch
                </Button>
              </Link>
            </div>

            <div className="flex justify-center gap-4">
              <Button variant="ghost" size="sm">
                <Share2 className="w-4 h-4 mr-2" />
                Share Results
              </Button>
              <Button variant="ghost" size="sm">
                <Download className="w-4 h-4 mr-2" />
                Download Report
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Results;