import React, { useState } from "react";
import PropTypes from "prop-types";
import { ScrollView, ActivityIndicator } from "react-native";
import { RefreshControl } from "react-native";

//refreshing 은 Container 리턴 -> presenter 리턴 에서 옴
const ScrollContainer = ({
  refreshFn,
  loading,
  children,
  contentContainerStyle,
}) => {
  const [refreshing, setRefreshing] = useState(false);
  const onRefresh = async () => {
    setRefreshing(true);
    // 각 요청
    await refreshFn();
    setRefreshing(false);
  };

  return (
    <ScrollView
      refreshFn={refreshFn}
      refreshControl={
        <RefreshControl
          refreshing={refreshing}
          onRefresh={onRefresh}
          tintColor={"white"}
        />
      }
      style={{ backgroundColor: "black" }}
      contentContainerStyle={{
        flex: loading ? 1 : 0,
        justifyContent: loading ? "center" : "flex-start",
        ...contentContainerStyle,
      }}
    >
      {loading ? <ActivityIndicator color="white" size="large" /> : children}
    </ScrollView>
  );
};

ScrollContainer.propTypes = {
  loading: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
  contentContainerStyl: PropTypes.object,
  refreshFn: PropTypes.func,
};

export default ScrollContainer;
