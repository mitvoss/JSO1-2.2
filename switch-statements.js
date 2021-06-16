// ==========================================
// Opdracht 1: schrijf een switch statement die op basis van de volgende variabele een bijbehorende foutmelding in de console logt.
// ==========================================

const errorCode = 0;


    switch (errorCode) {
            case 0:
                console.log("Geen watertoevoer")
                    break;

            case 1:
                console.log("Tempratuur te laag")
                    break;

            case 2:
                console.log( "Koffiebonen Op")
                    break;

            case 3:
                console.log( "Afvalbak Vol")
                    break;

            case 4:
                console.log("Geen druk")
    }

    /*const errorCode = 1;
    console.log( "Tempratuur te laag")
const errorCode = 2
    console.log( "Koffiebonen Op")
const errorCode = 3
    console.log( "Afvalbak Vol")
const errorCode = 4
    console.log("Geen druk")*/
// Je mag ervanuit gaan dat deze variabele altijd een waarde tussen de 0 en de 4 bevat. Deze codes hebben de volgende betekenissen (foutmeldingen):
// 0: "Geen watertoevoer"
// 1: "Temperatuur te laag"
// 2: "Koffiebonen op"
// 3: "Afvalbak vol"
// 4: "Geen druk"

// Verwachtte uitkomsten:
// const errorCode = 0 geeft "Geen watertoevoer" in de terminal
// const errorCode = 4 geeft "Geen druk" in de terminal
// etc.


// ==========================================
// Opdracht 2: schrijf een switch statement die op basis van de volgende variabele een bijbehorende foutmelding in de console logt.
// ==========================================

const monitorColor = "green";

    switch (monitorColor) {
        case "red":
            console.log("Kritieke hartslag, actie vereist!")
            break
        case "yellow":
            console.log("Hartslag verhoogd")
            break
        case "orange":
            console.log("Kritieke hartslag, actie vereist!")
            break
        case "green":
            console.log("Hartslag stabiel")
            break
        default:
            console.log("Status onbekend")
    }

// Deze variabele zal altijd een kleur bevatten. De specifieke kleuren waar een melding bij gemaakt moet worden zijn: "red", "green", "yellow" en "orange".
// Deze codes zijn gelinkt aan de volgende meldingen:
// "green": "Hartslag stabiel"
// "yellow": "Hartslag verhoogd"
// "orange": "Kritieke hartslag, actie vereist!"
// "red": "Kritieke hartslag, actie vereist!"
// Bij alle andere kleuren is de status van de hartslag onbekend.

// Verwachtte uitkomsten:
// const monitorColor = "red" geeft "Kritieke hartslag, actie vereist!" in de terminal
// const monitorColor = "green" geeft "Hartslag stabiel" in de terminal
// etc.


// ==========================================
// [BONUSOPDRACHT] - optioneel: kun je de switch-statement uit opdracht 2 ook opschrijven met een aantal if-statements?
// ==========================================

if (monitorColor === "green") {
    console.log("Hartslag stabiel");
} else if (monitorColor === "yellow") {
    console.log("Hartslag verhoogd");
} else if (monitorColor === "red" || monitorColor === "orange") {
    console.log("Kritieke hartslag, actie vereist!");
} else {
    console.log("Status hartslag onbekend");
}