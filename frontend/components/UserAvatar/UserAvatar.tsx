import type { UserAvatarProps } from "./UserAvatarProps";

const sizeClasses = {
  sm: "w-8 h-8",
  md: "w-12 h-12",
  lg: "w-20 h-20",
  xl: "w-32 h-32",
};

export function UserAvatar({ src, size = "md" }: UserAvatarProps) {
  return (
    <img
      src={src}
      className={`object-cover ${sizeClasses[size]} border border-gray-200 rounded-full`}
    ></img>
  );
}
