var express = require('express');
var path = require('path');

var app = express(); 

app.use(express.static(__dirname));

app.get('/', (req, res) => {
  res.sendFile(path.resolve(`./view/index.html`));
});
app.get('/component', (req, res) => {
    res.sendFile(`${__dirname}/view/components/index.html`);
  });
app.get('/component/:cpname', (req, res) => {
    res.sendFile(`${__dirname}/view/components/${req.params.cpname}.html`);
  });

var port = 5001; // 사용할 포트 번호를 port 변수에 넣습니다. 
app.listen(port, function(){ // port변수를 이용하여 3000번 포트에 node.js 서버를 연결합니다.
  console.log('server on! http://localhost:'+port); //서버가 실행되면 콘솔창에 표시될 메세지입니다.
});