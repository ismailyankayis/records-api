# Article Publisher
RESTful API which provides to insert articles and authors into the database which is in cloud, and provides these articles and author by determinated condition.
The Database is stored on cloud.


# APIs

- Article
    - Insert

        To insert an artictle to the database:
        POST -> https://articles-publisher-app.herokuapp.com/api/articles

        The article model can be found [in api/models/articles.js](https://github.com/ismailyankayis/article-publisher/blob/master/api/models/Article.js)

    - Receive

        To get artiles by author id:
        POST -> https://articles-publisher-app.herokuapp.com/api/articles/findByAuthor

- Author
    - Insert

        To insert an author to the database:
        POST -> https://articles-publisher-app.herokuapp.com/api/authors

        The article model can be found [in api/models/authors.js](https://github.com/ismailyankayis/article-publisher/blob/master/api/models/Author.js)

    - Receive

        To get authors by first name:
        POST -> https://articles-publisher-app.herokuapp.com/api/authors/findByName


# TEST
- Example test scenarios can be found in [\_\_test\_\_/sample.test.js](https://github.com/ismailyankayis/article-publisher/blob/master/__test__/sample.test.js)

- Test scenarios can be run in local after the repository is received or on [postman](https://documenter.getpostman.com/view/9824791/TVRrWQiQ).