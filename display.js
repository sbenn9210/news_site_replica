let container = document.getElementById('container')
let newsContent = news['articles']

 newsContent.forEach((news) => {

  let info = `<div class="flex-container">
                <div class="item">
                  <a href="${news.url}"><img src="${news.urlToImage}"></a>
                </div>
                <div>
                  <a class="article-head" href="${news.url}"><h3>${news.title}</h3></a>
                  <p>${news.publishedAt}</p>
                  <p>${news.author} via: ${news.source['name']}</p>
                  <p>${news.description}</p>
                </div.
             </div>`


   container.innerHTML += info
   return info
 })
