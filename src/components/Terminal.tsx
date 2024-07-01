import React, { useState, useRef, useEffect } from "react";
import me from "../../src/assets/me.jpg";

const Terminal: React.FC = () => {
    const [input, setInput] = useState("");
    const [output, setOutput] = useState<string[]>([]);
    const [showPortrait, setShowPortrait] = useState(false);
    const [currentDirectory, setCurrentDirectory] = useState("/Users/maneesh");

    const terminalRef = useRef<HTMLDivElement>(null);
    const inputRef = useRef<HTMLInputElement>(null);

    const validDirectories = [
        "/Users/maneesh/Pictures",
        "/Users/maneesh/Documents",
        "/Users/maneesh/work_experience",
        "/Users/maneesh",
        "/Pictures",
        "/Documents",
        "/Users",
        "/"
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
                } else if (currentDirectory === "/Users/maneesh/work_experience") {
                    files = ["S22.html", "F22.html", "S23.html", "W24.html", "S24.html"];
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
                    `ERROR: ${args[0]} expects 0 arguments, found ${args.length - 1}`
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
                    `ERROR: ${args[0]} expects 0 arguments, found ${args.length - 1}`
                ]);
            }
        } else if (args[0] === "help") {
            if (args.length === 1) {
                const intro: string =
                    "only a small subset of bash commands are implemented and some functionalities may not exist such as flag options. The list is as follows:";
                const set: string =
                    "<b>ls</b> (list files/directories) </br> <b>cd</b> &lt;directory&gt; (change to directory) </br> <b>pwd</b> (print working directory) </br> <b>clear</b> (clear the screen) </br> <b>cat</b> &lt;txt file&gt; (output a text file) </br> <b>open</b> &lt;image|html&gt; (opens an image or html file)";
                const example: string = "<b>For example: ls -> cd Documents -> ls -> cat about.txt</b>";
                setOutput((prevOutput) => [...prevOutput, intro, set, example]);
            } else {
                setOutput((prevOutput) => [
                    ...prevOutput,
                    `ERROR: ${args[0]} expects 0 arguments, found ${args.length - 1}`
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
                    setOutput((prevOutput) => [...prevOutput, `Changed directory to: ${newDirectory}`]);
                } else {
                    setOutput((prevOutput) => [...prevOutput, `ERROR: Directory '${newDirectory}' does not exist`]);
                }
            } else {
                newDirectory = "/Users/maneesh";
                setCurrentDirectory(newDirectory);
                setOutput((prevOutput) => [...prevOutput, `Changed directory to: ${newDirectory}`]);
            }
        } else if (args[0] === "pwd") {
            if (args.length == 1) {
                setOutput((prevOutput) => [...prevOutput, `${currentDirectory}`]);
            } else {
                setOutput((prevOutput) => [
                    ...prevOutput,
                    `ERROR: ${args[0]} expects 0 arguments, found ${args.length - 1}`
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
                        `ERROR: cannot use cat on a directory. Try using "cd" instead`
                    ]);
                } else if (currentDirectory === "/Users/maneesh/Documents") {
                    if (args[1] === "about.txt") {
                        setOutput((prevOutput) => [
                            ...prevOutput,
                            `hi, I'm Maneesh, a Computer Science student studying at the University of
                            Guelph who is passionate about developing software and
                            always curious to learn new technologies in the
                            industry. I program a <i>ton</i> whether it be fullstack applications, code katas, and just random ideas that come to mind.
                            `,
                            `You can check out my other projects here: <a href="https://www.github.com/ManeeshWije">www.github.com/ManeeshWije</a>`,
                            `I also have a blog site that I sometimes publish to about programming in general: <a href="https://maneesh-blog.up.railway.app/">https://maneesh-blog.up.railway.app/</a>`
                        ]);
                    } else if (args[1] === "contact.txt") {
                        setOutput((prevOutput) => [
                            ...prevOutput,
                            `you can contact me via email: <a href="mailto:m.mwije1@proton.me">m.mwije1@proton.me</a>`,
                            `or connect with me on LinkedIn: <a href="https://www.linkedin.com/in/maneeshwije/">https://www.linkedin.com/in/maneeshwije/</a>`
                        ]);
                    } else if (args[1] === "fun_fact.txt") {
                        setOutput((prevOutput) => [
                            ...prevOutput,
                            `apart from programming, I also love to stay active by going
                            climbing whether it's the crag in the area or a local gym.
                            As of now, I mainly focus on bouldering and I've been doing
                            it for around a year and a half with my PB being V10 (7C+). Overall, I
                            greatly enjoy the problem-solving aspect of figuring out a
                            boulder problem and being able to push myself physically is
                            an added bonus.`
                        ]);
                    } else {
                        setOutput((prevOutput) => [...prevOutput, `ERROR: file ${args[1]} does not exist.`]);
                    }
                } else if (currentDirectory === "/Users/maneesh/Pictures" && args[1] === "me.jpg") {
                    setOutput((prevOutput) => [
                        ...prevOutput,
                        `ERROR: cannot use cat on an image. Try using "open" instead`
                    ]);
                } else if (currentDirectory === "/Users/maneesh/work_experience") {
                    setOutput((prevOutput) => [
                        ...prevOutput,
                        `ERROR: cannot use cat on html files. Try using "open" instead`
                    ]);
                } else {
                    setOutput((prevOutput) => [...prevOutput, `ERROR: invalid use of cat`]);
                }
            } else {
                setOutput((prevOutput) => [
                    ...prevOutput,
                    `ERROR: ${args[0]} expects 1 argument, found ${args.length - 1}`
                ]);
            }
        } else if (args[0] === "open") {
            if (args.length === 2) {
                if (currentDirectory === "/Users/maneesh/Pictures") {
                    if (args[1] === "me.jpg") {
                        setShowPortrait(true);
                    } else {
                        setOutput((prevOutput) => [...prevOutput, `ERROR: file ${args[1]} does not exist.`]);
                    }
                } else if (currentDirectory === "/Users/maneesh/Documents") {
                    setOutput((prevOutput) => [...prevOutput, `ERROR: cannot use open on text files or directories`]);
                } else if (currentDirectory === "/Users/maneesh/work_experience") {
                    let files = ['S22.html', 'F22.html', 'S23.html', 'W24.html', 'S24.html'];
                    let isValidFile = false;
                    files.forEach((file) => {
                        if (args[1] === file) {
                            isValidFile = true;
                            setOutput((prevOutput) => [...prevOutput, `redirecting...`]);
                            window.open(`/#/${file.replace(".html", "")}`, "_blank");
                        }
                    })
                    if (!isValidFile) {
                        setOutput((prevOutput) => [...prevOutput, `ERROR: file ${args[1]} not found`]);
                    }
                } else {
                    setOutput((prevOutput) => [...prevOutput, `ERROR: file ${args[1]} not found`]);
                }
            } else {
                setOutput((prevOutput) => [
                    ...prevOutput,
                    `ERROR: ${args[0]} expects 1 argument, found ${args.length - 1}`
                ]);
            }
        } else {
            setOutput((prevOutput) => [...prevOutput, `${args[0]}: command not found`]);
        }
    };

    const handleMouseDown = (e: React.MouseEvent<HTMLInputElement>) => {
        e.preventDefault();
    };

    // this is to keep the input focused even when you click outside of it
    useEffect(() => {
        const handleClickOutside = (e: MouseEvent) => {
            if (inputRef.current && !inputRef.current.contains(e.target as Node)) {
                inputRef.current.focus();
            }
        };

        document.addEventListener("click", handleClickOutside);

        return () => {
            document.removeEventListener("click", handleClickOutside);
        };
    }, []);

    return (
        <div>
            <div>
                <h1 className="font-bold text-lg">welcome to my personal website!</h1>
                <h1 className="font-bold text-lg">type 'help' to see the implemented commands</h1>
                <h1 className="font-bold text-lg">
                    check out the source code for this project on my{" "}
                    <a href="https://www.github.com/ManeeshWije">github</a>
                </h1>
            </div>
            <div ref={terminalRef} className="output-container">
                <div>
                    {output.map((command, index) => (
                        <div key={index} dangerouslySetInnerHTML={{ __html: command }} />
                    ))}
                </div>
            </div>
            <div className="flex flex-row w-full">
                <span>&gt;&#160;</span>
                <span
                    className="absolute"
                    style={{
                        transform: `translateX(${input.length * 9.6 + 20}px)`,
                        animation: "blink 1s infinite"
                    }}
                >
                    &#9611;
                </span>
                <input
                    ref={inputRef}
                    type="text"
                    value={input}
                    onChange={handleInputChange}
                    onKeyPress={handleInputKeyPress}
                    autoFocus={true}
                    autoCorrect="off"
                    autoCapitalize="off"
                    onMouseDown={handleMouseDown}
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
        </div>
    );
};

export default Terminal;
