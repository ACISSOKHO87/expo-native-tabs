# Welcome to your Expo app Native tabs 👋

This is an [Expo](https://expo.dev) project created with [`create-expo-app`](https://www.npmjs.com/package/create-expo-app).

## Get started

1. Install dependencies

    ```bash
    npm install
    ```

2. Start the app

    ```bash
    npx expo start
    ```

In the output, you'll find options to open the app in a

- [development build](https://docs.expo.dev/develop/development-builds/introduction/)
- [Android emulator](https://docs.expo.dev/workflow/android-studio-emulator/)
- [iOS simulator](https://docs.expo.dev/workflow/ios-simulator/)
- [Expo Go](https://expo.dev/go), a limited sandbox for trying out app development with Expo

You can start developing by editing the files inside the **src/app** directory. This project uses [file-based routing](https://docs.expo.dev/router/introduction).

## Get a fresh project

When you're ready, run:

```bash
npm run reset-project
```

This command will move the starter code to the **example** directory and create a blank **src/app** directory where you can start developing.

## tabs et customizing tab bar items

```javascript
<NativeTabs backgroundColor="#fff" tintColor="#0F172A">
    <NativeTabs.Trigger name="index">
        {/* Label: The label displayed in the tab bar item. */}
        <NativeTabs.Trigger.Label>Home</NativeTabs.Trigger.Label>
        {/* Icon: The icon displayed in the tab bar item. */}
        <NativeTabs.Trigger.Icon
            sf={{ default: "house", selected: "house.fill" }}
            md={{ default: "home", selected: "home_filled" }}
        />
    </NativeTabs.Trigger>
    <NativeTabs.Trigger name="settings">
        <NativeTabs.Trigger.Label>Settings</NativeTabs.Trigger.Label>
        {/* <NativeTabs.Trigger.Icon sf="gear" md="settings" /> */}
        <NativeTabs.Trigger.Icon src={settingIcon} />
    </NativeTabs.Trigger>
</NativeTabs>
```
