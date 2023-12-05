import PropTypes from "prop-types";

const ManagementCard = ({ children }) => {
  return (
    <div className="rounded shadow-lg mb-2 bg-white s:w-50 s:h-40 sm:w-56 sm:h-44 sm:pt-3 md:w-60 md:h-44 lg:w-72 lg:h-56 lg:pt-4 xl:w-72 xl:h-56 xl:pt-4">
      {children}
    </div>
  );
};

ManagementCard.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ManagementCard;
