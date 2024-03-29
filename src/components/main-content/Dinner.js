import React from "react";

const Dinner = props => {
  const searchDinner = () => {
    console.log("searchDinner");
    console.log(props.searchInputValue);
  };
  searchDinner();
  //   console.log(props.dinnerData);
  const dinners = props.dinnerData.map((dinner, i, arr) => {
    if (i >= arr.length - 10) {
      const bgImg = { backgroundImage: `url(${dinner.strMealThumb})` };
      return (
        <div className="dinner__element animated col-4">
          <div className="dinner__element-short">
            <div className="dinner__element-short-bg">
              <div className="dinner__element-short-bg-img" style={bgImg}></div>
            </div>
            <div className="dinner__element-short-title">
              <summary>{dinner.strMeal}</summary>
            </div>
          </div>
          <div className="dinner__element-full">
            {dinner.strYoutube}
            <br></br>
            {dinner.strInstructions}
            <ul>
              {dinner.strIngredient1 && (
                <li>
                  {dinner.strIngredient1} - {dinner.strMeasure1}
                </li>
              )}
              {dinner.strIngredient2 && (
                <li>
                  {dinner.strIngredient2} - {dinner.strMeasure2}
                </li>
              )}
              {dinner.strIngredient3 && (
                <li>
                  {dinner.strIngredient3} - {dinner.strMeasure3}
                </li>
              )}
              {dinner.strIngredient4 && (
                <li>
                  {dinner.strIngredient4} - {dinner.strMeasure4}
                </li>
              )}
              {dinner.strIngredient5 && (
                <li>
                  {dinner.strIngredient5} - {dinner.strMeasure5}
                </li>
              )}
              {dinner.strIngredient6 && (
                <li>
                  {dinner.strIngredient6} - {dinner.strMeasure6}
                </li>
              )}
              {dinner.strIngredient7 && (
                <li>
                  {dinner.strIngredient7} - {dinner.strMeasure7}
                </li>
              )}
              {dinner.strIngredient8 && (
                <li>
                  {dinner.strIngredient8} - {dinner.strMeasure8}
                </li>
              )}
              {dinner.strIngredient9 && (
                <li>
                  {dinner.strIngredient9} - {dinner.strMeasure9}
                </li>
              )}
              {dinner.strIngredient10 && (
                <li>
                  {dinner.strIngredient10} - {dinner.strMeasure10}
                </li>
              )}
              {dinner.strIngredient11 && (
                <li>
                  {dinner.strIngredient11} - {dinner.strMeasure11}
                </li>
              )}
              {dinner.strIngredient12 && (
                <li>
                  {dinner.strIngredient12} - {dinner.strMeasure12}
                </li>
              )}
              {dinner.strIngredient13 && (
                <li>
                  {dinner.strIngredient13} - {dinner.strMeasure13}
                </li>
              )}
              {dinner.strIngredient14 && (
                <li>
                  {dinner.strIngredient14} - {dinner.strMeasure14}
                </li>
              )}
              {dinner.strIngredient15 && (
                <li>
                  {dinner.strIngredient15} - {dinner.strMeasure15}
                </li>
              )}
              {dinner.strIngredient16 && (
                <li>
                  {dinner.strIngredient16} - {dinner.strMeasure16}
                </li>
              )}
              {dinner.strIngredient17 && (
                <li>
                  {dinner.strIngredient17} - {dinner.strMeasure17}
                </li>
              )}
              {dinner.strIngredient18 && (
                <li>
                  {dinner.strIngredient18} - {dinner.strMeasure18}
                </li>
              )}
              {dinner.strIngredient19 && (
                <li>
                  {dinner.strIngredient19} - {dinner.strMeasure19}
                </li>
              )}
              {dinner.strIngredient20 && (
                <li>
                  {dinner.strIngredient20} - {dinner.strMeasure20}
                </li>
              )}
            </ul>
          </div>
        </div>
      );
    } else {
      return null;
    }
  });

  return dinners;
};

export default Dinner;
