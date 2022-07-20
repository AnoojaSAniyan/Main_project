const express = require("express");
const router = express.Router();
const getReqs = require('./control/allGetReqs')
const authReqs = require('./control/allAuthReqs')
const adminReqs = require('./control/allAdminReqs')
const patReqs = require('./control/allPatientReqs')
const handleRecord = require('./control/recordHandle')
const docReqs = require('./control/allDocReqs')



// ------------------------------------------------------------
// ~~~~~~~~~~~~~~~~All Get Requests withou Logic~~~~~~~~~~~~~~~
// ------------------------------------------------------------


router.get("/",(req,res)=>{
    res.render('index')
})

router.get('/pat-login',getReqs.get_pat_login);

router.get('/admin-login',getReqs.get_admin_login);

router.get('/doc-login',getReqs.get_doc_login);

router.get('/pat-signin',getReqs.get_pat_signin);

router.get('/admin-home',getReqs.get_admin_home);

router.get('/logout',getReqs.get_log_out)


// ------------------------------------------------------------
// ~~~~~~~~~~~~~~~~~~~~~~All Auth Requests~~~~~~~~~~~~~~~~~~~~~
// ------------------------------------------------------------


router.post('/signin-post',authReqs.post_signin)

router.post('/pat-login-post',authReqs.post_pat_login)

router.post('/admin-login-post',authReqs.post_admin_login)

router.post('/doc-login-post',authReqs.post_doc_login)

// ------------------------------------------------------------
// ~~~~~~~~~~~~~~~~~~~~~~All Admin Requests~~~~~~~~~~~~~~~~~~~~
// ------------------------------------------------------------

router.post('/add-department-post',adminReqs.post_add_department)

router.get('/create-doctor',adminReqs.get_create_doctor)

router.post('/create-docter-post',adminReqs.post_create_doctor)

router.get('/view-blocks',handleRecord.get_view_blocks)

router.get('/validate-blocks',handleRecord.verify_blocks)

// ------------------------------------------------------------
// ~~~~~~~~~~~~~~~~~~~~~~All Patient Requests~~~~~~~~~~~~~~~~~~
// ------------------------------------------------------------

router.get('/pat-home',patReqs.get_pat_home);

router.post('/pat-home-deptchange',patReqs.post_pat_home_dept_change)

// **********Handle Record Using BlockChain***********

router.post('/pat-med-record-post',handleRecord.post_medical_record)

router.get('/view-responce',patReqs.get_view_resp)

router.post('/view-sel-resp-post',patReqs.post_view_sel_resp)


// ------------------------------------------------------------
// ~~~~~~~~~~~~~~~~~~~~~~All Docter Requests~~~~~~~~~~~~~~~~~~
// ------------------------------------------------------------




router.get('/doc-home',docReqs.get_doc_home);

router.post('/doc-responce-post',docReqs.post_doc_responce)

router.post('/post-responce-save',docReqs.post_responce_save)


module.exports =router