import React from "react";
import './css/recipe_stl.css';
import tomate from "./img/tomate_j.jpg";

const Recipe = () => {
    return (
        <div className="container">
            <div className="block_1">
                <span className="recipe_name">Tomato juice</span>
                <p className="info_recipe">
                    Homemade tomato juice is a great way to preserve a rich harvest, as well as a delicious and healthy drink for the whole family.
                    Today I offer a recipe for tomato juice without sterilization: everything is quite simple, fast and affordable.
                </p>
                <img className="img_tomate" src={tomate} width={350} height={550} />

                <h2>Products:</h2>
                <p className="ingredient">Tomatoes - 1.2-1.5 kg</p>
                <p className="ingredient">Salt (optional) - 30 g</p>

                <p className="tip">
                    <b>Tip!</b> If tomato juice was prepared in good sanitary conditions and packaged in clean jars scalded at a temperature of 96-97 ° C,
                    then it can not be sterilized, but after capping, turn the lid down.
                </p>

                <h2 className="steps">Step by step recipe:</h2>
                <p className="step_recipe"><b>Step 1.</b> Sort and wash the tomatoes.</p>
                <p className="step_recipe"><b>Step 2.</b> Then peel the tomatoes from the stalks, cut into pieces.</p>
                <p className="step_recipe"><b>Step 3.</b> Next, skip the tomatoes through an electric juicer or chop in a meat grinder.</p>
                <p className="step_recipe"><b>Step 4.</b> Heat the resulting mass to a boil and rub through a colander to remove the skin and seeds.</p>
                <p className="step_recipe"><b>Step 5.</b> Pour the resulting tomato juice into an enamel bowl and boil for 10-15 minutes until the foam
                    disappears completely. Salt and black pepper can be added to ready-made tomato juice.</p>
                <p className="step_recipe"><b>Step 6.</b> Heat jars with steam or hot water.
                    After that, carefully pour the tomato juice into jars heated with steam or hot water.</p>
                <p className="step_recipe"><b>Step 7.</b> Cover jars with lids. Sterilize jars with a capacity of 0.5 liters for 7-10 minutes,
                    1 liter for 10-12 minutes and 3 liters for 15-18 minutes.</p>
                <p className="step_recipe"><b>Step 8.</b> Roll up jars of tomato juice.</p>

                <span className="span_end">Tomato juice is ready.
                    Bon appetit!</span>
            </div>

        </div>
    );
}

export default Recipe;