import { useQuery } from "@tanstack/react-query";
import fecthBreedList from "./fetchBreedList";

export default function useBreedList(animal) {
  const results = useQuery(["breedList", animal], fecthBreedList);
  return [results?.data?.breeds ?? [], results];
}
