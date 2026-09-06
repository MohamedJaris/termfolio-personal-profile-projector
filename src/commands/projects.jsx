import React from 'react';

export default function projects(args, profile) {
  return (
    <div className="command-output">
      <pre style={{ color: '#33ff33' }}>{`
  ╔══════════════════════════════════════════╗
  ║          Featured Projects              ║
  ╚══════════════════════════════════════════╝`}</pre>
      {profile.projects.map((proj, i) => (
        <div key={i} style={{ marginBottom: '20px' }}>
          <p>
            <span style={{ color: '#ffcc00', fontWeight: 'bold' }}>📁 {proj.title}</span>
            <span style={{ color: '#666' }}> [{proj.stack.join(', ')}]</span>
          </p>
          {proj.description.map((point, j) => (
            <p key={j} style={{ color: '#aaa' }}>   • {point}</p>
          ))}
          <p style={{ marginTop: '4px' }}>
            <a href={proj.live} target="_blank" rel="noopener noreferrer" style={{ color: '#00bcd4', marginRight: '16px' }}>
              🔗 Live Demo
            </a>
            <a href={proj.repo} target="_blank" rel="noopener noreferrer" style={{ color: '#00bcd4' }}>
              📂 Source Code
            </a>
          </p>
        </div>
      ))}
    </div>
  );
}
