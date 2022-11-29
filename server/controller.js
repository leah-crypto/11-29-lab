const houses = require("./db.json");
let globalId = 4;

module.exports = {
  getHouse: (req, res) => {
    res.status(200).send(houses);
  },
  deleteHouse: (req, res) => {
    let { id } = req.params;
    let houseIndex = houses.findIndex(elem => elem.id === +id);
    //console.log("House Index:", houseIndex);
    console.log('House Id: ', id);
    houses.splice(houseIndex, 1);
    res.status(200).send(houses);

  },
  updateHouse: (req, res) =>{
    let {id} = req.params;
    let {type} = req.body;

    let houseIndex = houses.findIndex(elem => elem.id === +id);

    let house = houses[houseIndex];
if(house.price === 0 && type === 'minus'){
  res.status(400).send('it cant go below 0');
}else if(type === 'plus'){
house.price += 10000;
res.status(200).send(houses);
    }else if(type === "minus"){
        house.price -= 10000
        res.status(200).send(houses);
    }else{
      res.sendStatus(400);
    }
  },
  createHouse: (req, res) =>{
    let {address, price, imageURL} = req.body;

    let newHouse = {
        id: globalId,
        address,
        price,
        imageURL,
    };

    houses.push(newHouse);

    res.status(200).send(houses);
    globalId++
  },
};
