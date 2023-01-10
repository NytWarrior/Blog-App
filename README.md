# Social Media Sample Project

## Database Setup

```mysql

CREATE DATABASE socaildb;

CREATE USER myuser IDENTIFIED BY 'mypass';

GRANT ALL PRIVILEGES ON socialdb.* TO myuser;

FLUSH PRIVILEGES;

```

## Project Structure

```shell
src
├───controllers
├───db
├───public
├───routes
└───utils

```

## Business Logic

### Users

1. **create users**
   this will create a new user with a random username

   - username -> author of this post
   - title
   - body

2. **show all posts**
   list all existing posts, with following filters

   - filter by username
   - filter by query contained in title (search by title)

3. **edit posts**
   `TBD`

4. **delete posts**
   `TBD`

### Comments

1. **show all comments(of a users)**
2. **show all comments(under a post)**
3. **add a comment**

## API Documentation

### `users`

1. `POST /users`
   Create a new user with random username and an user id

2. `GET /users{userid}`
   Get an user with a given user id

3. `GET /users/{username}`
   Get an user with a given username

### `posts`

1. `GET /posts`
   Get all posts by everyone

2. `POST /posts`
   Create a new post with required fields:
   - userId
   - title
   - body
