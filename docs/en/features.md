---
outline: deep
---

## Basic
- `Translation Service`
  - `LibreTranslate` - API Key is not required, slow, inaccurate.
  - `Google Translate` - API Key is optional, fast, accurate.
- `API Key` - Enter your API key for the translation service you selected. Some services don't require an API key.
- `Background Color` - Select the background color of the page. This is useful for **Chroma Keying**
- `Server Mode` - **[APP ONLY]**
  - `ON` - The app will run as a server, and you can connect to it via the `/client` endpoint.
  - `OFF` - The app will run normally. Browser source will not work.
- `Input Device` - **[NOT IMPLEMENTED]** Select the input device you'd like to use. This is useful if you have multiple microphones.
- `Output Device` - **[NOT IMPLEMENTED]** Select the output device you'd like to use. This is useful if you have multiple speakers.


## Subtitle & Translations
- `Color` - Select the color of the subtitle / translation text.
- `Border` - Select the border color of the subtitle / translation text.
- `Size` - Select the size of the subtitle / translation text.
- `Weight` - Select the width of the subtitle / translation text.
- `Border Size` - Select the border size of the subtitle / translation text.
- `Language`
  - For `SUBTITLE`, select the language you will be speaking in.
  - For `TRANSLATION`, select the language you want the subtitle to be translated to.
- `Font` - Select the font of the subtitle / translation text.


## Text
- `Horizontal` - Select the horizontal position of the text.
  - `Left` - The text will be aligned to the left.
  - `Center` - **[DEFAULT]** The text will be aligned to the center.
  - `Right` - The text will be aligned to the right.
- `Vertical` - Select the vertical position of the text.
  - `Top` - The text will be aligned to the top.
  - `Bottom` - **[DEFAULT]** The text will be aligned to the bottom.
- `White Space` - Select whether or not to break long sentences into new lines.
  - `NORMAL` - **[DEFAULT]** Long sentences will be broken into new lines.
  - `NO WRAP` - Long sentences will not be broken into new lines.
- `Delete Timer` (ms) - Select the amount of time to wait before deleting the text.
  - `0` - **[DEFAULT]** The text will not be deleted.
  - `100-5000` - The text will be deleted after the specified amount of time.
- `New Sentence Timer` (ms) - Select the amount of time to wait before starting a new sentence.
  - `0` - Wait until the server detects the end of a sentence. This may break the app.
  - `100-1000` - Amount of silence to wait for before starting a new sentence.
  - `1000` - **[DEFAULT]**
- `Show Language` - Select whether or not to show the language of the translations.
  - `ON` - The language will be shown.
  - `OFF` - **[DEFAULT]** The language will not be shown.
- `Bouyomi-chan` - **[NOT IMPLEMENTED]** Select whether or not to use the Bouyomi-chan protocol.
  - `ON` - The Bouyomi-chan protocol will be used.
  - `OFF` - **[DEFAULT]** The Bouyomi-chan protocol will not be used.
- `Censor Words` - **[NOT IMPLEMENTED]** Select whether or not to censor profanity.
  - `ON` - Words will be censored.
  - `OFF` - **[DEFAULT]** Words will not be censored.
  
