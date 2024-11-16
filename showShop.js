window.onload = () => {
    const cards = [
        {
            image: 'sound_purring.gif',
            audio: 'sound_purring.mp3',
            title: 'Звук (мурчание)',
            price: '100 бук',
            command: '!redeem мурк'
        },
        {
            image: 'ty_rack.png',
            audio: 'ty_rack.mp3',
            title: 'Серега пират говорит "ты рак"',
            price: '200 бук',
            command: '!redeem рак'
        },
        {
            image: 'skolko.gif',
            audio: 'skolko.mp3',
            title: 'Сколько?! да ты шо офигел?!',
            price: '200 бук',
            command: '!redeem сколько'
        },
        {
            image: 'uwu.gif',
            audio: 'uwu.mp3',
            title: 'Uwu',
            price: '100 бук',
            command: '!redeem uwu'
        },
        {
            image: 'apladismenty.gif',
            audio: 'apladismenty.mp3',
            title: 'Аплодисменты',
            price: '100 бук',
            command: '!redeem аплодисменты'
        },
        {
            image: 'eptishmet.gif',
            audio: 'eptishmet.mp3',
            title: 'Бот озвучивает "ну йоптишметь!"',
            price: '100 бук',
            command: '!redeem ну_йоптишметь'
        },
        {
            image: 'gomer-simpson-zloveschiy-smeh.gif',
            audio: 'gomer-simpson-zloveschiy-smeh.mp3',
            title: 'Гомер Симпсон злобно смеется',
            price: '100 бук',
            command: '!redeem злобный_смех_гомера'
        },
        {
            image: 'malovato-budet.jpg',
            audio: 'malovato-budet.mp3',
            title: 'Из мультика "Падал прошлогодний снег"',
            price: '100 бук',
            command: '!redeem маловато_будет'
        },
        {
            image: 'blin-zachem-ya-syuda-prishel.gif',
            audio: 'blin-zachem-ya-syuda-prishel.mp3',
            title: 'Блин, зачем я сюда пришел',
            price: '200 бук',
            command: '!redeem нахиг_я_сюда_пришел'
        },
        {
            image: 'eralash.gif',
            audio: 'eralash.mp3',
            title: 'Ералаш',
            price: '100 бук',
            command: '!redeem ералаш'
        },
        {
            image: 'lya-tyi-kryisa.gif',
            audio: 'lya-tyi-kryisa.mp3',
            title: 'Ля ты крыса! (комедиклаб)',
            price: '100 бук',
            command: '!redeem ля_ты_крыса'
        },
    ];

    let parentEl = document.getElementById('cards');

    for (let i = 0; i < cards.length; i++) {
        const cardParent = document.createElement('div');
        cardParent.classList.add('shop__card');

        const cardImage = document.createElement('div');
        cardImage.classList.add('shop__card_img');
        cardImage.style.backgroundImage = `url('./assets/images/shop/${cards[i].image}')`;

        const cardAudio = document.createElement('audio');
        cardAudio.setAttribute('src', `./assets/audio/${cards[i].audio}`);

        const cardAudioAction = `<div class="audio_action audio_action_play">
                            <div class="audio_play">
                                <svg width="21" height="28" viewBox="0 0 21 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M4.80566 4.31502C4.09746 3.90884 3.20742 3.89545 2.48486 4.27485C1.7623 4.65424 1.3125 5.3684 1.3125 6.14505V21.8566C1.3125 22.6332 1.7623 23.3474 2.48486 23.7268C3.20742 24.1062 4.09746 24.0883 4.80566 23.6866L18.5869 15.8308C19.2712 15.4425 19.6875 14.7507 19.6875 14.0008C19.6875 13.2509 19.2712 12.5636 18.5869 12.1708L4.80566 4.31502Z"/>
                                </svg>
                            </div>
                            <div class="audio_pause">
                                <svg width="21" height="28" viewBox="0 0 21 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M4.55937 4C3.14639 4 2 5.17578 2 6.625V22.375C2 23.8242 3.14639 25 4.55937 25H6.26562C7.67861 25 8.825 23.8242 8.825 22.375V6.625C8.825 5.17578 7.67861 4 6.26562 4H4.55937ZM14.7969 4C13.3839 4 12.2375 5.17578 12.2375 6.625V22.375C12.2375 23.8242 13.3839 25 14.7969 25H16.5031C17.9161 25 19.0625 23.8242 19.0625 22.375V6.625C19.0625 5.17578 17.9161 4 16.5031 4H14.7969Z"/>
                                </svg>
                            </div>
                        </div>
                        <div class="audio_volume">
                            <input type="range" id="volume-control" min="0" max="1" step="0.01" value="1">
                        </div>`;

        const cardTitle = document.createElement('div');
        cardTitle.classList.add('shop__card_title');
        cardTitle.innerText = cards[i].title;

        const cardPrice = document.createElement('div');
        cardPrice.classList.add('shop__card_price');
        cardPrice.innerText = cards[i].price;

        const cardCopy = document.createElement('div');
        cardCopy.classList.add('shop__card_copy');

        const cardCopyText = document.createElement('div');
        cardCopyText.classList.add('shop__card_copy_text');
        cardCopyText.innerText = cards[i].command;

        const cardCopySvg = `<svg width="14" height="16" viewBox="0 0 14 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clip-path="url(#clip0_503_180)">
                                <path d="M12 10.5H6C5.725 10.5 5.5 10.275 5.5 10V2C5.5 1.725 5.725 1.5 6 1.5H10.3781L12.5 3.62188V10C12.5 10.275 12.275 10.5 12 10.5ZM6 12H12C13.1031 12 14 11.1031 14 10V3.62188C14 3.225 13.8406 2.84375 13.5594 2.5625L11.4406 0.440625C11.1594 0.159375 10.7781 0 10.3813 0H6C4.89687 0 4 0.896875 4 2V10C4 11.1031 4.89687 12 6 12ZM2 4C0.896875 4 0 4.89687 0 6V14C0 15.1031 0.896875 16 2 16H8C9.10312 16 10 15.1031 10 14V13H8.5V14C8.5 14.275 8.275 14.5 8 14.5H2C1.725 14.5 1.5 14.275 1.5 14V6C1.5 5.725 1.725 5.5 2 5.5H3V4H2Z"
                                      fill="white"/>
                            </g>
                            <defs>
                                <clipPath id="clip0_503_180">
                                    <rect width="14" height="16" fill="white"/>
                                </clipPath>
                            </defs>
                        </svg>`;

        parentEl.appendChild(cardParent);
        cardParent.appendChild(cardImage);
        cardImage.appendChild(cardAudio);
        cardImage.innerHTML = cardImage.innerHTML + cardAudioAction;
        cardParent.appendChild(cardTitle);
        cardParent.appendChild(cardPrice);
        cardParent.appendChild(cardCopy);
        cardCopy.appendChild(cardCopyText);
        cardCopy.innerHTML = cardCopy.innerHTML + cardCopySvg;
    }

    let shopCardCommand = document.querySelectorAll('.shop__card_copy_text');
    for (let i = 0; i < shopCardCommand.length; i++) {
        shopCardCommand[i].addEventListener('click', function () {
            copyCommand(shopCardCommand[i]);
        });
    }

    let audioElements = document.querySelectorAll('audio');
    let audioActionElements = document.querySelectorAll('.audio_action');
    let audioVolume = document.querySelectorAll('.audio_volume input');

    for (let i = 0; i < audioActionElements.length; i++) {
        let audioAction = audioActionElements[i];

        audioAction.addEventListener('click', function () {
            for (let j = 0; j < audioElements.length; j++) {
                if (i !== j) {
                    pauseAudio(j);
                }
            }
            if (!audioAction.classList.toggle('audio_action_pause')) {
                audioElements[i].currentTime = 0;
                pauseAudio(i);
            } else {
                playedAudio(i);
            }
        });

        audioElements[i].addEventListener('ended', function () {
            pauseAudio(i);
        });

        audioVolume[i].addEventListener("input", () => {
            audioElements[i].volume = audioVolume[i].value;
        });
    }

    function pauseAudio(id) {
        audioActionElements[id].classList.add('audio_action_play');
        audioActionElements[id].classList.remove('audio_action_pause');
        audioElements[id].pause();
        audioElements[id].currentTime = '0';
    }

    function playedAudio(id) {
        audioActionElements[id].classList.add('audio_action_pause');
        audioActionElements[id].classList.remove('audio_action_play');
        audioElements[id].play();
    }

};