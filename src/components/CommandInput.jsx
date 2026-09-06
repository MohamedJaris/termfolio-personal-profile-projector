import React, { useState, useRef, useEffect, forwardRef, useImperativeHandle } from 'react';
import { getCommandNames } from '../commands';

const CommandInput = forwardRef(({ onExecute, commandHistory }, ref) => {
  const [input, setInput] = useState('');
  const [historyIndex, setHistoryIndex] = useState(-1);
  const inputRef = useRef(null);

  useImperativeHandle(ref, () => ({
    focus: () => inputRef.current?.focus(),
  }));

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      if (input.trim()) {
        onExecute(input);
        setInput('');
        setHistoryIndex(-1);
      }
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (commandHistory.length > 0) {
        const newIndex = historyIndex < commandHistory.length - 1
          ? historyIndex + 1
          : historyIndex;
        setHistoryIndex(newIndex);
        setInput(commandHistory[commandHistory.length - 1 - newIndex] || '');
      }
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (historyIndex > 0) {
        const newIndex = historyIndex - 1;
        setHistoryIndex(newIndex);
        setInput(commandHistory[commandHistory.length - 1 - newIndex] || '');
      } else if (historyIndex === 0) {
        setHistoryIndex(-1);
        setInput('');
      }
    } else if (e.key === 'Tab') {
      e.preventDefault();
      const commands = getCommandNames();
      const match = commands.filter((c) => c.startsWith(input.toLowerCase()));
      if (match.length === 1) {
        setInput(match[0]);
      } else if (match.length > 1) {
        // Find common prefix
        let prefix = match[0];
        for (let i = 1; i < match.length; i++) {
          while (!match[i].startsWith(prefix)) {
            prefix = prefix.slice(0, -1);
          }
        }
        if (prefix.length > input.length) {
          setInput(prefix);
        }
      }
    }
  };

  return (
    <div className="command-input-line">
      <span className="prompt-user">visitor</span>
      <span className="prompt-at">@</span>
      <span className="prompt-host">portfolio</span>
      <span className="prompt-colon">:</span>
      <span className="prompt-path">~</span>
      <span className="prompt-dollar">$ </span>
      <input
        ref={inputRef}
        type="text"
        className="command-input"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={handleKeyDown}
        autoFocus
        spellCheck={false}
        autoComplete="off"
        autoCapitalize="off"
      />
    </div>
  );
});

CommandInput.displayName = 'CommandInput';
export default CommandInput;
