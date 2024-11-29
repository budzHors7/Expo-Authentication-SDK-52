import { ActivityIndicator } from "react-native";
import Animated, { FadeIn, FadeOut, FadingTransition } from "react-native-reanimated";

export default function AuthCheck() {
    return (
        <Animated.View
            className="flex-1 bg-white dark:bg-black h-full justify-center items-center"
            entering={FadeIn}
            exiting={FadeOut}
            layout={FadingTransition}
        >
            <ActivityIndicator size={'large'} color={'#2e78b7'} />
        </Animated.View>
    )
}