const test=require('node:test'), assert=require('node:assert/strict'), vm=require('node:vm'),fs=require('node:fs'),path=require('node:path');
test('client cannot credit its balance through simulated recharge',async()=>{
  const routes={};let writes=0;
  const router={post:(p,...h)=>routes[p]=h.at(-1),get:()=>{}};
  const model=function(){writes++;throw Error('must not write')};
  const mocks={'express':{Router:()=>router},'../middlewares/authenticateJWT':()=>{},'../models/Recarga':model};
  vm.runInNewContext(fs.readFileSync(path.join(__dirname,'routes/recargaRoutes.js'),'utf8'),{require:id=>{if(!(id in mocks))throw Error(id);return mocks[id]},module:{exports:{}}});
  let status;
  const res={status:s=>(status=s,res),json:()=>{}};
  await routes['/recarga']({body:{valor:1000000},user:{id:'user'}},res);
  assert.equal(status,503);assert.equal(writes,0);
});
