"use client";

import Link from "next/link";
import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Navigation } from "@/components/navigation";
import { ExternalLink, Github, Search, Filter, Lock } from "lucide-react";

export default function Projects() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedTech, setSelectedTech] = useState<string[]>([]);
  const projects = [
    {
      title: "TextileSaaS",
      description: "Multi-tenant SaaS platform with ERP, CRM, inventory, and analytics tools for SMEs, targeting textile industry",
      tech: ["NestJS", "Prisma", "PostgreSQL", "SwiftUI", "AWS S3", "CloudFront", "SwiftData"],
      category: "saas",
      status: "In Development",
      featured: true,
      isPrivate: true,
      slug: "coming-soon",
      caseStudy: "/case-studies/textile-saas",
      demo: "https://textilesaas.com",
      screenshots: "/screenshots/textile-saas",
      startDate: "2025-06-01"
    },
    {
      title: "Ledger",
      description: "End-to-end encrypted iOS peer-to-peer ledger app with device linking and transaction workflows",
      tech: ["Swift", "SwiftUI", "CryptoKit", "Firebase", "Siri Shortcuts"],
      category: "mobile",
      status: "Completed",
      featured: true,
      isPrivate: true,
      slug: "coming-soon",
      caseStudy: "/case-studies/ledger",
      demo: "https://apps.apple.com/app/ledger",
      screenshots: "/screenshots/ledger",
      startDate: "2025-08-01"
    },
    {
      title: "CollegeCounsel",
      description: "AI-powered college counseling platform with application tracking and essay feedback",
      tech: ["Next.js", "Node.js", "Express", "MongoDB", "Firebase Auth", "AWS S3", "OpenAI API"],
      category: "web",
      status: "Completed",
      featured: true,
      isPrivate: false,
      slug: "college-counsel",
      github: "https://github.com/nilmeh/collegecounsel",
      demo: "https://collegecounsel.app",
      startDate: "2025-05-01"
    },
    {
      title: "SnapSolve",
      description: "iOS app for reporting infrastructure issues with AI-powered image detection and automated complaint routing",
      tech: ["SwiftUI", "Node.js", "Express", "MongoDB", "Firebase Auth", "Gemini API", "Core Location"],
      category: "mobile",
      status: "Completed",
      featured: true,
      isPrivate: false,
      slug: "snapsolve",
      github: "https://github.com/nilmeh/SnapSolve_iOS",
      demo: "https://devpost.com/software/snapsolve",
      startDate: "2025-04-01",
      hackathon: "LA Hacks 2025"
    },
    {
      title: "Sortobot",
      description: "AI-powered smart waste segregation system using computer vision to automatically sort recyclable and non-recyclable waste.",
      tech: ["Python", "Google Teachables", "Pictoblox", "TensorFlow", "Arduino", "Computer Vision"],
      category: "ai",
      status: "Completed",
      featured: true,
      isPrivate: false,
      slug: "sortobot",
      startDate: "2023-07-01",
      conference: "London International Youth Science Forum (LIYSF) 2023"
    },
    {
      title: "NewsCrumbs",
      description: "iOS news app delivering daily top stories in bite-sized format with smart summaries and offline reading.",
      tech: ["SwiftUI", "Node.js", "MongoDB", "News API", "Core Data", "Push Notifications"],
      category: "mobile",
      status: "Published",
      featured: true,
      isPrivate: false,
      slug: "newscrumbs",
      startDate: "2024-07-01"
    },
    {
      title: "Meal Plan Generator",
      description: "Full-stack web application generating optimized meal plans using UCLA Dining Hall data",
      tech: ["React", "Node.js", "Express", "PostgreSQL", "Greedy Algorithm"],
      category: "web",
      status: "Completed",
      featured: false,
      isPrivate: false,
      slug: "meal-plan-generator",
      github: "https://github.com/nilmeh/CS35L_Project",
      demo: "https://uclamealplanner.com",
      startDate: "2025-06-01"
    }
  ];

  const categories = ["all", "web", "mobile", "saas", "ai"];
  const techStack = Array.from(new Set(projects.flatMap(p => p.tech))).sort();

  // Filter projects based on search term, category, and tech
  const filteredProjects = projects.filter(project => {
    const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.tech.some(tech => tech.toLowerCase().includes(searchTerm.toLowerCase()));
    
    const matchesCategory = selectedCategory === "all" || project.category === selectedCategory;
    
    const matchesTech = selectedTech.length === 0 || 
                       selectedTech.every(tech => project.tech.includes(tech));
    
    return matchesSearch && matchesCategory && matchesTech;
  });

  const toggleTech = (tech: string) => {
    setSelectedTech(prev => 
      prev.includes(tech) 
        ? prev.filter(t => t !== tech)
        : [...prev, tech]
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-emerald-50 to-amber-50 dark:from-slate-900 dark:via-emerald-950 dark:to-amber-950">
      <Navigation />

      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] dark:bg-grid-slate-700/25 dark:[mask-image:linear-gradient(0deg,rgba(255,255,255,0.1),rgba(255,255,255,0.5))]"></div>

      <div className="container relative px-4 py-16 mx-auto">
        {/* Header */}
        <div className="mb-16 text-center">
          <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-emerald-600 via-green-600 to-amber-600 bg-clip-text text-transparent">My Projects</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A collection of web applications, mobile apps, and SaaS platforms I&apos;ve built, 
            showcasing my journey in software development and innovation.
          </p>
        </div>

        {/* Filters */}
        <div className="mb-12">
          <Card className="border-0 shadow-lg bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 bg-gradient-to-r from-emerald-600 to-green-600 bg-clip-text text-transparent">
                <Filter className="h-5 w-5 text-emerald-600" />
                Filters
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {/* Search */}
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input
                    placeholder="Search projects..."
                    className="pl-10"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </div>

                {/* Categories */}
                <div className="space-y-2">
                  <h3 className="text-sm font-medium">Categories</h3>
                  <div className="flex flex-wrap gap-2">
                    {categories.map((category) => (
                      <Badge
                        key={category}
                        variant={selectedCategory === category ? "default" : "outline"}
                        className="cursor-pointer hover:bg-primary hover:text-primary-foreground"
                        onClick={() => setSelectedCategory(category)}
                      >
                        {category.charAt(0).toUpperCase() + category.slice(1)}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Tech Stack */}
                <div className="space-y-2">
                  <h3 className="text-sm font-medium">Technologies</h3>
                  <div className="flex flex-wrap gap-1 max-h-24 overflow-y-auto">
                    {techStack.slice(0, 15).map((tech) => (
                      <Badge
                        key={tech}
                        variant={selectedTech.includes(tech) ? "default" : "secondary"}
                        className="text-xs cursor-pointer hover:bg-secondary-foreground hover:text-secondary"
                        onClick={() => toggleTech(tech)}
                      >
                        {tech}
                      </Badge>
                    ))}
                    {techStack.length > 15 && (
                      <Badge variant="outline" className="text-xs">
                        +{techStack.length - 15} more
                      </Badge>
                    )}
                  </div>
                  {selectedTech.length > 0 && (
                    <div className="mt-2">
                      <Button 
                        variant="outline" 
                        size="sm" 
                        onClick={() => setSelectedTech([])}
                      >
                        Clear Filters
                      </Button>
                    </div>
                  )}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Featured Projects */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-emerald-600 to-green-600 bg-clip-text text-transparent">Featured Projects</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {filteredProjects.filter(p => p.featured).map((project) => (
              <Card key={project.title} className="hover:shadow-lg transition-shadow border-0 shadow-lg bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="space-y-1">
                      <CardTitle className="text-xl bg-gradient-to-r from-emerald-600 to-green-600 bg-clip-text text-transparent">{project.title}</CardTitle>
                      <div className="flex gap-2">
                        {project.hackathon && (
                          <Badge variant="secondary" className="text-xs bg-emerald-100 text-emerald-700 hover:bg-emerald-200 dark:bg-emerald-900/30 dark:text-emerald-300">
                            {project.hackathon}
                          </Badge>
                        )}
                        {project.isPrivate && (
                          <Badge variant="outline" className="text-xs border-amber-200 text-amber-700 hover:bg-amber-50 dark:border-amber-800 dark:text-amber-300 dark:hover:bg-amber-900/30">
                            <Lock className="mr-1 h-3 w-3" />
                            Private
                          </Badge>
                        )}
                      </div>
                    </div>
                    <Badge variant={project.status === "Completed" ? "default" : project.status === "Published" ? "default" : "secondary"} className="bg-emerald-100 text-emerald-700 hover:bg-emerald-200 dark:bg-emerald-900/30 dark:text-emerald-300">
                      {project.status}
                    </Badge>
                  </div>
                  <CardDescription className="line-clamp-3">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex flex-wrap gap-1">
                      {project.tech.slice(0, 4).map((tech) => (
                        <Badge key={tech} variant="outline" className="text-xs border-emerald-200 text-emerald-700 hover:bg-emerald-50 dark:border-emerald-800 dark:text-emerald-300 dark:hover:bg-emerald-900/30">
                          {tech}
                        </Badge>
                      ))}
                      {project.tech.length > 4 && (
                        <Badge variant="outline" className="text-xs border-emerald-200 text-emerald-700 hover:bg-emerald-50 dark:border-emerald-800 dark:text-emerald-300 dark:hover:bg-emerald-900/30">
                          +{project.tech.length - 4}
                        </Badge>
                      )}
                    </div>
                    <div className="flex gap-2">
                      <Button size="sm" asChild className="flex-1">
                        <Link href={project.slug === "coming-soon" ? "/coming-soon" : `/projects/${project.slug}`}>
                          <ExternalLink className="mr-2 h-4 w-4" />
                          View Project
                        </Link>
                      </Button>
                      {!project.isPrivate && project.github && (
                        <Button variant="outline" size="sm" asChild className="flex-1">
                          <Link href={project.github} target="_blank">
                            <Github className="mr-2 h-4 w-4" />
                            Code
                          </Link>
                        </Button>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* All Projects */}
        <section>
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold bg-gradient-to-r from-emerald-600 to-green-600 bg-clip-text text-transparent">All Projects</h2>
            <div className="text-sm text-muted-foreground">
              Showing {filteredProjects.length} of {projects.length} projects
            </div>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {filteredProjects.map((project) => (
              <Card key={project.title} className="hover:shadow-lg transition-shadow border-0 shadow-lg bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="space-y-1">
                      <CardTitle className="text-lg bg-gradient-to-r from-emerald-600 to-green-600 bg-clip-text text-transparent">{project.title}</CardTitle>
                      <div className="flex gap-2">
                        <Badge variant="outline" className="text-xs border-emerald-200 text-emerald-700 hover:bg-emerald-50 dark:border-emerald-800 dark:text-emerald-300 dark:hover:bg-emerald-900/30">
                          {project.category}
                        </Badge>
                        {project.hackathon && (
                          <Badge variant="secondary" className="text-xs bg-emerald-100 text-emerald-700 hover:bg-emerald-200 dark:bg-emerald-900/30 dark:text-emerald-300">
                            {project.hackathon}
                          </Badge>
                        )}
                        {project.isPrivate && (
                          <Badge variant="outline" className="text-xs border-amber-200 text-amber-700 hover:bg-amber-50 dark:border-amber-800 dark:text-amber-300 dark:hover:bg-amber-900/30">
                            <Lock className="mr-1 h-3 w-3" />
                            Private
                          </Badge>
                        )}
                      </div>
                    </div>
                    <Badge variant={project.status === "Completed" ? "default" : project.status === "Published" ? "default" : "secondary"} className="bg-emerald-100 text-emerald-700 hover:bg-emerald-200 dark:bg-emerald-900/30 dark:text-emerald-300">
                      {project.status}
                    </Badge>
                  </div>
                  <CardDescription className="line-clamp-2">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex flex-wrap gap-1">
                      {project.tech.slice(0, 6).map((tech) => (
                        <Badge key={tech} variant="outline" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                      {project.tech.length > 6 && (
                        <Badge variant="outline" className="text-xs">
                          +{project.tech.length - 6}
                        </Badge>
                      )}
                    </div>
                    <div className="flex gap-2">
                      <Button size="sm" asChild className="flex-1">
                        <Link href={project.slug === "coming-soon" ? "/coming-soon" : `/projects/${project.slug}`}>
                          <ExternalLink className="mr-2 h-4 w-4" />
                          View Project
                        </Link>
                      </Button>
                      {!project.isPrivate && project.github && (
                        <Button variant="outline" size="sm" asChild className="flex-1">
                          <Link href={project.github} target="_blank">
                            <Github className="mr-2 h-4 w-4" />
                            Code
                          </Link>
                        </Button>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="mt-16 text-center">
          <Card>
            <CardHeader>
              <CardTitle>Interested in collaborating?</CardTitle>
              <CardDescription>
                I&apos;m always open to discussing new projects, innovative ideas, or opportunities to create something amazing together.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex justify-center gap-4">
                <Button asChild>
                  <Link href="/contact">
                    Get in Touch
                  </Link>
                </Button>
                <Button variant="outline" asChild>
                  <Link href="https://github.com/nilmeh" target="_blank">
                    <Github className="mr-2 h-4 w-4" />
                    View GitHub
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  );
}
