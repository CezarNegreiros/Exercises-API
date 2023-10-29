const { getConnection } = require("./db")

async function start(){
    const db = await getConnection(0);

    try{
        await db.exec(`
        CREATE TABLE IF NOT EXISTS exercises(
            id          INTEGER PRIMARY KEY,
            name        TEXT NOT NULL,
            type        TEXT NOT NULL,
            muscle      TEXT NOT NULL,
            difficulty  TEXT NOT NULL
        )`);
    }catch(err){
        if(err?.message?.startsWith("SQLITE_ERROR: index users_username already exists")){
            console.log("Database already exists!!")
        }

    }
}
(async function(){
    await start();
})();