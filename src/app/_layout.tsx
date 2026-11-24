import { NativeTabs } from "expo-router/native-tabs";

const settingIcon = require("@/assets/images/setting.png");

export default function RootLayout() {
    return (
        <NativeTabs>
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
    );
}
