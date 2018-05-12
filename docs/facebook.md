# Facebook

Follow these steps to configure Facebook for social login:

## OAuth Configuration

1. Go to the [Facebook API Manager](https://developers.facebook.com/apps).
1. Click the “Add a New App” button to create a new Facebook application.
1. Once created, go to your application and set up the “Facebook Login” product.
1. Go to Your App → Facebook Login → Settings, fill the “Valid OAuth redirect URIs” field with the Redirect URI found in CP → Settings → Social → Login Providers → Facebook, and save.
1. Go to Your App → Settings → Basic and copy the App ID and App Secret to the `craft/config/social.php` and use them as client ID and secret values:
        
        <?php
        
        return [
                'facebook' => [
                    'clientId' => '000000000000000',
                    'clientSecret' => 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
                ],
            ]
        ];

1. Go to CP → Settings → Social → Login Providers and enable Facebook

🎉

**Warning:** Facebook user IDs are only unique per Facebook API app. 
Using a different Facebook API app app (changing the client ID), will most of the time break the relation between a Craft user and a Facebook user. 
It will also prevent people which have already setup their accounts to login using Facebook for logging in, and the plugin will think that the email is already registered for a different Facebook user ID.

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
