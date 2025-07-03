import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { Mic, MicOff, Play, Pause, SkipForward } from "lucide-react";

const Simulation = () => {
  const [isRecording, setIsRecording] = useState(false);
  const [currentMessage, setCurrentMessage] = useState(0);
  const [showTranscript, setShowTranscript] = useState(false);
  const agentRef = useRef<HTMLDivElement>(null);

  const conversation = [
    {
      speaker: "AI Investor",
      message: "Hello! I'm excited to hear about your company. Let's start with your 2-minute elevator pitch. What problem are you solving?",
      timestamp: "0:00"
    },
    {
      speaker: "You",
      message: "We're solving the problem of inefficient pitch preparation for startup founders...",
      timestamp: "0:15"
    },
    {
      speaker: "AI Investor", 
      message: "Interesting. What's your market size and who are your main competitors in this space?",
      timestamp: "2:30"
    },
    {
      speaker: "You",
      message: "The market for pitch training and startup coaching is approximately $2.5 billion...",
      timestamp: "2:45"
    }
  ];

  useEffect(() => {
    // Simulate conversation progression
    const timer = setTimeout(() => {
      setShowTranscript(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    // Inject the script only once
    const scriptId = "elevenlabs-convai-script";
    if (!document.getElementById(scriptId)) {
      const script = document.createElement("script");
      script.src = "https://unpkg.com/@elevenlabs/convai-widget-embed";
      script.async = true;
      script.type = "text/javascript";
      script.id = scriptId;
      document.body.appendChild(script);
    }
    // Inject the custom element
    if (agentRef.current && !agentRef.current.querySelector("elevenlabs-convai")) {
      const widget = document.createElement("elevenlabs-convai");
      widget.setAttribute("agent-id", "agent_01jz5x4fnwfwg9hqe0g6n0j82p");
      agentRef.current.appendChild(widget);
    }
  }, []);

  const toggleRecording = () => {
    setIsRecording(!isRecording);
  };

  return (
    <div className="min-h-screen bg-gradient-subtle">
      <div className="container mx-auto px-6 py-12">
        <div className="max-w-6xl mx-auto">
          
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
              Practice Session in Progress
            </h1>
            <div className="flex justify-center gap-4">
              <Badge variant="secondary">🦈 Aggressive Partner</Badge>
              <Badge variant="secondary">🎯 Clarity & Confidence</Badge>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            
            {/* Left 2/3: All Cards */}
            <div className="lg:col-span-2 space-y-6">
              {/* Real-time Metrics */}
              <Card className="p-6 animate-fade-in" style={{ animationDelay: '0.4s' }}>
                <h3 className="font-semibold mb-4">Live Metrics</h3>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm">Confidence</span>
                      <span className="text-sm font-medium">78%</span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2">
                      <div className="bg-gradient-accent h-2 rounded-full" style={{ width: '78%' }}></div>
                    </div>
                  </div>
                  
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm">Clarity</span>
                      <span className="text-sm font-medium">85%</span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2">
                      <div className="bg-gradient-accent h-2 rounded-full" style={{ width: '85%' }}></div>
                    </div>
                  </div>
                  
                  <div className="pt-2 border-t">
                    <div className="text-sm space-y-1">
                      <div className="flex justify-between">
                        <span>Filler words:</span>
                        <span className="font-medium">3</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Speaking pace:</span>
                        <span className="font-medium">Good</span>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>

              {/* Session Progress */}
              <Card className="p-6 animate-fade-in" style={{ animationDelay: '0.6s' }}>
                <h3 className="font-semibold mb-4">Session Progress</h3>
                <div className="space-y-3">
                  <div className="flex justify-between text-sm">
                    <span>Time elapsed:</span>
                    <span className="font-medium">3:45</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Questions asked:</span>
                    <span className="font-medium">4 / 8</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2">
                    <div className="bg-gradient-primary h-2 rounded-full" style={{ width: '50%' }}></div>
                  </div>
                </div>
              </Card>

              {/* Transcript Preview */}
              {showTranscript && (
                <Card className="p-6 animate-fade-in" style={{ animationDelay: '0.8s' }}>
                  <h3 className="font-semibold mb-4">Live Transcript</h3>
                  <div className="space-y-3 max-h-40 overflow-y-auto">
                    {conversation.slice(0, currentMessage + 1).map((entry, index) => (
                      <div key={index} className="text-sm">
                        <div className="flex items-center gap-2 mb-1">
                          <Badge variant={entry.speaker === "You" ? "default" : "secondary"} className="text-xs">
                            {entry.speaker}
                          </Badge>
                          <span className="text-xs text-muted-foreground">{entry.timestamp}</span>
                        </div>
                        <p className="text-muted-foreground">{entry.message}</p>
                      </div>
                    ))}
                  </div>
                </Card>
              )}

              {/* Quick Actions */}
              <Card className="p-6 animate-fade-in" style={{ animationDelay: '1s' }}>
                <h3 className="font-semibold mb-4">Quick Actions</h3>
                <div className="space-y-2">
                  <Button variant="outline" size="sm" className="w-full justify-start">
                    End Session Early
                  </Button>
                  <Link to="/results">
                    <Button variant="accent" size="sm" className="w-full justify-start">
                      Skip to Results
                    </Button>
                  </Link>
                </div>
              </Card>
            </div>

            {/* Right 1/3: Agent Widget */}
            <div className="hidden lg:block lg:col-span-1">
              <div ref={agentRef} className="h-full flex items-center justify-center" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Simulation;