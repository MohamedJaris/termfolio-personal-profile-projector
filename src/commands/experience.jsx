import React from 'react';

export default function experience(args, profile) {
  return (
    <div className="command-output">
      <pre style={{ color: '#33ff33' }}>{`
  ╔══════════════════════════════════════════╗
  ║           Work Experience               ║
  ╚══════════════════════════════════════════╝`}</pre>
      {profile.experience.map((exp, i) => (
        <div key={i} style={{ marginBottom: '16px' }}>
          <p>
            <span style={{ color: '#ffcc00' }}>{exp.role}</span>
            <span style={{ color: '#888' }}> @ </span>
            <span style={{ color: '#00bcd4' }}>{exp.company}</span>
          </p>
          <p style={{ color: '#666' }}>  {exp.period}</p>
          {exp.description.map((point, j) => (
            <p key={j} style={{ color: '#aaa' }}>  • {point}</p>
          ))}
        </div>
      ))}
    </div>
  );
}
