## College Score Card API

The College Score Card app retrieves data from the College Scorecard API by state.
Documentation about the api can be found at https://collegescorecard.ed.gov/data/documentation/

## General Info

Project is created with:
React 16.13
Axios 0.19.2
Styled Components 5.1.1

## Installing

To run this project install it locally using npm

You will need a api key from college scorecard to run this project.

Create a react env variable <br>
REACT_APP_API_KEY='your api key'

## Starting Project

To start this project

```
$ npm start
```

## Running a Query

To intiate a search enter a two letter State.
A search will not begin unless you have entered two letters.

A successfull query will only return the first 100 results.

## Project Notes

#### Layout
For the attribution links I would have liked to have created a footer and set it in there.

The loading bar could definitely be improved. I would have made it more dynamic by using a setInterval to display (...) fading in and out after the message.

#### Displaying Data
Admission rate: Some colleges did not have this information so I just set it to 'Not Available'

#### Initiating Query
I set up a useEffect hook to watch for when the state had a length of two letters.
I also added a regex check to make sure before the search started the parameters we're valid.


#### State Management
This was a smaller project and there wasn't a lot of state management so I went with something simple
If I was going to implement any filtering or sorting I definitely would have used a reducer.


## License

```
MIT
```
