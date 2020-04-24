# TindEvent
https://tindevent-mpm.web.app/home
## Description
TindEvent is an application that creates matches between registered users and nearby events.
The aim is to help people share the best experiences and find the greatest companions to be with.

The project is built with MERN stack technologies and it leans on a backend API written in a server-side technology as Node, with a front-end single-page application written in React. 

## User Stories

-  **404:** The user can see a 404 page when trying to reach a page that does not exists.
-  **Signup:** End user can sign up in the platform to be able to look for nearby events or create a new one and joining together with other interested people.
-  **Login:** End user can login to the platform to display its own profile.
-  **Logout:** End user can logout from the platform so no one else can use it.
-  **My profile** The User can display and edit its profile details (e.g. Username, Email address, password, location, date of birth, profile picture and bio description).
- **Search events** A page where the user can look for events to attend in ‘Group Mode’ or ‘Single Mode’.
-  **My events** Here the users can display the events it will attend (in group or single mode).
-  **My groups** The page shows a list of the groups the user has joined.

# Client

## Routes
```
- Route |('/home')| home page with login/signup links
- AnonRoute|('/login') | login page
- AnonRoute|('/signup') | signup page
- PrivateRoute|('/private')| private page 
- PrivateRoute|('/profile') | user profile page
- PrivateRoute|('/edit-profile') | edit user profile

```
## Components
```
Navbar
HomePage
AllEvents
AnonRoute
PrivateRoute
EditProfile
Profile
```

# Server

## Models

```
user={
  username: {type: String, required: true},
  email: {type: String, required: true, unique: true},
  password: {type: String, required: true},
  birthDate: {type: String},
  location: {type: String},
  bio: {type: String},
  picture: { type: String, default: "https://banner2.cleanpng.com/20180404/djw/kisspng-computer-icons-users-group-internet-forum-user-avatar-5ac45a991206f5.9866985115228176890738.jpg"},
  groups:[{type: Schema.Types.ObjectID, ref: 'Group'}],
  events:[{type: Schema.Types.ObjectId, ref:’‘Event’’’}],
 {timestamps: true }
}

group={
  creator:{type: Schema.Types.ObjectID, ref: 'User'},
    name: {type: String, required: true},
    users: [{type: Schema.Types.ObjectID, ref: 'User'}],
    pending: [{type: Schema.Types.ObjectID, ref: 'User'}],
    eventID: {type: String},
    bio: {type: String},
 {timestamps: true }
}
```
## Routes
```
POST| `/auth/signup`| signup form, link to login, navigate to homepage after signup|
POST| `/auth/login` | login form, link to signup, navigate to homepage after login|
POST| `/auth/logout`| navigate to homepage after logout |
GET | `/auth/private`| signup form, link to login, navigate to homepage after signup|
GET | `/auth/me`| signup form, link to login, navigate to homepage after signup|
GET | `/profile/:id`| get user profile
PUT | `/profile/:id/edit`| edit profile form
POST| `/profile/:id/delete`| delete profile
POST| `/group/create` | create e new group
POST| `/group/:id/join`| user to join a group
POST| `/group/:id/:idUser/accept`| group to accept user request to join
POST| `/group/:id/delete`| delete group
PUT | `/group/:id/edit`| edit group form
```

## Links
```

### Trello
[Link url](https://trello.com/b/cLIT5T6A/tindevent)


### Git
URls for the project repo and deploy
[Link Repo Server]()
[Link Repo Client]()
[Link Deploy]()


### Slides
URls for the project presentation (slides)
[Link Slides.com](https://docs.google.com/presentation/d/11ldQq5ILu4r-xTrKS9HiwltlZcXxJDyiRg7jwWUA6UY/edit#slide=id.g251d9112ad_1_0)
```
