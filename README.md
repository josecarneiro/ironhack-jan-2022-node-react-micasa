# Micasa

## Client

### Pages

- Home - / - Display houses that can be rented, users.
- Register - /register - Allow visitor to create account with name, email, password and profile picture.
- Log In - /log-in - Allows existing user to log-in.
- Profile Search - /profile/search - Search for users.
- Profile Edit - /profile/edit - Allows authenticated user to edit their profile.
- Profile - /profile/:id - Visualize users' profile and houses they own that can be rented.
- Home Search - /house/search - Search for houses on map.
- House Bookmars - /house/bookmarks - Allows user to view bookmarked houses.
- House Add - /house/add - Allows user to post house that is up for rent.
- House Detail - /house/:id - Visualize single house details, allows authenticated users to contact owner, allows authenticated users to bookmark house.
- House Edit - /house/:id/edit - Allows user to post house that is up for rent.
- Message list - /message/list - Lists all message threads of an authenticated user.
- Message thread - /message/:id - Displays single message thread between authenticated user and another user. Allows authenticated userd to send new message.

### Services

- listHomeData - issues GET to '/' - Lists houses and profiles. ({ houses: [], profiles: [] })

- registerUser - issues POST to '/authentication/sign-up' - Registers new user.
- logInUser - issues POST to '/authentication/sign-in' - Authenticates existing user.
- signOutUser - issues POST to '/authentication/sign-out' - Signs out user.
- loadUserInformation - issues GET to '/authentication/me' - Loads information about authenticated user.

- profileSearch - issues GET to '/profile/search' - Allows user to search for other user profiles.
- profileLoad - issues GET to '/profile/:id' - Loads single users profile.
- profileEdit - issues PATCH to '/profile' - Edit authenticated users profile.

- houseSearch - issues GET to '/house/search' - Allows user to search for houses.
- houseLoad - issues GET to '/house/:id' - Loads single house.
- houseEdit - issues PATCH to '/house/:id' - Allows user to edit house they own.
- houseAdd - issues POST to '/house' - Lists a new house.
- bookmarkList - issues GET to '/house/bookmarked' - List all houses an authenticated user has bookmarked.
- bookmarkAdd - issues POST to '/house/:id/bookmark' - Set bookmark for this house on this users profile.
- bookmarkRemove - issues DELETE to '/house/:id/bookmark' - Unset bookmark for this house on this users profile.

- messageThreadList - issues GET to '/message/list' - List all message threads of an authenticated user.
- messageThreadLoad - issues GET to '/message/:id' - List all messages between authenticated user and user of id param.
- messageSend - issues POST to '/message/:id' - Send message between authenticated user and user of id param.

## Server

### Models

- User

  - name: String, required, trim
  - email: String, required, trim, lowercase
  - passwordHashAndSalt: String, required
  - picture: String

- Bookmark

  - user: ObjectId, ref: 'User', required
  - house: ObjectId, ref: 'House', required

- House

  - purpose: String, [ 'rent', 'sell' ], required
  - type: String, [ 'detached-house', 'apartment' ], required
  - size: Number, required, min: 0
  - price: Number, required, min: 0
  - bedrooms: Number, required: min: 0
  - position: { type: String, default: 'Point', coordinates: [ Number ] }
  - listed: Boolean, required
  - owner: ObjectId, ref: 'User', required
  - description: String, maxLength: 5000, trim

- Message

  - content: String, required, minlength: 1, maxlength: 5000, trim
  - sender: ObjectId, ref: 'User', required
  - receiver: ObjectId, ref: 'User', required
  - createdAt: Date (setting timestamps option on schema to true)

### Request Handlers

- GET - / - Lists houses and profiles. ({ houses: [], profiles: [] })

- POST - '/authentication/sign-up' - Registers new user.
- POST - '/authentication/sign-in' - Authenticates existing user.
- POST - '/authentication/sign-out' - Signs out user.
- GET - '/authentication/me' - Loads information about authenticated user.

- GET - '/profile/search' - Allows user to search for other user profiles.
- GET - '/profile/:id' - Loads single users profile.
- PATCH - '/profile' - Edit authenticated users profile.

- GET - '/house/search' - Allows user to search for houses.
- GET - '/house/:id' - Loads single house.
- PATCH - '/house/:id' - Allows user to edit house they own.
- POST - '/house' - Lists a new house.
- GET - '/house/bookmarked' - List all houses an authenticated user has bookmarked.
- POST - '/house/:id/bookmark' - Set bookmark for this house on this users profile.
- DELETE - '/house/:id/bookmark' - Unset bookmark for this house on this users profile.

- GET - '/message/list' - List all message threads of an authenticated user.
- GET - '/message/:id' - List all messages between authenticated user and user of id param.
- POST - '/message/:id' - Send message between authenticated user and user of id param.

## Wishlist

- Using a branch / pull request
- Bookmark houses
- Display price changes of house.
- Rating houses.
- Allow users to review or rate each other.
- Allow users to follow eachother.
- Allow users to hide location of house.
- House allows pets?
- House has outside area (garden, etc.)?
