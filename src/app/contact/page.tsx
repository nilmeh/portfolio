import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Navigation } from "@/components/navigation";
import { Github, Linkedin, Mail, MapPin } from "lucide-react";

export default function Contact() {
  const contactMethods = [
    {
      icon: Mail,
      label: "Email",
      value: "niloym@ucla.edu",
      href: "mailto:niloym@ucla.edu",
      description: "Best for formal inquiries and collaboration opportunities"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "linkedin.com/in/niloymeharchandani",
      href: "https://linkedin.com/in/niloymeharchandani",
      description: "Professional networking and career discussions"
    },
    {
      icon: Github,
      label: "GitHub",
      value: "github.com/nilmeh",
      href: "https://github.com/nilmeh",
      description: "Open source collaboration and code reviews"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Los Angeles, CA • Lodz, Poland",
      href: null,
      description: "Available for local meetups and events in both locations"
    }
  ];

  const inquiryTypes = [
    {
      title: "💼 Job Opportunities",
      description: "Internships, full-time positions, or freelance projects"
    },
    {
      title: "🤝 Collaboration",
      description: "Open source projects, research, or startup ideas"
    },
    {
      title: "🎤 Speaking",
      description: "Conference talks, workshops, or panel discussions"
    },
    {
      title: "📚 Mentorship",
      description: "Technical guidance or career advice for students"
    },
    {
      title: "💡 Project Ideas",
      description: "Discussing new technologies or innovative solutions"
    },
    {
      title: "☕ Coffee Chat",
      description: "Casual conversations about tech, UCLA, or life"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-emerald-50 to-amber-50 dark:from-slate-900 dark:via-emerald-950 dark:to-amber-950">
      <Navigation />

      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] dark:bg-grid-slate-700/25 dark:[mask-image:linear-gradient(0deg,rgba(255,255,255,0.1),rgba(255,255,255,0.5))]"></div>

      <div className="container relative px-4 py-16 mx-auto">
        {/* Header */}
        <div className="mb-16 text-center">
          <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-emerald-600 via-green-600 to-amber-600 bg-clip-text text-transparent">Let&apos;s Connect</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            I&apos;m always excited to discuss new opportunities, collaborate on projects, 
            or simply chat about technology and innovation.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid gap-8 md:grid-cols-2">
            {/* Contact Methods */}
            <Card className="border-0 shadow-lg bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="bg-gradient-to-r from-emerald-600 to-green-600 bg-clip-text text-transparent">Contact Information</CardTitle>
                <CardDescription>
                  Choose your preferred way to get in touch
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {contactMethods.map((method) => {
                  const Icon = method.icon;
                  return (
                    <div key={method.label} className="flex items-start space-x-3">
                      <Icon className="h-5 w-5 mt-0.5 text-muted-foreground" />
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2">
                          <span className="font-medium">{method.label}</span>
                          {method.href && (
                            <Button variant="ghost" size="sm" asChild>
                              <Link href={method.href} className="text-xs" target={method.href.startsWith('http') ? '_blank' : undefined}>
                                Connect
                              </Link>
                            </Button>
                          )}
                        </div>
                        {method.href ? (
                          <Link href={method.href} target={method.href.startsWith('http') ? '_blank' : undefined} className="text-sm text-muted-foreground font-mono hover:text-emerald-600 transition-colors cursor-pointer">
                            {method.value}
                          </Link>
                        ) : (
                          <p className="text-sm text-muted-foreground font-mono">
                            {method.value}
                          </p>
                        )}
                        <p className="text-xs text-muted-foreground mt-1">
                          {method.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </CardContent>
            </Card>

            {/* What I'm interested in */}
            <Card className="border-0 shadow-lg bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="bg-gradient-to-r from-emerald-600 to-green-600 bg-clip-text text-transparent">What I&apos;m interested in discussing</CardTitle>
                <CardDescription>
                  Here are some topics I&apos;d love to chat about
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid gap-3 sm:grid-cols-1">
                  {inquiryTypes.map((type) => (
                    <div key={type.title} className="space-y-1">
                      <div className="font-medium text-sm">{type.title}</div>
                      <div className="text-xs text-muted-foreground">
                        {type.description}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Response Time - Full Width */}
          <Card className="border-0 shadow-lg bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm mt-12">
            <CardHeader>
              <CardTitle className="bg-gradient-to-r from-emerald-600 to-green-600 bg-clip-text text-transparent">Response Time</CardTitle>
              <CardDescription>
                I try to respond to all messages promptly
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-3 md:grid-cols-3">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">Email</span>
                  <Badge variant="secondary" className="bg-blue-100 text-blue-700 hover:bg-blue-200 dark:bg-blue-900/30 dark:text-blue-300">Within 24 hours</Badge>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">LinkedIn</span>
                  <Badge variant="secondary" className="bg-blue-100 text-blue-700 hover:bg-blue-200 dark:bg-blue-900/30 dark:text-blue-300">Within 48 hours</Badge>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">Urgent matters</span>
                  <Badge variant="secondary" className="bg-blue-100 text-blue-700 hover:bg-blue-200 dark:bg-blue-900/30 dark:text-blue-300">Same day</Badge>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
