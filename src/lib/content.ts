import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { Project, Research, Award } from './types'

const contentDirectory = path.join(process.cwd(), 'content')

export async function getProjects(): Promise<Project[]> {
  const projectsDirectory = path.join(contentDirectory, 'projects')
  
  if (!fs.existsSync(projectsDirectory)) {
    return []
  }
  
  const filenames = fs.readdirSync(projectsDirectory)
  const projects = filenames
    .filter(name => name.endsWith('.md') || name.endsWith('.mdx'))
    .map(filename => {
      const filePath = path.join(projectsDirectory, filename)
      const fileContents = fs.readFileSync(filePath, 'utf8')
      const { data, content } = matter(fileContents)
      
      return {
        slug: filename.replace(/\.mdx?$/, ''),
        description: content,
        ...data,
      } as Project
    })
    .sort((a, b) => new Date(b.startDate).getTime() - new Date(a.startDate).getTime())

  return projects
}

export async function getProject(slug: string): Promise<Project | null> {
  try {
    const filePath = path.join(contentDirectory, 'projects', `${slug}.md`)
    let fileContents: string
    
    try {
      fileContents = fs.readFileSync(filePath, 'utf8')
    } catch {
      // Try .mdx extension
      const mdxPath = path.join(contentDirectory, 'projects', `${slug}.mdx`)
      fileContents = fs.readFileSync(mdxPath, 'utf8')
    }
    
    const { data, content } = matter(fileContents)
    
    return {
      slug,
      description: content,
      ...data,
    } as Project
  } catch {
    return null
  }
}

export async function getResearch(): Promise<Research[]> {
  const researchDirectory = path.join(contentDirectory, 'research')
  
  if (!fs.existsSync(researchDirectory)) {
    return []
  }
  
  const filenames = fs.readdirSync(researchDirectory)
  const research = filenames
    .filter(name => name.endsWith('.md') || name.endsWith('.mdx'))
    .map(filename => {
      const filePath = path.join(researchDirectory, filename)
      const fileContents = fs.readFileSync(filePath, 'utf8')
      const { data, content } = matter(fileContents)
      
      return {
        slug: filename.replace(/\.mdx?$/, ''),
        abstract: content,
        ...data,
      } as Research
    })
    .sort((a, b) => b.year - a.year)

  return research
}

export async function getAwards(): Promise<Award[]> {
  const awardsDirectory = path.join(contentDirectory, 'awards')
  
  if (!fs.existsSync(awardsDirectory)) {
    return []
  }
  
  const filenames = fs.readdirSync(awardsDirectory)
  const awards = filenames
    .filter(name => name.endsWith('.md') || name.endsWith('.mdx'))
    .map(filename => {
      const filePath = path.join(awardsDirectory, filename)
      const fileContents = fs.readFileSync(filePath, 'utf8')
      const { data, content } = matter(fileContents)
      
      return {
        slug: filename.replace(/\.mdx?$/, ''),
        description: content,
        ...data,
      } as Award
    })
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())

  return awards
}
