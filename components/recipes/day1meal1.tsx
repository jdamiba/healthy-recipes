const Day1Meal1 = () => {
  return (
    <div className="max-w-3xl mx-auto p-6 bg-white shadow-lg rounded-lg">
      {/* Ingredients Section */}
      <div className="mb-6">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">
          Ingredients
        </h2>
        <ul className="list-disc pl-6 text-gray-600">
          <li>1 boneless, skinless chicken breast, sliced into strips</li>
          <li>1 cup broccoli florets</li>
          <li>1 cup sliced bell peppers (red, green, or yellow)</li>
          <li>1/2 cup sliced carrots</li>
          <li>1/2 cup snap peas</li>
          <li>2 cloves garlic, minced</li>
          <li>1 tablespoon olive oil</li>
          <li>2 tablespoons low-sodium soy sauce</li>
          <li>1 tablespoon honey or maple syrup</li>
          <li>1/2 teaspoon ginger powder (or fresh ginger, minced)</li>
          <li>1/4 teaspoon red pepper flakes (optional)</li>
          <li>1/2 cup cooked brown rice or quinoa</li>
        </ul>
      </div>

      {/* Instructions Section */}
      <div>
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">
          Instructions
        </h2>
        <ol className="list-decimal pl-6 text-gray-600">
          <li>Heat the olive oil in a large pan over medium heat.</li>
          <li>
            Add the chicken strips and cook until they are no longer pink, about
            5-7 minutes.
          </li>
          <li>Add garlic and cook for 1 minute until fragrant.</li>
          <li>
            Add broccoli, bell peppers, carrots, and snap peas to the pan.
            Stir-fry for 4-5 minutes until vegetables are tender-crisp.
          </li>
          <li>
            In a small bowl, mix soy sauce, honey (or maple syrup), ginger, and
            red pepper flakes (if using). Pour the sauce over the chicken and
            vegetables, and stir to coat everything evenly.
          </li>
          <li>
            Cook for another 2-3 minutes until the sauce thickens slightly.
          </li>
          <li>Serve hot over cooked brown rice or quinoa.</li>
        </ol>
      </div>
    </div>
  );
};

export default Day1Meal1;
