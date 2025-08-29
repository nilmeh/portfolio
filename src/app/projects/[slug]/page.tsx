import Link from "next/link";
import { notFound } from "next/navigation";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Navigation } from "@/components/navigation";
import { 
  ExternalLink, 
  Github, 
  ArrowLeft, 
  Calendar,
  Clock,
  Users,
  Award,
  Play,
  Download
} from "lucide-react";

const projectsData = {
  "sortobot": {
    title: "Sortobot",
    description: "AI-powered smart waste segregation system using computer vision to automatically sort recyclable and non-recyclable waste.",
    fullDescription: "Introducing Sortobot - a visionary machine learning initiative created by two aspiring students from Singapore International School, Mumbai, with a deep commitment to making the world a greener and better place. Our mission is to tackle the pressing issue of improper waste segregation and insufficient recycling practices that persist in our surroundings.\n\nDriven by a strong desire for positive change, we set out on this journey, equipped with a passion for sustainability and a belief in the potential of cutting-edge technology. To address the problem at its core, we meticulously curated a diverse dataset comprising around 2000 images, meticulously labeling recyclable and non-recyclable waste items. Leveraging the capabilities of Google Teachables, we then designed a powerful machine learning model that would pave the way for an eco-friendly future.\n\nOur ambition didn't stop there - we took practical implementation seriously. By skillfully integrating our machine learning model into Pictoblox, we laid the foundation for a tangible solution. Yet, our aspirations remain high, with plans to leverage the full potential of Tensorflow in the near future, ensuring even greater efficiency and accuracy.\n\nTo turn our vision into reality, we have an exciting plan in place. Our next step is to seamlessly integrate our groundbreaking program with hardware such as Arduino. This will enable us to develop a smart bin, capable of identifying whether the trash is recyclable or non-recyclable and automatically opening the corresponding side of the bin.\n\nOur journey has been one of learning, growth, and innovation. By transforming our school into a model of sustainability, we aim to inspire others to join us on this vital mission. Through Sortobot, we envision a future where waste is no longer mismanaged, but rather embraced as a valuable resource for a cleaner, greener, and more sustainable planet for everyone. Together, we can create a brighter tomorrow.",
    tech: ["Python", "Google Teachables", "Pictoblox", "TensorFlow", "Arduino", "Computer Vision"],
    category: "AI & Machine Learning",
    status: "Completed",
    startDate: "July 2023",
    duration: "3 months",
    team: "2 developers",
    videoUrl: "https://www.youtube.com/watch?v=0c6s0NrypLk",
    videoId: "0c6s0NrypLk",
    conference: "London International Youth Science Forum (LIYSF) 2023",
    appStoreUrl: undefined,
    githubUrl: undefined,
    features: [
      "Computer vision-based waste classification",
      "Smart bin with automatic compartment selection", 
      "Real-time waste identification using custom ML model",
      "Arduino hardware integration for physical automation",
      "Sustainable waste management solution",
      "2000+ image dataset for training accuracy"
    ],
    challenges: [
      "Creating a diverse and representative dataset of waste items",
      "Optimizing model accuracy for real-world lighting conditions",
      "Integrating software ML model with hardware components",
      "Ensuring reliable mechanical operation of smart bin system"
    ],
    impact: [
      "Presented at London International Youth Science Forum",
      "Demonstrated improved waste segregation accuracy",
      "Inspired sustainable practices in school community",
      "Recognized for innovative approach to environmental challenges"
    ]
  },
  "newscrumbs": {
    title: "NewsCrumbs",
    description: "iOS news app delivering daily top stories in bite-sized format with smart summaries and offline reading.",
    fullDescription: "Introducing NewsCrumbs—Your Daily Dose of Simplified News! In today's fast-paced world, staying updated is crucial. With information coming from all directions, it can quickly become overwhelming. NewsCrumbs changes the game by delivering the day's most important stories in a simple, engaging, and easy-to-digest format.\n\nNewsCrumbs features Top 5 Crumbs with handpicked daily news stories, summarized with a simple title, brief subheading, and 5-bullet-point summary. Users receive instant updates with breaking news notifications directly on their device. Each story comes with visual summaries and engaging images, perfect for sharing. For those who want to dive deeper, in-depth articles are available for each story.\n\nThe app includes powerful features like Bookmark & Sync to save favorite Crumbs and access them across all iCloud devices, plus Search by Date to quickly find past Crumbs with our date-based search feature. Whether you're a news enthusiast or just looking for quick updates, NewsCrumbs keeps you informed without the overwhelm.",
    tech: ["SwiftUI", "Node.js", "MongoDB", "News API", "Core Data", "Push Notifications", "iCloud Sync"],
    category: "Mobile App",
    status: "Published",
    startDate: "July 2024", 
    duration: "4 months",
    team: "Solo developer",
    videoUrl: "https://www.youtube.com/watch?v=9IEeQE1-I5I",
    videoId: "9IEeQE1-I5I",
    conference: undefined,
    appStoreUrl: "https://apps.apple.com/pl/app/newscrumbs/id6636465564",
    githubUrl: undefined,
    features: [
      "Daily top 5 news stories with bullet-point summaries",
      "Push notifications for breaking news alerts",
      "Offline reading with Core Data storage",
      "iCloud sync across all user devices",
      "Visual news cards with engaging imagery",
      "Date-based search and browsing",
      "Bookmark favorite stories for later",
      "Clean, minimalist user interface"
    ],
    challenges: [
      "Designing an intuitive news consumption experience",
      "Implementing reliable push notification system",
      "Creating efficient data synchronization across devices",
      "Optimizing app performance for smooth scrolling",
      "Balancing information density with readability"
    ],
    impact: [
      "Successfully published on the iOS App Store",
      "Featured in app launch video presentation",
      "Simplified news consumption for busy users",
      "Positive user feedback on interface design"
    ]
  },
  "snapsolve": {
    title: "SnapSolve",
    description: "iOS app for reporting infrastructure issues with AI-powered image detection and automated complaint routing",
    fullDescription: "SnapSolve revolutionizes civic engagement by making it incredibly easy to report infrastructure problems in your community. We've all encountered cracked sidewalks, broken streetlights, or poor water pressure in dorm showers, but never knew where to take our complaints. SnapSolve fixes that gap.\n\nBuilt during LA Hacks 2025, SnapSolve is our first full-stack mobile application that opens directly to a camera interface. Users simply snap a picture of any infrastructure issue, and our AI-powered system automatically identifies the problem and determines the appropriate authority to contact. With just one tap, users can notify the relevant department and track their reported issues.\n\nThe app features a comprehensive issue tracking system where users can view all their submitted reports and their status. Additionally, SnapSolve includes a global map showing infrastructure issues reported by users worldwide, creating a crowdsourced database of civic problems that need attention.\n\nThis project taught us invaluable lessons about full-stack development, from managing complex API integrations to designing intuitive user interfaces. Despite facing numerous technical challenges, we successfully created a polished application that addresses a real-world problem affecting communities everywhere.",
    tech: ["SwiftUI", "Node.js", "Express", "MongoDB", "Firebase Auth", "Gemini API", "Core Location", "MapKit"],
    category: "Mobile App",
    status: "Completed",
    startDate: "April 2025",
    duration: "48 hours (Hackathon)",
    team: "2 developers",
    videoUrl: "https://www.youtube.com/watch?v=E9cDkG81dUg",
    videoId: "E9cDkG81dUg",
    conference: "LA Hacks 2025",
    appStoreUrl: undefined,
    githubUrl: "https://github.com/nilmeh/SnapSolve_iOS",
    features: [
      "AI-powered image recognition for problem identification",
      "Automatic routing to appropriate government departments", 
      "Real-time issue tracking and status updates",
      "Global map view of reported infrastructure issues",
      "Secure user authentication with Firebase",
      "Email notifications sent automatically to authorities",
      "Geolocation tagging for precise issue reporting",
      "Clean, camera-first user interface design"
    ],
    challenges: [
      "First-time building a complete full-stack application",
      "Learning API integration and database schema design",
      "Managing complex merge conflicts in team Git workflow",
      "Implementing MapKit for global issue visualization",
      "Connecting authentication system to backend database",
      "Debugging numerous API endpoint and networking issues"
    ],
    impact: [
      "Successfully completed first hackathon project",
      "Created functional civic engagement platform",
      "Gained experience with modern full-stack development",
      "Demonstrated AI integration in mobile applications",
      "Built foundation for future app development projects"
    ]
  },
  "college-counsel": {
    title: "CollegeCounsel",
    description: "AI-powered college counseling platform with application tracking and essay feedback",
    fullDescription: "CollegeCounsel is a comprehensive web platform designed to democratize access to high-quality college counseling services. Recognizing that many students lack access to professional college guidance, we created an AI-powered solution that provides personalized assistance throughout the entire college application process.\n\nThe platform features a sophisticated application tracking system that helps students organize their college applications, deadlines, and requirements in one centralized dashboard. Students can upload their essays and receive detailed AI-powered feedback on content, structure, and tone, helping them craft compelling personal statements and supplemental essays.\n\nOur AI recommendation engine, powered by OpenAI API, analyzes student profiles and suggests optimal universities from our comprehensive database of over 5,000 institutions worldwide. The system considers academic performance, extracurricular activities, geographic preferences, and career goals to provide tailored university recommendations.\n\nAdditionally, CollegeCounsel offers personalized profile improvement advice, identifying specific areas where students can strengthen their applications - from academic achievements to extracurricular involvement and standardized test preparation strategies.\n\nBuilt with a modern tech stack including Next.js for the frontend and Express.js with MongoDB for the backend, CollegeCounsel offers a seamless user experience across devices. The platform integrates Firebase Authentication for secure user management and AWS S3 for reliable document storage.\n\nThis comprehensive platform represents our commitment to educational equity, making professional-level college counseling accessible to students regardless of their economic background and helping them achieve their college aspirations.",
    tech: ["Next.js", "Node.js", "Express", "MongoDB", "Firebase Auth", "AWS S3", "OpenAI API", "JavaScript"],
    category: "Web Application",
    status: "Completed",
    startDate: "May 2025",
    duration: "3 months",
    team: "1 developers",
    videoUrl: undefined,
    videoId: undefined,
    conference: undefined,
    appStoreUrl: undefined,
    githubUrl: "https://github.com/nilmeh/collegecounsel",
    features: [
      "Comprehensive college application tracking dashboard",
      "AI-powered essay feedback and improvement suggestions",
      "University recommendations from 5,000+ institution database",
      "Personalized profile improvement and strategy advice",
      "Academic and extracurricular gap analysis",
      "Deadline management and notification system",
      "Secure document storage and organization",
      "Progress tracking across multiple applications",
      "Multi-device synchronization and access",
      "User-friendly interface for stress-free planning"
    ],
    challenges: [
      "Designing intuitive user experience for complex workflows",
      "Implementing reliable AI feedback system for essays",
      "Managing secure file uploads and storage at scale",
      "Creating effective deadline tracking and notification logic",
      "Ensuring data privacy and security for sensitive information"
    ],
    impact: [
      "Democratized access to college counseling services",
      "Provided AI-powered university matching from 5,000+ institutions",
      "Helped students identify and address application weaknesses",
      "Streamlined essay writing process with intelligent feedback",
      "Created cost-effective alternative to expensive counseling services",
      "Enabled data-driven college selection decisions"
    ]
  },
  "meal-plan-generator": {
    title: "UCLA Meal Plan Generator",
    description: "Full-stack web application generating optimized meal plans using UCLA Dining Hall data",
    fullDescription: "The UCLA Meal Plan Generator is a smart web application designed to solve the daily dilemma faced by UCLA students: 'What should I eat today?' By leveraging real-time data from UCLA's dining halls and implementing intelligent optimization algorithms, the platform generates personalized meal plans that maximize both nutrition and enjoyment.\n\nBuilt with React for a responsive frontend and Node.js with Express for a robust backend, the application integrates with UCLA's dining APIs to provide up-to-date menu information across all campus dining locations. The PostgreSQL database efficiently stores user preferences, dietary restrictions, and historical meal data.\n\nThe core innovation lies in our greedy optimization algorithm that considers multiple factors: nutritional balance, user preferences, dining hall proximity, crowd levels, and menu variety. This ensures students receive meal recommendations that are not only healthy but also practical and aligned with their personal tastes.\n\nWhether students want to discover new dishes, maintain a balanced diet, or simply save time deciding where to eat, the UCLA Meal Plan Generator streamlines the campus dining experience. The platform represents the intersection of practical utility and technical innovation, addressing a real need in the UCLA community.",
    tech: ["React", "Node.js", "Express", "PostgreSQL", "UCLA APIs", "Greedy Algorithm", "JavaScript", "CSS"],
    category: "Web Application", 
    status: "Completed",
    startDate: "June 2025",
    duration: "2 months",
    team: "Solo developer",
    videoUrl: undefined,
    videoId: undefined,
    conference: undefined,
    appStoreUrl: undefined,
    githubUrl: "https://github.com/nilmeh/meal-plan-generator",
    features: [
      "Real-time UCLA dining hall menu integration",
      "Personalized meal recommendations based on preferences",
      "Nutritional analysis and balance optimization",
      "Dining hall crowd level and proximity consideration",
      "Dietary restriction and allergy accommodation",
      "Historical meal tracking and preference learning",
      "Interactive campus dining map integration",
      "Weekly meal planning and schedule coordination"
    ],
    challenges: [
      "Integrating with UCLA's dynamic dining hall APIs",
      "Implementing efficient optimization algorithms for meal selection",
      "Designing responsive interface for mobile and desktop use",
      "Managing real-time data updates and synchronization",
      "Creating algorithms that balance nutrition with user preferences"
    ],
    impact: [
      "Simplified daily meal planning for UCLA students",
      "Improved nutritional awareness and balance",
      "Reduced decision fatigue around campus dining",
      "Enhanced discovery of diverse dining options on campus"
    ]
  }
};

interface ProjectPageProps {
  params: {
    slug: string;
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = projectsData[slug as keyof typeof projectsData];

  if (!project) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-emerald-50 to-amber-50 dark:from-slate-900 dark:via-emerald-950 dark:to-amber-950">
      <Navigation />

      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] dark:bg-grid-slate-700/25 dark:[mask-image:linear-gradient(0deg,rgba(255,255,255,0.1),rgba(255,255,255,0.5))]"></div>
      
      <div className="container relative px-6 py-12 mx-auto max-w-7xl">
        {/* Back Button */}
        <div className="mb-6">
          <Button variant="outline" asChild>
            <Link href="/projects">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Projects
            </Link>
          </Button>
        </div>

        {/* Hero Section - Side by Side */}
        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {/* Left: Project Info */}
          <div className="space-y-6">
            <div className="flex flex-wrap gap-2">
              <Badge variant="outline" className="border-emerald-200 text-emerald-700 dark:border-emerald-800 dark:text-emerald-300">
                {project.category}
              </Badge>
              <Badge variant={project.status === "Published" ? "default" : "secondary"} 
                     className="bg-emerald-100 text-emerald-700 hover:bg-emerald-200 dark:bg-emerald-900/30 dark:text-emerald-300">
                {project.status}
              </Badge>
              {project.conference && (
                <Badge variant="secondary" className="bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-300">
                  <Award className="mr-1 h-3 w-3" />
                  {project.conference}
                </Badge>
              )}
            </div>
            
            <h1 className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-emerald-600 via-green-600 to-amber-600 bg-clip-text text-transparent">
              {project.title}
            </h1>
            
            <p className="text-xl text-muted-foreground leading-relaxed">
              {project.description}
            </p>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white/60 dark:bg-slate-900/60 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                <div className="text-sm text-muted-foreground">Timeline</div>
                <div className="font-semibold">{project.startDate}</div>
                <div className="text-sm text-muted-foreground">{project.duration}</div>
              </div>
              <div className="bg-white/60 dark:bg-slate-900/60 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                <div className="text-sm text-muted-foreground">Team</div>
                <div className="font-semibold">{project.team}</div>
                <div className="text-sm text-muted-foreground">Development</div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-4 flex-wrap">
              {project.videoUrl && (
                <Button size="lg" asChild className="flex-1 min-w-[140px]">
                  <Link href={project.videoUrl} target="_blank">
                    <Play className="mr-2 h-5 w-5" />
                    Watch Demo
                  </Link>
                </Button>
              )}
              {project.githubUrl && (
                <Button variant="outline" size="lg" asChild className="flex-1 min-w-[140px]">
                  <Link href={project.githubUrl} target="_blank">
                    <Github className="mr-2 h-5 w-5" />
                    View Code
                  </Link>
                </Button>
              )}
              {project.appStoreUrl && (
                <Button variant="outline" size="lg" asChild className="flex-1 min-w-[140px]">
                  <Link href={project.appStoreUrl} target="_blank">
                    <Download className="mr-2 h-5 w-5" />
                    Download App
                  </Link>
                </Button>
              )}
            </div>

            {/* Tech Stack */}
            <div>
              <h3 className="text-lg font-semibold mb-3">Tech Stack</h3>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech) => (
                  <Badge key={tech} variant="outline" className="border-emerald-200 text-emerald-700 hover:bg-emerald-50 dark:border-emerald-800 dark:text-emerald-300 dark:hover:bg-emerald-900/30">
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Video Demo or Screenshots */}
          {project.videoId ? (
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Live Demo</h3>
              <Card className="border-0 shadow-2xl bg-white/90 dark:bg-slate-900/90 backdrop-blur-sm overflow-hidden">
                <div className="relative aspect-video">
                  <iframe
                    src={`https://www.youtube.com/embed/${project.videoId}?rel=0&modestbranding=1`}
                    title={`${project.title} Demo`}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                    className="absolute inset-0 w-full h-full"
                  ></iframe>
                </div>
              </Card>
            </div>
          ) : (
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Screenshots</h3>
              <div className="space-y-4">
                {/* Dynamic screenshot rendering based on project slug */}
                {slug === "college-counsel" && (
                  <>
                    <Card className="border-0 shadow-xl bg-white/90 dark:bg-slate-900/90 backdrop-blur-sm overflow-hidden">
                      <img 
                        src="/images/projects/CollegeCounsel.png" 
                        alt="CollegeCounsel Interface"
                        className="w-full h-auto rounded-lg"
                      />
                    </Card>
                    <Card className="border-0 shadow-xl bg-white/90 dark:bg-slate-900/90 backdrop-blur-sm overflow-hidden">
                      <img 
                        src="/images/projects/CollegeCounsel2.png" 
                        alt="CollegeCounsel Dashboard"
                        className="w-full h-auto rounded-lg"
                      />
                    </Card>
                  </>
                )}
                {slug === "meal-plan-generator" && (
                  <Card className="border-0 shadow-xl bg-white/90 dark:bg-slate-900/90 backdrop-blur-sm overflow-hidden">
                    <img 
                      src="/images/projects/UCLA_Meal_Planner.png" 
                      alt="UCLA Meal Plan Generator Interface"
                      className="w-full h-auto rounded-lg"
                    />
                  </Card>
                )}
              </div>
            </div>
          )}
        </div>

        {/* Features & Impact Grid */}
        <div className="grid lg:grid-cols-3 gap-6 mb-12">
          {/* Key Features */}
          <Card className="border-0 shadow-xl bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-xl bg-gradient-to-r from-emerald-600 to-green-600 bg-clip-text text-transparent flex items-center gap-2">
                <div className="w-2 h-8 bg-gradient-to-b from-blue-500 to-violet-500 rounded-full"></div>
                Key Features
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {project.features.slice(0, 4).map((feature, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-sm text-muted-foreground leading-relaxed">{feature}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          {/* Challenges */}
          <Card className="border-0 shadow-xl bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-xl bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent flex items-center gap-2">
                <div className="w-2 h-8 bg-gradient-to-b from-orange-500 to-red-500 rounded-full"></div>
                Challenges
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {project.challenges.slice(0, 4).map((challenge, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-sm text-muted-foreground leading-relaxed">{challenge}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          {/* Impact */}
          <Card className="border-0 shadow-xl bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-xl bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent flex items-center gap-2">
                <div className="w-2 h-8 bg-gradient-to-b from-green-500 to-emerald-500 rounded-full"></div>
                Impact
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {project.impact.map((impact, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-sm text-muted-foreground leading-relaxed">{impact}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* About Section - Condensed */}
        <Card className="border-0 shadow-xl bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm mb-12">
          <CardHeader>
            <CardTitle className="text-2xl bg-gradient-to-r from-emerald-600 to-green-600 bg-clip-text text-transparent">
              Project Overview
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="prose dark:prose-invert max-w-none">
              <p className="text-muted-foreground leading-relaxed">
                {project.fullDescription.split('\n\n')[0]}
              </p>
              {project.fullDescription.split('\n\n').length > 1 && (
                <details className="mt-4 cursor-pointer">
                  <summary className="text-emerald-600 hover:text-emerald-700 font-medium">Read more...</summary>
                  <div className="mt-3 space-y-4">
                    {project.fullDescription.split('\n\n').slice(1).map((paragraph, index) => (
                      <p key={index} className="text-muted-foreground leading-relaxed">
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </details>
              )}
            </div>
          </CardContent>
        </Card>

        {/* CTA Section */}
        <Card className="border-0 shadow-xl bg-gradient-to-r from-emerald-600/10 to-amber-600/10 backdrop-blur-sm">
          <CardContent className="p-8">
            <div className="text-center">
              <h3 className="text-2xl font-bold mb-2 bg-gradient-to-r from-emerald-600 to-green-600 bg-clip-text text-transparent">
                Interested in This Project?
              </h3>
              <p className="text-muted-foreground mb-6">
                Let&apos;s discuss how we can collaborate or explore similar solutions together.
              </p>
              <div className="flex gap-4 justify-center flex-wrap">
                <Button size="lg" asChild>
                  <Link href="/contact">
                    Get in Touch
                  </Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link href="/projects">
                    View All Projects
                  </Link>
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

// Generate static params for all projects
export async function generateStaticParams() {
  return Object.keys(projectsData).map((slug) => ({
    slug: slug,
  }));
}
