## loginAccounts($criteria = null)

Returns an `ElementCriteriaModel` for Social_LoginAccount elements.

## getLoginUrl($providerHandle, $params = array())

<pre><code>{{ craft.social.login('facebook', { redirect: 'account' } ) }}</code></pre>

<p>Returns a link for logging in with given provider.</p>

## getLogoutUrl($redirect = null)

<pre><code>{{ craft.social.logout() }}</code></pre>

<p>Returns a link for logging out.</p>

## getLoginAccountByLoginProvider($loginProviderHandle)

Get login account by provider handle


## getLoginAccountConnectUrl($providerHandle)

Get login account connect URL


## getLoginAccountDisconnectUrl($providerHandle)

Get login account disconnect URL


## getLoginProviders($enabledOnly = true)

Get login providers