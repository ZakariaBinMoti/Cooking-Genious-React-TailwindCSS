import PropTypes from "prop-types";

const CurrentlyCookingTable = ({ cooking, idx }) => {
  const { recipe_name, preparing_time, calories } = cooking;
  return (
    <tr>
      <th>{idx + 1}</th>
      <td>{recipe_name}</td>
      <td>{preparing_time} minutes</td>
      <td>{calories} calories</td>
    </tr>
  );
};

CurrentlyCookingTable.propTypes = {
  cooking: PropTypes.object.isRequired,
  idx: PropTypes.number.isRequired,
};

export default CurrentlyCookingTable;
