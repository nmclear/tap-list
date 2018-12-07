# PressMiniCard

- a row-like component that display an avatar image next to a title and subtitle. The component is pressable and must pass an onPress prop.
- Handy as list items (initially designed for FlatList item)

## Size

- container flex is set at { flex: 1, flexDirection: row }

## Props

- id (required - String) - for use as component key
- title (required - String)
- subtitle (required - String)
- uri (required) - for avatar image
- titleStyle - (style object) for additional styling to title (only default style is fontSize: 20)
- subtitleStyle - (style object) for additional styling to subtitle (only default style is fontSize: 14)
- cardColor - (String) default cardColor is white

## Example Image
