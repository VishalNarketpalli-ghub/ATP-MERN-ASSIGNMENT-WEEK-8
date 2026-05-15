import { spawn } from 'node:child_process';

const commands = [
    {
        name: 'Backend',
        command: 'npm',
        args: ['run', 'dev', '--prefix', 'Backend'],
    },
    {
        name: 'Frontend',
        command: 'npm',
        args: ['run', 'dev', '--prefix', 'Frontend'],
    },
];

const children = [];
let shuttingDown = false;

const stopChildren = (code = 0) => {
    if (shuttingDown) {
        return;
    }

    shuttingDown = true;

    for (const child of children) {
        if (!child.killed) {
            child.kill();
        }
    }

    process.exit(code);
};

for (const { name, command, args } of commands) {
    const child = spawn(command, args, {
        stdio: 'inherit',
        shell: process.platform === 'win32',
    });

    child.on('exit', (code) => {
        if (code && code !== 0) {
            console.error(`${name} exited with code ${code}`);
            stopChildren(code);
            return;
        }

        if (!shuttingDown) {
            stopChildren(0);
        }
    });

    child.on('error', (error) => {
        console.error(`${name} failed to start:`, error);
        stopChildren(1);
    });

    children.push(child);
}

process.on('SIGINT', () => stopChildren(0));
process.on('SIGTERM', () => stopChildren(0));