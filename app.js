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
  touts: ['wilaya', 
          'one_commune', 
          'multi_commune', 
          'étages', 'chambers', 
          'min_chambers', 'max_chambers', 
          'prix', 
          'min_prix', 'max_prix', 
          'facade', 'Superficie', 'Spécifications'],
  acheter:{
    Appartement: ['one_commune', 'étages', 'chambers', 'prix'],
    Terrain: ['one_commune', 'étages', 'chambers', 'prix', 
              'min_chambers', 'max_chambers', 'min_prix', 'max_prix'],
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
    Appartement: ['one_commune', 'étages', 'chambers', 'prix'],
    Terrain: ['one_commune', 'étages', 'chambers', 'prix', 
              'min_chambers', 'max_chambers', 'min_prix', 'max_prix'],
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
    Terrain: ['one_commune', 'étages', 'chambers', 'prix', 
              'min_chambers', 'max_chambers', 'min_prix', 'max_prix'],
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
    Terrain: ['one_commune', 'étages', 'chambers', 'prix', 
              'min_chambers', 'max_chambers', 'min_prix', 'max_prix'],
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
    Terrain: ['one_commune', 'étages', 'chambers', 'prix', 
              'min_chambers', 'max_chambers', 'min_prix', 'max_prix'],
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
  all_specs = action_spec.touts.filter(item=> !action_spec[selected_action][selected_type].includes(item))
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






















