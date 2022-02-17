var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});


router.get('/example',
    function(request,response){
        response.send('kukkuu');
        console.log('done');
    }
);

router.get('/example/:name',
    function(request,response){
        response.send('Hello '+request.params.name);
    }
);

router.get('/example2/:firstName/:lastName',
    function(request, response){
        response.send('Hello '+request.params.firstName+" "+request.params.lastName);
    }
);

router.use('/example',
    function(req,res,next){
        console.log('The example middleware called');
        next();
    }
);

router.post('/',
    function(request,response){
        response.send(request.body);
        console.log(request.body);
    }
);

module.exports = router;
