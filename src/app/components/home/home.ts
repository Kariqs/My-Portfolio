import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';

interface NavItem {
  id: string;
  title: string;
  description?: string;
  isExternal?: boolean;
  url?: string;
  isRoute?: boolean;
  isUrl?: boolean;
}

@Component({
  selector: 'app-home',
  imports: [RouterLink],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  activeSection: string | null = null;
  year = new Date().getFullYear();

  navItems: NavItem[] = [
    {
      id: 'about',
      title: 'About Me',
      description: `
      I'm Benard Kariuki, a Software Engineer specializing in Angular, TypeScript, Golang and modern web technologies.
Passionate about clean code, performance and beautiful user experiences.
Based in Kenya.
      `,
    },
    {
      id: 'projects',
      title: 'Projects',
      isExternal: true,
      isRoute: true,
      url: '/projects',
    },
    {
      id: 'resume',
      title: 'Resume',
      isExternal: true,
      isUrl: true,
      url: '/assets/documents/Resume.pdf',
    },
    {
      id: 'skills',
      title: 'Skills',
      description:
        'Proficient in full-stack development with expertise in front-end technologies like Angular and Vue.js, as well as back-end frameworks including Typescript (NodeJS) and Golang (Gin and Fiber). Experienced in system design, database management, cloud services and modern DevOps practices.',
    },
    {
      id: 'contacts',
      title: 'Contacts',
      description: 'For any inquiry shoot an email at: kariukibenard189@gmail.com',
    },
  ];

  toggleSection(section: string) {
    this.activeSection = this.activeSection === section ? null : section;
  }
}
