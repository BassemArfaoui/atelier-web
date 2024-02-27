(function() {
    function generateRandomNumber(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    function getGameLevel() {
        let level = prompt("Choisissez un niveau de difficulté : 1:facile, 2:intermidiare, 3:difficile");
        switch (level.toLowerCase()) {
            case "1":
                return { maxAttempts: 10, min: 1, max: 10 };
            case "2":
                return { maxAttempts: 7, min: 1, max: 50 };
            case "3":
                return { maxAttempts: 5, min: 1, max: 100 };
            default:
                alert("Niveau non reconnu, difficulté par défaut : Facile");
                return { maxAttempts: 10, min: 1, max: 10 };
        }
    }

    function playGame() {
        const level = getGameLevel();
        const randomNumber = generateRandomNumber(level.min, level.max);
        let attempts = 0;

        while (attempts < level.maxAttempts) {
            const guess = prompt(`Devinez le nombre entre ${level.min} et ${level.max} (Tentative ${attempts + 1} sur ${level.maxAttempts})`);
            attempts++;
            if (parseInt(guess) === randomNumber) {
                alert(`Félicitations ! Vous avez trouvé le nombre en ${attempts} tentatives.`);
                break;
            } else if (attempts === level.maxAttempts) {
                alert(`Le nombre : ${randomNumber}.`);
            } else if (parseInt(guess) < randomNumber) {
                alert("plus grand");
            } else if (parseInt(guess) > randomNumber) {
                alert("plus petit");
            } else {
                alert("nombre non valide.");
                attempts--; 
            }
        }

        if (confirm("rejouer ?")) {
            playGame();
        }
    }

    playGame();
})();
