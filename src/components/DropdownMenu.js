import assignTo from "../assignTo";
function DropdownMenu({
  isOpen,
  selectedOption,
  toggleDropdown,
  handleOptionClick,
}) {
  const options = assignTo;

  return (
    <div className="ml-2 ">
      <button onClick={toggleDropdown}>
        {selectedOption ? selectedOption.label : "Assign to:"}
      </button>

      {isOpen && (
        <div className="absolute bg-veryLight">
          <ul className="flex flex-col items-start">
            {options.map((option) => (
              <li
                className="flex shadow-2xl bg-whatever pl-2 w-20 text-violet underline"
                key={option.value}
                onClick={() => handleOptionClick(option)}
              >
                {option.label}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default DropdownMenu;
