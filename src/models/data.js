/* BACKGROUNDS */
import bg_american from "../assets/images/backgrounds/bg_american.jpeg";
import bg_italian from "../assets/images/backgrounds/bg_italian.jpeg";
import bg_japanese from "../assets/images/backgrounds/bg_japanese.jpg";
import bg_turkish from "../assets/images/backgrounds/bg_turkish.jpg";

/* ICONS */
import american_food_icon from "../assets/images/icons/menuHome/american_food_icon.jpg";
import sushi_food_icon from "../assets/images/icons/menuHome/sushi_food3_icon.jpg";
import pizza_food_icon from "../assets/images/icons/menuHome/pizza_food_icon.jpg";
import turkish_food_icon from "../assets/images/icons/menuHome/turkish_food_icon.jpg";

/* BURGERS */
import big_pal from "../assets/images/icons/burger/big_pal.jpg";
import double_big_pal from "../assets/images/icons/burger/double_big_pal.jpg";
import chili_burger from "../assets/images/icons/burger/chili_burger.jpeg";
import double_beef_burger from "../assets/images/icons/burger/double_beef_burger.jpg";
import western_beacon_bbq from "../assets/images/icons/burger/western_beacon_bbq.jpg";
import island_burger from "../assets/images/icons/burger/island_burger.jpeg";
import imposible_burger from "../assets/images/icons/burger/imposible_burger.jpg";

export const FOOD_TIPES = [
  {
    img: american_food_icon,
    name: "American",
    description: "For american food lovers",
    path: "/american",
    background: bg_american,
    menu: {
      0: {
        name: "Big Pal",
        description:
          "1/3 lb. all beef patty, mayo, lettuce, tomato, and onion. May be ordered with or without cheese or bacon.",
        img: big_pal,
      },
      1: {
        name: "Double Big Pal",
        description:
          "Two 1/3 lb. all beef patties, mayo, lettuce tomato and onion. May be ordered with or without cheese or bacon.",
        img: double_big_pal,
      },
      2: {
        name: "Chili Burger",
        description:
          "1/3 lb. all beef patty, chili, cheese and onions. May be ordered with or without cheese or bacon.",
        img: chili_burger,
      },
      3: {
        name: "Double Beef Burger",
        description:
          "Two all beef patties, cheese, mayo, lettuce, tomato and onion. May be ordered with or without cheese or bacon.",
        img: double_beef_burger,
      },
      4: {
        name: "Western Bacon BBQ",
        description:
          "Rustle up your hunger for this burger made with 100% pure lean beef, fresh ground and grilled to perfection, topped with BBQ sauce, two onion rings, lettuce, tomato, bacon and Swiss cheese on a toasted sponge-dough bun.",
        img: western_beacon_bbq,
      },
      5: {
        name: "Island Burger",
        description:
          "This tasty burger’s got tang featuring 100% pure lean beef, fresh ground and grilled to perfection topped with thousand island dressing, lettuce, tomato and American cheese on a toasted sponge-dough bun.",
        img: island_burger,
      },
      6: {
        name: "Impossible Burger",
        description:
          "A delicious burger made entirely from plants for people who love meat. Standard kitchen operations involve shared cooking and preparation areas where cross-contact with other foods and allergens may occur. Cross contaminants include, but are not limited to: poultry, beef, dairy, gluten, etc. Fatburger is not a certified vegan restaurant.",
        img: imposible_burger,
      },
    },
  },
  {
    img: sushi_food_icon,
    name: "Japanese",
    description: "For japanese food lovers",
    path: "/japanese",
    background: bg_japanese,
  },
  {
    img: pizza_food_icon,
    name: "Italian",
    description: "For italian food lovers",
    path: "/italian",
    background: bg_italian,
  },
  {
    img: turkish_food_icon,
    name: "Turkish",
    description: "For turkish lovers food",
    path: "/turkish",
    background: bg_turkish,
  },
];
