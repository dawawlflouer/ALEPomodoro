# Changelog

All notable changes to this project will be documented in this file.  
This project follows [Semantic Versioning](https://semver.org/).


## [v1.1.0] - 2025-07-03

### Added
- Dark mode support using `prefers-color-scheme`
- CSS custom properties for theme colors and layout consistency
- Backdrop blur and light/dark-aware background support
- Rounded corners for inner and outer edges of time boxes

### Changed
- Updated countdown label to “ALE 2026”
- Background inside boxes changed to `#d6e4ef` (light mode) and `#7ba3ad` (dark mode)
- Box outlines changed to 3 shades darker than the box fill in both themes
- Removed semi-transparent background layer for better visibility inside Notion callout blocks
- Aligned layout vertically to top center of screen


## [v1.0.0] - 2025-07-03

### Added
- Original countdown timer layout based on [Yunzhen’s Countdown](https://yunzhen-personal.github.io/countdown2/)
- Time boxes for days, hours, minutes, and seconds with static styles
- Countdown to December 20 at 3:30 PM
- Basic HTML, CSS, and JavaScript structure with light theme only
