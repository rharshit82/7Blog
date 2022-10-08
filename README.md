
# 7Blog : A Minimal MERN Stack Blog

7Blog is a minimal blog that is created using MongoDB, ExpressJS - NodeJS and ReactJS.

## Deployed Link
 https://sevenblog.herokuapp.com
 
![7Blog](https://github.com/rharshit82/7Blog/blob/master/uploads/7blog.png?raw=true)


## Features
- Authentication (using jsonwebtoken and Local Storage)
- Password saved in database in encrypted format (using bcrypt)
- Login
- Registration
- Dynamic Navigation bar for Login/Logout
- Add Post
- Homepage that displays all posts
- Separate page for every post

## Future Implementations
- Delete and Update post
- Admin user with seperate login, dashboard etc. (My models and Database have a field for admin already)

## Usage
We have used ECMAScript modules in the backend. Make sure you have Nodejs v14.6 and above. Otherwise add "--experimental-modules" flag.

## Environment Variables
Create a .env file in the root folder and add the following in that file. I have personally used MongoDB Atlas in the project.
```Environment variables
PORT = 5000
MONGO_URI = your mongodb uri
JWT_SECRET = 'xyz123'
```

## Install Dependencies
```Install Dependencies
npm install
cd frontend
npm install
```
## Run
```
# Run frontend (:3000) & backend (:5000)
npm run dev

# Run backend only
npm run server

# Run client only
npm run client
```

## Build
Run react build script to let react create production build that you can deploy.

```
cd client
npm run build
```

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/github/contributors/rharshit82/7Blog.svg?style=for-the-badge
[contributors-url]: https://github.com/rharshit82/7Blog/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/rharshit82/7Blog.svg?style=for-the-badge
[forks-url]: https://github.com/rharshit82/7Blog/network/members
[stars-shield]: https://img.shields.io/github/stars/rharshit82/7Blog.svg?style=for-the-badge
[stars-url]: https://github.com/rharshit82/7Blog/stargazers
[issues-shield]: https://img.shields.io/github/issues/rharshit82/7Blog.svg?style=for-the-badge
[issues-url]: https://github.com/rharshit82/7Blog/issues
[license-shield]: https://img.shields.io/github/license/rharshit82/7Blog.svg?style=for-the-badge
[license-url]: https://github.com/rharshit82/7Blog/blob/master/LICENSE
