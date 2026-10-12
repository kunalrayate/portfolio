import { Component, effect, signal, OnInit, OnDestroy } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { PROFILE, SKILLS, EXPERIENCE, PROJECTS, EDUCATION, CERTIFICATIONS } from './data';

@Component({ selector: 'app-root', imports: [FormsModule], templateUrl: './app.html' })
export class App implements OnInit, OnDestroy {
  profile = PROFILE; skills = SKILLS; experience = EXPERIENCE;
  projects = PROJECTS; education = EDUCATION; certs = CERTIFICATIONS;
  year = new Date().getFullYear();
  nav = ['about', 'skills', 'experience', 'projects', 'education', 'certifications', 'contact'];
  active = signal('');
  menuOpen = signal(false);
  theme = signal<'light' | 'dark'>(this.initialTheme());
  form = { name: '', email: '', message: '' };
  note = signal('Sending opens your email app with the message filled in.');
  private io?: IntersectionObserver;

  constructor() {
    effect(() => {
      document.documentElement.dataset['theme'] = this.theme();
      try { localStorage.setItem('theme', this.theme()); } catch { /* storage blocked */ }
    });
  }

  ngOnInit() {
    this.io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && this.active.set(e.target.id)),
      { rootMargin: '-45% 0px -50% 0px' }
    );
    setTimeout(() => this.nav.forEach((id) => { const el = document.getElementById(id); if (el) this.io!.observe(el); }));
  }
  ngOnDestroy() { this.io?.disconnect(); }

  toggleTheme() { this.theme.update((t) => (t === 'dark' ? 'light' : 'dark')); }

  send() {
    const { name, email, message } = this.form;
    const subject = encodeURIComponent('Portfolio message from ' + name);
    const body = encodeURIComponent(`${message}\n\n— ${name} (${email})`);
    window.location.href = `mailto:${this.profile.email}?subject=${subject}&body=${body}`;
    this.note.set(`Your email app should open. If it does not, write to ${this.profile.email} directly.`);
  }

  private initialTheme(): 'light' | 'dark' {
    try { const s = localStorage.getItem('theme'); if (s === 'light' || s === 'dark') return s; } catch { /* ignore */ }
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  }
}
