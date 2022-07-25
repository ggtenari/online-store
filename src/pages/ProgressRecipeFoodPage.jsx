// import React, { useEffect, useState } from 'react';
// import PropTypes from 'prop-types';
// // import RecipeDetails from '../components/RecipeDetails';
// import { useRecipeApp } from '../context/RecipeAppProvider';
// import fetchDetailsFood from '../helpers/fetchDetailsFood';

// const ProgressRecipeFoodPage = ({ match: { params: { id } } }) => {
//   const { setPage, details,
//     ingredientsInProgress,
//     foodCheck,
//     setFoodCheck,
//     setDetails, setIngredientsInProgress,
//   } = useRecipeApp();

//   const localStorageObject = {};
//   const [styleObject, setStyleObject] = useState({});

//   const setChecked = (value) => {
//     const prevValue = JSON.parse(localStorage.getItem(`${details.strMeal}InProgress`));
//     if (prevValue && foodCheck) {
//       prevValue[value] = !foodCheck[value];
//     }
//     localStorage.setItem((`${details.strMeal}InProgress`), JSON
//       .stringify(prevValue));
//     setFoodCheck((prev) => ({
//       ...prev,
//       [value]: !prev[value],
//     }));
//   };

//   const style = {
//     width: '150px',
//     heigth: '150px',
//   };

//   useEffect(() => {
//     fetchDetailsFood(id).then((response) => {
//       const recipeDetails = response.meals[0];
//       setDetails(recipeDetails);
//       const ingredientList = Object
//         .values(Object
//           .fromEntries(Object
//             .entries(recipeDetails)
//             .filter(([key, value]) => key.includes('Ingredient') && value !== '')));
//       const measureList = Object
//         .values(Object
//           .fromEntries(Object
//             .entries(recipeDetails)
//             .filter(([key, value]) => key.includes('Measure') && value !== '')));
//       setIngredientsInProgress({ ingredientList, measureList });
//     });
//   }, [id]);

//   useEffect(() => {
//     if (details && localStorage.getItem(`${details.strMeal}InProgress`)) {
//       const objLocal = JSON.parse(localStorage.getItem(`${details.strMeal}InProgress`));
//       setFoodCheck(objLocal);
//     } else if (ingredientsInProgress.ingredientList) {
//       ingredientsInProgress.ingredientList.forEach((ingrediente) => {
//         localStorageObject[ingrediente] = false;
//         setStyleObject({ ...styleObject, [ingrediente]: {} });
//         setFoodCheck((prev) => ({
//           ...prev,
//           [ingrediente]: false,
//         }));
//       });
//       localStorage.setItem((`${details.strMeal}InProgress`), JSON
//         .stringify(localStorageObject));
//     }
//   }, [details]);
//   useEffect(() => {
//     setPage('foodInProgress');
//   }, []);

//   return (
//     <div>
//       {
//         details && (
//           <div>
//             <div key={ details.strMeal }>
//               <img
//                 data-testid="recipe-photo"
//                 src={ details.strMealThumb }
//                 alt={ `imagem da receita ${details.strMeal}` }
//                 style={ style }
//               />
//               <h3 data-testid="recipe-title">{details.strMeal}</h3>
//               <h3 data-testid="recipe-category">{details.strCategory}</h3>
//             </div>
//             { ingredientsInProgress.ingredientList
//               && (
//                 <div>
//                   {
//                     ingredientsInProgress.ingredientList.map((ingrediente, index) => {
//                       if (foodCheck && ingrediente !== null) {
//                         <div key={ index }>
//                           <label
//                             data-testid={ `${index}-ingredient-step` }
//                             htmlFor={ ingrediente }
//                           >
//                             { foodCheck[ingrediente]
//                               ? (
//                                 <s>
//                                   {(
//                                     `${ingrediente}${ingredientsInProgress
//                                       .measureList[index]}`
//                                   )}
//                                 </s>)
//                               : `${ingrediente} ${ingredientsInProgress
//                                 .measureList[index]}`}
//                             <input
//                               type="checkbox"
//                               checked={ foodCheck[ingrediente] }
//                               value={ ingrediente }
//                               id={ ingrediente }
//                               onChange={ (event) => setChecked(event.target.value) }

//                             />
//                           </label>

//                         </div>;
//                       }
//                     })
//                   }
//                   <button type="button" data-testid="finish-recipe-btn">
//                     finalizar
//                   </button>
//                 </div>
//               ) }

//             <p data-testid="instructions">{details.strInstructions}</p>
//           </div>
//         )
//       }
//     </div>
//   );
// };

// ProgressRecipeFoodPage.propTypes = {
//   match: PropTypes.objectOf(PropTypes.string).isRequired,
// };
// export default ProgressRecipeFoodPage;
