module.exports = function(app, db) {
    console.log("Loading game routes ...");
    app.get('/game/list', (req, res) => {
        res.send({
            "game1": {
                "name": "blah",
                "desc": "loremp ispsdlk"
            },
            "game2": {
                "name": "obgs",
                "desc": "boohyyaa"
            }
        })
    });
};