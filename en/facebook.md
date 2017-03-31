Follow these steps to configure Facebook for social login:

## OAuth Configuration

1. Go to [Facebook API Manager](https://developers.facebook.com/apps).
1. Create a new Facebook application: `My Apps > Add a new App > Website`
1. Once created, configure the Facebook App's OAuth settings: `FB App > Settings > Advanced > Client OAuth Settings`
1. Enable **Client Login** and **Web OAuth Login**
1. Fill the **Valid OAuth redirect URIs** field with the Redirect URI found in in `Craft CP > Settings > OAuth > Facebook` (Example: http://playground.dev/index.php/actions/oauth/connect)
1. Use the client ID & secret from the OAuth application that you've just created to configure Craft OAuth's Facebook provider in `Craft CP > Settings > OAuth > Facebook`
1. Social login is now setup and available for Facebook

## Profile Variables

- id
- email
- firstName
- lastName
- photoUrl
- name
- hometown
- isDefaultPicture
- coverPhotoUrl
- gender
- locale
- link
- locationId
- locationName