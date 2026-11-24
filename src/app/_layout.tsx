import { NativeTabs } from "expo-router/native-tabs";

const settingIcon = require("@/assets/images/setting.png");
const homeIcon = require("@/assets/images/home.png");
export default function RootLayout() {
    return (
        <NativeTabs>
            <NativeTabs.Trigger name="index">
                {/* Label: The label displayed in the tab bar item. */}
                <NativeTabs.Trigger.Label>Home</NativeTabs.Trigger.Label>
                {/* Icon: The icon displayed in the tab bar item. */}
                {/* Icon with original colors preserved (e.g., for gradient or multi-color icons) */}
                <NativeTabs.Trigger.Icon
                    // sf={{ default: "house", selected: "house.fill" }}
                    // md={{ default: "home", selected: "home_filled" }}
                    src={homeIcon}
                    renderingMode="original"
                />
            </NativeTabs.Trigger>
            <NativeTabs.Trigger name="settings">
                <NativeTabs.Trigger.Label>Settings</NativeTabs.Trigger.Label>
                {/* <NativeTabs.Trigger.Icon sf="gear" md="settings" /> */}
                {/* Icon rendered as a template */}
                <NativeTabs.Trigger.Icon
                    src={settingIcon}
                    renderingMode="template"
                />
            </NativeTabs.Trigger>
        </NativeTabs>
    );
}
