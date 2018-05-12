# craft.social

## loginAccounts($criteria = null)

Returns an `ElementCriteriaModel` for Social_LoginAccount elements.

## getLoginUrl($providerHandle, $params = array())

```twig
{{ craft.social.login('facebook', { redirect: 'account' } ) }}
```

<p>Returns a link for logging in with given provider.</p>

## getLoginAccountByLoginProvider($loginProviderHandle)

Get login account by provider handle


## getLoginAccountConnectUrl($providerHandle)

Get login account connect URL


## getLoginAccountDisconnectUrl($providerHandle)

Get login account disconnect URL


## getLoginProviders($enabledOnly = true)

Get login providers