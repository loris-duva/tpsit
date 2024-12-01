let numeroCasuale = 0;

        function main(mossaUtente) {
            let secondiRimanenti = 3;
            document.getElementById("contoAllaRovescia").innerHTML = "";
            document.getElementById("out2").innerHTML = "";

            let interval = setInterval(() => {
                document.getElementById("contoAllaRovescia").innerHTML = secondiRimanenti;
                secondiRimanenti--;

                if (secondiRimanenti < 0) {
                    clearInterval(interval);
                    TiroMorraBot(mossaUtente);
                }
            }, 1000);
        }

        function TiroMorraBot(mossaUtente) {
            numeroCasuale = Math.floor(Math.random() * 3);
            let morraArray = ["sasso", "carta", "forbice"];
            let mossaBot = morraArray[numeroCasuale];

            document.getElementById("contoAllaRovescia").innerHTML = 
                `Il bot ha scelto: ${mossaBot}`;
            

            let risultato = "";
            if (mossaUtente === mossaBot) {
                risultato = "Pareggio!";
            } else if (
                (mossaUtente === "sasso" && mossaBot === "forbice") ||
                (mossaUtente === "carta" && mossaBot === "sasso") ||
                (mossaUtente === "forbice" && mossaBot === "carta")
            ) {
                risultato = "Hai vinto!";
            } else {
                risultato = "Hai perso!";
            }

            document.getElementById("out2").innerHTML = risultato;
        }