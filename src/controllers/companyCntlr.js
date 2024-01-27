const companyModel = require('../models/companyModel');

async function companyDetails (req, res) {
    const company_id = req.params.company_id;
    try {
        const data = await companyModel.find({_id :company_id});
        return res.status(200).json({data : data});
    } catch (error) {
        return res.status(500).json({error :error});
    }
}

async function editCompanyDetails (req, res){
    const company_id = req.body ;
    try {
        const updatedData = findByIdAndUpdate(
            {_id : company_id} ,
            {body} 
        );
    } catch (error) {
        console.log(error);
        return res.status(500).json({error : error})
    }
}

module.exports ={
    companyDetails,
    editCompanyDetails
};