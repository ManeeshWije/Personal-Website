import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
  return (
    <div>
      <div className="gap-9 flex flex-row items-center justify-center">
        <a href="mailto:m.mwije1@gmail.com">
          <FontAwesomeIcon icon={faEnvelope} size="2x" color="blue-gray" />
        </a>
        <a href="https://github.com/ManeeshWije">
          <FontAwesomeIcon icon={faGithub} size="2x" color="blue-gray" />
        </a>
        <a href="https://www.linkedin.com/in/maneeshwije/">
          <FontAwesomeIcon icon={faLinkedin} size="2x" color="blue-gray" />
        </a>
      </div>
      <footer className="bg-white flex flex-row justify-center relative bottom-0 left-0 p-4 rounded-lg shadow dark:bg-gray-800">
        <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
          © 2022{" "}
          <a href="https://www.wijeproject.com" className="hover:underline">
            wijeproject™
          </a>
          . All Rights Reserved.
        </span>
      </footer>
    </div>
  );
}
