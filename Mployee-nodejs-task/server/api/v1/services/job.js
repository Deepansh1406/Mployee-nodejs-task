import jobModel from '../../../models/job';



export const jobServices = {
    createJob: async (Obj) => {
        return await jobModel.create(Obj);
      },
    
      updateJob: async (query, updateObj) => {
        return await jobModel
          .findOneAndUpdate(query, updateObj, { new: true })
          .lean();
      },
      updateJobMany: async (query, updateObj) => {
        return await jobModel
          .updateMany(query, updateObj, { new: true })  
          .lean();
      },
    
      findJob: async (query) => {
        return await jobModel.findOne(query).lean();
      },
      findJobWithPagination :  async (Obj) =>{
        const { page , limit , search  } = Obj
        const query = {}
        console.log("query: ", query);
        if(search){
            query.title = search
        }

        let options = {
            page: parseInt(page) || 1,
            limit: parseInt(limit) || 10,
            sort: { createdAt: -1 },
        };
        return await jobModel.paginate(query, options);
      }

}
