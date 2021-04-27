
let touts= ['wilaya',           // 0
            'one_commune',      // 1
            'multi_commune',    // 2
            'étages',           // 3
            'chambers',         // 4
            'min_chambers',     // 5
            'max_chambers',     // 6
            'prix',             // 7
            'min_prix',         // 8
            'max_prix',         // 9
            'facade',           // 10
            'Superficie',       // 11
            'Spécifications'];  // 12




let parts = {
    acheter:{
    Appartement: ['one_commune', 'étages', 'chambers', 'prix'],
    Terrain: ['one_commune', 'étages', 'chambers', 'prix', 'min_chambers', 'max_chambers', 'min_prix', 'max_prix'],
    Villa: ['one_commune', 'chambers', 'prix'],
    Local: ['one_commune', 'chambers', 'prix'],
    Carcasse: ['one_commune', 'chambers', 'prix'],
    Niveau_De_Villa: ['one_commune', 'chambers', 'prix'],
    Terrain_Agricole: ['one_commune', 'chambers', 'prix'],
    Duplex: ['one_commune', 'chambers', 'prix'],
    Immeuble: ['one_commune', 'chambers', 'prix'],
    Studio: ['one_commune', 'chambers', 'prix'],
    Hangar: ['one_commune', 'chambers', 'prix'],
    Usine: ['one_commune', 'chambers', 'prix'],
    Bungalow: ['one_commune', 'chambers', 'prix']
    },
    vender:{
    Appartement: ['one_commune', 'étages', 'chambers'],
    Terrain: ['one_commune', 'étages', 'chambers', 'prix','min_chambers', 'max_chambers', 'min_prix', 'max_prix'],
    Villa: ['one_commune', 'chambers', 'prix'],
    Local: ['one_commune', 'chambers', 'prix'],
    Carcasse: ['one_commune', 'chambers', 'prix'],
    Niveau_De_Villa: ['one_commune', 'chambers', 'prix'],
    Terrain_Agricole: ['one_commune', 'chambers', 'prix'],
    Duplex: ['one_commune', 'chambers', 'prix'],
    Immeuble: ['one_commune', 'chambers', 'prix'],
    Studio: ['one_commune', 'chambers', 'prix'],
    Hangar: ['one_commune', 'chambers', 'prix'],
    Usine: ['one_commune', 'chambers', 'prix'],
    Bungalow: ['one_commune', 'chambers', 'prix']
    },
    client_louer:{
    Appartement: ['one_commune', 'étages', 'chambers', 'prix'],
    Terrain: ['one_commune', 'étages', 'chambers', 'prix', 'min_chambers', 'max_chambers', 'min_prix', 'max_prix'],
    Villa: ['one_commune', 'chambers', 'prix'],
    Local: ['one_commune', 'chambers', 'prix'],
    Carcasse: ['one_commune', 'chambers', 'prix'],
    Niveau_De_Villa: ['one_commune', 'chambers', 'prix'],
    Terrain_Agricole: ['one_commune', 'chambers', 'prix'],
    Duplex: ['one_commune', 'chambers', 'prix'],
    Immeuble: ['one_commune', 'chambers', 'prix'],
    Studio: ['one_commune', 'chambers', 'prix'],
    Hangar: ['one_commune', 'chambers', 'prix'],
    Usine: ['one_commune', 'chambers', 'prix'],
    Bungalow: ['one_commune', 'chambers', 'prix']
    },
    louer_vacance:{
    Appartement: ['one_commune', 'étages', 'chambers', 'prix'],
    Terrain: ['one_commune', 'étages', 'chambers', 'prix', 'min_chambers', 'max_chambers', 'min_prix', 'max_prix'],
    Villa: ['one_commune', 'chambers', 'prix'],
    Local: ['one_commune', 'chambers', 'prix'],
    Carcasse: ['one_commune', 'chambers', 'prix'],
    Niveau_De_Villa: ['one_commune', 'chambers', 'prix'],
    Terrain_Agricole: ['one_commune', 'chambers', 'prix'],
    Duplex: ['one_commune', 'chambers', 'prix'],
    Immeuble: ['one_commune', 'chambers', 'prix'],
    Studio: ['one_commune', 'chambers', 'prix'],
    Hangar: ['one_commune', 'chambers', 'prix'],
    Usine: ['one_commune', 'chambers', 'prix'],
    Bungalow: ['one_commune', 'chambers', 'prix']
    },
    vendeur_louer:{
    Appartement: ['one_commune', 'étages', 'chambers', 'prix'],
    Terrain: ['one_commune', 'étages', 'chambers', 'prix',  'min_chambers', 'max_chambers', 'min_prix', 'max_prix'],
    Villa: ['one_commune', 'chambers', 'prix'],
    Local: ['one_commune', 'chambers', 'prix'],
    Carcasse: ['one_commune', 'chambers', 'prix'],
    Niveau_De_Villa: ['one_commune', 'chambers', 'prix'],
    Terrain_Agricole: ['one_commune', 'chambers', 'prix'],
    Duplex: ['one_commune', 'chambers', 'prix'],
    Immeuble: ['one_commune', 'chambers', 'prix'],
    Studio: ['one_commune', 'chambers', 'prix'],
    Hangar: ['one_commune', 'chambers', 'prix'],
    Usine: ['one_commune', 'chambers', 'prix'],
    Bungalow: ['one_commune', 'chambers', 'prix']
    },
    échange:{
    Appartement: ['one_commune', 'étages', 'chambers', 'prix'],
    Studio: ['one_commune', 'chambers', 'prix'],
    Villa: ['one_commune', 'chambers', 'prix'],
    Niveau_De_Villa: ['one_commune', 'chambers', 'prix'],
    Bungalow: ['one_commune', 'chambers', 'prix'],
    Duplex: ['one_commune', 'chambers', 'prix'],
    Terrain: [null],
    Terrain_Agricole: [null],
    Local: [null],
    Carcasse: [null],
    Immeuble: [null],
    Hangar: [null],
    Usine: [null]
    }
}

let result = {
    // acheter, vender, client_louer, louer_vacance, vendeur_louer, échange
    Appartement: [],
    Bungalow: [],
    Carcasse: [],
    Duplex: [],
    Hangar: [],
    Immeuble: [],
    Local: [],
    Niveau_De_Villa: [],
    Studio: [],
    Terrain: [],
    Terrain_Agricole: [],
    Usine: [],
    Villa: [] 
}

for (const action of Object.keys(parts)) { //acheter
    for (const type of Object.keys(parts[action])) { //villa
        res = parts[action][type].map((item)=>{
            return touts.indexOf(item)
        })
        result[type].push(res)
    }
}

console.log(result)

/*
    Output (result) : 

    Appartement: [[1, 3, 4, 7], [1, 3, 4], [1, 3, 4, 7], [1, 3, 4, 7], [1, 3, 4, 7], [1, 3, 4, 7]],
    Bungalow: [[1, 4, 7], [1, 4, 7], [1, 4, 7], [1, 4, 7], [1, 4, 7], [1, 4, 7]],
    Carcasse: [[1, 4, 7], [1, 4, 7], [1, 4, 7], [1, 4, 7], [1, 4, 7]],
    Duplex: [[1, 4, 7], [1, 4, 7], [1, 4, 7], [1, 4, 7], [1, 4, 7], [1, 4, 7]],
    Hangar: [[1, 4, 7], [1, 4, 7], [1, 4, 7], [1, 4, 7], [1, 4, 7]],
    Immeuble: [[1, 4, 7], [1, 4, 7], [1, 4, 7], [1, 4, 7], [1, 4, 7]],
    Local: [[1, 4, 7], [1, 4, 7], [1, 4, 7], [1, 4, 7], [1, 4, 7]],
    Niveau_De_Villa: [[1, 4, 7], [1, 4, 7], [1, 4, 7], [1, 4, 7], [1, 4, 7], [1, 4, 7]],
    Studio: [[1, 4, 7], [1, 4, 7], [1, 4, 7], [1, 4, 7], [1, 4, 7], [1, 4, 7]],
    Terrain: [[1, 3, 4, 7, 5, 6, 8, 9], [1, 3, 4, 7, 5, 6, 8, 9], [1, 3, 4, 7, 5, 6, 8, 9], [1, 3, 4, 7, 5, 6, 8, 9], [1, 3, 4, 7, 5, 6, 8, 9]],
    Terrain_Agricole: [[1, 4, 7], [1, 4, 7], [1, 4, 7], [1, 4, 7], [1, 4, 7]],
    Usine: [[1, 4, 7], [1, 4, 7], [1, 4, 7], [1, 4, 7], [1, 4, 7]],
    Villa: [[1, 4, 7], [1, 4, 7], [1, 4, 7], [1, 4, 7], [1, 4, 7], [1, 4, 7]]

*/