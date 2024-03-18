import timeIcon from "../../assets/time.svg"
import caloryIcon from "../../assets/calories.svg"
import PropTypes from 'prop-types';

const Recipe = ({recipe, handleWantToCook}) => {
    const {recipe_name,short_description,ingredients,preparing_time,calories,recipe_image} = recipe;
    return (
        <div className='p-6 space-y-5 border border-gray-300 rounded-2xl shadow'>
            <img src={recipe_image} alt="" className='h-[200px] w-full rounded-2xl shadow-md' />
            <h3 className="text-xl font-semibold">{recipe_name}</h3>
            <p className="text-[#878787] fira-sans">{short_description}</p>
            <hr />
            <h3 className="text-lg font-semibold">Ingredients: {ingredients.length}</h3>
            <ul className='list-disc list-inside ml-2 text-[#878787] fira-sans'>
                {
                    ingredients.map((ingredient,idx) => (
                        <li key={idx}>{ingredient}</li>
                    ))
                }
                
            </ul>
            <hr />
            <div className="flex gap-4">
                 <div className="flex items-center justify-center gap-1"><img className="mr-1" src={timeIcon} alt="" /> <p>{preparing_time}</p> <p>minutes</p></div>
                 <div className="flex items-center justify-center gap-1"><img className="mr-1" src={caloryIcon} alt="" /> <p>{calories}</p> <p>minutes</p></div>
            </div>
            <button onClick={() => handleWantToCook(recipe)} className="btn bg-[#0BE58A] rounded-full">Want to Cook</button>
        </div>
    );
};

Recipe.propTypes = {
    recipe: PropTypes.object.isRequired,
    handleWantToCook: PropTypes.func
};

export default Recipe;