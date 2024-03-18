import PropTypes from 'prop-types';

const WanToCookTable = ({cook,idx,handleCurrentlyCooking}) => {
    const {recipe_name,preparing_time,calories} = cook;
  return (
    <tr>
      <th>{idx+1}</th>
      <td>{recipe_name}</td>
      <td>{preparing_time} minutes</td>
      <td>{calories} calories</td>
      <td>
        <button onClick={() => handleCurrentlyCooking(cook)} className="btn bg-[#0BE58A] rounded-full">Preparing</button>
      </td>
    </tr>
  );
};

WanToCookTable.propTypes = {
    cook: PropTypes.object.isRequired,
    idx: PropTypes.number.isRequired,
    handleCurrentlyCooking: PropTypes.func
};

export default WanToCookTable;
