# Birthday Surprise 💙

A cute kawaii-blue interactive birthday website, ready for GitHub Pages.

## Customize your birthday card

1. Replace `assets/funny-photo-placeholder.svg` by adding your own photo named `funny-photo.jpg` inside `assets/`.
2. Open `index.html` and find `id="funny-photo"`. Change its `src` to `assets/funny-photo.jpg`.
3. Replace `assets/birthday-video.mp4` with your video. Keep the exact filename, or update the `<source>` path in `index.html`.
4. Replace `assets/birthday-song.mp3` with your song. Keep the exact filename, or update the `<source>` path in `index.html`.
5. Edit the birthday letter text inside the element with `id="birthday-message"` in `index.html`.
6. Edit the page title and "Birthday Boy" wording in `index.html` if you want.

## Publish with GitHub Pages

1. Create a new **Public** repository on GitHub, for example `birthday-surprise`.
2. Upload all files and folders from this project. Make sure `index.html`, `style.css`, and `script.js` are in the repository root.
3. In the repository, open **Settings → Pages**.
4. Under **Build and deployment**, choose **Deploy from a branch**.
5. Select branch `main` and folder `/ (root)`, then click **Save**.
6. Wait for deployment. Your site URL will look like `https://YOUR-USERNAME.github.io/birthday-surprise/`.

## Notes

- This is a static website; no backend is required.
- Audio does not autoplay. The recipient must press play.
- Large video files may exceed GitHub's normal file upload limits. For a large video, upload it to an unlisted video host and embed it instead.
- Test the site on your phone before sharing.
