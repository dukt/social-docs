Follow these steps to configure Twitter for social login:

## OAuth Configuration

### Create a new app
1. Go to [Twitter Application Manager](https://dev.twitter.com/apps).
1. Create a new Twitter application: `Create New App`
1. Fill all required fields
1. Fill `Callback URL` field with the Redirect URI found in in `Craft CP > Settings > OAuth > Twitter` (Example: http://playground.dev/index.php/actions/oauth/connect)
1. Agree the terms and save the application

### Setup app permissions
1. First, we need to whitelist your app to be able to request the user email. Go to [https://support.twitter.com/forms/platform](https://support.twitter.com/forms/platform)
1. Click `I need access to special permissions` and fill your application details.
1. In `Permissions Requested` ask for the `email` special permission
1. Twitter will send you an email to confirm that you have email access (usually takes less than 24 hours)
1. Now go back to Twitter Application manager and click on the app that you've just created to edit it
1. Under `Permissions > Access`, select `Read and write` (don't choose the one that give access to direct message otherwise social login will fail)
1. Under `Permissions > Additional Permissions`, check the `Request email addresses from users` box (this will only be visible once Twitter has whitelisted your app)

### Update OAuth settings in Craft
1. Use the Consumer Key & secret from the OAuth application that you've just created to configure Craft OAuth's Twitter provider in `Craft CP > Settings > OAuth > Twitter`
1. Social login is now setup and available for Twitter

## Profile Variables

- id
- email
- nickname
- name
- photoUrl
- location
- description