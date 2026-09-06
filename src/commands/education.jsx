import React from 'react';

export default function education(args, profile) {
  return (
    <div className="command-output">
      <pre style={{ color: '#33ff33' }}>{`
  ╔══════════════════════════════════════════╗
  ║             Education                   ║
  ╚══════════════════════════════════════════╝`}</pre>
      {profile.education.map((edu, i) => (
        <div key={i} style={{ marginBottom: '12px' }}>
          <p><span style={{ color: '#00bcd4' }}>🎓 {edu.degree}</span></p>
          <p style={{ color: '#aaa' }}>   {edu.institution}</p>
          <p style={{ color: '#888' }}>   {edu.year} | GPA: {edu.gpa}</p>
        </div>
      ))}
    </div>
  );
}
