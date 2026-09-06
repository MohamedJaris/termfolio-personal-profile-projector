import React from 'react';

export default function contact(args, profile) {
  return (
    <div className="command-output">
      <pre style={{ color: '#33ff33' }}>{`
  ╔══════════════════════════════════════════╗
  ║            Contact Me                   ║
  ╚══════════════════════════════════════════╝`}</pre>
      <p>
        <span>Phone : </span>
        8438304400
      </p>
      <p>
        <span>Email : </span>
        jarismohamed41@gmail.com
      </p>
      <p>
        <span>GitHub : </span>
        <a href={profile.contact.github} target="_blank" rel="noopener noreferrer" style={{ color: '#00bcd4' }}>
          {profile.contact.github}
        </a>
      </p>
      <p>
        <span>LinkedIn : </span>
        <a href={profile.contact.linkedin} target="_blank" rel="noopener noreferrer" style={{ color: '#00bcd4' }}>
          {profile.contact.linkedin}
        </a>
      </p>
      <p>
        Feel free to contact me to discuss about technology, innovation 
        and entrepreneurial ventures! I am all ears to share your throghts and ideas!! 
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
