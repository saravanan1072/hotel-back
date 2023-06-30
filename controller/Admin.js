const bcrypt = require('bcrypt');
const registerModal = require('../model/Admin')

const adminRegisterController = async (req, res) => {
    const { name, password } = req.body;
    console.log(name, password);
    const pass = await bcrypt.hash(password, 10)
    const registerDocument = new registerModal({
        name: name,
        password: pass
    })
    const result = await registerDocument.save()
    console.log(result);
    res.send(result)
}

const adminLoginController = async (req, res) => {
    let fetchuser=""
    let fetchpassword
    const { name, password } = req.body;
    console.log(name, password);
    const querey = { name: name }

     const fetchData = await registerModal.find(querey)
     console.log(fetchData);
        await fetchData.map((item) => {
        fetchpassword = item.password;
        fetchuser = item.name;
    })
    console.log(name === fetchuser);
    if (name === fetchuser) {
        if (await bcrypt.compare(password, fetchpassword)) {
            res.send({ msg: "Admin login sucessfull",result:true })
        }
        else res.send({msg:"username or password is not correct"})   
    }
     else {
        res.send({msg:"admin name does not exist"})  

     }
}

module.exports = { adminRegisterController, adminLoginController }