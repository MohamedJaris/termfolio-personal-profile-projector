import React from 'react';

export default function about(args, profile) {
  return (
    <div className="command-output">
      <pre style={{ color: '#33ff33' }}>{`
  ╔══════════════════════════════════════════╗
  ║             About Me                    ║
  ╚══════════════════════════════════════════╝`}</pre>
      <p><span style={{ color: '#ffcc00' }}>Name:</span>     {profile.name}</p>
      <p><span style={{ color: '#ffcc00' }}>Role:</span>     {profile.role}</p>
      <p><span style={{ color: '#ffcc00' }}>Location:</span> {profile.location}</p>
      <br />
      <p style={{ color: '#ccc', maxWidth: '600px', lineHeight: '1.5' }}>{profile.bio}</p>
    </div>
  );
}

export function whoami() {
  return 'Mohamed Jaris';
}
