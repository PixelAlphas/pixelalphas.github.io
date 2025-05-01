# v4.0 - Beyond Update
---
can i get uhhhhhhhhhhhhhhhhh<br><br>
### - What's new? —
- Animated Hotbar Select/Highlight — Supports Texture pack!
- Animated UI elements. (Not all of them unfortunately.)
- UI Visual Upgrade.
- More Config customizations stuff! —
  - `$cuigv:AnimatedHotbarSelect` - Enable Animation on Hotbar Select/Highlight.
  - `$cuigv:MoreExperienceDetails` - Enable More detailed experience bar on each hotbar side.
- Sub-Settings Icons — Sound Settings now has icons next to it! Ported from Arcdustry-UI :)
- Redone Storage Section.
- Extras Menu are now completely reworked.
- Added "Game Paused" on pause screen.
- Added View Description on Settings screen — This will toggle certain description on toggles, sliders etc on. (Next patch will include nearly all descriptions for all toggles.)
- New Collapse-UI Logo

### - Changes —
- Due to performance issues that caused by percentage when playing the long session, "More Detailed Experience Bar" will be disabled by default. — You will able to enable it with upcoming template!
- Updated the Settings to 1.21.70 —
  - Replaced "Fancy Graphic" to "Graphical mode" on Video Section
  - Added Touch Control's Perspective Button from 1.21.70
  - Added Debug Display mode, disables debug details on the top. Preview/Beta Only!
  - Added "Log show on errors" toggle on creator section.
  - Added a new subtitle "Gameplay" on General section
  - Added "Pause Feature" and "Filter Profanity" toggle on General section (Under Gameplay Subtitle)
- Updated the Gameplay to 1.21.70 — Updated and moved certain elements to Collapse-UI's file to keep it more compatible.
- Config file are changed in term of style formatting to look more appealing on non-IDE or Notepad.
- `$cuigv:ExpTextShadows` 's Config has changed to `$cuigv:ExperienceTextShadows`.
- Removed Deferred's (Advanced Graphic) settings due being preview exclusive, and Removed RTX toggle.
- Added Animation to Game's title on Pause Screen.
- Play Button are now primarily focused on Start screen and pause screen.
- You can no longer focus or highlight Extra Menu's button with controller. ( Use Start/+ button instead! )
- You can no longer focus or highlight Player card with controller.
- Language files were updated.
- Due to certain features being updated to 1.21.70, The minimum version are now 1.21.70!
- Many elements that has hardcoded text are now moved to .lang files.

### - Fixes —
- Added ability to use touch control's inventory button outside the control restriction. — This was due to some devices unable to open inventory.
- Fixed a certain elements bindings that causes content log errors.
- Fixed some issue with the back button somehow being off the screen.
- Fixed Loading screen having weirdest alignment i ever seen.
- Fixed Player list's button on pause screen where the position aren't the same with or without screen animations.
- Fixed an issue where controllers would have time struggling scrolling down on server forms or any screens that has action out or range on scrolling panel.
- Fixed an issue with controller having a missing texture icons.
- Fixed an issue with player card on start screen or main menu not highlighted, causes confusion with controller.
- 15+ More unheard bug fixes that i can't describe, but overall should improve the UI stability.

### - Known Issues —
- Due to percentage issue mentioned on **Changes**, This may crash on certain devices when attempting to `/reload all` This only occurs on low-end devices.
- Multiple Back buttons may flicker due to animation using the same ID.
- There's few missing features that didn't make to the stable version due to how buggy they are.