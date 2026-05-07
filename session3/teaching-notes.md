# Teaching Notes: Session 3 - Bridging Reality (AR) 🔍
**Duration**: 120 Minutes

## 1. The AR Vision & Image Tracking (15 Mins)
*   **The Big Idea**: "We've built a 3D gem in a digital box. Now, we're going to break the box and bring the gem into your classroom."
*   **How it works**: Explain **Image Tracking**.
    *   The computer looks for "high-contrast points" (features) in an image.
    *   It uses those points to calculate exactly where the camera is relative to the paper.
*   **Teaching Tip**: Show a sample marker and explain why a plain white circle is a *bad* marker, but a detailed logo is a *good* one (it has more unique 'features' for the computer to track).

## 2. Mind.AR Integration (30 Mins)
*   **The Setup**:
    *   Explain the `MindARImageThree` controller.
    *   It handles the camera, the tracking, and the Three.js sync automatically.
*   **The Anchor**: This is the most important concept. An anchor is the "glue."
    *   Anchor Group = The point in space where the image is.
    *   Anything we add to the anchor group will follow the paper.
*   **Speaker Note**: "Imagine the marker is a table. We are telling Three.js: 'Put my gem on this table, wherever it goes.'"

## 3. Game Logic: Detect & Collect (40 Mins)
*   **Detection**: 
    *   `onTargetFound`: Triggered when the camera 'sees' the marker.
    *   `onTargetLost`: Triggered when the camera loses it.
*   **Teaching JS Events**: Show them how to change the text in the UI (The Hint Box) when these events happen.
*   **Collection Mechanics**:
    *   For simplicity: If a click happens and the target is visible -> Increment Score.
    *   *Advanced Note*: In professional games, we use "Raycasting" to see if the 3D model was specifically touched. For today, a global click is fine.
*   **Speaker Note**: "A game is just a loop of actions. Action: Find. Action: Click. Reward: Score."

## 4. Mobile Testing & Troubleshooting (35 Mins)
*   **The HTTPS Barrier**: Explain that browsers *block* camera access unless the site is secure (HTTPS). This is why GitHub/Vercel are essential—they provide HTTPS for free.
*   **Lighting Matters**: "If the room is too dark, the computer can't 'see' the features. If it's too bright (glare), it gets blinded."
*   **Permissions**: Remind them that they *must* click "Allow" on their phones.

---
**Instructor's Checklist**:
- [ ] Is everyone's camera feed active?
- [ ] Does the gem appear on the marker?
- [ ] Does the score increment when clicking the screen?
- [ ] (Bonus) Did anyone add a 'Collected!' animation?
