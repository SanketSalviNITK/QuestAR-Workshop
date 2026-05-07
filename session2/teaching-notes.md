# Teaching Notes: Session 2 - Entering the 3D World 💎
**Duration**: 90 Minutes

## 1. Recap & Premium UI (15 Mins)
*   **The Transition**: "Your portfolio is your home; now let's build the portal to another dimension."
*   **UI Focus**: Talk about the "Dashboard" feel.
    *   Explain why we use `position: absolute` for the UI—it needs to sit *on top* of the 3D world.
*   **The Glassmorphism Polish**: Re-emphasize the blur and borders. This is what makes a student project look like a professional game.

## 2. Intro to Three.js: The Director Analogy (20 Mins)
*   **Concept**: To make a 3D world, you need three things:
    1.  **The Scene**: The stage where everything happens.
    2.  **The Camera**: Your point of view.
    3.  **The Renderer**: The artist drawing every frame.
*   **Teaching Tip**: Ask students: "If you were filming a movie, what would you need?" (A set, a camera, and a screen). It's the same in Three.js.

## 3. Geometries & Materials: Creating the Treasure (20 Mins)
*   **Focus**: The "Octahedron".
*   **Geometries**: Explain that everything in 3D is made of triangles. A geometry is just the "shape" or "skeleton".
*   **Materials**: 
    *   `MeshStandardMaterial` is the gold standard. 
    *   Explain **Metalness** and **Roughness**.
*   **Speaker Note**: "We want our treasure to look like a cyan diamond. High metalness, low roughness."

## 4. Lighting & Animation (20 Mins)
*   **Concept**: Without light, the 3D world is pitch black.
*   **Ambient Light**: Like the sun on a cloudy day (lights everything equally).
*   **Point Light**: Like a lightbulb (adds shadows and highlights to the gem's edges).
*   **The Animation Loop**: Explain `requestAnimationFrame`. It's a function that runs 60 times a second. This is the "heartbeat" of your game.
*   **Speaker Note**: "If we don't update the rotation inside the loop, the gem is just a flat photo. With the loop, it's alive."

## 5. Connecting UI & 3D (15 Mins)
*   **The "Start" Button**: 
    *   Use JavaScript to show/hide the splash screen.
    *   Explain that the 3D canvas is just a background for our HTML interface.
*   **Interaction**: Briefly introduce the concept of "Event Listeners" for buttons.

---
**Instructor's Checklist**:
- [ ] Is the 3D Gem visible for every student?
- [ ] Is the gem rotating smoothly?
- [ ] Does the "Start" button correctly hide the splash screen?
