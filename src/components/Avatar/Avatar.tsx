import React from "react";
import { FC, useState } from "react";
import { AVATAR_SIZES, AvatarProps } from "./Avatar.types";
import { classNames } from "../../utilities/helperFunctions";
export const Avatar: FC<AvatarProps> = ({
  size,
  firstName,
  lastName,
  imageUrl,
  hasPadding,
}) => {
  const avatarColors = [
    "bg-primary-600",
    "bg-gray-900",
    "bg-primary-910",
    "bg-success-500",
  ];

  const getInitials = () => {
    return `${firstName?.charAt(0)}${lastName?.charAt(0)} `.toUpperCase();
  };

  let sizeClass;

  let textPadding;

  switch (size) {
    case AVATAR_SIZES.sm:
      sizeClass = "w-8 h-8 text-sm";
      textPadding = "text-sm";
      break;
    case AVATAR_SIZES.md:
      sizeClass = "w-10 h-10 text-lg";
      textPadding = "";
      break;
    case AVATAR_SIZES.lg:
      sizeClass = "w-12 h-12";
      textPadding = "text-lg";
      break;
    case AVATAR_SIZES.xl:
      sizeClass = "w-16 h-16 shadow-md shadow";
      textPadding = "text-xl";
      break;
    case AVATAR_SIZES.xxl:
      sizeClass = "w-24 h-24";
      textPadding = "text-4xl";
      break;
    case AVATAR_SIZES.xxxl:
      sizeClass = "w-28 h-28";
      textPadding = "text-5xl";
      break;
    default:
      sizeClass = "w-10 h-10";
      textPadding = "py-1 text-xs";
  }

  return (
    <>
      {imageUrl !== undefined ? (
        <img
          className={classNames(
            sizeClass,
            hasPadding ? "p-1 shadow-sm" : "",
            "max-w-none ring-2 ring-white rounded-full object-cover"
          )}
          src={imageUrl}
          alt=""
        />
      ) : (
        <div
          className={classNames(
            sizeClass,
            textPadding,
            "items-center  justify-center flex text-center rounded-full ring-1 ring-white text-gray-25 bg-gradient-to-r from-gray-600 to-gray-900"
          )}
        >
          <span className="items-center my-auto text-white">
            {getInitials()}
          </span>
        </div>
      )}
    </>
  );
};

Avatar.defaultProps = {
  size: AVATAR_SIZES.md,
  hasPadding: false,
};

export const AvatarStack: FC<AvatarProps[]> = () => {
  return <></>;
};
