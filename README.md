# Records-api
RESTful API which provides records from db.


# APIs



- Get Records by Given Conditions:

    POST -> https://records-api-app.herokuapp.com/api/records

    - Request PayLoad

        Ex: 

            {
            "startDate": "2016-01-26",
            "endDate": "2018-02-02",
            "minCount": 2700,
            "maxCount": 3000
            }


# TEST
- Example test scenarios can be found in [\_\_test\_\_/sample.test.js](https://github.com/ismailyankayis/records-api/blob/master/__test__/sample.test.js)

- Test scenarios can be run in local after the repository is received or on [postman](https://documenter.getpostman.com/view/9824791/TVRrWQiQ).

# Response Payload
Ex:
    
    {
        "code": 0,
        "msg": "Successful",
        "records":[
            {
                "key": "IAEfpWPm",
                "createdAt": "2016-12-22T04:45:57.372Z",
                "totalCount": 2696
            },
            {
                "key": "MNZeTcIj",
                "createdAt": "2016-12-14T21:50:58.270Z",
                "totalCount": 2697
            }]
    }

code = 0 => successfull

code = -1 => an error occured