# Facebook

Follow these steps to configure Facebook for social login:

## OAuth Configuration

1. Go to the [Facebook API Manager](https://developers.facebook.com/apps).
1. Create a new Facebook application: Facebook API Manager → My Apps → Add a new App → Website.
1. Once created, configure the Facebook App's OAuth settings: Facebook API Manager → My App → Settings → Advanced → Client OAuth Settings.
1. Enable **Client Login** and **Web OAuth Login**
1. Fill the **Valid OAuth redirect URIs** field with the Redirect URI found in CP → Settings → Social → Login Providers → Facebook
2. Facebook will provide you a client ID and client secret for your application, copy them into a `craft/config/social.php` file with the following settings:
        
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
