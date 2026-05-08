import clsx from "clsx";

type Size = "sm" | "md" | "lg" | "xl";

const SIZES: Record<Size, string> = {
  sm: "size-6",
  md: "size-9",
  lg: "size-14",
  xl: "size-20",
};

export function Logo({
  size = "md",
  withWordmark = false,
  className,
}: {
  size?: Size;
  withWordmark?: boolean;
  className?: string;
}) {
  return (
    <div className={clsx("flex items-center gap-3 text-cream-50", className)}>
      <img
        src="/logo.svg"
        alt="Button Up Media"
        className={clsx(SIZES[size], "shrink-0")}
      />
      {withWordmark && (
        <span className="font-display text-base font-bold tracking-[-0.03em] md:text-lg">
          Button Up Media
        </span>
      )}
    </div>
  );
}
