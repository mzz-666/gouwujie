const express = require('express')
const fs = require('fs')
const app = express()

app.all('*',function(req,res,next){
  //设置允许跨域的域名，*代表都可以，任意域名
  res.header('Access-Control-Allow-Origin','*')
  //允许的header类型
  res.header('Access-Control-Allow-Headers','content-type')
  //跨域允许的请求方式
  res.header('Access-Control-Allow-Methods','DELETE,PUT,POST,GET,OPTIONS')
  if(req.method.toLowerCase()=='options')
    res.send(200)
  else
    next()

})

//首页的数据
app.get('/home/multidata',function(req,res){
  fs.readFile('./data/multidata.json',function(err,data){
    if(err){
      return res.send('err')
    }
    res.send(JSON.parse(data))
  })
})

app.get('/home/beauty',function(req,res){
  fs.readFile('./data/beauty.json',function(err,data){
    if(err){
      return res.send('err')
    }
    res.send(JSON.parse(data))
  })
})
app.get('/home/new1',function(req,res){
  fs.readFile('./data/homedata/new1.json',function(err,data){
    if(err){
      return res.send('err')
    }
    res.send(JSON.parse(data))
  })
})
app.get('/home/sell1',function(req,res){
  fs.readFile('./data/homedata/sell1.json',function(err,data){
    if(err){
      return res.send('err')
    }
    res.send(JSON.parse(data))
  })
})
app.get('/home/pop1',function(req,res){
  fs.readFile('./data/homedata/pop1.json',function(err,data){
    if(err){
      return res.send('err')
    }
    res.send(JSON.parse(data))
  })
})

//分类页的数据
app.get('/category/subcategory',function(req,res){
  fs.readFile('./data/categorydata/category.json',function(err,data){
    if(err){
      return res.send('err')
    }
    res.send(JSON.parse(data))
  })
})
app.get('/category/subcategory582',function(req,res){
  fs.readFile('./data/categorydata/subcategory582.json',function(err,data){
    if(err){
      return res.send('err')
    }
    res.send(JSON.parse(data))
  })
})
app.get('/category/subcategory595',function(req,res){
  fs.readFile('./data/categorydata/subcategory595.json',function(err,data){
    if(err){
      return res.send('err')
    }
    res.send(JSON.parse(data))
  })
})
app.get('/category/subcategory596',function(req,res){
  fs.readFile('./data/categorydata/subcategory596.json',function(err,data){
    if(err){
      return res.send('err')
    }
    res.send(JSON.parse(data))
  })
})
app.get('/category/subcategory598',function(req,res){
  fs.readFile('./data/categorydata/subcategory598.json',function(err,data){
    if(err){
      return res.send('err')
    }
    res.send(JSON.parse(data))
  })
})
app.get('/category/subcategory3627',function(req,res){
  fs.readFile('./data/categorydata/subcategory3627.json',function(err,data){
    if(err){
      return res.send('err')
    }
    res.send(JSON.parse(data))
  })
})

app.listen(8000,function(){
  console.log('server is running')
})
