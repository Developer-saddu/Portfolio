import { Sun, Moon } from "lucide-react";
import PropTypes from "prop-types";

const ModeButton = ({ darkMode, toggleMode }) => {
  return (
    <button
      onClick={toggleMode}
      className="p-2 rounded-full border border-gray-400 dark:border-gray-600 
                 bg-transparent hover:scale-110 transition duration-300"
      aria-label="Toggle dark mode"
    >
      {darkMode ? (
        <Sun className="w-5 h-5 text-yellow-400" />
      ) : (
        <Moon className="w-5 h-5 text-purple-500" />
      )}
    </button>
  );
};
ModeButton.propTypes = {
  darkMode: PropTypes.bool.isRequired,
  toggleMode: PropTypes.func.isRequired,
};

export default ModeButton;
