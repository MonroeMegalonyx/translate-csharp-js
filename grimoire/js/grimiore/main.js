// This project is rewritten from C# example code

console.log("Do you believe in magic?");
console.log("------------------------");

var allSpells = GetAllSpells();
//console.log(allSpells);

var evilBook = MakeEvilSpellBook(allSpells);
var goodBook = MakeGoodSpellBook(allSpells);
//console.log(evilBook, goodBook);

DisplaySpellBook(goodBook);
console.log("");
DisplaySpellBook(evilBook);

function DisplaySpellBook(book) {
  console.log(book.Title);
  for (let spell of book.Spells) {
    console.log("  ",spell)
  }
}

function MakeEvilSpellBook(allSpells) {
  var evilSpells = allSpells.filter((aSpell) => aSpell.IsEvil === true);
  var spellArr = evilSpells.map((spell) => {
    return spell.Name});
  var evilTaco = new SpellBook("Evil Book", spellArr);

  return evilTaco;
}

function MakeGoodSpellBook(allSpells) {
  var goodSpells = allSpells.filter((aSpell) => aSpell.IsEvil === false);
  var spellArr = goodSpells.map((spell) => {
    return spell.Name});
  var goodTaco = new SpellBook("Good Book", spellArr);

  return goodTaco;
}

function GetAllSpells() {
  var allTacos = [
    new Spell("Turn enemy into a newt", true, 5.1),
    new Spell("Conjure some gold for a local charity", false, 2.99),
    new Spell("Give a deaf person the ability to hear", false, 12.2),
    new Spell("Make yourself emperor of the universe", true, 100.0),
    new Spell(
      "Convince your relatives your political views are correct",
      false,
      2921.5
    ),
  ];

  return allTacos;
}

// Similar to defining the class of the object in C#
function SpellBook(title, magic) {
  this.Title = title;
  this.Spells = magic;
}

function Spell(name, status, energy) {
  this.Name = name;
  this.IsEvil = status;
  this.EnergyRequired = energy;
}
