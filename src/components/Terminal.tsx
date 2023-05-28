import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import me from '../../src/assets/me.jpg';

const Terminal: React.FC = () => {
    const goToDistributive = () => {
        window.open('/distributive', '_blank');
        // navigate('/distributive');
    };

    const goToNCR = () => {
        window.open('/ncr', '_blank');
    };

    const goToTulip = () => {
        window.open('/tulip', '_blank');
    };

    const [input, setInput] = useState('');
    const [output, setOutput] = useState<string[]>([]);
    const [showPortrait, setShowPortrait] = useState(false);
    const [currentDirectory, setCurrentDirectory] = useState('/Users/maneesh');

    const terminalRef = useRef<HTMLDivElement>(null);

    const validDirectories = [
        '/Users/maneesh/Pictures',
        '/Users/maneesh/Documents',
        '/Users/maneesh/Documents/work_experience',
        '/Users/maneesh',
        '/Pictures',
        '/Documents',
        '/Users',
        '/',
    ];

    useEffect(() => {
        if (terminalRef.current) {
            terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
        }
    }, [output, showPortrait]);

    // TODO figure out how to do tab completion... maybe not
    // TODO figure out why autoscroll on 'enter' doesn't work properly

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInput(e.target.value);
    };

    const handleInputKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            setOutput((prevOutput) => [...prevOutput, `> ${input}`]);
            parseCommand(input);
            setInput('');
        }
    };

    // this is disgusting
    const parseCommand = (input: string) => {
        const args = input.split(' ');

        if (args[0] === 'ls') {
            if (args.length === 1) {
                let files: string[];
                if (currentDirectory === '/Users/maneesh') {
                    files = ['Pictures', 'Documents'];
                } else if (currentDirectory === '/Users/maneesh/Pictures') {
                    files = ['me.jpg'];
                } else if (currentDirectory === '/Users/maneesh/Documents') {
                    files = [
                        'about.txt',
                        'contact.txt',
                        'fun_fact.txt',
                        'work_experience',
                    ];
                } else if (
                    currentDirectory ===
                    '/Users/maneesh/Documents/work_experience'
                ) {
                    files = ['distributive.html', 'ncr.html', 'tulip.html'];
                } else if (currentDirectory === '/Users') {
                    files = ['maneesh'];
                } else if (currentDirectory === '/') {
                    files = ['Users'];
                } else {
                    files = [];
                }
                setOutput((prevOutput) => [...prevOutput, files.join(' ')]);
            } else {
                setOutput((prevOutput) => [
                    ...prevOutput,
                    `ERROR: ${args[0]} expects 0 arguments, found ${
                        args.length - 1
                    }`,
                ]);
            }
        } else if (args[0] === 'clear') {
            if (args.length === 1) {
                const h1Tags = document.getElementsByTagName('h1');
                const imageTags = document.getElementsByTagName('img');
                Array.from(h1Tags).forEach((h1Tag) => {
                    h1Tag.innerHTML = '';
                });
                Array.from(imageTags).forEach((imageTag) => {
                    imageTag.removeAttribute('src');
                    imageTag.style.display = 'none';
                    setShowPortrait(false);
                });
                setOutput(() => []);
            } else {
                setOutput((prevOutput) => [
                    ...prevOutput,
                    `ERROR: ${args[0]} expects 0 arguments, found ${
                        args.length - 1
                    }`,
                ]);
            }
        } else if (args[0] === 'help') {
            if (args.length === 1) {
                const lsString: string =
                    '// ls accepts 0 arguments and will list the contents of the directory you are in.';
                const cdString: string =
                    '// cd accepts up to 1 argument and will move you to the directory specified in the argument. Providing no arguments will move you to the home directory.';
                const pwdString: string =
                    '// pwd accepts 0 arguments and will print the current working directory.';
                const clearString: string =
                    '// clear accepts 0 arguments and will clear the screen.';
                const catString: string =
                    '// cat accepts 1 argument which is a text file and will output the contents of it to the screen.';
                const openString: string =
                    '// open accepts 1 argument which can be images or html files and will redirect you to view the contents of the file (this is similar to the xdg-open command on linux or open on MacOS).';
                setOutput((prevOutput) => [
                    ...prevOutput,
                    lsString,
                    cdString,
                    pwdString,
                    clearString,
                    catString,
                    openString,
                ]);
            } else {
                setOutput((prevOutput) => [
                    ...prevOutput,
                    `ERROR: ${args[0]} expects 0 arguments, found ${
                        args.length - 1
                    }`,
                ]);
            }
        } else if (args[0] === 'cd') {
            let newDirectory: string;
            if (args.length === 2) {
                if (args[1] === '..') {
                    // move to the parent directory
                    const parts = currentDirectory.split('/').filter(Boolean);
                    parts.pop();
                    newDirectory = '/' + parts.join('/');
                } else {
                    // move to a relative directory if it exists
                    newDirectory = currentDirectory + '/' + args[1];
                }
                // check if the new directory exists
                if (validDirectories.includes(newDirectory)) {
                    setCurrentDirectory(newDirectory);
                    setOutput((prevOutput) => [
                        ...prevOutput,
                        `Changed directory to: ${newDirectory}`,
                    ]);
                } else {
                    setOutput((prevOutput) => [
                        ...prevOutput,
                        `ERROR: Directory '${newDirectory}' does not exist`,
                    ]);
                }
            } else {
                newDirectory = '/Users/maneesh';
                setCurrentDirectory(newDirectory);
                setOutput((prevOutput) => [
                    ...prevOutput,
                    `Changed directory to: ${newDirectory}`,
                ]);
            }
        } else if (args[0] === 'pwd') {
            if (args.length == 1) {
                setOutput((prevOutput) => [
                    ...prevOutput,
                    `${currentDirectory}`,
                ]);
            } else {
                setOutput((prevOutput) => [
                    ...prevOutput,
                    `ERROR: ${args[0]} expects 0 arguments, found ${
                        args.length - 1
                    }`,
                ]);
            }
        } else if (args[0] === 'cat') {
            if (args.length == 2) {
                if (
                    currentDirectory === '/' ||
                    currentDirectory === '/Users' ||
                    currentDirectory === '/Users/maneesh'
                ) {
                    setOutput((prevOutput) => [
                        ...prevOutput,
                        `ERROR: cannot use cat on a directory.`,
                    ]);
                } else if (currentDirectory === '/Users/maneesh/Documents') {
                    if (args[1] === 'about.txt') {
                        setOutput((prevOutput) => [
                            ...prevOutput,
                            `Hi, I'm Maneesh, a Computer Science student studying at the University of
                            Guelph who is passionate about developing software and
                            always curious to learn new technologies in the
                            industry. I code a ton whether it be fullstack applications, code katas, and more!
                            `,
                            `You can check out my other projects here: <a href="https://www.github.com/ManeeshWije">www.github.com/ManeeshWije</a>`,
                        ]);
                    } else if (args[1] === 'contact.txt') {
                        setOutput((prevOutput) => [
                            ...prevOutput,
                            `You can contact me via email: <a href="mailto:m.mwije1@gmail.com">m.mwije1@gmail.com</a>`,
                        ]);
                    } else if (args[1] === 'fun_fact.txt') {
                        setOutput((prevOutput) => [
                            ...prevOutput,
                            `Apart from programming, I also love to stay active by going
                            climbing whether it's the crag in the area or a local gym.
                            As of now, I mainly focus on bouldering and I've been doing
                            it for around a year with my PB being V6 (7a). Overall, I
                            greatly enjoy the problem-solving aspect of figuring out a
                            boulder problem and being able to push myself physically is
                            an added bonus.`,
                        ]);
                    } else {
                        setOutput((prevOutput) => [
                            ...prevOutput,
                            `ERROR: file ${args[1]} does not exist.`,
                        ]);
                    }
                } else if (
                    currentDirectory === '/Users/maneesh/Pictures' &&
                    args[1] === 'me.jpg'
                ) {
                    setOutput((prevOutput) => [
                        ...prevOutput,
                        `ERROR: cannot use cat on an image.`,
                    ]);
                } else if (
                    currentDirectory ===
                    '/Users/maneesh/Documents/work_experience'
                ) {
                    setOutput((prevOutput) => [
                        ...prevOutput,
                        `ERROR: cannot use cat on html files.`,
                    ]);
                } else {
                    setOutput((prevOutput) => [
                        ...prevOutput,
                        `ERROR: invalid use of cat`,
                    ]);
                }
            } else {
                setOutput((prevOutput) => [
                    ...prevOutput,
                    `ERROR: ${args[0]} expects 1 argument, found ${
                        args.length - 1
                    }`,
                ]);
            }
        } else if (args[0] === 'open') {
            if (args.length === 2) {
                if (currentDirectory === '/Users/maneesh/Pictures') {
                    if (args[1] === 'me.jpg') {
                        setShowPortrait(true);
                    } else {
                        setOutput((prevOutput) => [
                            ...prevOutput,
                            `ERROR: file ${args[1]} does not exist.`,
                        ]);
                    }
                } else if (currentDirectory === '/Users/maneesh/Documents') {
                    setOutput((prevOutput) => [
                        ...prevOutput,
                        `ERROR: cannot use open on text files or directories`,
                    ]);
                } else if (
                    currentDirectory ===
                    '/Users/maneesh/Documents/work_experience'
                ) {
                    if (args[1] === 'distributive.html') {
                        setOutput((prevOutput) => [
                            ...prevOutput,
                            `redirecting...`,
                        ]);
                        goToDistributive();
                    } else if (args[1] === 'ncr.html') {
                        setOutput((prevOutput) => [
                            ...prevOutput,
                            `redirecting...`,
                        ]);
                        goToNCR();
                    } else if (args[1] === 'tulip.html') {
                        setOutput((prevOutput) => [
                            ...prevOutput,
                            `redirecting...`,
                        ]);
                        goToTulip();
                    } else {
                        setOutput((prevOutput) => [
                            ...prevOutput,
                            `ERROR: file ${args[1]} not found`,
                        ]);
                    }
                } else {
                    setOutput((prevOutput) => [
                        ...prevOutput,
                        `ERROR: file ${args[1]} not found`,
                    ]);
                }
            } else {
                setOutput((prevOutput) => [
                    ...prevOutput,
                    `ERROR: ${args[0]} expects 1 argument, found ${
                        args.length - 1
                    }`,
                ]);
            }
        } else {
            setOutput((prevOutput) => [
                ...prevOutput,
                `${args[0]}: command not found`,
            ]);
        }
    };

    return (
        <>
            <div>
                <h1 className='font-bold text-lg'>
                    welcome to my personal website
                </h1>
                <h1 className='font-bold text-lg'>
                    type 'help' to see the implemented commands
                </h1>
                <h1 className='font-bold text-lg'>have fun!</h1>
            </div>
            <div ref={terminalRef} className='output-container'>
                <div>
                    {output.map((command, index) => (
                        <div
                            key={index}
                            dangerouslySetInnerHTML={{ __html: command }}
                        />
                    ))}
                </div>
            </div>
            <div className='flex flex-row w-full'>
                <span>&gt;&#160;</span>
                <span
                    className='absolute'
                    style={{
                        transform: `translateX(${input.length * 9.6 + 20}px)`,
                        animation: 'blink 1s infinite',
                    }}
                >
                    &#9611;
                </span>
                <input
                    type='text'
                    value={input}
                    onChange={handleInputChange}
                    onKeyPress={handleInputKeyPress}
                    autoFocus={true}
                    className='w-full bg-transparent caret-transparent'
                />
            </div>
            <div className='absolute top-0 right-0 p-4' id='portrait-img'>
                {showPortrait && (
                    <img
                        src={me}
                        width={450}
                        height={400}
                        alt='self-portrait'
                        className='border-pink-400 border rounded-lg'
                    />
                )}
            </div>
        </>
    );
};

export default Terminal;
