class Apifeatures{
    constructor(query,queryStr){
        this.query=query;
        this.queryStr=queryStr
    }

    //filter feature
    filter(){
        const queryCopy={...this.queryStr}
        let queryStr=JSON.stringify(queryCopy);
        this.query=this.query.find(JSON.parse(queryStr));
    
        return this
    }
    
}

module.exports=Apifeatures
