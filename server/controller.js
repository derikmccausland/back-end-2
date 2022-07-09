const houses = require('./db.json') 
const newHouseId = 4

module.exports = {
    getHouses: (req, res) => res.status(200).send(houses),
    deleteHouse: (req, res) => {
        let index = houses.findIndex(elem => elem.id === +req.params.id)
        houses.splice(index,1)
        res.status(200).send(houses)
    },

    createHouse: (req, res) => {
        const {address, price, imageURL} = req.body

        let newHouse = {
            address,
            price,
            imageURL,
            id: newHouseId
        }

        houses.push(newHouse)
        res.status(200).send(houses)
        newHouseId++
    },

    updateHouse: (req, res) => {
        let {id} = req.params
        let {type} = req.body
        let index = houses.findIndex(elem => +elem.id === +id)

        switch (type) {
            case "plus": 
                houses[index].price += 10000
                res.status(200).send(houses)
            break;
            case "minus":
                houses[index].price -= 10000
                res.status(200).send(houses)
            break;
            default:
                res.status(200).send(houses)
        }
    },
}