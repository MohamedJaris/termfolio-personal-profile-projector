import React from 'react';

export default function TerminalLine({ input, output }) {
  return (
    <div className="terminal-line">
      <div className="terminal-prompt-line">
        <span className="prompt-user">visitor</span>
        <span className="prompt-at">@</span>
        <span className="prompt-host">portfolio</span>
        <span className="prompt-colon">:</span>
        <span className="prompt-path">Mohamed Jaris</span>
        <span className="prompt-dollar">$ </span>
        <span className="prompt-input">{input}</span>
      </div>
      {output !== null && output !== undefined && (
        <div className="terminal-output">
          {typeof output === 'string' ? <pre>{output}</pre> : output}
        </div>
      )}
    </div>
  );
}
