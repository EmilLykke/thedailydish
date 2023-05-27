import {Stack} from "expo-router";
import {useCallback} from "react";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";

SplashScreen.preventAutoHideAsync();
const Layout = () => {
    const [fontsLoaded] = useFonts({
        CalibriBold: require("../assets/fonts/calibri/CalibriBold.ttf"),
        CalibriLight: require("../assets/fonts/calibri/CalibriLight.ttf"),
        CalibriRegular: require("../assets/fonts/calibri/CalibriRegular.ttf"),
        CalibriBoldItalic: require("../assets/fonts/calibri/CalibriBoldItalic.ttf"),
        CalibriItalic: require("../assets/fonts/calibri/CalibriItalic.ttf"),
    });

    const onLayoutRootView = useCallback(async () =>{
        if(fontsLoaded){
            await SplashScreen.hideAsync();
        }
    }, [fontsLoaded]);

    if(!fontsLoaded) return null;



    return <Stack onLayout={onLayoutRootView} />;
}

export default Layout;