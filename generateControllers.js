class Generate {
    constructor(props) {   
        this.db = props.db;
        this.find = this.find.bind(this);
        this.findById = this.findById.bind(this);
        this.add = this.add.bind(this);
    }

    find() {
        return this.db;
    }

    findById(id) {
        return this.db
        .where({id})
    }

    add(body){
        return this.db.insert(body);
    }

    remove(id) {
        return this.db.where({id}).del();
    }

    update(changes,id) {
        return this.db.update(changes).where({id})
    }


}

module.exports = Generate;