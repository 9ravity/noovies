import React, { useEffect, useLayoutEffect } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import Movies from "../screens/Movies/MoviesContainer";
import Tv from "../screens/Tv/TvContainer";
import Search from "../screens/Search/SearchContainer";
import Discovery from "../screens/Discovery";
import { Platform } from "react-native";

const Tabs = createBottomTabNavigator();

const getHeaderName = (route) => {
  return route?.state?.routeNames[route.state.index] || "Movies";
};

export default ({ navigation, route }) => {
  //route를 통하여 현재 있는 tab의 위치를 알 수 있음,
  useLayoutEffect(() => {
    navigation.setOptions({
      title: getHeaderName(route),
    });
  }, [route]);

  // stack안에 tab이 있는 경우 1개의 header(stack)만 render 한다. - title만 바꿈,
  return (
    <Tabs.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused }) => {
          let iconName = Platform.OS === "ios" ? "ios-" : "md-";
          if (route.name === "Movies") {
            iconName += "film";
          } else if (route.name === "TV") {
            iconName += "tv";
          } else if (route.name === "Search") {
            iconName += "search";
          } else if (route.name === "discovery") {
            iconName += "heart";
          }
          return (
            <Ionicons
              name={iconName}
              color={focused ? "white" : "grey"}
              size={24}
            />
          );
        },
      })}
      tabBarOptions={{
        showLabel: false,
        style: { backgroundColor: "black", borderTopColor: "black" },
      }}
    >
      <Tabs.Screen
        name="Movies"
        component={Movies}
        // options={{ headerTitle: "Movies" }}
      />
      <Tabs.Screen name="TV" component={Tv} options={{ headerTitle: "Tv" }} />
      <Tabs.Screen name="Search" component={Search} />
      <Tabs.Screen name="discovery" component={Discovery} />
    </Tabs.Navigator>
  );
};
