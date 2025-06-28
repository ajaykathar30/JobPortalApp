import Application from '../models/application.js'
import Job from '../models/job.js'
export const applyJob=async(req,res)=>{
    try{
        const userId=req.id 
        const jobId=req.params.id
        if(!jobId){
            return res.status(404).json({message:"jobId is required",success:false})
        }
        const existingApplication=await Application.findOne({job:jobId,applicant:userId})
        if(existingApplication){
            return res.status(400).json({message:"u already applied for this job",success:false})
        }

        const job=await Job.findById(jobId)
        if(!job){
            return res.status(404).json({message:"Job not found",success:false})
        }
        const newApplication =await Application.create({
            job:jobId,
            applicant:userId,
        })
        job.applications.push(newApplication._id)
        await job.save()
        return res.status(201).json({message:"Application submitted successfully",application:newApplication,success:true})
    }catch (error) {
        console.error(error)
        return res.status(500).json({ message: "Internal server error", success: false })

    }
}
export const getApplications=async(req,res)=>{
    try{
        const userId=req.id
        const applications=await Application.find({applicant:userId}).sort({createdAt:-1})
        .populate({
            path:'job',
            options:{sort:{createdAt:-1}},
            populate:{
                path:"company",
                options:{sort:{createdAt:-1}},
            }
        })
        if(applications.length===0){
            return res.status(404).json({message:"No applications found",success:false})
        }   
        return res.status(200).json({message:"Applications found",applications,success:true})
    }catch (error) {
        console.error(error)
        return res.status(500).json({ message: "Internal server error", success: false })
    }
}
// export const getApplicants=async(req,res)=>{
//     try{
//         const jobId=req.params.id
//         const applicants=await Application.find({job:jobId}).sort({createdAt:-1})
//         .populate({
//             path:'applications',
//             options:{sort:{createdAt:-1}},
//             populate:{
//                 path:"applicant",
//                 options:{sort:{createdAt:-1}},
//             }
//         })
//         return res.status(200).json({message:"Applicants found successfully",applicants,success:true})
        
//     }catch (error) {
//         console.error(error)
//         return res.status(500).json({ message: "Internal server error", success: false })
//     }
// }
export const getApplicants = async (req, res) => {
    try {
        const jobId = req.params.id;
        const job = await Job.findById(jobId).populate({
                path: 'applications',
                options: { sort: { createdAt: -1 } },
                populate:{
                    path:'applicant'
                }
            });
            if(!job){
                return res.status(404).json({
                    message:"Job not found",
                    success:false
                })
            }
             return res.status(200).json({
                    success:true,
                    job
                })

       
    

    } catch (error) {
        console.error(error);
        return res.status(500).json({
            message: "Internal server error",
            success: false
        });
    }
};

export const updateApplicationStatus=async(req,res)=>{
    try{
        const {status}=req.body
        const applicationId=req.params.id
        if(!status || !applicationId){
            return res.status(400).json({message:"status and applicationId are required",success:false})
        }
        const updatedApplication=await Application.findByIdAndUpdate(applicationId,{status},{new:true})
        if(!updatedApplication){
            return res.status(404).json({message:"Application not found",success:false})
        }
        return res.status(200).json({message:"Application status updated successfully",application:updatedApplication,success:true})
    }catch (error) {
        console.error(error)
        return res.status(500).json({ message: "Internal server error", success: false })
    }
}
