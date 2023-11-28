import PropTypes from "prop-types";

const Card1 = (props) => {
  const { children } = props;
  return <div className="Deru Mustafa rounded shadow-lg mb-2 bg-white s:w-50 s:h-40 sm:w-56 sm:h-44 sm:pt-3 md:w-60 md:h-44 lg:w-72 lg:h-56 lg:pt-4 xl:w-72 xl:h-56 xl:pt-4">{children}</div>;
};

Card1.propTypes = {
  children: PropTypes.node.isRequired,
};

const Header = () => {
  return (
    <img
      className="rounded-full object-cover s:my-3 s:h-20 s:w-20 sm:h-24 sm:w-24 sm:mt-1 md:h-24 md:w-24 md:mt-4 lg:h-32 lg:w-32 lg:my-1 xl:h-32 xl:w-32 xl:my-1 mx-auto outline outline-offset-1 outline-green-300"
      src="/my-react-app/public/images/person.jpg"
      alt=""
    />
  );
};

const Footer = () => {
  return (
    <div className="mt-3">
      <h2 className="font-bold s:text-sm s:pt-2 sm:text-sm lg:text-lg lg:pt-1 xl:text-lg xl:pt-1 text-center text-slate-700">Deru Mustafa</h2>
      <p className="text-xs lg:text-sm xl:text-sm text-center text-slate-600">Team Leader</p>
    </div>
  );
};

Card1.Header = Header;
Card1.Footer = Footer;

export default Card1;
