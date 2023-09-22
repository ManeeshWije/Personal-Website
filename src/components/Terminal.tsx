import React, { useState, useRef, useEffect } from "react";
import me from "../../src/assets/me.jpg";

const Terminal: React.FC = () => {
    const goToDistributive = () => {
        window.open("/#/distributive", "_blank");
    };

    const goToNCR = () => {
        window.open("/#/ncr", "_blank");
    };

    const goToTulip = () => {
        window.open("/#/tulip", "_blank");
    };

    const [input, setInput] = useState("");
    const [output, setOutput] = useState<string[]>([]);
    const [showPortrait, setShowPortrait] = useState(false);
    const [currentDirectory, setCurrentDirectory] = useState("/Users/maneesh");

    const terminalRef = useRef<HTMLDivElement>(null);

    const validDirectories = [
        "/Users/maneesh/Pictures",
        "/Users/maneesh/Documents",
        "/Users/maneesh/work_experience",
        "/Users/maneesh",
        "/Pictures",
        "/Documents",
        "/Users",
        "/",
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
        if (e.key === "Enter") {
            e.preventDefault();
            setOutput((prevOutput) => [...prevOutput, `> ${input}`]);
            parseCommand(input);
            setInput("");
        }
    };

    // this is disgusting
    const parseCommand = (input: string) => {
        const args = input.split(" ");

        if (args[0] === "ls") {
            if (args.length === 1) {
                let files: string[];
                if (currentDirectory === "/Users/maneesh") {
                    files = ["Pictures", "Documents", "work_experience"];
                } else if (currentDirectory === "/Users/maneesh/Pictures") {
                    files = ["me.jpg"];
                } else if (currentDirectory === "/Users/maneesh/Documents") {
                    files = ["about.txt", "contact.txt", "fun_fact.txt"];
                } else if (
                    currentDirectory === "/Users/maneesh/work_experience"
                ) {
                    files = ["distributive.html", "ncr.html", "tulip.html"];
                } else if (currentDirectory === "/Users") {
                    files = ["maneesh"];
                } else if (currentDirectory === "/") {
                    files = ["Users"];
                } else {
                    files = [];
                }
                setOutput((prevOutput) => [...prevOutput, files.join(" ")]);
            } else {
                setOutput((prevOutput) => [
                    ...prevOutput,
                    `ERROR: ${args[0]} expects 0 arguments, found ${
                        args.length - 1
                    }`,
                ]);
            }
        } else if (args[0] === "clear") {
            if (args.length === 1) {
                const h1Tags = document.getElementsByTagName("h1");
                const imageTags = document.getElementsByTagName("img");
                Array.from(h1Tags).forEach((h1Tag) => {
                    h1Tag.innerHTML = "";
                });
                Array.from(imageTags).forEach((imageTag) => {
                    imageTag.removeAttribute("src");
                    imageTag.style.display = "none";
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
        } else if (args[0] === "help") {
            if (args.length === 1) {
                const intro: string =
                    "only a small subset of bash commands are implemented and some functionalities may not exist such as flag options. The list is as follows: ";
                const set: string =
                    'ls (list), cd (change directory), pwd (print working directory), clear (clear the screen), cat (output a text file), open (similar to "xdg-open" on Linux and "open" on MacOS. *Use it on images or html files)';
                setOutput((prevOutput) => [...prevOutput, intro, set]);
            } else {
                setOutput((prevOutput) => [
                    ...prevOutput,
                    `ERROR: ${args[0]} expects 0 arguments, found ${
                        args.length - 1
                    }`,
                ]);
            }
        } else if (args[0] === "cd") {
            let newDirectory: string;
            if (args.length === 2) {
                if (args[1] === "..") {
                    // move to the parent directory
                    const parts = currentDirectory.split("/").filter(Boolean);
                    parts.pop();
                    newDirectory = "/" + parts.join("/");
                } else {
                    // move to a relative directory if it exists
                    newDirectory = currentDirectory + "/" + args[1];
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
                newDirectory = "/Users/maneesh";
                setCurrentDirectory(newDirectory);
                setOutput((prevOutput) => [
                    ...prevOutput,
                    `Changed directory to: ${newDirectory}`,
                ]);
            }
        } else if (args[0] === "pwd") {
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
        } else if (args[0] === "cat") {
            if (args.length == 2) {
                if (
                    currentDirectory === "/" ||
                    currentDirectory === "/Users" ||
                    currentDirectory === "/Users/maneesh"
                ) {
                    setOutput((prevOutput) => [
                        ...prevOutput,
                        `ERROR: cannot use cat on a directory. Try using "cd" instead`,
                    ]);
                } else if (currentDirectory === "/Users/maneesh/Documents") {
                    if (args[1] === "about.txt") {
                        setOutput((prevOutput) => [
                            ...prevOutput,
                            `hi, I'm Maneesh, a Computer Science student studying at the University of
                            Guelph who is passionate about developing software and
                            always curious to learn new technologies in the
                            industry. I program a ton whether it be fullstack applications, code katas, and just random ideas that come to mind.
                            `,
                            `You can check out my other projects here: <a href="https://www.github.com/ManeeshWije">www.github.com/ManeeshWije</a>`,
                        ]);
                    } else if (args[1] === "contact.txt") {
                        setOutput((prevOutput) => [
                            ...prevOutput,
                            `you can contact me via email: <a href="mailto:m.mwije1@gmail.com">m.mwije1@gmail.com</a>`,
                            `or connect with me on LinkedIn: <a href="https://www.linkedin.com/in/maneeshwije/">https://www.linkedin.com/in/maneeshwije/</a>`,
                            `also follow me on Twitter: <a href="https://twitter.com/maneesh_wije">https://twitter.com/maneesh_wije</a>`,
                        ]);
                    } else if (args[1] === "fun_fact.txt") {
                        setOutput((prevOutput) => [
                            ...prevOutput,
                            `apart from programming, I also love to stay active by going
                            climbing whether it's the crag in the area or a local gym.
                            As of now, I mainly focus on bouldering and I've been doing
                            it for around a year with my PB being V8 (7B). Overall, I
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
                    currentDirectory === "/Users/maneesh/Pictures" &&
                    args[1] === "me.jpg"
                ) {
                    setOutput((prevOutput) => [
                        ...prevOutput,
                        `ERROR: cannot use cat on an image. Try using "open" instead`,
                    ]);
                } else if (
                    currentDirectory === "/Users/maneesh/work_experience"
                ) {
                    setOutput((prevOutput) => [
                        ...prevOutput,
                        `ERROR: cannot use cat on html files. Try using "open" instead`,
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
        } else if (args[0] === "open") {
            if (args.length === 2) {
                if (currentDirectory === "/Users/maneesh/Pictures") {
                    if (args[1] === "me.jpg") {
                        setShowPortrait(true);
                    } else {
                        setOutput((prevOutput) => [
                            ...prevOutput,
                            `ERROR: file ${args[1]} does not exist.`,
                        ]);
                    }
                } else if (currentDirectory === "/Users/maneesh/Documents") {
                    setOutput((prevOutput) => [
                        ...prevOutput,
                        `ERROR: cannot use open on text files or directories`,
                    ]);
                } else if (
                    currentDirectory === "/Users/maneesh/work_experience"
                ) {
                    if (args[1] === "distributive.html") {
                        setOutput((prevOutput) => [
                            ...prevOutput,
                            `redirecting...`,
                        ]);
                        goToDistributive();
                    } else if (args[1] === "ncr.html") {
                        setOutput((prevOutput) => [
                            ...prevOutput,
                            `redirecting...`,
                        ]);
                        goToNCR();
                    } else if (args[1] === "tulip.html") {
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
            <head>
                <meta name="darkreader-lock" />
            </head>
            <div>
                <h1 className="font-bold text-lg">
                    welcome to my personal website!
                </h1>
                <h1 className="font-bold text-lg">
                    type 'help' to see the implemented commands
                </h1>
                <h1 className="font-bold text-lg">
                    check out the source code for this project on my{" "}
                    <a href="https://www.github.com/ManeeshWije">github</a>
                </h1>
            </div>
            <div ref={terminalRef} className="output-container">
                <div>
                    {output.map((command, index) => (
                        <div
                            key={index}
                            dangerouslySetInnerHTML={{ __html: command }}
                        />
                    ))}
                </div>
            </div>
            <div className="flex flex-row w-full">
                <span>&gt;&#160;</span>
                <span
                    className="absolute"
                    style={{
                        transform: `translateX(${input.length * 9.6 + 20}px)`,
                        animation: "blink 1s infinite",
                    }}
                >
                    &#9611;
                </span>
                <input
                    type="text"
                    value={input}
                    onChange={handleInputChange}
                    onKeyPress={handleInputKeyPress}
                    autoFocus={true}
                    className="w-full bg-transparent caret-transparent"
                />
            </div>
            <div className="absolute top-20 right-0 p-4" id="portrait-img">
                {showPortrait && (
                    <img
                        src={me}
                        width={450}
                        height={400}
                        alt="self-portrait"
                        className="border-pink-400 border rounded-lg"
                    />
                )}
            </div>
        </>
    );
};

export default Terminal;
