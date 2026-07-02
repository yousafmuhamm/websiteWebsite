# Media sources and licenses

All media below is free for commercial use without attribution under the
Pexels License, Unsplash License, or Mixkit License respectively. None of it
depicts actual West Pine properties — swap for real photography before launch
(see README). Attribution is not required but sources are recorded here so
any file can be traced or replaced.

## Video

| File | Source | License |
| --- | --- | --- |
| `src/assets/video/hero-reel-1.mp4` | Pexels video #7578544, re-encoded from 4K to 1280px H.264, audio stripped | Pexels License |
| `src/assets/video/hero-reel-2.mp4` | Pexels video #7578552, re-encoded from 4K to 1280px H.264, audio stripped | Pexels License |

Both clips are two pans of the same open-concept great room and play back to
back on a loop in the homepage hero (`src/pages/Home.jsx`). `hero-reel-poster.jpg`
is a still pulled from the first clip and used as the `<video poster>` before
playback starts.

## Images

| File | Source | License |
| --- | --- | --- |
| `images/exterior-dusk-modern.jpg` | Unsplash photo `G48h926L2qo` | Unsplash License |
| `images/exterior-dusk-blue.jpg` | Pexels photo #106399 | Pexels License |
| `images/exterior-estate-drive.jpg` | Pexels photo #259588 | Pexels License |
| `images/living-room-bright.jpg` | Pexels photo #1571460 | Pexels License |
| `images/living-dining-suite.jpg` | Pexels photo #1643383 | Pexels License |
| `images/kitchen-island.jpg` | Pexels photo #2724749 | Pexels License |
| `images/bedroom-turndown.jpg` | Pexels photo #164595 | Pexels License |
| `images/hero-reel-poster.jpg` | Frame grab from `hero-reel-1.mp4` (Pexels video #7578544) | Pexels License |

Intentionally still placeholders (need real photos, not stock): the founders'
portrait and the Calgary service-area map on the contact page.

Note: the Pexels video and Pixabay links in the original brief were behind
bot-protection walls at fetch time, so the hero video came from Mixkit
instead (same free-commercial licensing class). Images were pulled from the
Pexels image CDN and Unsplash's per-photo download endpoint, then resized to
1600px / ~72% JPEG before committing.
