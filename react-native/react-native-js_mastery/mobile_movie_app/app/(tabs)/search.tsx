import { useEffect, useState } from "react";
import {
  Text,
  View,
  Platform,
  ScrollView,
  Image,
  ActivityIndicator,
  FlatList,
} from "react-native";
import { images } from "@/constants/images";
import { icons } from "@/constants/icons";
import SearchBar from "../../components/SearchBar";
import { useRouter } from "expo-router";
import useFetch from "@/services/useFetch";
import { fetchMovies } from "@/services/api";
import MovieCard from "@/components/MovieCard";
import { updateSearchCount } from "@/services/appwrite";

export default function Search() {
  const [searchQuery , setSearchQuery] = useState("")

  const {
    data: movies,
    loading: moviesLoading,
    error: moviesError,
    refetch : loadMovies,
    reset,
  } = useFetch(() =>
    fetchMovies({
      query: searchQuery,
    }),false
  );

  useEffect(() => {
    if (Platform.OS === "web") {
      document.title = "MovieFlix";
    }
  }, []);


  useEffect(() => {
    const timeoutId = setTimeout(async () => {
        if (searchQuery.trim()) {
            await loadMovies();
            if (movies?.length > 0 && movies?.[0]) {
              updateSearchCount(searchQuery,movies[0])
            }
        }
        else{
            reset()
        }
    },500)
    return () => clearTimeout(timeoutId)
  }, [searchQuery]);


  return (
    <View className="flex-1 bg-primary">
      <Image
        source={images.bg}
        className="absolute w-full  z-0"
        resizeMode="cover"
      ></Image>

      <FlatList
        data={movies}
        renderItem={({ item }) => <MovieCard {...item}></MovieCard>}
        keyExtractor={(item) => item.id.toString()}
        numColumns={3}
        columnWrapperStyle={{
          justifyContent: "center",
          gap: 16,
          marginVertical: 16,
        }}
        className="px-5"
        contentContainerStyle={{ paddingBottom: 100 }}
        ListHeaderComponent={
          <>
            <View className="w-full flex-row justify-center mt-20 items-center">
              <Image source={icons.logo} className="w-12 h-10"></Image>
            </View>

            <View className="my-5">
              <SearchBar placeholder="Search movies..."
              value={searchQuery}
              onChangeText={(text : string) => setSearchQuery(text)}
              ></SearchBar>
            </View>
            {moviesLoading && (
              <ActivityIndicator
                size="large"
                color="#0000ff"
                className="my-3"
              />
            )}
            {moviesError && (
              <Text className="text-red-500 px-5 py-3">
                Error : {moviesError.message}
              </Text>
            )}
            {!moviesLoading && !moviesError && searchQuery.trim() && movies?.length > 0 
            && (
                <Text className="text-xl text-white font-bold">
                    Search Results for{' '}
                    <Text className="text-accent">{searchQuery}</Text>
                </Text>
            )

            }
          </>
        }
        ListEmptyComponent={
            !moviesLoading && !moviesError ? (
                <View className="mt-10 px-5">
                    <Text className="text-center text-white-500">
                        {searchQuery.trim() ? 'No Movie Found' : 'Search for a movie'}
                    </Text>
                </View> 
            ) : null
        } 
      />
    </View>
  );
}
