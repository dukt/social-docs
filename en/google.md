# Google

Follow these steps to configure Google for social login:

## OAuth Configuration

1. Go to [Google Console](https://code.google.com/apis/console/).
1. Create a new Google application
1. Then go to `Your Application > API Manager > Credentials` and create a new **OAuth client ID** of type **Web Application**
1. Fill `Authorized JavaScript origins` and `Authorized redirect URIs` fields with the informations found in `Craft CP > Settings > OAuth > Google` and save.
1. Use the client ID & secret from the OAuth application that you've just created to configure Craft OAuth's Google provider in `Craft CP > Settings > OAuth > Google`
1. Social login is now setup and available for Google

## Profile Variables

- id
- email
- firstname
- lastName
- name
- photoUrl