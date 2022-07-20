const Department = require('../models/department')
const Doctor = require ('../models/doctor')
const Record = require('../models/record')
const Responce = require('../models/responce')

const get_pat_home = (req,res)=>{
    Department.find().then((deptData)=>{
        res.render("patient_home",{deptData,docterData:[], errormessage: '' })
    }).catch((err)=>{
        console.log(err)
        res.render("patient_home",{deptData:[], errormessage: '**Error : Some Error Occoured !!!' })
    })
}

const post_pat_home_dept_change = async (req,res)=>{
    const deptId= await req.body.deptId
    const docterData = await Doctor.find({department:deptId},{fullname:1})
    res.json(docterData)
}

const get_view_resp = async (req,res)=>{
    const user = await req.cookies.user;
    Record.find({user}).select('data.heading').then((result)=>{
        console.log(result)
        res.render("select_record",{records:result})
    }).catch((err)=>{
        console.log(err)
    })
}

const post_view_sel_resp = async (req,res)=>{
    const {record} = await req.body;
    Responce.find({record}).populate('record','data.heading').then((result)=>{
        console.log(result)
        res.render('selected_record_resp',{data:result})
    }).catch((err)=>{
        console.log(err)
    })
}

module.exports={
    get_pat_home,
    post_pat_home_dept_change,
    get_view_resp,
    post_view_sel_resp
}