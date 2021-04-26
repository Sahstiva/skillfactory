const colors = new Map([
  ["IndianRed", "#CD5C5C"],
  ["LightCoral","#F08080"],
  ["Salmon","#FA8072"],
  ["DarkSalmon","#E9967A"],
  ["LightSalmon","#FFA07A"],
  ["Crimson","#DC143C"],
  ["Red","#FF0000"],
  ["FireBrick","#B22222"],
  ["DarkRed","#8B0000"] 
]);

for (let name of colors.keys())
  console.log(`Ключ - ${ name }, значение - ${colors.get(name)}`);