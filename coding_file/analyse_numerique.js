


// Fonction manquante pour résoudre le système (à implémenter)
function solveSystem() {
    // 1. Récupérer toutes les valeurs des coefficients
    // 2. Effectuer la décomposition LU
    // 3. Résoudre le système Ly = Pb puis Ux = y
    // 4. Afficher le résultat dans #equations
}

//--------------------------------------------------------------------------------------**************************************
//--------------------------------------------------------------------------------------**************************************
//CETTE FONCTION PERMET DE REMPLIR LA MATRICE A PAR LES VALEUR ENTRER PAR L UTILISATEUR 

//ELLE AFFICHE ENSUITE LA MATRICE AINSI QUE LE VECTEUR B DANS LA PAGE HTML SUITE A L APPUIE SUR LE BOUTON "RÉSOUDRE LE SYSTÈME"

//--------------------------------------------------------------------------------------**************************************
//--------------------------------------------------------------------------------------**************************************


function solveSystem() {
    const n = parseInt(document.getElementById("numEquations").value);  // Nombre d'équations
    let A = [];  // Matrice A (coefficients)

    // Récupère TOUS les coefficients dans la matrice
    for(let i = 1; i <= n; i++) {
        A[i-1] = [];
        for(let j = 1; j <= n; j++) {
            A[i-1][j-1] = parseFloat(document.getElementById(`coeff${i}${j}`).value) || 0;
        }
    }

    // Vecteur b (résultats)
    let b = [];
    for(let i = 1; i <= n; i++) {
        b[i-1] = parseFloat(document.getElementById(`coeff${i}${n+1}`).value) || 0;
    }

    // AFFICHAGE DIRECT DE LA MATRICE
    let result = "<h3> MATRICE PRÊTE</h3>";
    result += "<strong>A =</strong><br>";
    for(let i = 0; i < n; i++) {
        result += A[i].join(" ") + "<br>";
    }
    result += "<strong>b =</strong> [" + b.join(" ") + "]";

    document.getElementById("equations").innerHTML = result;
    console.log("A:", A, "b:", b);  // Debug

}

//--------------------------------------------------------------------------------------**************************************
//--------------------------------------------------------------------------------------**************************************

//--------------------------------------------------------------------------------------**************************************
//--------------------------------------------------------------------------------------**************************************



