import { King } from './king.js';
import { Fighter } from './fighter.js';
import { Squire } from './squire.js';
import { Advisor } from './advisor.js';
import { characters } from '../data/characters.data.js';
import { Character } from './character.js';

const charactersTemplate = () => {
    let contCharsTemplate = `<div class="app container"><ul class="characters-list row list-unstyled">`;
    characters.forEach((item, index) => {
        contCharsTemplate += ` <li class="character col">
                    <div class="card character__card">
                        <img
                            src="${item.imageSource}"
                            alt="${item.name}${item.family}"
                            class="character__picture card-img-top
                            ${!item.isAlive ? 'character__picture--die' : ''}
                            "
                        />
                        <div class="card-body">
                            <h2 class="character__name card-title h4">
                                ${item.name} ${item.family}
                            </h2>
                            <div class="character__info">
                                <ul class="list-unstyled">
                                    <li>Age: ${item.age} years</li>
                                    <li>
                                        State: ${
                                            !item.isAlive
                                                ? `<i class="fas fa-thumbs-down"></i>`
                                                : `<i class="fas fa-thumbs-up"></i>`
                                        }
                                    </li>
                                </ul>
                            </div>
                            <div class="character__overlay">
                                <ul class="list-unstyled">
                                ${
                                    item instanceof King
                                        ? `<li>Years of reign: ${item.yearsOfReign}</li>`
                                        : ''
                                }
                                ${
                                    item instanceof Fighter
                                        ? `<li>Weapon: ${item.weapon}</li>
                                            <li>Dexterity: ${item.dexterity}</li>`
                                        : ''
                                }
                                ${
                                    item instanceof Advisor
                                        ? `<li>Advises: ${item.advises}</li>`
                                        : ''
                                }
                                ${
                                    item instanceof Squire
                                        ? `<li>Rally: ${item.degreeOfPelotism}</li>
                                            <li>Serves: ${item.advises}</li>`
                                        : ''
                                }
                                    <li>Message: ${item.message}</li>
                                </ul>
                                <div class="character__actions">
                                ${
                                    item.isAlive
                                        ? `<button class="character__action character__action--comunicate btn" value=${index}>
                                        Speak
                                    </button>`
                                        : ''
                                }
                                ${
                                    item.isAlive
                                        ? `<button class="character__action character__action--die btn " value=${index}>
                                        Dies
                                    </button>`
                                        : ''
                                }
                                </div>
                            </div>
                        </div>
                        <i class="emoji">${item.emoji}</i>
                    </div>
                </li>`;
    });
    return contCharsTemplate;
};

const comunicationTemplate = (profile: Character) => {
    const contComunicTemplate = document.querySelector('.comunications');
    if (!contComunicTemplate) return;
    contComunicTemplate.innerHTML = ` 
            <p class="comunications__text display-1">
                ${profile.message}
            </p>
            <img
                class="comunications__picture"
                src="${profile.imageSource}"
                alt="${profile.name} ${profile.family}"
            />
        `;
};

const renderContent = () => {
    const templates = [charactersTemplate()];
    const slots = document.querySelectorAll('slot');
    slots.forEach((item, i) => (item.outerHTML = templates[i]));
};
renderContent();

const handleClickDie = (event: any) => {
    console.log('click DIE');
    console.log(event.target.value);
    characters[event.target.value].die();

    const element = document.querySelector('.app-container');
    if (!element) return;
    element.innerHTML = charactersTemplate();
    dieListeners();
    comunicateListeners();
};

const handleClickComunicate = (event: any) => {
    console.log('click COMUNICATE');
    console.log(event.target.value);
    characters[event.target.value].communicate();

    const element = document.querySelector('.comunications');
    if (!element) return;
    const profile = characters[event.target.value];
    comunicationTemplate(profile);
    element.classList.add('comunications__on');

    setTimeout(() => {
        if (!element) return;
        element.classList.remove('comunications__on');
    }, 2000);
    comunicateListeners();
};

const dieListeners = () => {
    const nodeList = document.querySelectorAll('.character__action--die');
    nodeList.forEach((item) => {
        item?.addEventListener('click', handleClickDie);
    });
};
dieListeners();

const comunicateListeners = () => {
    const nodeList = document.querySelectorAll(
        '.character__action--comunicate'
    );
    nodeList.forEach((item) => {
        item?.addEventListener('click', handleClickComunicate);
    });
};
comunicateListeners();
