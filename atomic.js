
function centerMolecule(name, charge, molecule) {
  var svg_top = getElementCanvas();
  resetCanvas();
  var center = getCenter(svg_top);
  center.append(molecule)
  hdr = document.getElementById("topic_name");
  hdr.textContent = name;
  hdr = document.getElementById("charge");
  hdr.textContent = "Charge = "+charge;
  document.title = name;

}

var atom_count = 0;
function resetCanvas() {
  var svg_top = getElementCanvas();
  var center = getCenter(svg_top);
  removeChildren(center);
  atom_count = 0;
}

function CO2() {
  var molecule = getSVGElement('g');
  var c_list = [["+O","Carbonate"]];
  var o_list = [["-O","CarbonMonoxide"], ["+CH3", "Acetate"]];
  molecule.appendChild(getAtom('C',c_list));
  molecule.appendChild(get2Bond(-90, getAtom('O',o_list)));
  molecule.appendChild(get2Bond(90, getAtom('O',o_list)));
  centerMolecule('Carbon Dioxide', 0, molecule);
}

function CarbonMonoxide() {
  var molecule = getSVGElement('g');
  var c_list = [["+O","CO2"], ['O','Peroxide']];
  var o_list = [['N', 'Cyanide']];
  molecule.appendChild(getAtom('C',c_list));
  molecule.appendChild(get3Bond(-90, getAtom('O',o_list)));
  centerMolecule('Carbon Monoxide', 0, molecule);
}

function Cyanide() {
  var molecule = getSVGElement('g');
  var c_list = [['+H', 'HydrocyanicAcid'], ['>2N', 'Azide']];
  var n_list = [['O', 'CarbonMonoxide']];
  molecule.appendChild(getAtom('C',c_list));
  molecule.appendChild(get3Bond(-90, getAtom('N',n_list)));
  centerMolecule('Cyanide', -1, molecule);
}

function Azide() {
  var molecule = getSVGElement('g');
  var n_list = [['2N>C', 'Cyanide']];
  molecule.appendChild(getAtom('N',n_list));
  molecule.appendChild(get2Bond(-90, getAtom('N',n_list)));
  molecule.appendChild(get2Bond(90, getAtom('N',n_list)));
  centerMolecule('Azide', -1, molecule);
}

function HydrocyanicAcid() {
  var molecule = getSVGElement('g');
  var h_list = [['-H', 'Cyanide']];
  var n_list = [];
  var c_list = [];
  molecule.appendChild(getAtom('C',c_list));
  molecule.appendChild(get3Bond(-90, getAtom('N',n_list)));
  molecule.appendChild(getBond(90, getAtom('H',h_list)));
  centerMolecule('Hydrocyanic Acid', 0, molecule);
}

function Acetate() {
  var molecule = getSVGElement('g');
  var c_list = [];
  var o_list = [['+H', 'AceticAcid'], ['+R' ]];
  molecule.appendChild(getAtom('C',c_list));
  molecule.appendChild(getAromaticBond(-180, getAtom('O',o_list)));
  molecule.appendChild(getAromaticBond(-60, getAtom('O',o_list)));
  molecule.appendChild(getBond(60, getAtom('CH3',[['O', 'Carbonate']])));
  centerMolecule('Acetate Anion', 0, molecule);
}

function AceticAcid() {
  var molecule = getSVGElement('g');
  var c_list = [];
  var o_list = [['-H', 'Acetate']];
  molecule.appendChild(getAtom('C',c_list));
  molecule.appendChild(get2Bond(-180, getAtom('O',o_list)));
  molecule.appendChild(getBond(-60, getAtom('OH',o_list)));
  molecule.appendChild(getBond(60, getAtom('CH3',[])));
  centerMolecule('Acetic Acid', 0, molecule);
}

function Carbonate() {
  var molecule = getSVGElement('g');
  var c_list = [['N', 'Nitrate'], ['-C', 'Peroxide']];
  var o_list = [['-O', 'CO2'], ['+H', 'Bicarbonate'], ['CH3', 'Acetate']];
  molecule.appendChild(getAtom('C', c_list, 60));
  molecule.appendChild(get2Bond(-180, getAtom('O',o_list,90)));
  molecule.appendChild(getBond(-60, getAtom('O-',o_list)));
  molecule.appendChild(getBond(60, getAtom('-O',o_list)));
  centerMolecule('Carbonate', -2, molecule);
}

function Nitrate() {
  var molecule = getSVGElement('g');
  var n_list = [['C', 'Carbonate']];
  var o_list = [['-O', 'Nitrite'],['+H', 'NitricAcid']];
  molecule.appendChild(getAtom('N', n_list, 60));
  molecule.appendChild(getAromaticBond(-180, getAtom('O',o_list,90)));
  molecule.appendChild(getAromaticBond(-60, getAtom('O',o_list)));
  molecule.appendChild(getAromaticBond(60, getAtom('O',o_list)));
  centerMolecule('Nitrate', -1, molecule);
}

function NitricAcid() {
  var molecule = getSVGElement('g');
  var n_list = [['C', 'Carbonate']];
  var o_list = [['-O', 'NitrousAcid']];
  molecule.appendChild(getAtom('N', n_list, 60));
  molecule.appendChild(getAromaticBond(-180, getAtom('O',o_list,90)));
  molecule.appendChild(getAromaticBond(-60, getAtom('O',o_list)));
  molecule.appendChild(getBond(60, getAtom('HO',[['-H', 'Nitrate']])));
  centerMolecule('Nitric Acid', 0, molecule);
}

function NitrousAcid() {
  var molecule = getSVGElement('g');
  var n_list = [];
  var o_list = [];
  molecule.appendChild(getAtom('N', n_list, 60));
  molecule.appendChild(getAromaticBond(-60, getAtom('O',o_list)));
  molecule.appendChild(getBond(60, getAtom('HO',[['-H', 'Nitrite']])));
  centerMolecule('Nitrous Acid', 0, molecule);
}


function Nitrite() {
  var molecule = getSVGElement('g');
  var n_list = [['C', 'Carbonate'], ['+O', 'Nitrate']];
  var o_list = [['+H', 'NitrousAcid'], ['-O', 'NitricOxide']];
  molecule.appendChild(getAtom('N', n_list));
  molecule.appendChild(getAromaticBond(-60, getAtom('O',o_list)));
  molecule.appendChild(getAromaticBond(60, getAtom('O',o_list)));
  centerMolecule('Nitrite', -1, molecule);
}

function Ammonium() {
  var molecule = getSVGElement('g');
  var n_list = [];
  var h_list = [['-H', 'Ammonia']];
  molecule.appendChild(getAtom('N', n_list));
  molecule.appendChild(getBond(0, getAtom('H',h_list)));
  molecule.appendChild(getBond(90, getAtom('H',h_list)));
  molecule.appendChild(getBond(180, getAtom('H',h_list)));
  molecule.appendChild(getBond(-90, getAtom('H',h_list)));
  centerMolecule('Ammonium', 1, molecule);
}

function Ammonia() {
  var molecule = getSVGElement('g');
  var n_list = [['O', 'Hydronium'], ['+H', 'Ammonium']];
  var h_list = [['R', 'Amine']];
  molecule.appendChild(getAtom('N', n_list));
  molecule.appendChild(getBond(60, getAtom('H',h_list)));
  molecule.appendChild(getBond(0, getAtom('H',h_list)));
  molecule.appendChild(getBond(-60, getAtom('H',h_list)));
  centerMolecule('Ammonia', 0, molecule);
}

function Amine() {
  var molecule = getSVGElement('g');
  var n_list = [['O', 'Hydronium']];
  var h_list = [];
  var r_list = [['H', 'Ammonia']]
  molecule.appendChild(getAtom('N', n_list));
  molecule.appendChild(getBond(60, getAtom('R',r_list)));
  molecule.appendChild(getBond(0, getAtom('H',h_list)));
  molecule.appendChild(getBond(-60, getAtom('H',h_list)));
  centerMolecule('Amine', 0, molecule);
}

function Hydronium() {
  var molecule = getSVGElement('g');
  var n_list = [['N', 'Ammonia']];
  var h_list = [['-H', 'Water']];
  molecule.appendChild(getAtom('O', n_list));
  molecule.appendChild(getBond(60, getAtom('H',h_list)));
  molecule.appendChild(getBond(0, getAtom('H',h_list)));
  molecule.appendChild(getBond(-60, getAtom('H',h_list)));
  centerMolecule('Hydronium', 1, molecule);
}

function Water() {
  var molecule = getSVGElement('g');
  var n_list = [['+H', 'Hydronium']];
  var h_list = [['-H', 'Hydroxide']];
  molecule.appendChild(getAtom('O', n_list));
  molecule.appendChild(getBond(60, getAtom('H',h_list)));
  molecule.appendChild(getBond(-60, getAtom('H',h_list)));
  centerMolecule('Water', 0, molecule);
}

function Hydroxide() {
  var molecule = getSVGElement('g');
  var n_list = [['+H', 'Water']];
  var h_list = [['O', 'Peroxide']];
  molecule.appendChild(getAtom('O', n_list));
  molecule.appendChild(getBond(-90, getAtom('H',h_list)));
  centerMolecule('Hydroxide', -1, molecule);
}

function Peroxide() {
  var molecule = getSVGElement('g');
  var o_list = [['H', 'Hydroxide'], ['N', 'NitricOxide'], ['C', 'CarbonMonoxide']];
  molecule.appendChild(getAtom('O', o_list));
  molecule.appendChild(getBond(-90, getAtom('O',o_list)));
  centerMolecule('Peroxide', -2, molecule);
}

function NitricOxide() {
  var molecule = getSVGElement('g');
  var n_list = [['C', 'CarbonMonoxide'], ['O', 'Peroxide'], ['+O', 'Nitrite']];
  var o_list = [];
  molecule.appendChild(getAtom('N', n_list));
  molecule.appendChild(getAromatic2Bond(-90, getAtom('O',o_list)));
  centerMolecule('Nitric Oxide', 0, molecule);
}

function Bicarbonate() {
  var molecule = getSVGElement('g');
  var c_list = [['a', 'CO2'], ['b', 'CO2']];
  var o_list = [['-O', 'CO2'], ['+H', 'CarbonicAcid']];
  var oh_list = [['-O', 'CO2'], ['-H', 'Carbonate']];
  molecule.appendChild(getAtom('C', c_list));
  molecule.appendChild(getBond(-180, getAtom('-O',o_list)));
  molecule.appendChild(getBond(-60, getAtom('OH',oh_list)));
  molecule.appendChild(get2Bond(60, getAtom('O',o_list)));
  centerMolecule('Bicarbonate', -1, molecule);
}

function CarbonicAcid() {
  var molecule = getSVGElement('g');
  var c_list = [];
  var o_list = [['-O', 'CO2'], ['H', 'FormicAcid']];
  var oh_list = [['-O', 'CO2'], ['-H', 'Bicarbonate']];
  molecule.appendChild(getAtom('C', c_list));
  molecule.appendChild(get2Bond(-180, getAtom('O',o_list,90)));
  molecule.appendChild(getBond(-60, getAtom('OH',oh_list)));
  molecule.appendChild(getBond(60, getAtom('HO',oh_list)));
  centerMolecule('Carbonic Acid', 0, molecule);
}

function FormicAcid() {
  var molecule = getSVGElement('g');
  var c_list = [['a', 'CO2'], ['b', 'CO2']];
  var o_list = [['-O', 'CO2'], ['H', 'FormicAcid']];
  var oh_list = [['-O', 'CO2'], ['-H', 'Bicarbonat']];
  var h_list = [];
  molecule.appendChild(getAtom('C', c_list));
  molecule.appendChild(getAromaticBond(-180, getAtom('O',o_list)));
  molecule.appendChild(getBond(-60, getAtom('OH',oh_list)));
  molecule.appendChild(getBond(60, getAtom('H',h_list)));
  centerMolecule('Carbonic Acid', 0, molecule);
}

const bond_distance = 50;
const bond_start = 12;
const bond_end = 38;
const bond_spacing = 2;
function _getBondAtom(angle, atom) {
  var g = getSVGElement('g');
  g.appendChild(atom);
  atom.setAttribute('transform', 'translate(0,'+bond_distance+') rotate('+(-angle)+')');
  g.setAttribute('transform', 'rotate('+angle+')');
  return g;
}

function _getBondLine(type) {
  var bond = getSVGElement('line');
  bond.setAttribute('y1', bond_start);
  bond.setAttribute('y2', bond_end);
  bond.setAttribute('class', type)
  return bond;
}

function getBond(angle, atom) {
  var g = _getBondAtom(angle, atom);
  var bond = _getBondLine('bond');
  g.appendChild(bond);
  return g;
}

function get2Bond(angle, atom) {
  var g = _getBondAtom(angle, atom);
  var bonds = getSVGElement('g');
  g.appendChild(bonds);
  var bond = _getBondLine('bond');
  bond.setAttribute('x1', bond_spacing/2);
  bond.setAttribute('x2', bond_spacing/2);
  bonds.appendChild(bond);
  bond = _getBondLine('bond');
  bond.setAttribute('x1', -bond_spacing/2);
  bond.setAttribute('x2', -bond_spacing/2);
  bonds.appendChild(bond);
  return g;
}

function getAromaticBond(angle, atom) {
  var g = _getBondAtom(angle, atom);
  var bonds = getSVGElement('g');
  g.appendChild(bonds);
  var bond = _getBondLine('aromatic_bond');
  bond.setAttribute('x1', bond_spacing/2);
  bond.setAttribute('x2', bond_spacing/2);
  bonds.appendChild(bond);
  bond = _getBondLine('bond');
  bond.setAttribute('x1', -bond_spacing/2);
  bond.setAttribute('x2', -bond_spacing/2);
  bonds.appendChild(bond);
  return g;
}

function get3Bond(angle, atom) {
  var g = _getBondAtom(angle, atom);
  var bonds = getSVGElement('g');
  g.appendChild(bonds);
  var bond = _getBondLine('bond');
  bond.setAttribute('x1', bond_spacing);
  bond.setAttribute('x2', bond_spacing);
  bonds.appendChild(bond);
  bond = _getBondLine('bond');
  bond.setAttribute('x1', -bond_spacing);
  bond.setAttribute('x2', -bond_spacing);
  bonds.appendChild(bond);
  bond = _getBondLine('bond');
  bonds.appendChild(bond);
  return g;
}

function getAromatic2Bond(angle, atom) {
  var g = _getBondAtom(angle, atom);
  var bonds = getSVGElement('g');
  g.appendChild(bonds);
  var bond = _getBondLine('aromatic_bond');
  bond.setAttribute('x1', bond_spacing);
  bond.setAttribute('x2', bond_spacing);
  bonds.appendChild(bond);
  bond = _getBondLine('bond');
  bond.setAttribute('x1', -bond_spacing);
  bond.setAttribute('x2', -bond_spacing);
  bonds.appendChild(bond);
  bond = _getBondLine('bond');
  bonds.appendChild(bond);
  return g;
}

function _getAtom(name) {
  var atom = getSVGElement('text')
  atom.setAttribute('class', 'atom');
  atom.setAttribute('dominant-baseline', 'central');
  atom_count += 1;
  atom.setAttribute('id', 'atom_'+atom_count);
  atom.textContent = name;
  return atom;
}

function getRingMenuItem(content, angle) {
  var g = getSVGElement('g');
  g.setAttribute('transform', 'rotate('+ (-angle) +')');
  var a = getSVGElement('a');
  a.setAttribute('transform', 'translate(0,-18) rotate('+ angle +')');
  var theText = getSVGElement('text');
  theText.setAttribute('class', 'atom');
  theText.setAttribute('dominant-baseline', 'central');
  theText.setAttribute('text-color', 'black');
  a.setAttribute('onclick', content[1]+"()");
  theText.textContent = content[0];
  a.append(theText);
  g.append(a);
  return g;
}

function getRingMenu(items, initAngle = 0) {
  var ring_menu_grp = getSVGElement('g');
  ring_menu_grp.setAttribute('class','ring-menu');
  if (items.length > 0) {
    var circle = getSVGElement('circle');
    circle.setAttribute('r',30);
    circle.setAttribute('class','atom-ring');
    circle.setAttribute('fill','green');
    ring_menu_grp.append(circle);
    var circle = getSVGElement('circle');
    circle.setAttribute('r',10);
    circle.setAttribute('fill','white');
    ring_menu_grp.append(circle);

    var angle_inc = 360/(items.length);
    var angle = initAngle;
    var arrayLength = items.length;
    for (var i = 0; i < arrayLength; i++) {
      ring_menu_grp.append(getRingMenuItem(items[i], angle));
      angle = angle+angle_inc;
    }
  }
  return ring_menu_grp;
}

function getAtom(name, items, initAngle) {
  var atom_assembly = getSVGElement('g');
  atom_assembly.appendChild(getRingMenu(items, initAngle));
  atom_assembly.appendChild(_getAtom(name));
  return atom_assembly;
}

function removeChildren(thing) {
  while (thing.firstChild) {
    thing.removeChild(thing.firstChild);
  }
}

function getCenter(svg) {
  // TODO: Dynamically make center based on canvas sizee
  return svg.getElementById("put_here");
}

function getSVGElement(name) {
  var element_canvas = getElementCanvas();
  var svgNS = element_canvas.namespaceURI;
  return document.createElementNS(svgNS,name);
}

function getElementCanvas() {
  return document.getElementById("element_canvas");
}
