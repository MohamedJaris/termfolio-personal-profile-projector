import React from 'react';

const commandList = [
  { cmd: 'about', desc: 'Who am I?' },
  { cmd: 'education', desc: 'My education background' },
  { cmd: 'experience', desc: 'My work experience' },
  { cmd: 'projects', desc: 'My featured projects' },
  { cmd: 'skills', desc: 'My technical skills' },
  { cmd: 'achievements', desc: 'Awards and recognitions' },
  { cmd: 'contact', desc: 'How to reach me' },
  { cmd: 'resume', desc: 'Open my resume' },
  { cmd: 'github', desc: 'Open my GitHub profile' },
  { cmd: 'linkedin', desc: 'Open my LinkedIn profile' },
  { cmd: 'mail', desc: 'Send me an email' },
  { cmd: 'whoami', desc: 'Display current user' },
  { cmd: 'pwd', desc: 'Print working directory' },
  { cmd: 'ls', desc: 'List available sections' },
  { cmd: 'date', desc: 'Show current date and time' },
  { cmd: 'neofetch', desc: 'System information' },
  { cmd: 'banner', desc: 'Display the welcome banner' },
  { cmd: 'clear', desc: 'Clear the terminal' },
  { cmd: 'help', desc: 'Show this help message' },
];

export default function help() {
  return (
    <div className="command-output">
      <p style={{ color: '#ffcc00', marginBottom: '8px' }}>Available Commands:</p>
      <table style={{ borderCollapse: 'collapse' }}>
        <tbody>
          {commandList.map(({ cmd, desc }) => (
            <tr key={cmd}>
              <td style={{ color: '#33ff33', paddingRight: '24px', whiteSpace: 'nowrap' }}>{cmd}</td>
              <td style={{ color: '#aaa' }}>{desc}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <p style={{ color: '#666', marginTop: '12px' }}>Tip: Use \u2191\u2193 to navigate history, Tab to auto-complete</p>
    </div>
  );
}
