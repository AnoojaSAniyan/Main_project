const get_pat_login = (req,res)=>{
    res.render("pat_login",{ errormessage: '' })
}

const get_admin_login =(req,res)=>{
    res.render("admin_login", { errormessage: '' })
}

const get_doc_login =(req,res)=>{
    res.render("doc_login",{ errormessage: '' })
}

const get_pat_signin = (req,res)=>{
    res.render("pat_signin", { errormessage: '' })
}

const get_admin_home = (req,res)=>{
    res.render("admin_home",{ errormessage: '' })
}


const get_log_out = async (req, res) => {
    await res.cookie("user", "", { maxAge: 1 });
    res.redirect("/pat-login");
  };

module.exports = {
    get_admin_home,
    get_admin_login,
    get_doc_login,
    get_pat_signin,
    get_pat_login,
    get_log_out
}
