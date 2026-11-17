(() => {
  const installLink = document.getElementById("install-link");
  const hint = document.getElementById("install-hint");
  if (!installLink || !hint) return;

  const manifestUrl = new URL("manifest.plist", window.location.href).href;
  installLink.href = "itms-services://?action=download-manifest&url=" + encodeURIComponent(manifestUrl);

  const isAppleMobile = /iPhone|iPad|iPod/.test(navigator.userAgent);
  if (!isAppleMobile) {
    hint.textContent = "For iPhone and iPad, open this page in Safari to use the install link.";
  }
})();
