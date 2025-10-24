import { Heading, Stack } from "@chakra-ui/react";
import type { Genres } from "@/hook/useGenres"; // اگر تایپ داری

interface Props {
  selectedGenre?: Genres | null; // ژانر انتخاب‌شده از والد
}

export const GameHeading = ({ selectedGenre }: Props) => {
  return (
    <Stack gap="2" align="flex-start">
      <Heading size="4xl">
        {selectedGenre ? selectedGenre.name : "All Games"}
      </Heading>
    </Stack>
  );
};
