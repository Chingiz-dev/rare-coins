const mysql = require('mysql');
const express = require('express');
const multer = require('multer');
const bcrypt = require('bcrypt');
const randomString = require('./randomString');
// const cors = require('cors');
const path = require('path');
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './images/');
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  }
});
const upload = multer({ storage: storage });


const pool = mysql.createPool({
  host: process.env.DB_HOST || 'localhost',
  user: process.env.DB_USER || 'root',
  password: process.env.DB_PASS || '12345',
  database: process.env.DB_Name || 'coins'
});

const app = express();
app.use(express.json());
// app.use('/images', express.static('images'));
app.use(express.static('images'));
app.use(express.static(path.join(__dirname, 'client/build')));
// app.get('*', (req, res) => {
//   res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
// });

let users = [];
let tokens = [];

function checkCredentials(req) {
  const userLogin = req.body.login;
  const userPass = req.body.pass;
  //console.log(users);
  const user = users.find(u => u.login === userLogin);
  if (!user) {
    return false;
  }
  const salt = user.salt;
  const hash = bcrypt.hashSync(userPass, salt);
  if (user.hash === hash) {
    return true;
  } else {
    return false;
  }
}

function checkToken(req) {
  const userToken = req.body.token;
  if (!userToken) {
    return false;
  }
  const ourToken = tokens.find(t => t.token === userToken);
  if (!ourToken) {
    return false;
  } else {
    return true;
  }
}

app.post('/register', (req, res) => {
  const salt = bcrypt.genSaltSync(10);
  const hash = bcrypt.hashSync(req.body.pass, salt);
  const user = {
    login: req.body.login,
    salt: salt,
    hash: hash
  };
  // Check that user not exists
  users.push(user);
  res.json({ login: user.login });
  // console.log(user.login);
});


app.post('/token', (req, res) => {
  if (!checkCredentials(req)) {
    res.sendStatus(401);
  } else {
    const newToken = randomString();
    const login = req.body.login;
    // Remove old token
    tokens.push({ login: login, token: newToken });
    res.json({ login: login, token: newToken });
  }
});

app.delete('/logout', (req, res) => {
  if (!checkToken(req)) {
    res.sendStatus(401);
  } else {
    const token = req.body.token;
    const toDelete = tokens.find(el => el.token === token);
    if (!toDelete) {
      res.sendStatus(404);
    } else {
      tokens = tokens.filter(el => el !== toDelete);
      res.send(toDelete);
    }
  }
});

app.post('/deletecoin', (req, res) => {
  if (!checkToken(req)) {
    res.sendStatus(401);
    console.log('not deleted');
  } else {
    let coinID = +req.body.coinID;
    const deleteCoin = `delete from coins where coinID = ${coinID}`;
    console.log(deleteCoin, 'deleted');
    //  res.status(201).json(addCoinSql);
    pool.query(deleteCoin, (err, data) => {
      if (!err) {
        console.log(data);
        res.status(201).json('coin deleted');
      } else {
        console.log(err);
        res.status(500).json('server down');
      }
    });
  }
});

app.post('/editcoin', (req, res) => {
  if (!checkToken(req)) {
    res.sendStatus(401);
    // console.log('not edited');
  } else {
    console.log(req.body);
    let coinID = +req.body.coinID;
    console.log(coinID);
    let typ = req.body.typ;
    let coin = req.body.coin;
    let shortD = req.body.shortD;
    let longD = req.body.longD;
    let country = req.body.country;
    let metal = req.body.metal;
    let quality = req.body.quality;
    let denom = req.body.denom;
    let year = +req.body.year;
    let weight = +req.body.weight;
    let price = +req.body.price;
    const editCoin = `UPDATE coins
    SET
     typ = '${typ}',
     coin = '${coin}',
     shortD = '${shortD}',
     longD = '${longD}',
     country = '${country}',
     metal = '${metal}',
     quality = '${quality}',
     denom = '${denom}',
     year = ${year},
     weight = ${weight},
     price = ${price}
     where coinID = ${coinID}`;
    console.log(editCoin);
    pool.query(editCoin, (err, data) => {
      if (!err) {
        console.log(data);
        res.status(201).json('coin edited');
      } else {
        console.log(err);
        res.status(500).json('server down');
      }
    });
  }
});


app.get('/coinsall', (req, res) => {
  pool.query('SELECT * FROM coins', (err, data) => {
    if (err) {
      res.status(500);
    } else {
      res.json(data);
    }
  });
});

// app.get('/coins/:typ', (req, res) => {
//   const sql = 'SELECT * FROM coins where typ = "' + req.params.typ + '" OR coin = "' + req.params.typ + '" LIMIT 0, 6';
//   pool.query(sql, (err, data) => {
//     if (err) {
//       // res.json(err);
//       res.status(500);
//     } else {
//       res.json(data);
//     }
//   });
// });

app.post('/filter', (req, res) => {
  const coinName = req.body.coinName;
  const country = req.body.country;
  const metal = req.body.metal;
  const quality = req.body.quality;
  const yearFrom = req.body.yearFrom;
  const yearTo = req.body.yearTo;
  const priceFrom = req.body.priceFrom;
  const priceTo = req.body.priceTo;
  const coinsPP = req.body.coinsPP;
  const countFromCoin = req.body.countFromCoin;

  const sql = 'SELECT * FROM coins where ' + (coinName ? 'typ = "' + coinName + '" OR' : '') +
    (coinName ? ' coin = "' + coinName + '" OR' : '') +
    (country ? ' country = "' + country + '" or ' : '') +
    (metal ? ' metal = "' + metal + '" or' : '') +
    (quality ? ' quality = "' + quality + '" OR' : '') +
    (priceFrom < priceTo ? '( price >  "' + priceFrom + '" and price < "' + priceTo + '" ) or' : '') +
    (yearFrom < yearTo ? '( year >  "' + yearFrom + '" and year < "' + yearTo + '") or' : '') +
    ' coin = "coin" LIMIT ' + countFromCoin + ', ' + coinsPP;
  pool.query(sql, (err, data) => {
    if (err) {
      // res.json(err);
      res.status(500);
    } else {
      res.json(data);
    }
  });
});

app.get('/coinstyp/:typ', (req, res) => {
  const sql = 'SELECT * FROM coins where typ = "' + req.params.typ + '" LIMIT 0, 1';
  pool.query(sql, (err, data) => {
    if (err) {
      // res.json(err);
      res.status(500).json('not found');
    } else {
      res.json(data);
    }
  });
});


app.post('/coin', upload.array('coin', 2), (req, res) => {
  // app.post('/coin', upload.single('coin'), (req, res) => {
  console.log(req.body);

  if (!checkToken(req)) {
    res.sendStatus(401);
  } else {
    let typ = req.body.typ;
    let coin = req.body.coin;
    let shortD = req.body.shortD;
    let longD = req.body.longD;
    let country = req.body.country;
    let metal = req.body.metal;
    let quality = req.body.quality;
    let denom = req.body.denom;
    let year = +req.body.year;
    let weight = +req.body.weight;
    let price = +req.body.price;
    let obv = req.files[0].originalname;
    let rev = req.files[1].originalname;
    const addCoinSql = `INSERT INTO coins (typ, coin, shortD, longD, country, metal, quality, denom, year, weight, price, obv, rev) values ('${typ}', '${coin}', '${shortD}', '${longD}', '${country}', '${metal}', '${quality}',
     '${denom}', ${year}, ${weight}, ${price}, '${obv}', '${rev}')`;
    //  res.status(201).json(addCoinSql);
    pool.query(addCoinSql, (err, data) => {
      if (!err) {
        console.log(data);
        res.status(201).json('coin added');
        // res.json(data);
      } else {
        console.log(err);
        res.status(500).json('server down');
      }
    });
  }
});

const port = process.env.PORT || 5000;

app.listen(port, () => { console.log('Started server at port ' + port); });

