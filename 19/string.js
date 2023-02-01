const string = "   my NAme is siDDharTha              ";

console.log(string.toUpperCase());
// output => '   MY NAME IS SIDDHARTHA              '

console.log(string.toLowerCase());
// output => '   my name is siddhartha              '

console.log(string.includes("ar"));
//output => true

console.log(string.concat(" Yadav"));
// output =>    my NAme is siDDharTha               Yadav

console.log(string.indexOf("me"));
// output => 8

console.log(string.endsWith("ha              "));
// output => true

console.log(string.startsWith("jh"));
// output => false

console.log(string.replace("a", " <replaced first occurance of e> "));
// output => '   my NAme is siDDh <replaced first occurance of e> rTha              '

console.log(string.replaceAll("a", " <replaced all e> "));
// output => '  my NAme is siDDh <replaced all e> rTh <replaced all e>               '

console.log(string.substring(6, 17));
// output => NAme is siD

console.log(string.trim());
// output => my NAme is siDDharTha
console.log(string.slice(5, 15));
// output => ' NAme is s'

console.log(string.split(/\s+/));
// output => [ '', 'my', 'NAme', 'is', 'siDDharTha', '' ]

console.log(string.localeCompare("Siddhartha"));
// output => -1
