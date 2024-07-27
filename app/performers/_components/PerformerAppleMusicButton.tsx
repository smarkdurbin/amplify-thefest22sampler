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
import { SiApplemusic } from "react-icons/si";

interface PerformerAppleMusicButtonProps extends ButtonProps {
  iconOnly?: boolean;
  performerName: string;
}

const PerformerAppleMusicButton = ({
  iconOnly,
  color,
  performerName,
  ...rest
}: PerformerAppleMusicButtonProps) => {
  return iconOnly ? (
    <IconButton
      aria-label="Search performer in AppleMusic app"
      as="a"
      href={`https://music.apple.com/us/search?term=${performerName}`}
      icon={<Icon as={SiApplemusic} color={color ? color : "pink.500"} />}
      isRound={true}
      {...rest}
    />
  ) : (
    <Button
      as="a"
      href={`https://music.apple.com/us/search?term=${performerName}`}
      leftIcon={<Icon as={SiApplemusic} color={color ? color : "pink.500"} />}
      target="_blank"
      {...rest}
    >
      Search on Apple Music
    </Button>
  );
};

export default PerformerAppleMusicButton;
