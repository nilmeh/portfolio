import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Navigation } from "@/components/navigation";
import { ArrowLeft, Clock, Sparkles, Github, ExternalLink } from "lucide-react";

export default function ComingSoon() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-emerald-50 to-amber-50 dark:from-slate-900 dark:via-emerald-950 dark:to-amber-950">
      <Navigation />

      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] dark:bg-grid-slate-700/25 dark:[mask-image:linear-gradient(0deg,rgba(255,255,255,0.1),rgba(255,255,255,0.5))]"></div>
      
      <div className="container relative px-4 py-24 mx-auto">
        <div className="max-w-4xl mx-auto text-center space-y-12">
          {/* Header */}
          <div className="space-y-6">
            <div className="flex items-center justify-center gap-2">
              <Clock className="h-8 w-8 text-emerald-600" />
              <span className="text-6xl">🚧</span>
            </div>
            
            <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
              <span className="block bg-gradient-to-r from-emerald-600 via-green-600 to-amber-600 bg-clip-text text-transparent">
                Coming Soon
              </span>
            </h1>
            
            <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              This project page is currently under construction. I'm working hard to bring you detailed insights, 
              screenshots, and technical deep-dives into this project.
            </p>
          </div>

          {/* Status Card */}
          <Card className="border-0 shadow-xl bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm max-w-2xl mx-auto">
            <CardHeader className="text-center">
              <div className="mx-auto w-16 h-16 bg-gradient-to-br from-blue-500 to-violet-500 rounded-full flex items-center justify-center mb-4">
                <Sparkles className="h-8 w-8 text-white" />
              </div>
              <CardTitle className="text-2xl bg-gradient-to-r from-emerald-600 to-green-600 bg-clip-text text-transparent">
                Documentation in Progress
              </CardTitle>
              <CardDescription className="text-lg">
                I'm crafting a comprehensive project showcase
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <h4 className="font-semibold">What's Coming:</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Detailed project overview</li>
                    <li>• Technical architecture</li>
                    <li>• Development challenges</li>
                    <li>• Screenshots & demos</li>
                  </ul>
                </div>
                <div className="space-y-2">
                  <h4 className="font-semibold">Timeline:</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Documentation: In progress</li>
                    <li>• Screenshots: Coming soon</li>
                    <li>• Demo videos: Planned</li>
                    <li>• Code samples: Under review</li>
                  </ul>
                </div>
              </div>
              
            </CardContent>
          </Card>

          {/* Navigation */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <Link href="/projects">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Projects
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link href="/">
                Go Home
              </Link>
            </Button>
          </div>

          {/* Footer Message */}
          <div className="text-center space-y-4">
            <p className="text-sm text-muted-foreground">
              Thanks for your patience! This page will be updated soon with comprehensive project details.
            </p>
            <div className="flex items-center justify-center gap-2 text-xs text-muted-foreground">
              <span>Last updated: August 2025</span>
              <span>•</span>
              <span>Expected completion: September 2025</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
