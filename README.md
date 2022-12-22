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
   list all existing posts, we should have following filters

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
