document.getElementById("year").textContent = new Date().getFullYear();

/*
  Add your real social links below when you're ready.

  Example:
  const socialLinks = {
    youtube: "https://youtube.com/@YourHandle",
    instagram: "https://instagram.com/YourHandle",
    tiktok: "https://tiktok.com/@PyroPenguinPro",
    x: "https://x.com/YourHandle",
    twitch: "https://twitch.tv/YourHandle"
  };
*/
const socialLinks = {
  youtube: "https://youtube.com/@PyroPenguinProductions",
  instagram: "https://www.instagram.com/pyropenguinproductions/",
  tiktok: "https://www.tiktok.com/@pyropenguinproductions",
  x: "https://x.com/PyroPenguinPro",
  twitch: "https://www.twitch.tv/pyropenguinproductions"
};

document.querySelectorAll("[data-social]").forEach((link) => {
  const url = socialLinks[link.dataset.social];
  if (url) {
    link.href = url;
    link.target = "_blank";
    link.rel = "noopener noreferrer";
  } else {
    link.addEventListener("click", (event) => event.preventDefault());
  }
});
