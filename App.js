import {StatusBar} from 'expo-status-bar';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {AntDesign, MaterialIcons} from "@expo/vector-icons";

import Categories from "./app/screens/Categories";
import MealsOverview from "./app/screens/MealsOverview";
import MealDetails from "./app/screens/MealDetails";
import Favorites from "./app/screens/Favorites";
import {FavoriteContextProvider} from "./app/store/context/favoriteContext";

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

function DrawerNavigator() {
    return <Drawer.Navigator screenOptions={{
        headerStyle: {backgroundColor: "#351401"},
        headerTintColor: "white",
        sceneContainerStyle: {backgroundColor: "#3f2f25"},
        drawerActiveTintColor: "#3f2f25",
        drawerActiveBackgroundColor: "#f3cdb8",
        drawerInactiveTintColor: "white",
        drawerContentStyle: {backgroundColor: "#351401"}
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
        <FavoriteContextProvider>
            <NavigationContainer>
                <StatusBar style={"auto"}/>
                <Stack.Navigator screenOptions={{
                    headerStyle: {backgroundColor: "#351401"},
                    headerTintColor: "white",
                    contentStyle: {backgroundColor: "#3f2f25"}
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
        </FavoriteContextProvider>
    );
};
