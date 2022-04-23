let Database = require("./Database");

class Igapvendors{
    id = 0;
    name = "";
    email = "";
    mobileno = "";
    address = "";
    cityid = "";
    pincode = "";

    query = "";
    db = new Database.Database();

    constructor(){
        this.id = 0;
        this.name = "";
        this.email = "";
        this.mobileno = "";
        this.address = "";
        this.cityid = "";
        this.pincode = "";


    }

    save = ()=>{
        if(this.id == 0)
        {
            this.query = "INSERT INTO igapvendors (id,name, email, mobileno, address, cityid, pincode) ";
            this.query += "VALUES (" + this.id + ",'" + this.name + "','" + this.email + "','" + this.mobileno + "','" + this.address + "','" + this.cityid + "','" + this.pincode + "')";
        }

        else
        {
            this.query = "UPDATE igapvendors SET id="+ this.id +", name=" + this.name +" ,  email= '" + this.email +"' ,address='" + this.address +"'  ,cityid='" + this.cityid +"'  ,pincode='" + this.pincode +"' WHERE id=" + this.id ;
        }
        console.log(this.query);
        return new Promise((resolve, rejects)=> {
            this.db.query(this.query,(err, result)=>{
                this.db.close();
                if (err) {
                    return rejects(err);
                }
                resolve(result);
            });
        });
        
    }

    get = () =>{
        this.query = "SELECT * FROM igapvendors WHERE id=" +this.id;
        console.log(this.query);
        return new Promise((resolve, rejects)=> {
            this.db.query(this.query,(err, result)=>{
                this.db.close();
                if (err) {
                    return rejects(err);
                }
                resolve(result);
            });
        });

        
    }

    list = () =>{
        this.query = "SELECT * FROM igapvendors ";
        console.log(this.query);
        return new Promise((resolve, rejects)=> {
            this.db.query(this.query,(err, result)=>{
                this.db.close();
                if (err) {
                    return rejects(err);
                }
                resolve(result);
            });
        });
    }

    delete = ()=>{
        this.query = "DELETE FROM igapvendors  WHERE id =" + this.id
        console.log(this.query);
        return new Promise((resolve, rejects)=> {
            this.db.query(this.query,(err, result)=>{
                this.db.close();
                if (err) {
                    return rejects(err);
                }
                resolve(result);
            });
        });
    }


}

module.exports = {
    Igapvendors:Igapvendors
}