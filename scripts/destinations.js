import { cards } from "../data/cards.js";

let cardsHTML = "";

cards.forEach((card) => {
    cardsHTML += `
        <div class="container-destination">
            <div class="container-destination-spesific">
                <div>
                    <img src="${card.image}" alt="">
                </div>
                <div class="container-destination-information">
                    <div class="container-destination-details">
                        <p class="destination-name">
                            ${card.catagory}
                        </p>
                        <button class="button-link">
                            <a href=""><img src="assets/Icon wrap.svg" alt=""></a>
                        </button>
                    </div>
                    <div>
                        <p class="destination-information">
                            ${card.information}
                        </p>
                    </div>
                </div>
            </div>
            
            <div class="container-information-profile">
                <div class="information-update">
                    <div>
                        <img src="${card.imageUploader}" alt="">
                    </div>
                    <div class="information-profile">
                        <p class="name-uploader">${card.nameUploader}</p>
                        <p class="date">${card.date}</p>
                    </div>
                </div>
            </div>
        </div>
    `
})



const tes = document.querySelector('.js-grid-destinations')
    .innerHTML = cardsHTML;

