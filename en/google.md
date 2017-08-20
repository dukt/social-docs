# Google

Follow these steps to configure Google for social login:

## OAuth Configuration

1. Go to the [Google Console](https://code.google.com/apis/console/).
1. Create a new project.
1. Go to **Google Console / My Project / Credentials / Consent Screen** and make sure to fill the Product name field.
1. Go to **Google Console / My Project / Credentials** and create credentials for a new “OAuth client ID” with the following settings:
   
   - Application type: Web application
   - Authorized JavaScript origins: The web origin URL can be found in `CP / Settings / Social / Login Providers / Google`
   - Authorized redirect URIs: The redirect URL can be found in `CP / Settings / Social / Login Providers / Google`

1. Google will provide you a client ID and client secret for your application, copy them into a `craft/config/social.php` file with the following settings:
        
        <?php
        
        return [
                'google' => [
                    'clientId' => '000000000000-xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx.apps.googleusercontent.com',
                    'clientSecret' => 'xxxxxxxxxxxxxxxxxxxxxxxx',
                ],
            ]
        ];

1. Go to `CP / Settings / Social / Login Providers` and enable Google

🎉

## Profile Variables

- id
- email
- firstName
- lastName
- name
- photoUrl
