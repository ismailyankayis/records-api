# Records-api
RESTful API which provides records from db.


# APIs



- Get Records by Given Conditions:

    POST -> https://records-api-app.herokuapp.com/api/records


# TEST
- Example test scenarios can be found in [\_\_test\_\_/sample.test.js](https://github.com/ismailyankayis/records-api/blob/master/__test__/sample.test.js)

- Test scenarios can be run in local after the repository is received or on [postman](https://documenter.getpostman.com/view/9824791/TVRrWQiQ).

# Response Payload
{
    "code": 0,
    "msg": "Successful",
    "records":[...]
}

code = 0 => successfull

code = -1 => an error occured