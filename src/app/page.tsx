import Link from "next/link";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Navigation } from "@/components/navigation";
import { Github, Linkedin, Mail, ExternalLink, ArrowRight, Download, Sparkles, ChevronLeft, ChevronRight } from "lucide-react";

export default function Home() {
  const featuredProjects = [
    {
      title: "TextileSaaS",
      description: "Multi-tenant SaaS platform with ERP, CRM, and analytics for SMEs",
      tech: ["NestJS", "PostgreSQL", "SwiftUI", "AWS"],
      href: "/coming-soon",
      status: "In Development",
      image: "/images/projects/TextileSaaS.jpg"
    },
    {
      title: "Ledger",
      description: "End-to-end encrypted iOS peer-to-peer ledger app with device linking",
      tech: ["Swift", "SwiftUI", "CryptoKit", "Firebase"],
      href: "/coming-soon",
      status: "Completed",
      image: "/images/projects/Ledger.jpg"
    },
    {
      title: "CollegeCounsel",
      description: "AI-powered college counseling platform with application tracking",
      tech: ["Next.js", "MongoDB", "OpenAI API", "AWS S3"],
      href: "/projects/college-counsel",
      status: "Completed",
      image: "/images/projects/CollegeCounsel.png"
    },
    {
      title: "SnapSolve",
      description: "iOS app for reporting infrastructure issues with AI-powered image detection",
      tech: ["SwiftUI", "Node.js", "Express", "MongoDB"],
      href: "/projects/snapsolve",
      status: "Completed",
      image: "/images/projects/SnapSolve.jpeg",
      hackathon: "LA Hacks 2025"
    },
    // {
    //   title: "Sortobot",
    //   description: "AI-powered smart waste segregation system using computer vision",
    //   tech: ["Python", "TensorFlow", "Arduino", "Computer Vision"],
    //   href: "/projects/sortobot",
    //   status: "Completed",
    //   image: "/images/projects/sortobot.jpg",
    //   conference: "LIYSF 2023"
    // },
    {
      title: "NewsCrumbs",
      description: "iOS news app delivering daily top stories in bite-sized format",
      tech: ["SwiftUI", "Node.js", "MongoDB", "News API"],
      href: "/projects/newscrumbs",
      status: "Published",
      image: "/images/projects/NewsCrumbs.png"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-emerald-50 to-amber-50 dark:from-slate-900 dark:via-emerald-950 dark:to-amber-950">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] dark:bg-grid-slate-700/25 dark:[mask-image:linear-gradient(0deg,rgba(255,255,255,0.1),rgba(255,255,255,0.5))]"></div>
        
        <div className="container relative px-4 py-24 mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div className="space-y-8">
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <Sparkles className="h-5 w-5 text-emerald-600" />
                  <Badge variant="secondary" className="bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-300">
                    Available for opportunities
                  </Badge>
                </div>
                
                <h1 className="text-4xl font-bold tracking-tight sm:text-6xl lg:text-7xl">
                  <span className="block">Hi, I&apos;m</span>
                  <span className="block bg-gradient-to-r from-emerald-600 via-green-600 to-amber-600 bg-clip-text text-transparent">
                    Niloy
                  </span>
                </h1>
                
                <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl">
                  Computer Science student at UCLA building innovative software solutions 
                  and exploring the intersection of technology, research, and entrepreneurship.
                </p>
              </div>
              
              <div className="flex flex-wrap gap-2">
                <Badge variant="outline" className="bg-white/50 dark:bg-slate-800/50">UCLA CSE Student</Badge>
                <Badge variant="outline" className="bg-white/50 dark:bg-slate-800/50">3.983 GPA</Badge>
                <Badge variant="outline" className="bg-white/50 dark:bg-slate-800/50">Full-Stack Developer</Badge>
                <Badge variant="outline" className="bg-white/50 dark:bg-slate-800/50">iOS Developer</Badge>
                <Badge variant="outline" className="bg-white/50 dark:bg-slate-800/50">Bruin AI Member</Badge>
                <Badge variant="outline" className="bg-white/50 dark:bg-slate-800/50">TEDx Speaker</Badge>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-gradient-to-r from-emerald-600 to-green-600 hover:from-emerald-700 hover:to-green-700" asChild>
                  <Link href="/projects">
                    View My Work
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link href="/resume.pdf" target="_blank">
                    <Download className="mr-2 h-4 w-4" />
                    Download Resume
                  </Link>
                </Button>
              </div>

              <div className="flex items-center gap-4 pt-4">
                <span className="text-sm text-muted-foreground">Connect with me:</span>
                <div className="flex gap-2">
                  <Button variant="ghost" size="sm" className="hover:bg-blue-50 dark:hover:bg-blue-950" asChild>
                    <Link href="https://github.com/nilmeh">
                      <Github className="h-4 w-4" />
                    </Link>
                  </Button>
                  <Button variant="ghost" size="sm" className="hover:bg-blue-50 dark:hover:bg-blue-950" asChild>
                    <Link href="https://linkedin.com/in/niloymeharchandani">
                      <Linkedin className="h-4 w-4" />
                    </Link>
                  </Button>
                  <Button variant="ghost" size="sm" className="hover:bg-blue-50 dark:hover:bg-blue-950" asChild>
                    <Link href="mailto:niloym@ucla.edu">
                      <Mail className="h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>

            {/* Profile Image */}
            <div className="relative lg:order-last">
              <div className="relative mx-auto w-80 h-80 lg:w-96 lg:h-96">
                {/* Animated Background Blobs */}
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-400 via-green-400 to-amber-400 rounded-full rotate-6 opacity-20 animate-pulse"></div>
                <div className="absolute inset-0 bg-gradient-to-tr from-emerald-500 via-green-500 to-amber-500 rounded-full -rotate-6 opacity-20 animate-pulse delay-1000"></div>
                <div className="absolute inset-4 bg-gradient-to-bl from-green-400 via-emerald-400 to-yellow-400 rounded-full rotate-12 opacity-15 animate-pulse delay-500"></div>
                
                {/* Main Image Container with Glassmorphism */}
                <div className="relative w-full h-full bg-gradient-to-br from-emerald-600 via-green-600 to-amber-600 rounded-full p-2 shadow-2xl backdrop-blur-sm">
                  <div className="relative w-full h-full bg-white/10 dark:bg-slate-900/10 rounded-full p-1 backdrop-blur-sm border border-white/20">
                    <div className="w-full h-full bg-gradient-to-br from-white to-gray-50 dark:from-slate-800 dark:to-slate-900 rounded-full overflow-hidden shadow-inner">
                      <Image
                        src="/images/profile/avatar.jpg"
                        alt="Niloy Meharchandani"
                        fill
                        className="object-cover object-center scale-105 hover:scale-110 transition-transform duration-700"
                        priority
                        style={{ objectPosition: "center 20%" }}
                      />
                      {/* Subtle overlay for depth */}
                      <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-transparent to-emerald-100/20 dark:to-emerald-900/20"></div>
                    </div>
                  </div>
                </div>
                
                {/* Enhanced Floating Elements */}
                <div className="absolute -top-6 -right-6 w-20 h-20 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-2xl rotate-12 flex items-center justify-center shadow-xl hover:rotate-0 transition-transform duration-300">
                  <span className="text-3xl animate-bounce">🚀</span>
                </div>
                <div className="absolute -bottom-6 -left-6 w-16 h-16 bg-gradient-to-br from-green-400 to-emerald-500 rounded-2xl -rotate-12 flex items-center justify-center shadow-xl hover:rotate-0 transition-transform duration-300">
                  <span className="text-2xl animate-pulse">💡</span>
                </div>
                <div className="absolute top-8 -left-8 w-12 h-12 bg-gradient-to-br from-amber-400 to-orange-500 rounded-full rotate-45 flex items-center justify-center shadow-lg opacity-80 hover:opacity-100 transition-opacity duration-300">
                  <span className="text-lg">⚡</span>
                </div>
                <div className="absolute -top-2 left-8 w-10 h-10 bg-gradient-to-br from-emerald-400 to-teal-500 rounded-full -rotate-45 flex items-center justify-center shadow-lg opacity-80 hover:opacity-100 transition-opacity duration-300">
                  <span className="text-sm">✨</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="container px-4 py-20 mx-auto">
        <div className="space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl bg-gradient-to-r from-emerald-800 to-green-600 dark:from-emerald-100 dark:to-green-400 bg-clip-text text-transparent">
              Featured Projects
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Some of my recent work spanning web development, mobile apps, and SaaS platforms
            </p>
          </div>
          
          {/* Carousel Container */}
          <div className="relative">
            {/* Carousel Wrapper */}
            <div className="overflow-hidden">
              <div className="flex animate-slide">
                {[...featuredProjects, ...featuredProjects].map((project, index) => (
                  <div 
                    key={`carousel-${project.title}-${index}-${Math.floor(index / featuredProjects.length)}`} 
                    className="flex-none w-full md:w-1/2 lg:w-1/3 px-4"
                  >
                    <Card className="group relative overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-300 bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm h-full">
                      {/* Project Image */}
                      <div className="relative w-full aspect-[16/9] overflow-hidden bg-gradient-to-br from-blue-50 to-violet-50 dark:from-blue-950 dark:to-violet-950">
                        {/* Placeholder for project images */}
                        <div className="relative inset-0 flex items-center justify-center">
                          <div className="text-4xl font-bold bg-gradient-to-r from-emerald-600 to-amber-600 bg-clip-text text-transparent">
                            {project.title.slice(0, 2)}
                          </div>
                        </div>
                        <Image
                          src={project.image}
                          alt={project.title}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                       
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                        
                        {/* Special badges */}
                        {project.hackathon && (
                          <div className="absolute top-3 left-3">
                            <Badge className="bg-orange-500/90 text-white">
                              {project.hackathon}
                            </Badge>
                          </div>
                        )}
                      </div>
                      
                      <CardHeader className="space-y-3">
                        <div className="flex items-start justify-between">
                          <CardTitle className="text-xl group-hover:text-emerald-600 transition-colors">
                            {project.title}
                          </CardTitle>
                          <Badge 
                            variant={project.status === "Completed" || project.status === "Published" ? "default" : "secondary"}
                            className="shrink-0"
                          >
                            {project.status}
                          </Badge>
                        </div>
                        <CardDescription className="text-sm leading-relaxed">
                          {project.description}
                        </CardDescription>
                      </CardHeader>
                      
                      <CardContent className="pt-0 flex-1 flex flex-col justify-between">
                        <div className="space-y-4">
                          <div className="flex flex-wrap gap-1">
                            {project.tech.slice(0, 3).map((tech) => (
                              <Badge key={tech} variant="outline" className="text-xs px-2 py-1">
                                {tech}
                              </Badge>
                            ))}
                            {project.tech.length > 3 && (
                              <Badge variant="outline" className="text-xs px-2 py-1">
                                +{project.tech.length - 3}
                              </Badge>
                            )}
                          </div>
                          <Button 
                            variant="outline" 
                            className="w-full group-hover:bg-emerald-600 group-hover:text-white group-hover:border-emerald-600 transition-colors" 
                            asChild
                          >
                            <Link href={project.href}>
                              Learn More
                              <ArrowRight className="ml-2 h-4 w-4" />
                            </Link>
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Pause on hover indicator */}
            <div className="mt-6 text-center">
              <p className="text-sm text-muted-foreground">
                Hover over a project to pause • Automatic rotation every 4 seconds
              </p>
            </div>
          </div>
          
          <div className="text-center">
            <Button variant="outline" className="group" asChild>
              <Link href="/projects">
                View All Projects
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="container px-4 py-16 mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div className="space-y-2">
            <div className="text-2xl font-bold">3.983</div>
            <div className="text-sm text-muted-foreground">GPA at UCLA</div>
          </div>
          <div className="space-y-2">
            <div className="text-2xl font-bold">7+</div>
            <div className="text-sm text-muted-foreground">Projects Built</div>
          </div>
          <div className="space-y-2">
            <div className="text-2xl font-bold">2</div>
            <div className="text-sm text-muted-foreground">Research Publications</div>
          </div>
          <div className="space-y-2">
            <div className="text-2xl font-bold">3+</div>
            <div className="text-sm text-muted-foreground">Internships</div>
          </div>
        </div>
      </section>

      {/* Recent Highlights */}
      <section className="container px-4 py-20 mx-auto">
        <div className="space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl bg-gradient-to-r from-emerald-800 to-green-600 dark:from-emerald-100 dark:to-green-400 bg-clip-text text-transparent">
              Recent Highlights
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Beyond coding, I&apos;m passionate about sharing ideas and creating social impact
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* TEDx Talk */}
            <div className="space-y-6">
              <div className="relative aspect-video rounded-xl overflow-hidden bg-slate-100 dark:bg-slate-800 shadow-lg">
                <iframe
                  src="https://www.youtube.com/embed/0P4dkVxPTlE?start=0&rel=0&modestbranding=1"
                  title="TEDx Talk - Breaking the Walls of Silence"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  className="absolute inset-0 w-full h-full"
                ></iframe>
              </div>
              
              <div className="space-y-4">
                <div className="space-y-2">
                  <Badge className="bg-gradient-to-r from-orange-500 to-amber-500 text-white">
                    TEDx Speaker
                  </Badge>
                  <h3 className="text-2xl font-bold">Breaking the Walls of Silence</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    I had the honor of speaking at TEDxYouth@SISmumbai in 2024, addressing mental health awareness 
                    and the importance of breaking social stigmas around difficult conversations.
                  </p>
                </div>
                
                <div className="grid grid-cols-1 gap-2 text-sm text-muted-foreground">
                  <div><strong>Event:</strong> TEDxYouth@SISmumbai 2024</div>
                  <div><strong>Audience:</strong> 500+ live attendees, 5,000+ online viewers</div>
                  <div><strong>Topic:</strong> Mental health advocacy and social change</div>
                </div>
              </div>
            </div>

            {/* Modi Meeting */}
            <div className="space-y-6">
              <div className="relative aspect-video rounded-xl overflow-hidden bg-slate-100 dark:bg-slate-800 shadow-lg">
                <Image
                  src="/images/Modi_Meet.jpg"
                  alt="Meeting with Prime Minister Narendra Modi"
                  fill
                  className="object-cover scale-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>
              
              <div className="space-y-4">
                <div className="space-y-2">
                  <Badge className="bg-gradient-to-r from-emerald-500 to-green-500 text-white">
                    Leadership Recognition
                  </Badge>
                  <h3 className="text-2xl font-bold">Meeting with Prime Minister Modi</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Had the incredible honor of meeting and shaking hands with Prime Minister Narendra Modi of India, 
                    a memorable moment that inspired my continued commitment to making positive impact through technology and community engagement.
                  </p>
                </div>
                
                <div className="grid grid-cols-1 gap-2 text-sm text-muted-foreground">
                  <div><strong>Location:</strong> Warsaw, Poland</div>
                  <div><strong>Context:</strong> Special diplomatic visit</div>
                  <div><strong>Experience:</strong> Personal interaction with global leadership</div>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center pt-8">
            <Button asChild>
              <Link href="/extracurriculars">
                <ArrowRight className="mr-2 h-4 w-4" />
                View All Activities
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
