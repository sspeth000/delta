# Delta for iOS

A small static landing page for the Delta iOS demo.

## Files

- `index.html`: landing page
- `style.css`: responsive dark theme
- `script.js`: builds the iOS manifest install URL
- `manifest.plist`: OTA app manifest

## GitHub Pages

In the repository settings, open **Pages** and configure deployment from the `main` branch, root folder (`/`). Once published, the page will be available at:

https://sspeth000.github.io/delta/

## App metadata

The manifest currently uses bundle identifier `com.gloop.deltamobile` and version `2.717.982`. Confirm that the bundle identifier matches the signed IPA's `CFBundleIdentifier`; the manifest value must match the app exactly.

The IPA is hosted as a GitHub Release asset and is not committed to this repository.
