
let touts= ['wilaya',           // 0
            'multi_commune',    // 1
            'étages',           // 2
            'chambers',         // 3
            'min_chambers',     // 4
            'max_chambers',     // 5
            'prix',             // 6
            'min_prix',         // 7
            'max_prix',         // 8
            'facade',           // 9
            'Superficie',       // 10
            'Spécifications'    // 11
            ];




let parts = {
    acheter:{
        Appartement: ['étages', 'chambers', 'prix'],
        Terrain: [ 'étages', 'chambers', 'prix', 'min_chambers', 'max_chambers', 'min_prix', 'max_prix'],
        Villa: [ 'chambers', 'prix'],
        Local: [ 'chambers', 'prix'],
        Carcasse: [ 'chambers', 'prix'],
        Niveau_De_Villa: [ 'chambers', 'prix'],
        Terrain_Agricole: [ 'chambers', 'prix'],
        Duplex: [ 'chambers', 'prix'],
        Immeuble: [ 'chambers', 'prix'],
        Studio: [ 'chambers', 'prix'],
        Hangar: [ 'chambers', 'prix'],
        Usine: [ 'chambers', 'prix'],
        Bungalow: [ 'chambers', 'prix']
    },
    vender:{
        Appartement: [ 'étages', 'chambers'],
        Terrain: [ 'étages', 'chambers', 'prix','min_chambers', 'max_chambers', 'min_prix', 'max_prix'],
        Villa: [ 'chambers', 'prix'],
        Local: [ 'chambers', 'prix'],
        Carcasse: [ 'chambers', 'prix'],
        Niveau_De_Villa: [ 'chambers', 'prix'],
        Terrain_Agricole: [ 'chambers', 'prix'],
        Duplex: [ 'chambers', 'prix'],
        Immeuble: [ 'chambers', 'prix'],
        Studio: [ 'chambers', 'prix'],
        Hangar: [ 'chambers', 'prix'],
        Usine: [ 'chambers', 'prix'],
        Bungalow: [ 'chambers', 'prix']
    },
    client_louer:{
        Appartement: [ 'étages', 'chambers', 'prix'],
        Terrain: [ 'étages', 'chambers', 'prix', 'min_chambers', 'max_chambers', 'min_prix', 'max_prix'],
        Villa: [ 'chambers', 'prix'],
        Local: [ 'chambers', 'prix'],
        Carcasse: [ 'chambers', 'prix'],
        Niveau_De_Villa: [ 'chambers', 'prix'],
        Terrain_Agricole: [ 'chambers', 'prix'],
        Duplex: [ 'chambers', 'prix'],
        Immeuble: [ 'chambers', 'prix'],
        Studio: [ 'chambers', 'prix'],
        Hangar: [ 'chambers', 'prix'],
        Usine: [ 'chambers', 'prix'],
        Bungalow: [ 'chambers', 'prix']
    },
    louer_vacance:{
        Appartement: [ 'étages', 'chambers', 'prix'],
        Terrain: [ 'étages', 'chambers', 'prix', 'min_chambers', 'max_chambers', 'min_prix', 'max_prix'],
        Villa: [ 'chambers', 'prix'],
        Local: [ 'chambers', 'prix'],
        Carcasse: [ 'chambers', 'prix'],
        Niveau_De_Villa: [ 'chambers', 'prix'],
        Terrain_Agricole: [ 'chambers', 'prix'],
        Duplex: [ 'chambers', 'prix'],
        Immeuble: [ 'chambers', 'prix'],
        Studio: [ 'chambers', 'prix'],
        Hangar: [ 'chambers', 'prix'],
        Usine: [ 'chambers', 'prix'],
        Bungalow: [ 'chambers', 'prix']
    },
    vendeur_louer:{
        Appartement: [ 'étages', 'chambers', 'prix'],
        Terrain: [ 'étages', 'chambers', 'prix',  'min_chambers', 'max_chambers', 'min_prix', 'max_prix'],
        Villa: [ 'chambers', 'prix'],
        Local: [ 'chambers', 'prix'],
        Carcasse: [ 'chambers', 'prix'],
        Niveau_De_Villa: [ 'chambers', 'prix'],
        Terrain_Agricole: [ 'chambers', 'prix'],
        Duplex: [ 'chambers', 'prix'],
        Immeuble: [ 'chambers', 'prix'],
        Studio: [ 'chambers', 'prix'],
        Hangar: [ 'chambers', 'prix'],
        Usine: [ 'chambers', 'prix'],
        Bungalow: [ 'chambers', 'prix']
    },
    échange:{
        Appartement: [ 'étages', 'chambers', 'prix'],
        Studio: [ 'chambers', 'prix'],
        Villa: [ 'chambers', 'prix'],
        Niveau_De_Villa: [ 'chambers', 'prix'],
        Bungalow: [ 'chambers', 'prix'],
        Duplex: [ 'chambers', 'prix'],
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