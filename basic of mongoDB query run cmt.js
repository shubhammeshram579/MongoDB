//First commant for showing databases
show dbs
admin           40.00 KiB
config         108.00 KiB
employee       352.00 KiB
local           72.00 KiB
mydb            40.00 KiB
practice       120.00 KiB
stock_summary    8.00 KiB
// use for databases 
use practice
already on db practice

// create collection and insert data
db.inventory.insertOne({first_name: "shubham",
last_name:"meshram",
job_title: "Data Analyst",
Salary: 150000,exp: 5});


//select the collection data
db.inventory.find({});


//find the dataset for i created 
db.inventory.find({first_name: "shubam"})



// updating data
db.inventory.updateOne(
   { item: "postcard" },
   {
     $set: { "size.uom": "dm", status: "R" },
     $currentDate: { lastModified: true }
   }
)


//deleting data
db.inventory.deleteOne({first_name: "shubam"})

// deleting all data
db.inventory.deleteMany({});


// inserting multiple dataset
db.inventory.insertMany([
   { item: "journal", qty: 25, size: { h: 14, w: 21, uom: "cm" }, status: "A" },
   { item: "notebook", qty: 50, size: { h: 8.5, w: 11, uom: "in" }, status: "A" },
   { item: "paper", qty: 100, size: { h: 8.5, w: 11, uom: "in" }, status: "D" },
   { item: "planner", qty: 75, size: { h: 22.85, w: 30, uom: "cm" }, status: "D" },
   { item: "postcard", qty: 45, size: { h: 10, w: 15.25, uom: "cm" }, status: "A" }
]);


// same basic function most use like limit,skip,sort
db.inventory.find({}).limit(1)
db.inventory.find({}).skip(1)

// sort by asceinding order 
db.inventory.find({}).sort({qty: 1})

// desceing oredr
db.inventory.find({}).sort({qty: -1})



