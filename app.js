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
  acheter:{
    common: ['wilaya', 'multi_commune'],
    maison: ['étages', 'min_chambers', 'max_chambers', 'min_prix', 'max_prix', 'facade', 'Superficie', 'Spécifications'],
    terrin_maison: ['min_prix', 'max_prix', 'facade', 'Superficie', 'Spécifications'],
    terrin_agriculture: ['min_prix', 'max_prix', 'Superficie', 'Spécifications']
  },
  vender:{
    common: ['wilaya', 'one_commune'],
    maison: ['étages', 'chambers', 'prix', 'facade', 'Superficie', 'Spécifications'],
    terrin_maison: ['prix', 'facade', 'Superficie', 'Spécifications'],
    terrin_agriculture: ['prix', 'Superficie', 'Spécifications']
  },
  client_louer:{
    common: ['wilaya', 'multi_commune'],
    maison: ['min_chambers', 'max_chambers', 'min_prix', 'max_prix', 'facade', 'Superficie', 'Spécifications'],
    terrin_maison: ['min_prix', 'max_prix', 'facade', 'Superficie', 'Spécifications'],
    terrin_agriculture: ['min_prix', 'max_prix', 'Superficie', 'Spécifications']
  },
  vendeur_louer:{
    common: ['wilaya', 'one_commune'],
    maison: ['min_chambers', 'max_chambers', 'min_prix', 'max_prix', 'facade', 'Superficie', 'Spécifications'],
    terrin_maison: ['min_prix', 'max_prix', 'facade', 'Superficie', 'Spécifications'],
    terrin_agriculture: ['min_prix', 'max_prix', 'Superficie', 'Spécifications']
  }
}







let selected_action = 'select';
let selected_type = 'select';
let all_specs = [];

//Select Action
action_select.addEventListener('click', function(){
  selected_action = (this.value == 'select') ? 'select': this.value;
  fillArray()
})
//Select Type
type_select.addEventListener('click', function(){
  selected_type = (this.value == 'select') ? 'select': this.value;
  fillArray()
})

function fillArray(){
  //generate ARRAY only if (action) and (type) are selected
  if(selected_action == 'select' || selected_type == 'select') return;
  all_specs = [];
  all_specs = all_specs.concat(action_spec[selected_action]['common'], action_spec[selected_action][selected_type])
  //Render HTML
  container.innerHTML = htmlGenerator(all_specs)
}

function htmlGenerator(arr){
  let result = '';
      arr.map(item => {
     result+= all_tags[item];
  })
  return result
}






















