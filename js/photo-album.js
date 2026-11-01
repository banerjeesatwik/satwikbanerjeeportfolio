const photoAlbum = document.getElementById("photo-album");
const photoAlbumTrigger = document.querySelector(".photo-album-trigger");

if (!(photoAlbum instanceof HTMLDialogElement) || !(photoAlbumTrigger instanceof HTMLButtonElement)) {
    throw new Error("The photo album dialog or its trigger is missing.");
}

let albumScrollPosition = 0;

photoAlbumTrigger.addEventListener("click", () => {
    albumScrollPosition = window.scrollY;
    photoAlbum.showModal();
    document.body.style.setProperty("--photo-album-scroll-top", `-${albumScrollPosition}px`);
    document.body.classList.add("photo-album-modal-open");
});

photoAlbum.addEventListener("close", () => {
    document.body.classList.remove("photo-album-modal-open");
    document.body.style.removeProperty("--photo-album-scroll-top");
    window.scrollTo(0, albumScrollPosition);
});

photoAlbum.addEventListener("click", (event) => {
    if (event.target === photoAlbum) {
        photoAlbum.close();
    }
});
