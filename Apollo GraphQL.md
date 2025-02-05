# Apollo GraphQL

## Cache Policies

| Cache Policy Name   | Short Description                                                                                   | Example of Use Cases                                                                                                         |
| ------------------- | --------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- |
| `cache-first`       | Tries to read from the cache first and uses the network as a fallback.                              | Ideal for static data that rarely changes, like configuration settings or non-frequently updated user profiles.              |
| `cache-and-network` | Uses cache data first, but also makes a network request and updates the cache with the latest data. | Suitable for data that may change frequently but doesn't need to be immediately up-to-date, such as user comments on a post. |
| `network-only`      | Always fetches data from the network, ignoring the cache completely.                                | Best for dynamic data that needs to be up-to-date, like a live news feed or real-time notifications.                         |
| `cache-only`        | Only reads from the cache and never makes a network request.                                        | Useful for scenarios where you are sure the cache is up-to-date or when offline mode is required.                            |
| `no-cache`          | Disables caching entirely; data is neither read from nor written to the cache.                      | Suitable for sensitive data that must always be fetched fresh, such as authentication tokens or financial transactions.      |

## Reset Cache After Logout

### Methods

- `resetStore`
  The `resetStore` method resets the Apollo Client store by refetching all active queries. This is useful when for clearing the cache and then immediately reload the active queries with fresh data.

- `clearStore`
  The `clearStore` method clears the Apollo Client store without refetching active queries. This is useful for clearing the cache without triggering any refetch operations.
