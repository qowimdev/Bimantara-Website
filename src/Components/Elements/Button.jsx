const MyButton = () => {
  return (
    <button id="hamburger" type="button" className="block absolute right-4 xl:hidden">
      <span className="hamburger-line transition duration-300 ease-in-out origin-top-left"></span>
      <span className="hamburger-line transition duration-300 ease-in-out"></span>
      <span className="hamburger-line transition duration-300 ease-in-out origin-bottom-left"></span>
    </button>
  );
};

export default MyButton;
