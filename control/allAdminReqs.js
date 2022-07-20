const Department = require('../models/department')
const Doctor = require ('../models/doctor')

const post_add_department = (req,res)=>{
    const department = req.body.department

    Department.create({department}).then((result)=>{
        console.log(result['department'])
        console.log(`**Sucess : Department Added Sucessfully  ::> ${result['department']}`)
        res.render("admin_home", { errormessage: `**Sucess : Department Added Sucessfully  ::> ${result['department']}` })
    }).catch((err)=>{
        console.log('Department Added Failed')
        res.render("admin_home", { errormessage: '**Error : Some Error Occured Check Department Name Again !!!' })
    })

}

const get_create_doctor = (req,res)=>{
    Department.find().then((deptData)=>{
        res.render("create_doc",{deptData, errormessage: '' })
    }).catch((err)=>{
        console.log(err)
        res.render("create_doc",{deptData:[], errormessage: '**Error : Some Error Occoured !!!' })
    })
}

const post_create_doctor = async (req,res)=>{
    const {department,fullname,role,email,password} = req.body
    console.log(department)
    const deptData = await Department.find()
    Doctor.create({department,fullname,role,email,password}).then((result)=>{
        console.log(`**Sucess : Docter Added Sucessfully  ::> ${result['fullname']}`)
        res.render("create_doc", { deptData, errormessage: `**Sucess : Docter Added Sucessfully  ::> ${result['fullname']}` })
    }).catch((err)=>{
        console.log('Docter Added Failed')
        res.render("create_doc", { deptData, errormessage: '**Error : Some Error Occured' })
    })

}
module.exports={
    post_add_department,
    get_create_doctor,
    post_create_doctor
}