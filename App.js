import {StatusBar} from 'expo-status-bar';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {AntDesign, MaterialIcons} from "@expo/vector-icons";
import {Provider} from "react-redux";

import Categories from "./app/screens/Categories";
import MealsOverview from "./app/screens/MealsOverview";
import MealDetails from "./app/screens/MealDetails";
import Favorites from "./app/screens/Favorites";
// import {FavoriteContextProvider} from "./app/lib/context/favoriteContext";
import {store} from "./app/lib/redux/store";
import colors from "./app/theme/colors";

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

function DrawerNavigator() {
    return <Drawer.Navigator screenOptions={{
        headerStyle: {backgroundColor: colors.primary},
        headerTintColor: colors.white,
        sceneContainerStyle: {backgroundColor: colors.primaryLight},
        drawerActiveTintColor: colors.primaryLight,
        drawerActiveBackgroundColor: colors.secondary,
        drawerInactiveTintColor: "white",
        drawerContentStyle: {backgroundColor: colors.primary}
    }}>
        <Drawer.Screen
            name={"Categories"}
            component={Categories}
            options={{
                title: "All Categories",
                drawerIcon: ({color, size}) => <MaterialIcons name={"list"} color={color} size={size}/>
            }}/>
        <Drawer.Screen name={"Favorites"} component={Favorites} options={{
            title: "Favorites",
            drawerIcon: ({color, size}) => <AntDesign name={"star"} color={color} size={size}/>
        }}/>
    </Drawer.Navigator>
}

export default function App() {
    return (
        // <FavoriteContextProvider> for contextAPI
        <Provider store={store}>
            <NavigationContainer>
                <StatusBar style={"light"}/>
                <Stack.Navigator screenOptions={{
                    headerStyle: {backgroundColor: colors.primary},
                    headerTintColor: colors.white,
                    contentStyle: {backgroundColor: colors.primaryLight}
                }}>
                    <Stack.Screen
                        name="MealCategories"
                        component={DrawerNavigator}
                        options={{headerShown: false}}
                    />
                    <Stack.Screen
                        name="MealOverview"
                        component={MealsOverview}
                    />
                    <Stack.Screen
                        name="MealDetails"
                        component={MealDetails}
                    />
                </Stack.Navigator>
            </NavigationContainer>
        </Provider>
        // </FavoriteContextProvider>
    );
};
