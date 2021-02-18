const data = [
  ['apple', 'Fruit', 'isEdible', 40],
  ['Lays', 'Processed Food', 'isEdible', 10],
  ['Pen', 'Stationary', 'isNotEdible', 11],
  ['Book', 'Stationary', 'isNotEdible', 111],
  ['Banana', 'fruit', 'isEdible', 14],
  ['Peanut Butter', 'Processed Food', 'isEdible', 200],
  ['Oven', 'Appliance', 'isNotEdible', 1300],
  ['Air Conditioner', 'Applicance', 'isNotEdible', 13300],
  ['Drill', 'Power Tool', 'isNotEdible', 2200],
];


// Create a shopping items
// result = [ { name: 'apple', category: 'Fruit', isEdible: true, price: 40 }, ... ]
function createListOfObjects(data) {

  //var list=[];
  
    var obj={};
    for(var i=0;i<obj.length;i++)
    {
    obj['name']=data[i][1];
    obj['category']=data[i][2];
    obj['isEdible']=data[i][3];
    obj['price']=data[i][4];
    }
    return obj;
    //console.log(obj)



}


// //sort by given parameter. sorting Parameter eg: 'category' | 'price' etc
// function sortList(sortingParameter)

// //return list of items by category eg: 'Fruit' | 'Appliance'
// function selectByCatergory(category)
