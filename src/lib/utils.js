import clsx from "clsx"
import { twMerge } from "tailwind-merge"

export const cn = (...inputs) => {
    return twMerge(clsx(inputs))
}



// clsx - Takes any number of arguments (strings, undefined, false, arrays, objects) and joins them into a single class string.
// clsx("text-lg", false, undefined, "font-bold")
// output → "text-lg font-bold"

// tailwind-merge - Tailwind sometimes has conflicting classes, e.g., p-2 and p-4.
// twMerge intelligently merges them so the last one wins, keeping the final output valid.
// twMerge("p-2 p-4")
// output → "p-4"  (merges conflicting padding)


// Why it’s used
// Conditional classes: avoids manual string concatenation like "text-lg " + (isActive ? "text-red-500" : "").
// Tailwind conflict resolution: prevents duplicate/conflicting classes from breaking design.
// Cleaner code: single utility for all class handling.