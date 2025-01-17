const { PrismaClient } = require('@prisma/client');

class UserController {
constructor() {
    this.prisma = new PrismaClient();
}
getLogin = (req, res) => {
    res.render('login');
}
getRegister = (req, res) => {
    res.render('register');
}
logout = (req, res) => {
    req.logout(function(err){
    if(err){
        throw err;
    }
    res.redirect('/');
    });
}
}

deleteUser = async (res, req) =>{
    const userId = req.params.id;
    try{
        await prisma.user.delete({
            where: { id :userId}
        });
        res.redirect('/admin-dashboard/user-database');
        }catch (error) {
            res.send(error.message);
        }

}


module.exports = new UserController();