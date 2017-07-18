# Login Account Model

## Attributes

- id
- userId
- providerHandle
- socialUid
- username
- email
- firstName
- lastName
- lastLoginDate

## Methods

### getOauthProvider()
Get the OAuth provider for the social account.

### getUser()
Get the associated Craft user for this social account.

### getFullName()
Gets the user's full name.