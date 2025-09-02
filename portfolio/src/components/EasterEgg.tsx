'use client';

import { useEffect } from 'react';

export default function EasterEgg() {
  useEffect(() => {
    // ASCII Art pour la console
    const asciiArt = `
    ╔══════════════════════════════════════════════════════════════╗
    ║                                                              ║
    ║     ██████╗ ███████╗██╗   ██╗    ██████╗ ██╗   ██╗██╗       ███████╗███████╗
    ║     ██╔══██╗██╔════╝██║   ██║    ██╔══██╗██║   ██║██║       ██╔════╝██╔════╝
    ║     ██║  ██║█████╗  ██║   ██║    ██████╔╝██║   ██║██║       █████╗  ███████╗
    ║     ██║  ██║██╔══╝  ╚██╗ ██╔╝    ██╔══██╗██║   ██║██║       ██╔══╝  ╚════██║
    ║     ██████╔╝███████╗ ╚████╔╝     ██║  ██║╚██████╔╝███████╗  ███████╗███████║
    ║     ╚═════╝ ╚══════╝  ╚═══╝      ╚═╝  ╚═╝ ╚═════╝ ╚══════╝  ╚══════╝╚══════╝
    ║                                                              ║
    ║        ████████╗██╗  ██╗███████╗    ██╗    ██╗ ██████╗ ██████╗ ██╗     ██████╗ 
    ║        ╚══██╔══╝██║  ██║██╔════╝    ██║    ██║██╔═══██╗██╔══██╗██║     ██╔══██╗
    ║           ██║   ███████║█████╗      ██║ █╗ ██║██║   ██║██████╔╝██║     ██║  ██║
    ║           ██║   ██╔══██║██╔══╝      ██║███╗██║██║   ██║██╔══██╗██║     ██║  ██║
    ║           ██║   ██║  ██║███████╗    ╚███╔███╔╝╚██████╔╝██║  ██║███████╗██████╔╝
    ║           ╚═╝   ╚═╝  ╚═╝╚══════╝     ╚══╝╚══╝  ╚═════╝ ╚═╝  ╚═╝╚══════╝╚═════╝ 
    ║                                                              ║
    ╚══════════════════════════════════════════════════════════════╝
    `;

    const messages = [
      'Welcome to the Matrix, fellow developer! 🕶️',
      '',
      'You found the secret developer zone! 🎉',
      'This portfolio was crafted with:',
      '  • Next.js 15 ⚡',
      '  • TypeScript 💪',
      '  • Tailwind CSS 🎨',
      '  • Countless cups of coffee ☕',
      '  • And a lot of passion! ❤️',
      '',
      '🔥 Easter Egg Commands:',
      '  • Type: showSkills() - Display hidden skills',
      '  • Type: getMotivation() - Get developer motivation',
      '  • Type: deployCode() - Launch deploy sequence',
      '',
      'Made with ❤️ by Fabien Giraudier',
      'Contact: info@fabiengiraudier.com',
      '',
      '---',
      '🚀 Keep coding, keep creating! 🚀'
    ];

    // Styles pour la console
    const styles = {
      title: 'color: #00ff41; font-size: 16px; font-weight: bold; font-family: monospace;',
      subtitle: 'color: #ff6b35; font-size: 14px; font-weight: bold;',
      text: 'color: #ffffff; font-size: 12px;',
      highlight: 'color: #ffd700; font-size: 12px; font-weight: bold;',
      command: 'color: #00bfff; font-size: 12px; font-family: monospace;',
    };

    // Affichage séquentiel des messages
    console.clear();
    console.log('%c' + asciiArt, styles.title);
    
    messages.forEach((message, index) => {
      setTimeout(() => {
        if (message.includes('🔥')) {
          console.log('%c' + message, styles.subtitle);
        } else if (message.includes('Type:')) {
          console.log('%c' + message, styles.command);
        } else if (message.includes('❤️') || message.includes('🚀')) {
          console.log('%c' + message, styles.highlight);
        } else {
          console.log('%c' + message, styles.text);
        }
      }, index * 200);
    });

    // Easter egg functions globales
    setTimeout(() => {
      (window as any).showSkills = () => {
        const skills = [
          '🔥 Technical Skills:',
          '  → React/Next.js Expert',
          '  → TypeScript Ninja',
          '  → Node.js Backend Master',
          '  → Database Wizard (MongoDB, PostgreSQL)',
          '  → Docker & DevOps Enthusiast',
          '  → UI/UX Design Lover',
          '',
          '🎯 Soft Skills:',
          '  → Problem Solving Champion',
          '  → Coffee-to-Code Converter',
          '  → Bug Hunter Extraordinaire',
          '  → Feature Factory',
          '  → Deadline Destroyer (in a good way!)'
        ];
        
        skills.forEach(skill => {
          console.log('%c' + skill, 'color: #00ff41; font-size: 12px;');
        });
      };

      (window as any).getMotivation = () => {
        const motivations = [
          '"Code is poetry written in logic." 💭',
          '"Every bug is just an undocumented feature." 🐛',
          '"The best error message is the one that never shows up." ✨',
          '"Programming is the art of telling another human what you want the computer to do." 🎨',
          '"There are only two hard things in Computer Science: cache invalidation and naming things." 😅'
        ];
        
        const randomMotivation = motivations[Math.floor(Math.random() * motivations.length)];
        console.log('%c' + randomMotivation, 'color: #ffd700; font-size: 14px; font-style: italic;');
      };

      (window as any).deployCode = () => {
        const deploySteps = [
          '🚀 Initiating deployment sequence...',
          '📦 Building production bundle...',
          '🔍 Running tests...',
          '✅ Tests passed!',
          '🌐 Deploying to production...',
          '✨ Deployment successful!',
          '🎉 Your code is now live and ruling the world!'
        ];
        
        deploySteps.forEach((step, index) => {
          setTimeout(() => {
            console.log('%c' + step, 'color: #00bfff; font-size: 12px;');
          }, index * 800);
        });
      };
    }, 4000);

  }, []);

  return null;
}
