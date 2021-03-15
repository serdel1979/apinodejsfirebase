const { Router } = require('express');
const router = Router();
const admin = require('firebase-admin');

var serviceAccount = require("../../node-firebase-a4504-firebase-adminsdk-vg9f3-1dec852965.json")

admin.initializeApp({  
    credential: admin.credential.cert(serviceAccount),
    databaseURL: 'https://node-firebase-a4504-default-rtdb.firebaseio.com/'
});

const db = admin.database();

router.get('/',(req, res)=>{
    //primero se consulta bd para listar
    db.ref('contactos').once('value',(snapshot)=>{
       const data = snapshot.val();
       res.render('index',{ contactos : data });
    });
});

//new-contact
router.post('/new-contact',(req,res)=>{
    const newContact = {
        firstname : req.body.firstname,
        lastname : req.body.lastname,
        email : req.body.email,
        phone : req.body.phone
    };
    //console.log(newContact);
    db.ref('contactos').push(newContact);
    res.redirect('/');
});

///delete/
router.get('/delete/:id',(req,res)=>{
    db.ref('contactos/'+req.params.id).remove();
    res.redirect('/');
});


module.exports = router;