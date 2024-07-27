"use client";

import {
  Button,
  ButtonProps,
  ColorProps,
  Icon,
  IconButton,
  VisuallyHidden,
} from "@chakra-ui/react";
import React from "react";
import { SiYoutubemusic } from "react-icons/si";

interface PerformerYouTubeMusicButtonProps extends ButtonProps {
  iconOnly?: boolean;
  performerName: string;
}

const PerformerYouTubeMusicButton = ({
  iconOnly,
  color,
  performerName,
  ...rest
}: PerformerYouTubeMusicButtonProps) => {
  return iconOnly ? (
    <IconButton
      aria-label="Search performer in YouTubeMusic app"
      as="a"
      href={`https://music.youtube.com/search?q=${performerName}`}
      icon={<Icon as={SiYoutubemusic} color={color ? color : "red.500"} />}
      isRound={true}
      {...rest}
    />
  ) : (
    <Button
      as="a"
      href={`https://music.youtube.com/search?q=${performerName}`}
      leftIcon={<Icon as={SiYoutubemusic} color={color ? color : "red.500"} />}
      target="_blank"
      {...rest}
    >
      Search on YouTube Music
    </Button>
  );
};

export default PerformerYouTubeMusicButton;
