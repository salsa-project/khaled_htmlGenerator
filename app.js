let action_select = document.getElementsByTagName('select')[0];
let type_select = document.getElementsByTagName('select')[1];
let container = document.getElementById('inputs_container');



let all_tags = {
  wilaya: '<label for="">Wilaya</label><input id="wilaya" type="text" placeholder="wilaya: annaba"/>',
  
  one_commune: '<label for="">One Commune</label><input id="one_commune" type="text" placeholder="8 mars"/>',
  multi_commune: '<label for="">multi_commune</label><input id="multi_commune" type="text" placeholder="liliza"/>',
  
  étages: '<label for="">étages</label><input id="Superficie" type="text" placeholder="ex: 3"/>',
  
  chambers: '<label for="">chambers</label><input id="min_chambers" type="text" placeholder="3"/>',
  
  min_chambers: '<label for="">min_chambers</label><input id="min_chambers" type="text" placeholder="3"/>',
  max_chambers: '<label for="">max_chambers</label><input id="max_chambers" type="text" placeholder="5"/>',
  
  prix: '<label for="">prix</label><input id="min_prix" type="text" placeholder="15212"/>',
  
  min_prix: '<label for="">min_prix</label><input id="min_prix" type="text" placeholder="15212"/>',
  max_prix: '<label for="">max_prix</label><input id="max_prix" type="text" placeholder="23000"/>',
  
  facade: '<label for="">facade</label><input id="facade" type="text" placeholder="3"/>',
  
  Superficie: '<label for="">Superficie</label><input id="Superficie" type="text" placeholder="100m²"/>',
  
  Spécifications: '<label for="">Spécifications</label><input id="Spécifications" type="text" placeholder="ex: Jardin , Electricité , Gaz , Eau , Garage , Acte notarié , Livret foncier"/>'
}


let action_spec={
  touts: ['wilaya',           // 0
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
          'Spécifications'],  // 12

  actionIndex : {
    acheter: 0, vender: 1, client_louer: 2, louer_vacance: 3, vendeur_louer: 4, échange: 5
  },

  types:{
    // acheter, vender, client_louer, louer_vacance, vendeur_louer, échange
    Appartement: [[1, 3, 4, 7], [1, 3, 4], [1, 3, 4, 7], [1, 3, 4, 7], [1, 3, 4, 7], [1, 3, 4, 7]],
    Bungalow: [[1, 4, 7], [1, 4, 7], [1, 4, 7], [1, 4, 7], [1, 4, 7], [1, 4, 7]],
    Carcasse: [[1, 4, 7], [1, 4, 7], [1, 4, 7], [1, 4, 7], [1, 4, 7], [-1]],
    Duplex: [[1, 4, 7], [1, 4, 7], [1, 4, 7], [1, 4, 7], [1, 4, 7], [1, 4, 7]],
    Hangar: [[1, 4, 7], [1, 4, 7], [1, 4, 7], [1, 4, 7], [1, 4, 7], [-1]],
    Immeuble: [[1, 4, 7], [1, 4, 7], [1, 4, 7], [1, 4, 7], [1, 4, 7], [-1]],
    Local: [[1, 4, 7], [1, 4, 7], [1, 4, 7], [1, 4, 7], [1, 4, 7], [-1]],
    Niveau_De_Villa: [[1, 4, 7], [1, 4, 7], [1, 4, 7], [1, 4, 7], [1, 4, 7], [1, 4, 7]],
    Studio: [[1, 4, 7], [1, 4, 7], [1, 4, 7], [1, 4, 7], [1, 4, 7], [1, 4, 7]],
    Terrain: [[1, 3, 4, 7, 5, 6, 8, 9], [1, 3, 4, 7, 5, 6, 8, 9], [1, 3, 4, 7, 5, 6, 8, 9], [1, 3, 4, 7, 5, 6, 8, 9], [1, 3, 4, 7, 5, 6, 8, 9], [-1]],
    Terrain_Agricole: [[1, 4, 7], [1, 4, 7], [1, 4, 7], [1, 4, 7], [1, 4, 7], [-1]],
    Usine: [[1, 4, 7], [1, 4, 7], [1, 4, 7], [1, 4, 7], [1, 4, 7], [-1]],
    Villa: [[1, 4, 7], [1, 4, 7], [1, 4, 7], [1, 4, 7], [1, 4, 7], [1, 4, 7]]
  }
}

let selected_action = 'select';
let selected_type = 'select';
let all_specs = [];

//Select Action
action_select.addEventListener('click', function(){
  selected_action = (this.value == 'select') ? 'select': this.value;
  htmlOptionsGenerator(this.value)
  container.innerHTML = ''
})
//Select Type
type_select.addEventListener('click', function(){
  selected_type = (this.value == 'select') ? 'select': this.value;
  fillArray()
})


function htmlOptionsGenerator(action){
  let actionTypes = {
    common: ['Appartement','Terrain','Villa','Local','Carcasse','Niveau_De_Villa','Terrain_Agricole','Duplex','Immeuble','Studio','Hangar','Usine','Bungalow'],
    échange:['Appartement','Studio','Villa','Niveau_De_Villa','Bungalow','Duplex']
  }
  let uniqueActions = ['échange'];
  let options = (uniqueActions.indexOf(action) > -1) ? actionTypes[action] : actionTypes.common;
  let result = options.map(item=>{
    return `<option value="${item}">${item}</option>`
  })
  // Render HTML (options)
  document.getElementById('type').innerHTML = '<option value="select">--Choisez Un Option!--</option>'+result;
}

function fillArray(){
  //generate ARRAY only if (action) and (type) are selected
  if(selected_action == 'select' || selected_type == 'select') return;
  all_specs = action_spec.touts.filter((item, index)=> !action_spec.types[selected_type][action_spec.actionIndex[selected_action]].includes(index))
  // Render HTML
  container.innerHTML = htmlInputsGenerator(all_specs)
}

function htmlInputsGenerator(arr){
  let result = '';
      arr.map(item => {
     result+= all_tags[item];
  })
  return result
}






