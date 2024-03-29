# notifications

Welcome to the notifications plugin!

_This plugin was created through the Glint CLI_

## Getting started

First, install the `@kozmoai/plugin-notifications-backend` and `@kozmoai/plugin-notifications-node` packages.
See the documentation for installation instructions.

To add the notifications main menu, add the following to your `packages/app/src/components/Root/Root.tsx`:

```tsx
import { NotificationsSidebarItem } from '@kozmoai/plugin-notifications';

<SidebarPage>
  <Sidebar>
    <SidebarGroup>
      // ...
      <NotificationsSidebarItem />
    </SidebarGroup>
  </Sidebar>
</SidebarPage>;
```

Also add the route to notifications to `packages/app/src/App.tsx`:

```tsx
import { NotificationsPage } from '@kozmoai/plugin-notifications';

<FlatRoutes>
  // ...
  <Route path="/notifications" element={<NotificationsPage />} />
</FlatRoutes>;
```

## Real-time notifications

To be able to get real-time notifications to the UI without need for the user to refresh the page, you also need to
add `@kozmoai/plugin-signals` package to your installation.
