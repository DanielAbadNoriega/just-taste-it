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

/* MENU_AMERICAN */
import big_pal from "../assets/images/icons/menu_american/big_pal.jpg";
import double_big_pal from "../assets/images/icons/menu_american/double_big_pal.jpg";
import chili_burger from "../assets/images/icons/menu_american/chili_burger.jpeg";
import double_beef_burger from "../assets/images/icons/menu_american/double_beef_burger.jpg";
import western_beacon_bbq from "../assets/images/icons/menu_american/western_beacon_bbq.jpg";
import island_burger from "../assets/images/icons/menu_american/island_burger.jpeg";
import imposible_burger from "../assets/images/icons/menu_american/imposible_burger.jpg";

/* MENU_JAPANESE */
import bata_furabe from "../assets/images/icons/menu_japanese/bata_furabe.jpg";
import butter_maki from "../assets/images/icons/menu_japanese/butter_maki.jpg";
import ebi_maki from "../assets/images/icons/menu_japanese/ebi_maki.jpg";
import hanami from "../assets/images/icons/menu_japanese/hanami.jpg";
import salmon_maki from "../assets/images/icons/menu_japanese/salmon_maki.jpg";
import shoft_shell_roll from "../assets/images/icons/menu_japanese/shoft_shell_roll.jpg";
import tuna_maki from "../assets/images/icons/menu_japanese/tuna_maki.jpg";

/* MENU_ITALIAN */
import capricciosa from "../assets/images/icons/menu_italian/capricciosa.jpg";
import diavola from "../assets/images/icons/menu_italian/diavola.jpg";
import margherita from "../assets/images/icons/menu_italian/margherita.jpg";
import marinara from "../assets/images/icons/menu_italian/marinara.jpg";
import napoletana from "../assets/images/icons/menu_italian/napoletana.jpg";
import prosciutto from "../assets/images/icons/menu_italian/prosciutto.jpg";
import quattro_stagioni from "../assets/images/icons/menu_italian/quattro_stagioni.jpg";

/* MENU_TURKISH */
import adana from "../assets/images/icons/menu_turkish/adana.jpg";
import baklava from "../assets/images/icons/menu_turkish/baklava.jpg";
import iskender from "../assets/images/icons/menu_turkish/iskender.jpg";
import kofte from "../assets/images/icons/menu_turkish/kofte.jpg";
import lahmacun from "../assets/images/icons/menu_turkish/lahmacun.jpg";
import manti from "../assets/images/icons/menu_turkish/manti.jpg";
import pide from "../assets/images/icons/menu_turkish/pide.jpg";

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
    menu: {
      0: {
        name: "Salmon Maki",
        description:
          "Vegan crispy style, avocado, sweet potato, scallions, vegan creme cheese, topped with vegan spicy mayo & vegan eel sauce.",
        img: salmon_maki,
      },
      1: {
        name: "Butter Maki",
        description:
          "Cucumber, crispy onions, avocado, scallions, vegan creme cheese, topped with avocado, vegan mayo cilantro & sesame seeds.",
        img: butter_maki,
      },
      2: {
        name: "Tuna Maki",
        description:
          "Asparagus, avocado, tofu tempura, scallions, vegan creme cheese, topped with crispy onions, vegan spicy mayo & sesame seeds.",
        img: tuna_maki,
      },
      3: {
        name: "Ebi Maki",
        description:
          "Sweet potatoes, asparagus, avocado, vegan creme cheese, topped with seaweed salad & sesame seeds.",
        img: ebi_maki,
      },
      4: {
        name: "Hanami",
        description:
          "Sun dried tomatoes, basil, scallions, vegan creme cheese, roasted bell peppers, topped with vegan parmesan cheese.",
        img: hanami,
      },
      5: {
        name: "Shoft Shell Roll",
        description:
          "Tempura watercraft, tofu tempura teriyaki style, scallions, topped with vegan mayo wasabi & teriyaki sauce.",
        img: shoft_shell_roll,
      },
      6: {
        name: "Bata Furabe",
        description:
          "Mango, avocado, sweet plantains, vegan creme cheese, topped with sliced almonds, toasted coconut & vegan eel sauce.",
        img: bata_furabe,
      },
    },
  },
  {
    img: pizza_food_icon,
    name: "Italian",
    description: "For italian food lovers",
    path: "/italian",
    background: bg_italian,
    menu: {
      0: {
        name: "Margherita",
        description: "Tomato sauce, mozzarella cheese, and basil.",
        img: margherita,
      },
      1: {
        name: "Marinara",
        description:
          "Tomato sauce, garlic, oregano, and extra-virgin olive oil.",
        img: marinara,
      },
      2: {
        name: "Quattro Stagioni",
        description:
          "Tomato sauce, mozzarella cheese, mushrooms, artichokes, olives, and ham.",
        img: quattro_stagioni,
      },
      3: {
        name: "Capricciosa",
        description:
          "Tomato sauce, mozzarella cheese, mushrooms, artichokes, olives, ham, and boiled eggs",
        img: capricciosa,
      },
      4: {
        name: "Prosciutto e Funghi",
        description: "Tomato sauce, mozzarella cheese, ham, and mushrooms.",
        img: prosciutto,
      },
      5: {
        name: "Diavola",
        description:
          "Tomato sauce, mozzarella cheese, spicy salami, and hot chili peppers.",
        img: diavola,
      },
      6: {
        name: "Napoletana",
        description:
          "Tomato sauce, mozzarella cheese, anchovies, capers, and oregano.",
        img: napoletana,
      },
    },
  },
  {
    img: turkish_food_icon,
    name: "Turkish",
    description: "For turkish lovers food",
    path: "/turkish",
    background: bg_turkish,
    menu: {
      0: {
        name: "Adana Kebab",
        description:
          "This dish is made from minced lamb meat, red bell pepper paste, onion, garlic, salt, and pepper. It is usually served with flatbread and grilled vegetables.",
        img: adana,
      },
      1: {
        name: "Manti",
        description:
          "A type of Turkish dumpling filled with minced lamb, onion, garlic, salt, and pepper. It is typically served with yoghurt, tomato sauce, and melted butter.",
        img: manti,
      },
      2: {
        name: "Iskender Kebab",
        description:
          "Thinly sliced lamb meat served on a bed of pita bread, topped with tomato sauce and melted butter. It is typically served with yoghurt and grilled vegetables.",
        img: iskender,
      },
      3: {
        name: "Lahmacun",
        description:
          "A thin, crispy flatbread topped with minced lamb, onion, tomato, red bell pepper, parsley, and a mixture of spices including cumin, paprika, and chili flakes.",
        img: lahmacun,
      },
      4: {
        name: "Pide",
        description:
          "A Turkish version of pizza, typically topped with cheese, minced lamb, onion, and egg. Other toppings can include sucuk (Turkish sausage), spinach, or ground beef.",
        img: pide,
      },
      5: {
        name: "Kofte",
        description:
          "A type of meatball made from minced lamb or beef, onion, garlic, parsley, salt, and pepper. It is typically served with bulgur pilaf, grilled vegetables, and a side salad.",
        img: kofte,
      },
      6: {
        name: "Baklava",
        description:
          "A sweet pastry made with layers of phyllo dough, chopped nuts (usually pistachios or walnuts), and a sweet syrup made from sugar, water, and lemon juice.",
        img: baklava,
      },
    },
  },
];
