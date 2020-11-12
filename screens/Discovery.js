import React, { useEffect, useState } from "react";
import { View, Text } from "react-native";
import { movieApi } from "../api";

export default () => {
  const [discovery, setDiscovery] = useState({
    results: [],
    error: null,
  });

  const getData = async () => {
    const [results, error] = await movieApi.discover();

    setDiscovery({
      results,
      error,
    });
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <View>
      <Text>{discovery.results.length}</Text>
    </View>
  );
};
