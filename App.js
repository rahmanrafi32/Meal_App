import {StatusBar} from 'expo-status-bar';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Categories from "./app/screens/Categories";
import MealsOverview from "./app/screens/MealsOverview";
import MealDetails from "./app/screens/MealDetails";

const Stack = createNativeStackNavigator();
export default function App() {
    return (

        <NavigationContainer>
            <StatusBar style={"light"}/>
            <Stack.Navigator screenOptions={{
                headerStyle: {backgroundColor: "#351401"},
                headerTintColor: "white",
                contentStyle: {backgroundColor: "#3f2f25"}
            }}
            >
                <Stack.Screen
                    name="MealCategories"
                    component={Categories}
                    options={{title: "All Categories"}}/>
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
    );
};
