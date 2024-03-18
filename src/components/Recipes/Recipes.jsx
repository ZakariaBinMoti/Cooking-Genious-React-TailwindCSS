
import { useEffect } from "react";
import { useState } from "react";
import Recipe from "../Recipe/Recipe";
import WanToCookTable from "../WantToCookTable/WanToCookTable";
import CurrentlyCookingTable from "../CurrentlyCookingTable/CurrentlyCookingTable";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Recipes = () => {
  const [recipes, setRecipes] = useState([]);
  const [cooks, setCooks] = useState([]);
  const [cookings, setCookings] = useState([]);
  const [countTime, setCountTime] = useState(0);
  const [countCalories, setCountCalories] = useState(0);

  useEffect(() => {
    fetch("recipes.json")
      .then((res) => res.json())
      .then((data) => setRecipes(data));
  }, []);

  const notifyCook = () => toast.error("Already exists");
  const notifyCooking = () => toast.warn("Already cooking, select others!");

  const handleWantToCook = (recipe) => {
    let isMatched = false;
    cooks.map((cookSingle) => {
      if (cookSingle.recipe_id == recipe.recipe_id) {
        isMatched = true;
        notifyCook();
      }
    });

    cookings.map((cookSingle) => {
        if (cookSingle.recipe_id == recipe.recipe_id) {
          isMatched = true;
          notifyCooking();
        }
      });

    if (!isMatched) {
      const newCook = [...cooks, recipe];
      setCooks(newCook);
    }
  };
  const handleCurrentlyCooking = (cook) => { 
    const remainingCooks = cooks.filter(
      (cookSingle) => cookSingle.recipe_id !== cook.recipe_id
    );
    setCooks(remainingCooks);

    const newCooking = [...cookings, cook];
    setCookings(newCooking);
    
    // console.log(typeof(cook.preparing_time));
    const newCountTime = countTime + cook.preparing_time;
    setCountTime(newCountTime);
    setCountCalories(countCalories + cook.calories)
  };

  return (
    <section className="my-20">
      <div className="my-12 text-center space-y-4">
        <h1 className="text-4xl font-semibold">Our Recipes</h1>
        <p>
        Best classes recipes are available only in our lessons. Tasty and healthy dish are listed<br /> below to attract our consumers according to their necessary.
        </p>
      </div>

      <div className="flex lg:flex-row flex-col gap-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 max-w-[782px]">
          {/* <h1>Recipes: {recipes.length}</h1> */}
          {recipes.map((recipe) => (
            <Recipe
              key={recipe.recipe_id}
              recipe={recipe}
              handleWantToCook={handleWantToCook}
            ></Recipe>
          ))}
        </div>

        <div className="grow">
            <div className="p-6 border border-gray-300 shadow rounded-2xl ">
          <div className="space-y-3">
            <h3 className="text-2xl font-semibold text-center mt-2">
              Want to cook: {cooks.length}
            </h3>
            <hr />

            <div className="overflow-x-auto">
              <table className="table">
                {/* head */}
                <thead>
                  <tr>
                    <th></th>
                    <th>Name</th>
                    <th>Time</th>
                    <th>Calories</th>
                    <th></th>
                  </tr>
                </thead>

                <tbody className="bg-[#28282805]">
                  {cooks.map((cook, idx) => (
                    <WanToCookTable
                      idx={idx}
                      key={cook.recipe_id}
                      cook={cook}
                      handleCurrentlyCooking={handleCurrentlyCooking}
                    ></WanToCookTable>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="space-y-3">
            <h3 className="text-2xl font-semibold text-center mt-8">
              Currently cooking: {cookings.length}
            </h3>
            <hr />

            <div className="overflow-x-auto">
              <table className="table">
                {/* head */}
                <thead>
                  <tr>
                    <th></th>
                    <th>Name</th>
                    <th>Time</th>
                    <th>Calories</th>
                  </tr>
                </thead>

                <tbody className="bg-[#28282805]">
                  {cookings.map((cooking, idx) => (
                    <CurrentlyCookingTable
                      idx={idx}
                      key={cooking.recipe_id}
                      cooking={cooking}
                    ></CurrentlyCookingTable>
                  ))}
                </tbody>
                <tfoot className="font-bold text-black">
                    <tr>
                        <td></td>
                    <td></td>
                    <td>Total Time= <br /> {countTime} minutes</td>
                    <td>Total Calories=<br /> {countCalories} calories</td>
                    </tr>
                    
                  </tfoot>

              </table>
              
            </div>
          </div>
        </div>
        </div>
      </div>
      <ToastContainer />
    </section>
  );
};

// Recipes.propTypes = {

// };

export default Recipes;
