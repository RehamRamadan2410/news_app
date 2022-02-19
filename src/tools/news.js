
    const request = require('request')
    const news = (callback) => {
        const newsUrl = 'https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=2e93e9d9b418478bbf84d42147b4239e'
    
        request({url:newsUrl,json:true},(error,response)=>{
            if(error){
                callback('Unable to connect location service',undefined)
            }
            else if(response.body.status="no"){
               callback(response.body.message,undefined)
            }
            else if (response.body.articles.length == 0){
                callback('Unable to find location .. Try again',undefined)
            }
               
            else {
                callback(undefined,response.body.articles
                //    auther:response.body.articles.auther,
                    // title:response.body.articles.title,
                    // description:response.body.articles.description,
                    //    urlToImage:response.body.articles.urlToImage
                )
            }
        })
    }
    // console.log(response.body.articles)
    module.exports = news

