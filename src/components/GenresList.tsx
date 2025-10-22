import { useGenres } from "@/hook/useGenres";

export const GenresList = () => {
  const { genres } = useGenres();
  return (
    <ul>
      {genres.map((genre) => (
        <li key={genre.id}>{genre.name}</li>
      ))}
    </ul>
  );
};
