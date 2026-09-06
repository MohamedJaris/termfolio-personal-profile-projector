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
          <p><span style={{ color: '#00bcd4' }}> {edu.institution}</span></p>
          <p style={{ color: '#aaa' }}> Degree :  {edu.degree}</p>
          <p style={{ color: '#aaa' }}>  Duration :  {edu.year}</p>
          <p style={{ color: '#aaa' }}> GPA: {edu.gpa}</p>
          <p>Currently in my Final Year 7th Semester,
            Not available in the College at the moment.
            Working as SDE-I intern @NCR VOYIX.
          </p>
        </div>
      ))}
    </div>
  );
}
