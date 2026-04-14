# swingalytica

Official CLI for [Swingalytica](https://swingalytica.com) — the golf swing analytics platform.

## Status

🚧 This package is currently a placeholder. The CLI is under active development and will be published here once available.

## Planned Features

- Parse `.ggn` (Golf Games Notation) files exported from [RealGolf.Games](https://realgolf.games)
- Convert `.ggn` files to other formats (e.g. JSON)
- Filter and query game data from GGN dumps

## Planned Usage

```bash
pnpm add -g swingalytica
```

```bash
swingalytica ggn -i 07-2026.ggn
swingalytica ggn -i 07-2026.ggn --output json
```

## GGN Format

GGN (Golf Games Notation) is the open data format used by [RealGolf.Games](https://realgolf.games) for exporting game data. Monthly data dumps are published at [database.realgolf.games](https://database.realgolf.games) under [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/).

## Links

- [Swingalytica](https://swingalytica.com)
- [RealGolf.Games](https://realgolf.games)
- [GGN Database](https://database.realgolf.games)

## License

MIT © 2026 [RealGolf.Games UG (haftungsbeschränkt)](https://realgolf.games)
