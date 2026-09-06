import React, { useState, useRef, useEffect, useCallback } from 'react';
import TerminalLine from './TerminalLine';
import CommandInput from './CommandInput';
import { executeCommand } from '../commands';
import { banner } from '../commands/system';
import profile from '../data/profile';

export default function Terminal() {
  const [lines, setLines] = useState([]);
  const [commandHistory, setCommandHistory] = useState([]);
  const terminalBodyRef = useRef(null);
  const inputRef = useRef(null);

  // Show banner on mount
  useEffect(() => {
    const bannerOutput = banner();
    setLines([{ input: null, output: bannerOutput }]);
  }, []);

  // Auto-scroll to bottom
  useEffect(() => {
    if (terminalBodyRef.current) {
      terminalBodyRef.current.scrollTop = terminalBodyRef.current.scrollHeight;
    }
  }, [lines]);

  const handleExecute = useCallback((input) => {
    const result = executeCommand(input, profile);

    if (result === '__CLEAR__') {
      setLines([]);
      setCommandHistory((prev) => [...prev, input]);
      return;
    }

    setLines((prev) => [...prev, { input, output: result }]);
    setCommandHistory((prev) => [...prev, input]);
  }, []);

  const handleTerminalClick = useCallback(() => {
    inputRef.current?.focus();
  }, []);

  return (
    <div className="terminal-window">
      {/* Title bar */}
      <div className="terminal-titlebar">
        <div className="titlebar-buttons">
          <span className="btn-close" />
          <span className="btn-minimize" />
          <span className="btn-maximize" />
        </div>
        <span className="titlebar-text">visitor@portfolio : Mohamed Jaris</span>
        <div className="titlebar-spacer" />
      </div>

      {/* Terminal body */}
      <div
        className="terminal-body"
        ref={terminalBodyRef}
        onClick={handleTerminalClick}
      >
        {lines.map((line, i) => (
          line.input === null ? (
            // Banner or system output (no prompt prefix)
            <div key={i} className="terminal-output">{line.output}</div>
          ) : (
            <TerminalLine key={i} input={line.input} output={line.output} />
          )
        ))}
        <CommandInput
          ref={inputRef}
          onExecute={handleExecute}
          commandHistory={commandHistory}
        />
      </div>
    </div>
  );
}
