# Whimsical Dreamscape Storybook

This simple static site implements the "Whimsical Dreamscape" concept requested by the user.

## Features

- 4×5 responsive grid of 20 story cards
- 32 px rounded corners, floating drop shadow, hover scaling & glow
- Shared element transition when opening a story:
  - cover image morphs into header
  - background grid blurs/fades
  - story text slides up with spring bounce
  - close button reverses animation
- Playful serif title font (`Cherry Bomb One`) and legible sans-serif body (`Quicksand`)
- Base64 placeholder page-turn sound effect
- Web Speech API narration with selectable boy/girl voice (English only)

## Files

- `index.html` – markup and layout
- `styles.css` – all styling
- `script.js` – grid generation and transition logic

## Customization

### Voice playback

The audio button now reads story text aloud using the browser’s Web Speech API. Two radio options let the listener choose a “girl” or “boy” tone; the script will automatically pick the first available English-language voice matching that gender. Because voices are provided by the user’s device, the quality will vary, but modern desktop and mobile browsers (Chrome, Edge, Safari on iOS/Android) support it when the page is served over HTTPS (e.g. via GitHub Pages).

To change the default gender, swap the `checked` attribute on the `<input>` elements in `index.html`.

Selecting a different radio button while a story is playing will immediately stop the current speech so the next playback uses the newly chosen voice.

### Using your own recordings

If you have a pre‑recorded MP3 (e.g. the 
`[E-Girl (soft)]OMG g......! uwu.mp3` file) you can use it as the female “girl” voice by uploading it to the repository and adding an `audio` property to any story object:

```js
{
  title: "The Golden Woods",
  image: "…",
  content: "…",
  audio: "audio/golden-woods-girl.mp3"   // relative path inside repo
}
```

When the girl radio button is selected and the overlay is opened, tapping the 🔊 button will play that MP3 instead of invoking the speech API. This allows you to supply custom performances that exactly match the reference file. Keep in mind you’ll need a separate recording for each story you want narrated. Otherwise the usual TTS voices are used.


- Replace placeholder images by editing the `img.src` line in `script.js`
- Update or add full text for any story in the `stories` array.
- To use a real audio clip, change the `src` attribute of the `#page-turn-sound` element (currently uses a tiny base64 stub).

## Development

> **Mobile compatibility:** since playback uses the Web Speech API there’s no external audio file to download; the narration works on phones as long as the browser implements speech synthesis (Chrome/Edge/Firefox Android, Safari iOS). A tap on the audio button is required to start speech, which aligns with typical mobile interaction restrictions. Hosting the site on GitHub Pages or any HTTPS server will make it available from a phone once uploaded.


Simply open `index.html` in a browser (no build step required).

---

Feel free to extend or polish further – the structure is intentionally minimal and self‑contained.