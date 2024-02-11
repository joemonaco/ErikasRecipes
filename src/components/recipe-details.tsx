/**
 * This code was generated by v0 by Vercel.
 * @see https://v0.dev/t/ieZDrYj1es0
 */

export function RecipeDetailsPage() {
  return (
    <div className="w-full py-6 space-y-6">
      <div className="container px-4 space-y-4">
        <div className="space-y-2">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl">
              Perfect Chocolate Chip Cookies
            </h1>
            <p className="text-gray-500 dark:text-gray-400">
              Yummy cookies for all occasions.
            </p>
          </div>
          <div className="flex flex-col gap-1 min-[400px]:flex-row">
            <div className="flex items-center gap-1 text-sm">
              <ClockIcon className="w-4 h-4 flex-shrink-0" />
              <span className="font-semibold">Prep time:</span>
              <span>10 min</span>
            </div>
            <div className="flex items-center gap-1 text-sm">
              <ClockIcon className="w-4 h-4 flex-shrink-0" />
              <span className="font-semibold">Cook time:</span>
              <span>12 min</span>
            </div>
            <div className="flex items-center gap-1 text-sm">
              <ClockIcon className="w-4 h-4 flex-shrink-0" />
              <span className="font-semibold">Total time:</span>
              <span>22 min</span>
            </div>
          </div>
        </div>
        <div className="mx-auto max-w-3xl">
          <img
            alt="Recipe"
            className="aspect-video overflow-hidden rounded-xl object-bottom"
            height="550"
            src="/placeholder.svg"
            width="1100"
          />
        </div>
      </div>
      <div className="bg-gray-100 dark:bg-gray-800">
        <div className="container px-4 py-6 space-y-4">
          <div className="space-y-2">
            <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl">
              Ingredients
            </h2>
            <p className="text-gray-500 dark:text-gray-400">
              You'll need the following ingredients to make this recipe.
            </p>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            <ul className="list-disc pl-4 space-y-2">
              <li>1 cup of all-purpose flour</li>
              <li>1/2 cup of granulated sugar</li>
              <li>1/2 cup of packed brown sugar</li>
              <li>1/2 cup of butter, softened</li>
              <li>1/2 teaspoon of baking soda</li>
              <li>1/4 teaspoon of salt</li>
              <li>1/2 teaspoon of vanilla extract</li>
              <li>1 large egg</li>
              <li>1 cup of semisweet chocolate chips</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="container px-4 py-6 space-y-4">
        <div className="space-y-2">
          <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl">
            Directions
          </h2>
          <p className="text-gray-500 dark:text-gray-400">
            Follow these steps to make the perfect chocolate chip cookies.
          </p>
        </div>
        <ol className="list-decimal pl-4 space-y-4">
          <li>
            Preheat the oven to 375°F (190°C). Line a baking sheet with
            parchment paper and set aside.
          </li>
          <li>
            In a large bowl, cream together the butter, granulated sugar, and
            brown sugar until light and fluffy.
          </li>
          <li>
            Add the egg and vanilla extract to the butter mixture and beat until
            well combined.
          </li>
          <li>
            In a separate bowl, whisk together the flour, baking soda, and salt.
            Gradually add the dry ingredients to the wet ingredients, mixing
            until just combined.
          </li>
          <li>
            Fold in the chocolate chips, making sure they are evenly distributed
            throughout the dough.
          </li>
          <li>
            Drop rounded tablespoons of cookie dough onto the prepared baking
            sheet, spacing the cookies about 2 inches apart.
          </li>
          <li>
            Bake the cookies in the preheated oven for 10 to 12 minutes, or
            until the edges are golden brown and the tops are set.
          </li>
          <li>
            Remove the cookies from the oven and allow them to cool on the
            baking sheet for 5 minutes before transferring them to a wire rack
            to cool completely.
          </li>
        </ol>
      </div>
    </div>
  );
}

function ClockIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  );
}