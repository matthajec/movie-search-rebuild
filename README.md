# Movie Search Rebuild (of [this](https://github.com/matthajec/react-movie-search-app))
## Description
This is an app to find and browse movies. It uses [TMDb's](https://www.themoviedb.org/) REST API. It's a rebuild of the [original](https://github.com/matthajec/react-movie-search-app) one I made because I've improved my skills a lot since making that project and updating it would be more/just as much work as recreating it entirely.

## Frameworks/Package(s)
* ReactJs
* MaterialUI
* TypeScript

## Challenges
* Implementing fetch with typescript. In my research I learned about generics, which I used to create an ```http``` utility function that looks like this:
  ```javascript
  export default async function http<T>( 
    request: RequestInfo
  ): Promise<T> {
    const response = await fetch(request)
    const body = await response.json()
    return body
  }
  ```
  This lets you use types as normal despite the data not existing in the app until runtime.

* Optimizing the search input box. The state containing the value of the search box is stored in a component that had the results as a grandchild, so every time the value of the search box changed all the results had to rerender too, which caused lots of lag. To fix this, I used ```React.memo``` on the results so the results only rerender if the results change, not any state above it.

* Hiding the API key
  The movie database requires an API key for all of the requests this app requires. I didn't want to expose that key publicly, so I created a server and hosted it on heroku that will fetch and return these results for me. The repository for that is found here [here](https://github.com/matthajec/tmdb-proxy). One issue with this system is that heroku puts servers to sleep whenever they're not being used for a period of time, since this isn't a frequently used application, the first request will take a while.
