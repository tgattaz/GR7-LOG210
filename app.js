var express = require('express');
var mysql = require('mysql');
var aws= require('aws-sdk');


var app = express();

//connection à la bd mysql heroku
var connection = mysql.createConnection({
    host:'us-cdbr-iron-east-01.cleardb.net',
    user:'b2af54710141cb',
    password:'f361883b',
    database:'heroku_56876da023ab330'
});
connection.connect();

app.set('views', './views');
app.use(express.static('./public'));
app.engine('html', require('ejs').renderFile);
const S3_BUCKET = process.env.S3_BUCKET;

aws.config.region='us-east-2';

app.get('/account', (req, res) => res.render('account.html'));

app.get('/sign-s3', (req, res) => {
    const s3 = new aws.S3();
    const fileName = req.query['file-name'];
    const fileType = req.query['file-type'];
    const s3Params = {
      Bucket: S3_BUCKET,
      Key: fileName,
      Expires: 60,
      ContentType: fileType,
      ACL: 'public-read'
    };
  
    s3.getSignedUrl('putObject', s3Params, (err, data) => {
      if(err){
        console.log(err);
        return res.end();
      }
      const returnData = {
        signedRequest: data,
        url: `https://${S3_BUCKET}.s3.amazonaws.com/${fileName}`
      };
      res.write(JSON.stringify(returnData));
      res.end();
    });
  });
  app.post('/save-details', (req, res) => {
    // TODO: Read POSTed form data and do something useful
  });
app.get('/', function(req, res) {
    /*code pour afficher table de la base de donnée
    connection.query('SELECT * FROM equipe',function(err,rows,fields){
        if(err){
            console.log('error: ',err);
            throw err;
        }
        res.send(['Vous êtes à l\'accueil ',rows]);
    });
    */
    res.send('Vous êtes à l\'accueil ');
});


let port = process.env.PORT;
if(port==null || port==""){
    port=8000;
}
/*pour tester localement decomenter la ligne suivante et commente la ligne d'apres
 *ouvree un navigateur écrive localhost:8080
 *p.s. n'oublie pas de executer le fichier avant de tester dans le navegateur
 */
//app.listen(8080);
app.listen(port);