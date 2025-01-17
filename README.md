# Full Stack Web Developer Challenge
## Task Description
Your task for this challenge is to create a small search engine comprising of two parts, a web-based user interface and a server component that exposes a REST API which provides search results retrieved from a corpus of text that will be provided to you in `corpus/hemingway.txt`.

Your submission will be evaluated for conforming to the specifications outlined below as well as code quality (maintainability, scalability, performance etc.). You are permitted to use any resources and libraries you wish, however, you should be able to justify design choices in your code.


## Requirements
The basic search engine should be capable of the following three operations.

1. Given a query consisting of a single word, display the 3 most similar words in the search corpus according to some similarity metric of your choosing.
2. Given a single word `w`, update the search corpus with `w`. The new word `w` should immediately be 
queryable.
3. Given a single word `w`, remove the most similar word to `w` in the corpus from further search results. 
### User Interface
The user interface should be a browser-based application developed using your JavaScript web framework of choice. It should support the three aforementioned operations. How this is done is completely up to you. Use your creativity and imagination to create a UI that will set your submission apart!

### REST API
The REST API can be implemented using whatever language and frameworks of your choosing. Again, like the UI, it needs to support the three operations listed above. How you choose to accomplish this task is up to you.

## Deliverables
To submit your challenge, fork this repository and provide the link to your forked repository.
You should also update this README to include instructions on how to run your search engine.
Tests are not mandatory but will be considered bonus points if you provide them.

## Running the application
2 servers are needed (one for the backend and one for the frontend)

You should have postgresql up and running on your system for the rails server to start properly.

In the "/api" directory, run:

```
rake db:setup
rake db:migrate
rake db:seed
rails s
```

In the "/frontend" directory, run:

```
npm i
npm start
```

Images:

Main App:
![Screen Shot 2021-04-23 at 1 05 28 PM](https://user-images.githubusercontent.com/4149036/115905846-ae08d080-a434-11eb-87ee-dfa5a97385cb.png)

Add Words:
![Screen Shot 2021-04-23 at 1 08 53 PM](https://user-images.githubusercontent.com/4149036/115906123-1eafed00-a435-11eb-8f0d-1fef804f640b.png)

Search Words: 3 results returned
![Screen Shot 2021-04-23 at 1 09 07 PM](https://user-images.githubusercontent.com/4149036/115906133-21aadd80-a435-11eb-9c32-aced56e73c19.png)

Tasks that were taken:
1. Updated the database with the text from hemingway.txt
2. Able to query, add, delete from the cloud of words.

