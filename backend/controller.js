export const helloExpress = (req, res) => {
    res.send('Hello express!')
}

export const search = (req, res) => {
    let keyword = req.query.keyword
    res.send(`result ${keyword}`)
}

export const user = (req, res) => {
    let name = req.params.name
    res.send(`Hello ${name}`)
}

export const addUser = (req, res) => {
    let { name, email } = req.body
    res.json({
        message: `User added successfully with name ${name} and email ${email}`,    
    })
}

export const editUser = (req, res) => {
    let id = req.params.id
    let { name, email } = req.body
    res.json({
        message: `User change successfully with id ${id} and name ${name} and email ${email}`,    
    })
}

export const deleteUser = (req, res) => {
    let id = req.params.id
    let { name, email } = req.body
    res.json({
        message: `User delete successfully with id ${id} and name ${name} and email ${email}`,    
    })
}