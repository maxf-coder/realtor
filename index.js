import {propertyForSaleArr} from "./properties/propertyForSaleArr.js";
import {placeholderPropertyObj} from "./properties/placeholderPropertyObj.js";

function getPropertyHtml(propertyArr = null, placeholder = placeholderPropertyObj) {
    const generateCardHtml = property => {
        return  `<section class="card">
                    <img src="./images/${property.image}">
                    <div class="card-right">
                        <h2>${property.propertyLocation}</h2>
                        <h3>£${property.priceGBP}</h3>
                        <p>${property.comment}</p>
                        <h3>${property.roomsM2.reduce((sum, current) => sum + current, 0)} m²</h3>
                    </div>
                </section>`;
    };

    if(propertyArr && propertyArr.length > 0){
        return propertyArr.map(generateCardHtml).join('');
    }
    else {
        return generateCardHtml(placeholder);
    }
}

document.getElementById("container").innerHTML = getPropertyHtml(propertyForSaleArr, placeholderPropertyObj);