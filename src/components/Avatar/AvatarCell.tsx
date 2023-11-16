import { FC } from "react";
import { AVATAR_SIZES } from "./Avatar.types";
import { Avatar } from "./Avatar";
import { classNames } from "../../utilities/helperFunctions";
export const AvatarCell: FC<{
  firstName: string;
  lastName: string;
  imageUrl?: string;
  size?: AVATAR_SIZES;
  hasPadding?: boolean;
  highlightName?: boolean;
  fullName: string;
  row2?: string;
  row3?: string;
  rowComponent?: JSX.Element;
}> = (props) => {
  return (
    <div
      className={`flex text-left ${
        props.row3 !== undefined || props.rowComponent !== undefined
          ? ""
          : "items-center"
      } ${props.highlightName && "group cursor-pointer"}`}
    >
      <Avatar
        size={props.size}
        firstName={props.firstName}
        lastName={props.lastName}
        imageUrl={props.imageUrl}
        hasPadding={props.hasPadding}
      />

      <div className="ml-3">
        <p
          className={`text-sm font-medium ${
            props.highlightName &&
            "text-primary-700 group-hover:text-primary-900"
          }`}
        >
          {props.fullName}
        </p>
        {props.row2 && (
          <p className="text-sm font-light text-gray-900">{props.row2}</p>
        )}

        {props.row3 && (
          <p className="text-sm font-light text-gray-500">{props.row3}</p>
        )}
        {props.rowComponent}
      </div>
    </div>
  );
};

AvatarCell.defaultProps = {
  size: AVATAR_SIZES.md,
  hasPadding: false,
};
