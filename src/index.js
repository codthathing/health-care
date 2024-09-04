const dropDown = (btnIdn, dropId) => {
    document.getElementById(btnIdn).addEventListener("click", () => {
        document.getElementById(dropId).classList.toggle("togDropDown")
    })
}

const innerDropBtn = [
    {btnId: "homeDropDownBtn",dropId: "homeDropDown"},
    {btnId: "serDropDownBtn", dropId: "serDropDown"},
    {btnId: "blogDropDownBtn", dropId: "blogDropDown" },
    {btnId: "sideDropDownIcon", dropId: "staSideDropDown"}
]
for (let x = 0; x < innerDropBtn.length; x++) {
    dropDown(innerDropBtn[x].btnId, innerDropBtn[x].dropId)
}