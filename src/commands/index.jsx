import help from './help';
import about, { whoami } from './about';
import education from './education';
import experience from './experience';
import projects from './projects';
import skills from './skills';
import contact, { resume, github, linkedin, mail } from './contact';
import {
  ls, pwd, date, achievements, neofetch, banner,
  sudo, rmrf, coffee, hire,
} from './system';

const COMMANDS = {
  help:         { handler: help,         desc: 'Show available commands' },
  about:        { handler: about,        desc: 'Who am I?' },
  whoami:       { handler: whoami,       desc: 'Display current user' },
  education:    { handler: education,    desc: 'My education background' },
  experience:   { handler: experience,   desc: 'My work experience' },
  projects:     { handler: projects,     desc: 'My featured projects' },
  skills:       { handler: skills,       desc: 'My technical skills' },
  achievements: { handler: achievements, desc: 'Awards and recognitions' },
  contact:      { handler: contact,      desc: 'How to reach me' },
  resume:       { handler: resume,       desc: 'Open my resume' },
  github:       { handler: github,       desc: 'Open my GitHub profile' },
  linkedin:     { handler: linkedin,     desc: 'Open my LinkedIn profile' },
  mail:         { handler: mail,         desc: 'Send me an email' },
  ls:           { handler: ls,           desc: 'List available sections' },
  pwd:          { handler: pwd,          desc: 'Print working directory' },
  date:         { handler: date,         desc: 'Show current date and time' },
  neofetch:     { handler: neofetch,     desc: 'System information' },
  banner:       { handler: banner,       desc: 'Display the welcome banner' },
  clear:        { handler: null,         desc: 'Clear the terminal' },
  // Easter eggs
  sudo:         { handler: sudo,         hidden: true },
  coffee:       { handler: coffee,       hidden: true },
  hire:         { handler: hire,         hidden: true },
};

export function getCommandNames() {
  return Object.keys(COMMANDS).sort();
}

export function executeCommand(input, profile) {
  const trimmed = input.trim();
  if (!trimmed) return null;

  // Special handling for 'rm -rf /'
  if (trimmed === 'rm -rf /' || trimmed === 'rm -rf /*') {
    return rmrf();
  }

  // Special handling for sudo commands
  if (trimmed.startsWith('sudo ')) {
    return sudo();
  }

  const parts = trimmed.split(/\s+/);
  const cmd = parts[0].toLowerCase();
  const args = parts.slice(1);

  if (cmd === 'clear') {
    return '__CLEAR__';
  }

  const command = COMMANDS[cmd];
  if (!command) {
    return (
      <span style={{ color: '#ff6b6b' }}>
        Command not found: {cmd}. Type <span style={{ color: '#33ff33' }}>help</span> for available commands.
      </span>
    );
  }

  return command.handler(args, profile);
}

export { COMMANDS };
