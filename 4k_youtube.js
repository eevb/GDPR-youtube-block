/// youtube-high-resolution.js
/// alias HRS.js

// Function to change YouTube video resolution to 4K invisibly
function setYouTubeResolutionTo4KInvisibly() {
    // Locate the video player settings menu button
    const settingsButton = document.querySelector('.ytp-settings-button');
    if (!settingsButton) {
        console.error("Settings button not found!");
        return;
    }

    // Open the settings menu invisibly
    const settingsMenu = document.querySelector('.ytp-settings-menu');
    if (!settingsMenu) {
        console.error("Settings menu not found!");
        return;
    }

    // Find the Quality submenu item
    const qualityMenuItem = [...settingsMenu.querySelectorAll('.ytp-menuitem')]
        .find(item => item.innerText.includes('Quality'));

    if (!qualityMenuItem) {
        console.error("Quality menu item not found!");
        return;
    }

    // Simulate clicking the Quality menu item
    qualityMenuItem.click();

    setTimeout(() => {
        // Find the 4K (2160p) option in the quality submenu
        const qualityOptions = [...document.querySelectorAll('.ytp-quality-menu .ytp-menuitem')];
        const targetQuality = qualityOptions.find(option => option.innerText.includes('2160p'));

        if (!targetQuality) {
            console.warn("4K resolution (2160p) not available for this video.");
            return;
        }

        // Simulate clicking the 4K resolution option
        targetQuality.click();
        console.log("Resolution set to 4K (2160p)!");
    }, 300); // Wait for the quality menu to load
}

// Call the function
setYouTubeResolutionTo4KInvisibly();

window.onload = function() {
    // Your code here
    setYouTubeResolutionTo4KInvisibly();
    console.log("All resources are fully loaded!");
};
