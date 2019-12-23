
const express = require('express');
const router = express.Router();


/*
 * GET home page.
 */
router.get('/', function(req, res) {
  res.send('Hello world!');
});

router.post('/notes', function(req, res) {
  try{
  let amtArray = [2000, 500,200, 100];
  let total = req.body.amount
  // the denomination you want to find.
  let resultArray =[]
if(req.body.denomination && !amtArray.includes(req.body.denomination)){
  res.status(400); 
  res.headersSent = true;
  throw new Error(`Invalid denomination entered,${amtArray} are only valid notes`);
}
 for (let i  in amtArray) {
  if(!req.body.denomination || amtArray[i]<= req.body.denomination ) {      
  resultArray.push(Math.floor(total / amtArray[i]));
            // Get the new total
            total = total % amtArray[i];
 }
 else{
  resultArray.push(0);
 }
}
        let response={}
        response['2000_Notes'] = resultArray[0];
        response['500_Notes'] = resultArray[1];

        response['200_Notes'] = resultArray[2];
        response['100_Notes'] = resultArray[3];
       
  res.send(response);
  
      }
      catch(err){
  throw err;
      }
     
});

    
module.exports = router;
