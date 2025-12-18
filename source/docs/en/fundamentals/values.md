# Values

Modifier value types in SF UI and usage examples.

## Absolute sizes

Base unit is `rem`, enabling responsive interfaces that adapt to font settings. The framework uses absolute sizes for
fixed values.

1. Examples: `w-0`, `w-px` (1 pixel).
2. Negative values: prefix the modifier with a minus (`-m-2`, `-left-a4`).

## Binary values

For properties that toggle on/off.

1. Examples: `italic` (on) and `italic-none` (off).
2. Others: `visible`, `visible-none`.

## Degrees

Represented by a number equal to degrees.

* Examples: `rotate-0`, `rotate-1`, `rotate-45`, `rotate-180`.

## Percentages

Represented by a number equal to the percent.

1. Examples: `w-1`, `w-23`, `w-99`, `w-full`.

## Proportional values

Scale relative to each other (text size, spacing). Parameters can differ by device (desktop vs mobile).

1. Zero examples: `m-0`, `p-0`.
2. Growth/shrink preserves proportions.

## Relative sizes

Expressed as fractions relative to parent or viewport.

1. `full` — 100%, e.g., `w-full`.
2. Relative to viewport: `h-screen-1/2`, `h-screen-3/4`.
3. For grids: `fr` — share of remaining space (`auto-cols-fr`, `auto-rows-fr`).
