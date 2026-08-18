import { ImageIcon } from "lucide-react";
import { cn } from "@/lib/utils";

/**
 * Stand-in for a real photo. Renders a soft gradient tile with a label so
 * the layout looks intentional before real images are dropped in — swap
 * it for a real <img> once assets exist (see component call sites for the
 * expected file path, dimensions, and aspect ratio).
 */
export default function PlaceholderImage({
  label,
  sublabel,
  aspect = "aspect-[4/5]",
  className,
}) {
  return (
    <div
      className={cn(
        "relative flex flex-col items-center justify-center gap-2 overflow-hidden rounded-2xl border-2 border-dashed border-main-taupe/50 bg-gradient-to-br from-accent-amber/20 via-main-sand to-accent-coral/15 text-center px-4",
        aspect,
        className
      )}
    >
      <ImageIcon className="w-8 h-8 text-main-taupe" strokeWidth={1.5} />
      {label && (
        <p className="text-sm font-medium text-main-ink/70 max-w-[85%]">{label}</p>
      )}
      {sublabel && (
        <p className="text-xs text-main-taupe max-w-[85%]">{sublabel}</p>
      )}
    </div>
  );
}
