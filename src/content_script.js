var tryAddButtons = setInterval(addButtons, 100);
setTimeout(() => clearTimeout(tryAddButtons), 300000);
function addButtons() {
    for (let group of document.querySelectorAll(".btn-group-vertical, .xoct_event_buttons")) {
        if (group.childElementCount === 1) {
            let playButton = group.firstElementChild;
            let playLink = new URL(playButton.href);
            let url = new URL(window.location.href);
            let vars = {
                ref_id : playLink.searchParams.get("ref_id"),
                eid : playLink.searchParams.get("eid"),
                event_id : playLink.searchParams.get("eid"),
                cmd : "download",
                cmdClass : "xocteventgui",
                cmdNode : url.searchParams.get("cmdNode"),
                baseClass : "ilObjPluginDispatchGUI"
            }
            let searchString = new URLSearchParams(vars).toString();
            let button = document.createElement("a");
            button.classList = playButton.classList;
            button.href=`ilias.php?${searchString}`;
            button.innerHTML="Download";
            button.target = "_self";
            group.appendChild(button);
        }
        clearTimeout(tryAddButtons);
    }
}