import React from 'react';

export default function contact(args, profile) {
  return (
    <div className="command-output">
      <pre style={{ color: '#33ff33' }}>{`
  ╔══════════════════════════════════════════╗
  ║            Contact Me                   ║
  ╚══════════════════════════════════════════╝`}</pre>
      <p>
        <span style={{ color: '#ffcc00' }}>📧 Email:    </span>
        <a href={`mailto:${profile.contact.email}`} target="_blank" rel="noopener noreferrer" style={{ color: '#00bcd4' }}>
          {profile.contact.email}
        </a>
      </p>
      <p>
        <span style={{ color: '#ffcc00' }}>🐙 GitHub:   </span>
        <a href={profile.contact.github} target="_blank" rel="noopener noreferrer" style={{ color: '#00bcd4' }}>
          {profile.contact.github}
        </a>
      </p>
      <p>
        <span style={{ color: '#ffcc00' }}>💼 LinkedIn: </span>
        <a href={profile.contact.linkedin} target="_blank" rel="noopener noreferrer" style={{ color: '#00bcd4' }}>
          {profile.contact.linkedin}
        </a>
      </p>
      <p>
        <span style={{ color: '#ffcc00' }}>📄 Resume:   </span>
        <a href={profile.contact.resume} target="_blank" rel="noopener noreferrer" style={{ color: '#00bcd4' }}>
          {profile.contact.resume}
        </a>
      </p>
    </div>
  );
}

export function resume(args, profile) {
  window.open(profile.contact.resume, '_blank', 'noopener,noreferrer');
  return 'Opening resume...';
}

export function github(args, profile) {
  window.open(profile.contact.github, '_blank', 'noopener,noreferrer');
  return 'Opening GitHub...';
}

export function linkedin(args, profile) {
  window.open(profile.contact.linkedin, '_blank', 'noopener,noreferrer');
  return 'Opening LinkedIn...';
}

export function mail(args, profile) {
  window.open(`mailto:${profile.contact.email}`, '_blank', 'noopener,noreferrer');
  return 'Opening mail client...';
}
