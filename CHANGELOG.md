# Changelog
All notable changes to this project will be documented in this file.
The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/)
and this project adheres to [Semantic Versioning](https://semver.org/).

## [1.1.0] - 2025-09-23
### Added
- `"type": "module"` to package.json for ES Module support
- Storybook stories for `CalendarCell` and `CalendarHeader`.
- CHANGELOG.md for version history tracking

### Fixed
- Typo in names: `Calender` → `Calendar` (files and component names).
- Code formatting and linting issues resolved

### Changed
- ESLint `import/order` rule: `newlines-between` set to `ignore`.
- README.md: improved documentation format and structure
- Enhanced accessibility with aria-label and aria-current attributes in calendar cells

---

## [0.1.10]
### Docs
- CI docs added and corrected; several typos fixed.

### Build / Chore
- Migrated ESLint config from `.eslintrc` to `eslint.config.js` (Flat Config).
- Removed unused `custom.d.ts` related to SVGs.
- Codebase formatting pass (missing semicolons, inconsistent indentation).
- Minor CI file cleanup (removed stray characters).

## [0.1.9]
### Docs
- Added `README.md`.

## [0.1.8]
### Removed / UI
- Replaced SVG prev/next icons with text; removed unused SVG assets.

## [0.1.7]
### Build
- Updated `tsup` loader for `.svg` from `file` to `dataurl`.

## [0.1.6]
### Build
- Added SVG loader options in `tsup.config.ts`.

## [0.1.5]
### Build / Chore
- Added Tailwind CSS build script.
- Updated `author` field in `package.json`.

## [0.1.4]
### Changed
- Switched to default export pattern for public exports.

## [0.1.3]
### Added
- Introduced Storybook.

## [0.1.2]
### Added
- Completed calendar range logic and added date-change helpers.
- Project initialization and base setup.

## [0.1.0]
### Added
- Initial release.
