import { AlignmentOptions } from "@/types"

import {
  FontFamily,
  FontWeight,
  fontWeights,
  supportedFonts,
} from "@/lib/fonts"
import { cn } from "@/lib/utils"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

interface TextSettingsProps {
  fontFamily?: FontFamily
  onChangeFontFamily?: (fontFamily: FontFamily) => void
  fontWeight?: FontWeight
  onChangeFontWeight?: (fontWeight: FontWeight) => void
  fontSize?: number
  onChangeFontSize?: (fontSize: number) => void
  color: string
  onChangeColor: (color: string) => void
  bgColor?: string
  onChangeBgColor?: (color: string) => void
  alignment?: AlignmentOptions
  onChangeAlignment?: (alignment: AlignmentOptions) => void
  className?: string
}

export function TextSettings({
  fontFamily,
  onChangeFontFamily,
  fontWeight,
  onChangeFontWeight,
  fontSize,
  onChangeFontSize,
  color,
  onChangeColor,
  bgColor,
  onChangeBgColor,
  alignment,
  onChangeAlignment,
  className,
}: TextSettingsProps) {
  return (
    <div className={cn("grid gap-4", className)}>
      <div className="grid gap-2">
        {fontFamily && onChangeFontFamily && (
          <div className="grid grid-cols-3 items-center gap-4">
            <Label htmlFor="font-family">Font family</Label>
            <Select
              value={fontFamily}
              onValueChange={(v) => onChangeFontFamily(v as FontFamily)}
            >
              <SelectTrigger id="font-family" className="col-span-2 h-8">
                <SelectValue placeholder="Select a font" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  {supportedFonts.map(({ value, label }) => (
                    <SelectItem key={value} value={value}>
                      {label}
                    </SelectItem>
                  ))}
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
        )}

        {fontWeight && onChangeFontWeight && (
          <div className="grid grid-cols-3 items-center gap-4">
            <Label htmlFor="font-weight">Font weight</Label>
            <Select
              value={fontWeight.toString()}
              onValueChange={(v) =>
                onChangeFontWeight(parseInt(v as string) as FontWeight)
              }
            >
              <SelectTrigger id="font-weight" className="col-span-2 h-8">
                <SelectValue placeholder="Select a weight" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  {supportedFonts
                    .find((f) => f.value === fontFamily)
                    ?.weights.map((weight) => (
                      <SelectItem key={weight} value={weight.toString()}>
                        {fontWeights[weight]}
                      </SelectItem>
                    ))}
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
        )}

        {fontSize !== undefined && onChangeFontSize && (
          <div className="grid grid-cols-3 items-center gap-4">
            <Label htmlFor="font-size">Font size</Label>
            <Input
              id="font-size"
              type="number"
              className="col-span-2 h-8"
              value={fontSize.toString()}
              onChange={(e) =>
                onChangeFontSize(parseInt(e.currentTarget.value))
              }
            />
          </div>
        )}

        {alignment && onChangeAlignment && (
          <div className="grid grid-cols-3 items-center gap-4">
            <Label htmlFor="alignment">Alignment</Label>
            <Select
              value={alignment}
              onValueChange={(v: AlignmentOptions) => onChangeAlignment(v)}
            >
              <SelectTrigger id="alignment" className="col-span-2 h-8">
                <SelectValue placeholder="Select a weight" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  {Object.values(AlignmentOptions).map((alignment) => (
                    <SelectItem key={alignment} value={alignment}>
                      {alignment}
                    </SelectItem>
                  ))}
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
        )}

        {bgColor && onChangeBgColor && (
          <div className="grid grid-cols-3 items-center gap-4">
            <Label htmlFor="bg-color">Bg color</Label>
            <Input
              id="bg-color"
              type="color"
              value={bgColor}
              className="col-span-2 h-8"
              onChange={(e) => onChangeBgColor(e.currentTarget.value)}
            />
          </div>
        )}

        <div className="grid grid-cols-3 items-center gap-4">
          <Label htmlFor="text-color">Text color</Label>
          <Input
            id="text-color"
            type="color"
            value={color}
            className="col-span-2 h-8"
            onChange={(e) => onChangeColor(e.currentTarget.value)}
          />
        </div>
      </div>
    </div>
  )
}
