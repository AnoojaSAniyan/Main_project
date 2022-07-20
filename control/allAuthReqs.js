const User = require("../models/user")
const Admin= require("../models/admin")
const Doctor = require("../models/doctor");

tokAge = 2 * 24 * 60 * 60;

const post_signin=(req,res)=>{
    const {fname,lname,email,password,desigination}=req.body
    User.create({fname,lname,email,password,desigination}).then((resp)=>{
        console.log('account created')
        res.redirect('/pat-login')

    }).catch((err)=>{
        console.log('error-----------------------------')
        console.log(err)
        console.log('----------------------------------')
        res.render("pat_signin", { errormessage: '**Error : Email alreay in use or Password should contain atleast 8 characters' })
    })
}

const post_pat_login = (req,res)=>{
    const { email, password } = req.body;
    User.findOne({email,password}).then((resp)=>{
        if(resp===null){
        res.render("pat_login", { errormessage: '**Error : Invalid email or Password' })
        }
        else{
        console.log('login sucess')
        id=resp._id.toString()
        res.cookie("user",id, { httpOnly: true, maxAge: tokAge * 1000 });
        res.redirect('/pat-home')
        }

    }).catch((err)=>{
        console.log('error-----------------------------')
        console.log(err)
        console.log('----------------------------------')
        res.render("pat_login", { errormessage: '**Error : Some Error Occoured Please Try Again'})
    })
}

const post_admin_login = (req,res)=>{
    const { username, password } = req.body;
    Admin.findOne({username,password}).then((resp)=>{
        if(resp===null){
        res.render("admin_login", { errormessage: '**Error : Invalid username or Password' })
        }
        else{
        console.log('login sucess')
        id=resp._id.toString()
        res.cookie("user",id, { httpOnly: true, maxAge: tokAge * 1000 });
        res.redirect('/admin-home')
        }

    }).catch((err)=>{
        console.log('error-----------------------------')
        console.log(err)
        console.log('----------------------------------')
        res.render("admin_login", { errormessage: '**Error : Some Error Occoured Please Try Again'})
    })
}

const post_doc_login = (req,res)=>{
    const { email, password } = req.body;
    Doctor.findOne({email,password}).then((resp)=>{
        if(resp===null){
        res.render("doc_login", { errormessage: '**Error : Invalid username or Password' })
        }
        else{
        console.log('login sucess')
        id=resp._id.toString()
        res.cookie("user",id, { httpOnly: true, maxAge: tokAge * 1000 });
        res.redirect('/doc-home')
        }

    }).catch((err)=>{
        console.log('error-----------------------------')
        console.log(err)
        console.log('----------------------------------')
        res.render("doc_login", { errormessage: '**Error : Some Error Occoured Please Try Again'})
    })
}


module.exports = {
    post_signin,
    post_pat_login,
    post_admin_login,
    post_doc_login
}