import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

interface NavItem {
  id: string;
  title: string;
  description?: string;
  isExternal?: boolean;
  url?: string;
}

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  activeSection: string | null = null;

  navItems: NavItem[] = [
    {
      id: 'about',
      title: 'About Me',
      description: `
      Software Engineer specializing in Angular, TypeScript, Golang and modern web technologies.
Passionate about clean code, performance and beautiful user experiences.
Based in Kenya.
      `,
    },
    {
      id: 'works',
      title: 'Works',
      isExternal: true,
      url: '/works',
    },
    {
      id: 'resume',
      title: 'Resume',
      isExternal: true,
      url: '/assets/documents/Resume.pdf',
    },
    {
      id: 'skills',
      title: 'Skills',
      description:
        'Proficient in full-stack development with expertise in front-end technologies like Angular, React, and Vue.js, as well as back-end frameworks including Node.js, .NET, and Django. Experienced in database management, cloud services, and modern DevOps practices.',
    },
    {
      id: 'contacts',
      title: 'Contacts',
      description:
        "Get in touch for collaborations, commissions, or inquiries. I'm always excited to connect with fellow creatives and art enthusiasts.",
    },
  ];

  toggleSection(section: string) {
    this.activeSection = this.activeSection === section ? null : section;
  }
}
