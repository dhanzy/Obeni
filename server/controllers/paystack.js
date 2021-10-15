

const webhook = async(req, res) =>{
    try{
        var event = req.body;
        // Do something with event
        res.send(200);
    }
    catch(error) {
        res.status(500).json(error)
    }
}