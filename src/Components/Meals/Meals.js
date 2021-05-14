import React, { Fragment } from "react";
import AvailableMeals from "./AvailableMeals";
import MealsSummery from "./MealsSummary";

const Meal = (props)=>{
      return(
            <Fragment>
            <MealsSummery/>
            <AvailableMeals/>
            </Fragment>
      );
};

export default Meal;