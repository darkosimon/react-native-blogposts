import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { TouchableOpacity } from "react-native";
import { Feather, EvilIcons } from "@expo/vector-icons";
import IndexScreen from "./src/screen/IndexScreen";
import ShowScreen from "./src/screen/ShowScreen";
import CreateScreen from "./src/screen/CreateScreen";
import EditScreen from "./src/screen/EditScreen";

import { Provider } from "./src/context/BlogContext";

const Stack = createStackNavigator();

const App = function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerTitle: "Blog" }}>
        <Stack.Screen
          name="Index"
          component={IndexScreen}
          options={({ navigation }) => ({
            headerRight: () => (
              <TouchableOpacity onPress={() => navigation.navigate("Create")}>
                <Feather name="plus" size={30} />
              </TouchableOpacity>
            ),
          })}
        />
        <Stack.Screen
          name="Show"
          component={ShowScreen}
          options={({ route, navigation }) => ({
            headerRight: () => (
              <TouchableOpacity onPress={() => navigation.navigate("Edit", { id: route.params.id })}>
                <EvilIcons name="pencil" size={35} />
              </TouchableOpacity>
            ),
          })}
        />
        <Stack.Screen name="Create" component={CreateScreen} />
        <Stack.Screen name="Edit" component={EditScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default () => {
  return (
    <Provider>
      <App />
    </Provider>
  );
};
