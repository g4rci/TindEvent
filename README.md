# TindEvent

# TindEvent

## Description
TindEvent is an application that creates matches between registered users and nearby events.
The aim is to help people share the best experiences and find the greatest companions to be with.
It’s possible to choose between the ‘Single Mode’ or ‘Group Mode’ to be able to find the perfect mate or group to enjoy a wide variety of events.

The project is built with MERN stack technologies and it leans on a backend API written in a server-side technology as Node, with a front-end single-page application written in React. 

## User Stories

-  **404:** The user can see a 404 page when trying to reach a page that does not exists.
-  **Signup:** End user can sign up in the platform to be able to look for nearby events or create a new one and joining together with other interested people.
-  **Login:** End user can login to the platform to display its own profile.
-  **Logout:** End user can logout from the platform so no one else can use it.
-  **My profile** The User can display and edit its profile details (e.g. Username, Email address, password, location, date of birth, profile picture and bio description).
- **Search events** A page where the user can look for events to attend in ‘Group Mode’ or ‘Single Mode’.
-  **My events** Here the users can display the events it will attend (in group or single mode).
-  **My matches** The user can display all the matches it has with other single users to attend a specific event.
-  **My groups** The page shows a list of the groups the user has joined.


## Backlog


# Client

## Routes

| Method | Endpoint | Permissions | Return Value | 

|------|--------|--| -------|
GET | `/` |   | public/user |
GET/POST| `/signup` | anon only | signup form, link to login, navigate to homepage after signup|
GET/POST| `/login` | anon only | login form, link to signup, navigate to homepage after login|
GET | `/logout` | Logout Page | anon only | navigate to homepage after logout |
GET/POST| `/edit-profile` | user only | form to update the user's data|
GET/POST| `/add-event` | user only | form to add event search bar|
GET/| `/event/:id` | user only | dashboard of the event details|


# Server

## Models
```
## Models
```
user={
  username: type: String,
  email: {type:String, required: true, unique: true},
  password: {type: String, required: true}
  location: {type: String,  required: true}
  birthDate: {type: Date},
  photoUrl: { type: String, default: “URL”}
  bioDescription: type: String,
  events:[{type: Schema.Types.ObjectId, ref:’‘Event’’’}]
 {timestamps: true }
}

event={
  name:{ type: String, required: true, unique: true},
  location: String,
  date:  {type: Date},
  type: {type: String},
  users: [type: Schema.Types.ObjectID, ref: ‘User’],
  matches:[type: Schema.Types.ObjectID, ref: ‘User’],
 {timestamps: true }
}

```
## Components

Navbar
Home
Profile
SearchEvents
```

## Data structure

### Front-end routes

- ('/') : profile page if logged in or home page with login/signup links
- ('/login') : login page
- ('/signup') : signup page
- ('/edit-profile') : edit profile 
- ('/add-event') : form page to find an event
- ('/event:id') : profile of the event which display the users who join

## Links


### Trello
[Link url](https://trello.com/b/cLIT5T6A/tindevent)


### Git
URls for the project repo and deploy
[Link Repo Server]()
[Link Repo Client]()
[Link Deploy]()


### Slides
URls for the project presentation (slides)
[Link Slides.com]()

