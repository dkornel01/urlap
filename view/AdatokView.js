import AdatView from "./AdatView.js";

class AdatokView {
    #adat = [];
    #tipus = {};
    #kulcs = {};
    #szuloElem
    constructor(adat,szuloElem) {
        this.#adat = adat;
        this.#szuloElem = szuloElem;
        this.htmlOsszallit();
    }
    htmlOsszallit() {
        let kiir=""
        kiir +=`<table class="tablazat">
        `
        let tarto=Object.keys(this.#adat[0])
        for (let index = 0; index < tarto.length; index++) {
                kiir+=`<tbody>`
                kiir+=`<tr>`
                kiir+=`<th>${tarto[index]}</th>`
                kiir+=`</tr>`
                let tarto2=Object.values(this.#adat)
                
                for (let x = 0; x < tarto2.length; x++) {
                kiir+=`<tr>`
                let element=Object.values(tarto2[x])
                    kiir +=`
                    <td>${element[index]}</td>
                    `
                    console.log(element[index])
                    kiir+=`</tr>`
                }
                
                kiir+=`</tbody>`
            }
        kiir +=`
        </table>
        `
        this.#szuloElem.html(kiir)
    }
}
export default AdatokView;
