import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

interface Project {
  id: number;
  name: string;
  description: string;
  techStack: string[];
  imageUrl: string;
  liveLink?: string;
  githubLink: string;
  visibility: 'public' | 'private';
}

@Component({
  selector: 'app-projects',
  imports: [RouterLink],
  templateUrl: './projects.html',
  styleUrl: './projects.css',
})
export class Projects {
  projects: Project[] = [
    {
      id: 1,
      name: 'FreeRidgeHub E-Commerce Platform',
      description:
        'A full-stack e-commerce solution with payment integration, inventory management and real-time analytics dashboard.',
      techStack: ['Angular', 'Golang', 'MYSQL', 'Pesapal', 'JWT', 'Tailwind'],
      imageUrl: 'assets/images/projects/freeridgehub.png',
      liveLink: 'https://www.freeridgehub.co.ke',
      githubLink: 'https://github.com/Kariqs/amexan_ui',
      visibility: 'public',
    },
    {
      id: 2,
      name: 'KrackAI',
      description:
        'An electron desktop app that is an online interview assistant coach with realtime speech transcription and AI intergration.',
      techStack: [
        'Angular',
        'TypeScript',
        'NodeJS',
        'OpenAI',
        'Tailwind',
        'MongoDB',
        'WebSocketIO',
        'JWT',
        'Stripe',
      ],
      imageUrl: 'assets/images/projects/krackai.png',
      githubLink: 'https://github.com/Kariqs/saas-interview-assistance-ai',
      visibility: 'private',
    },
  ];
}
