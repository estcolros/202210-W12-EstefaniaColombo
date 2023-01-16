# Challenge week 12

## GoT V2 with React and Flux 🗡️

You will have to program a user interface to reflect the following data model.

In **_Game of Thrones_** there are characters. All these characters have the following information:

-   Name
-   Family they belong to
-   Age
-   Status (alive or dead, although initially they are all alive).

All characters can perform the action of communicating, but each type of character (not each character) communicates in a different way.

**Note**: this method returns the string with the phrase, it does not print by console.

All characters can perform the action of dying, changing their state to dead.

All characters belong to the same series, **_"Game of Thrones"_**.

Each of these characters can be a king, a fighter, an advisor, or a squire.

-   A **king 👑**, in addition to the information he has as a character, has the following information:

    -   Years of reign.
    -   When he communicates he says: `"You are all going to die".`

-   A **fighter 🗡**, in addition to the information he has for being a character, has the following information:

    -   Weapon he uses.
    -   Dexterity (a value between 0 and 10).
    -   When communicating he says: `"First I hit and then I ask".`

-   An **advisor 🎓**, in addition to the information he has for being a character, has the following information:

    -   Character he advises (who can be king, fighter, advisor or squire).
    -   When communicating he says: `"I don't know why, but I think I'm going to die soon".`

-   A **squire 🛡**, in addition to the information he has because he is a character, has the following information:
    -   Character he serves (who can only be a fighter).
    -   Degree of pelotism (a value between 0 and 10).
    -   When communicating he says: `"I'm a loser".`

## Rules

Create the following TS files and make them work as modules via import and export:

-   character.ts, King.ts, Fighter.ts, Advisor.ts, Squire.ts (put inside each class).
-   characters.ts (create an array with the characters inside).

| **Game characters** |     **Role**      |                      **Message**                      |
| :-----------------: | :---------------: | :---------------------------------------------------: |
|  Joffrey Baratheon  |       King        |              _You are all going to die_               |
|   Jaime Lannister   |      Fighter      |             _First I hit and then I ask_              |
| Daenerys Targaryen  |      Fighter      |             _First I hit and then I ask_              |
|  Tyrion Lannister   | Daenerys' advisor | _I don't know why, but I think I'm going to die soon_ |
|        Bronn        |  Jaime's squire   |                     _I'm a loser_                     |

-   index.ts (here goes all the rest of the statement, and this will be the entry point).

## Requeriments

1. Make that for each character of the array the corresponding card is shown in the browser:
    - In the element with class `emoji` has to appear one of these emojis depending on the type of character: 👑 🗡 🎓 🛡.
    - If the character is dead, its picture should appear upside down (do the necessary CSS).
    - In the list with class `metadata`, make only the `li` corresponding to the character appear.
2. When the user clicks the _"dies"_ button, it has to change the state of the character, and the interface should reflect the change.
3. When the user clicks the _"speaks"_ button, the element with class `communications` must appear with the corresponding text and image. Make this `communications` element have class `on` for 2 seconds and then remove it.

## Netlify

**Deploy GoT DOM :** https://estcolros-week7-got.netlify.app/
**Deploy GoT REACT :**

## SonarCloud

**Overview:**
