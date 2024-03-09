class APIFeatures {
    constructor(query,queryStr){
        this.query = query;
        this.queryStr = queryStr;

    }
    // search using languages
    search(){
        let keyword = this.queryStr.keyword ? {
            languages:{
                $regex :this.queryStr.keyword,
                $options: 'i'
            }
        }:{};
        this.query.find({...keyword});
        return this;
    }
    // filter using experience
    
    filter(){
        const queryStrCopy = {...this.queryStr};
        // removing fields from query
        const removeFields = ['keyword','limit','page'];
        removeFields.forEach(field => delete queryStrCopy[field])   ;

        this.query.find(queryStrCopy);
        return this;

        let queryStr =JSON.stringify(queryStrCopy);
        queryStr = queryStr.replace(/\b(gt|gte|lt|lte)/g,match =>{
            `$${match}`
        })
        this.query.find(JSON.parse(queryStr));
        return this;

    }

    paginate(resPerPage){
        const currentPage = Number(this.queryStr.page) || 1;
        const skip = resPerPage*currentPage-1 //  ex : it will skip 4 data when page no is 3
        this.query.limit(resPerPage).skip(skip);
        return this;


    }
   
}

module.exports = APIFeatures;