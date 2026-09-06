import React from 'react';
import AsciiImage from '../components/AsciiImage';

export function ls() {
  const sections = [
    'about', 'education', 'experience', 'projects',
    'skills', 'achievements', 'contact', 'hire'
  ];
  return (
    <div className="command-output">
      {sections.map((s) => (
        <span key={s} style={{ color: '#33ff33', marginRight: '16px' }}>{s}</span>
      ))}
    </div>
  );
}

export function pwd() {
  return '~/visitor/portfolio';
}

export function date() {
  return new Date().toString();
}

export function achievements(args, profile) {
  return (
    <div className="command-output">
      <pre style={{ color: '#33ff33' }}>{`
  ╔══════════════════════════════════════════╗
  ║          Achievements                   ║
  ╚══════════════════════════════════════════╝`}</pre>
      {profile.achievements.map((a, i) => (
        <div key={i} style={{ marginBottom: '8px' }}>
          <p><span style={{ color: '#ffcc00' }}>🏆 {a.title}</span></p>
          <p style={{ color: '#aaa' }}>   {a.description}</p>
        </div>
      ))}
    </div>
  );
}

export function neofetch(args, profile) {
  return (
    <div className="command-output">
      <pre style={{ color: '#33ff33' }}>{`
        .--.          `}<span style={{ color: '#00bcd4' }}>{profile.name}@portfolio</span>{`
       |o_o |         `}<span style={{ color: '#888' }}>─────────────────────</span>{`
       |:_/ |         `}<span style={{ color: '#ffcc00' }}>OS:</span>{` TermFolio Windows 11
      //   \\ \\        `}<span style={{ color: '#ffcc00' }}>Host:</span>{` React v18
     (|     | )       `}<span style={{ color: '#ffcc00' }}>Kernel:</span>{` Vite 6.x
    /'\\_   _/\`\\       `}<span style={{ color: '#ffcc00' }}>Shell:</span>{` portfolio-bash 1.0
    \\___)=(___/       `}<span style={{ color: '#ffcc00' }}>Resolution:</span>{` Responsive
                      `}<span style={{ color: '#ffcc00' }}>Theme:</span>{` Kitty Dark [GTK3]
                      `}<span style={{ color: '#ffcc00' }}>Terminal:</span>{` TermFolio
                      `}<span style={{ color: '#ffcc00' }}>CPU:</span>{` JavaScript V8 Engine
                      `}<span style={{ color: '#ffcc00' }}>Memory:</span>{` Unlimited Stack`}</pre>
    </div>
  );
}

export function banner() {
  return (
    <div className="command-output banner">
      {/* Colored ASCII art avatar */}
      <div style={{ display: 'flex', justifyContent: 'flex-start', marginBottom: '12px', marginTop: '8px' }}>
        <AsciiImage src="/avatar.png" cols={72} rows={36} />
      </div>
      {/* ASCII banner */}
      <pre style={{ color: '#33ff33' }}>{`
 ████████╗███████╗██████╗ ███╗   ███╗███████╗ ██████╗ ██╗     ██╗ ██████╗ 
 ╚══██╔══╝██╔════╝██╔══██╗████╗ ████║██╔════╝██╔═══██╗██║     ██║██╔═══██╗
    ██║   █████╗  ██████╔╝██╔████╔██║█████╗  ██║   ██║██║     ██║██║   ██║
    ██║   ██╔══╝  ██╔══██╗██║╚██╔╝██║██╔══╝  ██║   ██║██║     ██║██║   ██║
    ██║   ███████╗██║  ██║██║ ╚═╝ ██║██║     ╚██████╔╝███████╗██║╚██████╔╝
    ╚═╝   ╚══════╝╚═╝  ╚═╝╚═╝     ╚═╝╚═╝      ╚═════╝ ╚══════╝╚═╝ ╚═════╝ `}</pre>
      <p style={{ color: '#aaa', marginTop: '8px' }}>Welcome to my interactive terminal portfolio!</p>
      <p style={{ color: '#666' }}>Type <span style={{ color: '#33ff33' }}>help</span> to see available commands.</p>
    </div>
  );
}

// Easter eggs
export function sudo() {
  return (
    <p style={{ color: '#ff6b6b' }}>
      ⚠️ Permission denied: nice try though 😏 — you're not root here.
    </p>
  );
}

export function rmrf() {
  return (
    <div className="command-output">
      <p style={{ color: '#ff6b6b' }}>rm: cannot remove '/': Operation not permitted</p>
      <p style={{ color: '#ff6b6b' }}>Just kidding... 💥 Destroying the universe...</p>
      <p style={{ color: '#ffcc00' }}>...</p>
      <p style={{ color: '#33ff33' }}>Just kidding! The portfolio is still here. 😄</p>
    </div>
  );
}

export function coffee() {
  return (
    <div className="command-output">
      <pre style={{ color: '#c8a26b' }}>{`
        ( (
         ) )
      ........
      |      |]
      \\      /
       \`----'
      `}</pre>
      <p style={{ color: '#aaa' }}>Here's your coffee ☕ — fuel for late-night coding!</p>
    </div>
  );
}

export function hire(args, profile) {
  return (
    <div className="command-output">
      <p style={{ color: '#33ff33', fontSize: '16px' }}>🚀 Great decision!</p>
      <p style={{ color: '#aaa' }}>
        I'm actively looking for new opportunities. Let's connect!
      </p>
      <p style={{ marginTop: '8px' }}>
        <span style={{ color: '#ffcc00' }}>📧 </span>
        <a href={`mailto:${profile.contact.email}`} target="_blank" rel="noopener noreferrer" style={{ color: '#00bcd4' }}>
          {profile.contact.email}
        </a>
      </p>
      <p>
        <span style={{ color: '#ffcc00' }}>💼 </span>
        <a href={profile.contact.linkedin} target="_blank" rel="noopener noreferrer" style={{ color: '#00bcd4' }}>
          LinkedIn Profile
        </a>
      </p>
    </div>
  );
}
