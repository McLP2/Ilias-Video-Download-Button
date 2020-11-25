var tryAddButtons = setInterval(addButtons, 100);
function addButtons() {
    for (let group of document.getElementsByClassName("btn-group-vertical")) if (group.childElementCount === 1) {
        let playLink = new URL(group.firstElementChild.href);
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
        button.classList.add("btn");
        button.classList.add("btn-info");
        button.href=`ilias.php?${searchString}`;
        button.innerHTML="Download";
        button.target = "_self";
        group.appendChild(button);
        clearTimeout(tryAddButtons);
    }
}