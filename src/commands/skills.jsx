import React from 'react';

export default function skills(args, profile) {
  const { skills } = profile;
  const categories = [
    { label: 'Languages', items: skills.languages, color: '#ff6b6b' },
    { label: 'Frameworks', items: skills.frameworks, color: '#4ecdc4' },
    { label: 'Databases', items: skills.databases, color: '#ffe66d' },
    { label: 'Tools', items: skills.tools, color: '#a29bfe' },
  ];

  return (
    <div className="command-output">
      <pre style={{ color: '#33ff33' }}>{`
  ╔══════════════════════════════════════════╗
  ║          Technical Skills               ║
  ╚══════════════════════════════════════════╝`}</pre>
      {categories.map(({ label, items, color }) => (
        <div key={label} style={{ marginBottom: '12px' }}>
          <p style={{ color }}>{label}:</p>
          <p style={{ color: '#aaa' }}>
            {items.map((item, i) => (
              <span key={i}>
                <span style={{
                  color: '#e0e0e0',
                  background: '#2a2a2a',
                  padding: '2px 8px',
                  borderRadius: '4px',
                  marginRight: '8px',
                  display: 'inline-block',
                  marginBottom: '4px',
                }}>
                  {item}
                </span>
              </span>
            ))}
          </p>
        </div>
      ))}
    </div>
  );
}
