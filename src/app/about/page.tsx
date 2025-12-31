import Link from "next/link";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Navigation } from "@/components/navigation";
import { Github, Linkedin, Mail, Download, MapPin, GraduationCap, Users, Trophy, Award, Star } from "lucide-react";
import { scheduler } from "timers/promises";

export default function About() {
  const skills = {
    "Programming Languages": ["C++", "Python", "Swift", "React.js", "Java", "HTML", "CSS", "JavaScript", "Bash", "Git", "Lisp"],
    "Web Technologies": ["React", "Next.js", "Node.js", "HTML/CSS", "RESTful APIs"],
    "Mobile Development": ["SwiftUI", "iOS Development", "React Native"],
    "Databases": ["MongoDB", "PostgreSQL", "Firebase", "Core Data"],
    "Cloud & DevOps": ["AWS S3", "Docker", "Git", "Bash", "CI/CD"],
    "Languages": ["English", "Hindi", "Polish", "Spanish", "Sindhi"],
    "Interests": ["Math Competitions (AMC)", "Basketball", "Engineering Skills (ACM, Rocket Project, Bruin Formula Racing)", "Investing", "Entrepreneurship", "Politics"]
  };

  const education = [
    {
      school: "University of California, Los Angeles (UCLA)",
      degree: "Bachelor of Science in Computer Science and Engineering",
      location: "Los Angeles, CA",
      period: "Expected June 2028",
      grade: "GPA: 3.983/4.0",
      honors: ["Boeing Scholarship", "Samueli Undergraduate Fund Scholarship", "Norman Yeung Scholarship", "Dean's Honors List (2024-2025)"],
      coursework: [
        "Introduction to Programming (C++)",
        "Data Structures and Algorithms (C++)",
        "Software Construction (Python, JavaScript, Node.js, React)",
        "Calculus II & Multivariable Calculus",
        "Discrete Structures"
      ]
    },
    {
        school: "Singapore International School, Mumbai",
        degree: "International Baccalaureate Diploma",
        location: "Mumbai, India",
        period: "Graduated May 2024",
        grade: "42/45 IB Points",
        honors: ["Chairman's Excellence Scholarship", "IB Diploma with Distinction"],
        coursework: [
          "Higher Level Mathematics",
          "Higher Level Physics",
          "Higher Level Economics",
          "Standard Level Chemistry",
          "Standard Level English",
          "Standard Level Spanish B"
        ]
    },
    {
        school: "British International School of the University of Łódź",
        degree: "Cambridge IGCSE's",
        location: "Łódź, Poland",
        period: "Graduated May 2020",
        grade: "9/9 A*s",
        honors: ["Outstanding Cambridge Learner Award - Top in World in IGCSE Mathematics (0580)", "School Topper in IGCSE Examinations - 9A*s with 100% PUM in Mathematics"],
        coursework: [
          "Mathematics",
          "Physics",
          "Chemistry",
          "Biology",
          "English as a First Language",
          "English Literature",
          "Geography",
          "History",
          "Business Studies"
        ]
    }
  ];

  const experience = [
    {
      company: "Daily Bruin",
      position: "Software Engineering Intern",
      period: "October 2025 - Present",
      description: "Developing and maintaining the Daily Bruin website serving 50,000+ daily visitors using React, MySQL, and Kubernetes. Leading optimization initiatives to enhance user experience and site performance.",
      achievements: [
        "Led the main site optimization project, improving load times by 80% via component modernization, optimized image delivery, dependency reduction, and priority asset loading",
        "Developing and maintaining the Daily Bruin website (50,000+ daily visitors) using React, MySQL, and Kubernetes",
        "Contributing to a high-traffic news platform serving the UCLA community with reliable, fast content delivery"
      ]
    },
    {
      company: "DTBEU (Texpro Solutions sp. z o.o.)",
      position: "Software Engineering Intern",
      period: "June 2025 - July 2025",
      description: "Worked directly with the Managing Director on transformative technology initiatives that revolutionized the company's operational efficiency. Spearheaded the development of cutting-edge financial automation systems and intelligent document processing solutions.",
      achievements: [
        "Developed and deployed a comprehensive Finance Dashboard using FastAPI and PostgreSQL, integrating advanced OCR capabilities with Google Document AI and LLM processing through Google Gemini for intelligent financial data extraction",
        "Built an automated POD (Proof of Delivery) web scraping system that transformed a labor-intensive 8-hour manual process into a streamlined 15-minute automated workflow, delivering unprecedented operational efficiency",
        "Implemented sophisticated multi-threading architecture with secure credential management and robust batch processing capabilities, successfully handling 500+ documents with enterprise-grade reliability"
      ]
    },
    {
      company: "UCLA Residential Life",
      position: "Resident Assistant",
      period: "September 2025 - Present",
      description: "Fostering inclusive community development and meaningful student engagement as a trusted mentor and leader for over 50 residential students. Creating supportive environments that promote academic success, personal growth, and cross-cultural understanding within UCLA's diverse campus community."
    },
    {
      company: "Panache Fashion Sp. z o.o.",
      position: "Software Development Intern",
      period: "June 2024 - September 2024",
      description: "Drove digital transformation initiatives for a growing European fashion company, combining technical expertise with business acumen to deliver impact on customer engagement and operational efficiency.",
      achievements: [
        "Designed and developed the company's flagship website (panachefashion.pl) using modern React.js architecture and responsive CSS design, resulting in a remarkable 60% increase in web traffic and enhanced customer engagement",
        "Improved critical business operations by optimizing invoicing and inventory management systems, significantly improving order processing efficiency and real-time tracking capabilities for better customer service"
      ]
    },
    {
      company: "Bruin AI",
      position: "Member",
      period: "October 2025 - Present",
      description: "Developing AI-driven solutions by applying machine learning and deep learning to solve real-world business problems for paying clients. Contributing to cutting-edge AI projects that bridge academic research with practical industry applications."
    },
    {
      company: "Undergraduate Student Association Council (USAC), UCLA",
      position: "Member of Staff – Office of the President",
      period: "2024-2025",
      description: "Contributing to strategic student government initiatives and presidential office operations at UCLA, working collaboratively on policy development and campus-wide programs that enhance the undergraduate experience for over 32,000 students."
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
          <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-emerald-600 via-green-600 to-amber-600 bg-clip-text text-transparent">
            About Me
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Passionate about building innovative technology solutions that create meaningful impact
          </p>
        </div>

        {/* Bio Section */}
        <section className="mb-16">
          <Card className="border-0 shadow-lg bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-xl bg-gradient-to-r from-emerald-600 to-green-600 bg-clip-text text-transparent">
                <GraduationCap className="h-5 w-5 text-emerald-600" />
                Introduction
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-8 items-start">
                {/* Profile Image */}
                <div className="relative md:col-span-1">
                  <div className="relative w-60 h-60 mx-auto">
                    <div className="relative w-full h-full bg-gradient-to-br from-emerald-600 to-green-600 rounded-full p-1">
                      <div className="relative w-full h-full bg-white dark:bg-slate-900 rounded-full overflow-hidden">
                        <Image
                          src="/images/profile/avatar.jpg"
                          alt="Niloy Meharchandani"
                          fill
                          className="object-cover "
                          style={{ objectPosition: "95% 9%" }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Bio Text */}
                <div className="md:col-span-2 space-y-4">
                  <div className="space-y-2">
                    <h3 className="text-2xl font-bold bg-gradient-to-r from-emerald-600 to-green-600 bg-clip-text text-transparent">
                      Niloy Meharchandani
                    </h3>
                    <p className="text-lg text-muted-foreground font-medium">
                      Computer Science & Engineering Student at UCLA
                    </p>
                  </div>
                  
                  <p className="text-muted-foreground leading-relaxed">
                    I&apos;m a Computer Science and Engineering student at UCLA with a passion for creating 
                    innovative software solutions that solve real-world problems. With a strong academic 
                    foundation (3.983 GPA) and hands-on experience through internships and personal projects, 
                    I specialize in full-stack web development, iOS development, and emerging technologies.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    My journey spans from building production-ready SaaS platforms to conducting research 
                    in mathematics education. I&apos;m particularly interested in the intersection of technology, 
                    entrepreneurship, and user experience design. As a TEDx speaker and community leader, 
                    I believe in using technology to empower others and create positive change.
                  </p>
                  <div className="flex gap-4 pt-4">
                    <Button asChild>
                      <Link href="/resume.pdf" target="_blank">
                        <Download className="mr-2 h-4 w-4" />
                        Download Resume
                      </Link>
                    </Button>
                    <Button variant="outline" asChild>
                      <Link href="/contact">
                        <Mail className="mr-2 h-4 w-4" />
                        Get in Touch
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Education */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-emerald-600 to-green-600 bg-clip-text text-transparent">Education</h2>
          <div className="space-y-6">
            {education.map((edu, index) => (
              <Card key={index} className="border-0 shadow-lg bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="bg-gradient-to-r from-emerald-600 to-green-600 bg-clip-text text-transparent">{edu.school}</CardTitle>
                      <CardDescription className="mt-1">{edu.degree}</CardDescription>
                    </div>
                    <Badge variant="secondary" className="bg-emerald-100 text-emerald-700 hover:bg-emerald-200 dark:bg-emerald-900/30 dark:text-emerald-300">{edu.period}</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-2">
                        <MapPin className="h-4 w-4 text-muted-foreground" />
                        <span className="text-sm text-muted-foreground"> {edu.location}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <GraduationCap className="h-4 w-4 text-muted-foreground" />
                        <span className="text-sm font-medium">{edu.grade}</span>
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold mb-2">Honors & Recognition</h4>
                      <div className="flex flex-wrap gap-2">
                        {edu.honors?.map((honor) => (
                          <Badge key={honor} variant="outline">{honor}</Badge>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h4 className="font-semibold mb-2">Relevant Coursework</h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                        {edu.coursework?.map((course) => (
                          <div key={course} className="text-sm text-muted-foreground">
                            • {course}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Experience */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-emerald-600 to-green-600 bg-clip-text text-transparent">Experience</h2>
          <div className="space-y-6">
            {experience.map((exp, index) => (
              <Card key={index} className="border-0 shadow-lg bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="bg-gradient-to-r from-emerald-600 to-green-600 bg-clip-text text-transparent">{exp.position}</CardTitle>
                      <CardDescription className="mt-1">{exp.company}</CardDescription>
                    </div>
                    <Badge variant="secondary" className="bg-emerald-100 text-emerald-700 hover:bg-emerald-200 dark:bg-emerald-900/30 dark:text-emerald-300">{exp.period}</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  {exp.description && (
                    <p className="text-muted-foreground mb-4">{exp.description}</p>
                  )}
                  {exp.achievements && (
                    <div>
                      <h4 className="font-semibold mb-2">Key Achievements</h4>
                      <ul className="space-y-2">
                        {exp.achievements.map((achievement, i) => (
                          <li key={i} className="text-sm text-muted-foreground">
                            • {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Awards & Honors */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-emerald-600 to-green-600 bg-clip-text text-transparent">Awards & Honors</h2>
          
          {/* Featured Awards */}
          <div className="grid lg:grid-cols-3 gap-8 mb-8">
            <Card className="border-0 shadow-xl bg-gradient-to-br from-yellow-50 to-orange-50 dark:from-yellow-950/30 dark:to-orange-950/30 backdrop-blur-sm hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
              <CardHeader className="text-center pb-2">
                <div className="mx-auto w-16 h-16 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center mb-4">
                  <Trophy className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-xl bg-gradient-to-r from-yellow-600 to-orange-600 bg-clip-text text-transparent">
                  Outstanding Cambridge Learner
                </CardTitle>
                <p className="text-sm text-muted-foreground font-medium">University of Cambridge • 2022</p>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Top in World for IGCSE Mathematics, recognizing exceptional academic achievement among international students.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-xl bg-gradient-to-br from-purple-50 to-blue-50 dark:from-purple-950/30 dark:to-blue-950/30 backdrop-blur-sm hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
              <CardHeader className="text-center pb-2">
                <div className="mx-auto w-16 h-16 bg-gradient-to-br from-purple-500 to-blue-500 rounded-full flex items-center justify-center mb-4">
                  <GraduationCap className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-xl bg-gradient-to-r from-emerald-600 to-green-600 bg-clip-text text-transparent">
                  IB Diploma with Distinction
                </CardTitle>
                <p className="text-sm text-muted-foreground font-medium">42/45 Points • 2024</p>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Achieved top-tier performance in the International Baccalaureate program, demonstrating excellence across diverse academic disciplines.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-xl bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-emerald-950/30 dark:to-teal-950/30 backdrop-blur-sm hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
              <CardHeader className="text-center pb-2">
                <div className="mx-auto w-16 h-16 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-full flex items-center justify-center mb-4">
                  <Award className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-xl bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
                  John Locke Distinction
                </CardTitle>
                <p className="text-sm text-muted-foreground font-medium">Philosophy Essay Competition • 2023</p>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Achieved distinction in the prestigious international essay competition, demonstrating exceptional analytical and writing abilities.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Additional Recognition */}
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="border-0 shadow-lg bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 bg-gradient-to-r from-emerald-600 to-green-600 bg-clip-text text-transparent">
                  <GraduationCap className="h-5 w-5 text-emerald-500" />
                  Academic Scholarships
                </CardTitle>
                <CardDescription>UCLA & International Programs</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-emerald-500 rounded-full mt-2"></div>
                    <div>
                      <p className="font-medium text-sm">Boeing Scholarship</p>
                      <p className="text-xs text-muted-foreground">UCLA Engineering Merit Award</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-emerald-500 rounded-full mt-2"></div>
                    <div>
                      <p className="font-medium text-sm">Samueli Undergraduate Fund</p>
                      <p className="text-xs text-muted-foreground">Engineering Excellence Recognition</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-emerald-500 rounded-full mt-2"></div>
                    <div>
                      <p className="font-medium text-sm">Norman Yeung Scholarship</p>
                      <p className="text-xs text-muted-foreground">Engineering Scholarship</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-emerald-500 rounded-full mt-2"></div>
                    <div>
                      <p className="font-medium text-sm">Chairman&apos;s Excellence Scholarship</p>
                      <p className="text-xs text-muted-foreground">SIS Merit Scholarship</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 bg-gradient-to-r from-emerald-600 to-green-600 bg-clip-text text-transparent">
                  <Star className="h-5 w-5 text-amber-500" />
                  Academic Recognition
                </CardTitle>
                <CardDescription>Dean&apos;s Honors & Excellence</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
                    <div>
                      <p className="font-medium text-sm">Dean&apos;s Honors List</p>
                      <p className="text-xs text-muted-foreground">UCLA 2024-2025</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
                    <div>
                      <p className="font-medium text-sm">High GPA Achievement</p>
                      <p className="text-xs text-muted-foreground">3.983/4.0 Cumulative</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
                    <div>
                      <p className="font-medium text-sm">IB: 42/45</p>
                      <p className="text-xs text-muted-foreground">SIS Mumbai Academic Merit</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
                    <div>
                      <p className="font-medium text-sm">IGCSE: 9/9 A*&apos;s</p>
                      <p className="text-xs text-muted-foreground">British International School Academic Merit</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Leadership & Extracurriculars */}
        <section className="mb-16">
          <Card className="border-0 shadow-lg bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm text-center">
            <CardHeader>
              <CardTitle className="text-2xl bg-gradient-to-r from-emerald-600 to-green-600 bg-clip-text text-transparent">
                Leadership & Extracurriculars
              </CardTitle>
              <CardDescription className="text-lg">
                From TEDx speaking to founding community service organizations
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-6">
                Explore my leadership roles, community involvement, speaking engagements, and volunteer work that showcase my commitment to creating positive entrepreneurship.
              </p>
              <Button asChild size="lg">
                <Link href="/extracurriculars">
                  <Users className="mr-2 h-5 w-5" />
                  View All Activities
                </Link>
              </Button>
            </CardContent>
          </Card>
        </section>

        {/* Skills */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-emerald-600 to-green-600 bg-clip-text text-transparent">Skills & Interests</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {Object.entries(skills).map(([category, skillList]) => (
              <Card key={category} className="border-0 shadow-lg bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-lg bg-gradient-to-r from-emerald-600 to-green-600 bg-clip-text text-transparent">{category}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {skillList.map((skill) => (
                      <Badge key={skill} variant="outline" className="text-xs border-emerald-200 text-emerald-700 hover:bg-emerald-50 dark:border-emerald-800 dark:text-emerald-300 dark:hover:bg-emerald-900/30">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Contact CTA */}
        <section className="text-center">
          <Card className="border-0 shadow-lg bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="bg-gradient-to-r from-emerald-600 to-green-600 bg-clip-text text-transparent">Let&apos;s Connect</CardTitle>
              <CardDescription>
                I&apos;m always interested in discussing new opportunities, collaborations, or just chatting about technology
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex justify-center gap-4">
                <Button variant="outline" size="icon" asChild>
                  <Link href="https://github.com/nilmeh">
                    <Github className="h-5 w-5" />
                  </Link>
                </Button>
                <Button variant="outline" size="icon" asChild>
                  <Link href="https://linkedin.com/in/niloymeharchandani">
                    <Linkedin className="h-5 w-5" />
                  </Link>
                </Button>
                <Button variant="outline" size="icon" asChild>
                  <Link href="mailto:niloym@ucla.edu">
                    <Mail className="h-5 w-5" />
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
