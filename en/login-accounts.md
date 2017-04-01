# Login Accounts

## Creating Queries

### PHP

	dukt\social\elements\LoginAccount::find()

### Twig

	craft.social.loginAccounts()

## Query Parameters

Param              | Accepts                              | Description
------------------ | ------------------------------------ | ---------------------------------------------------------------------------------
`userId`		   | `int|int[]|null`					  | The user ID(s) that the resulting login accounts must belong to
`providerHandle`   | `string|null`						  | The handle of the provider that the resulting login accounts must belong to
`socialUid`        | `string|null`						  | The socialUid of the login account
`username`		   | `string|null`						  | The username of the user that the resulting login accounts must belong to
`email`			   | `string|null`						  | The email of the user that the resulting login accounts must belong to
`firstName`		   | `string|null`						  | The firstName of the user that the resulting login accounts must belong to
`lastName`		   | `string|null`						  | The handle of the provider that the resulting login accounts must belong to
`lastLoginDate`	   | `mixed`                              | When the resulting login account has been used the last time for login