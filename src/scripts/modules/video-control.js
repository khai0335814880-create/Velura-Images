/**
 * Video Control Module — Velura
 * Quản lý bật/tắt âm thanh của video nền Hero và hiển thị các icon tương ứng
 */

export function initVideoControl() {
  const muteBtn = document.querySelector(".js-hero-mute-btn");
  const video = document.getElementById("hero-video");

  if (!muteBtn || !video) return;

  const iconOn = muteBtn.querySelector(".hero__mute-icon--on");
  const iconOff = muteBtn.querySelector(".hero__mute-icon--off");

  // Đảm bảo ban đầu trạng thái icon khớp với thuộc tính .muted của video
  updateIcons(video.muted);

  muteBtn.addEventListener("click", function () {
    // Đảo ngược trạng thái tắt tiếng
    video.muted = !video.muted;
    updateIcons(video.muted);
  });

  // Một số trình duyệt tự động khóa tiếng khi autoplay. Lắng nghe nếu video bắt đầu phát
  // để cập nhật lại icon cho đồng bộ.
  video.addEventListener("play", function () {
    updateIcons(video.muted);
  });

  function updateIcons(isMuted) {
    if (isMuted) {
      if (iconOn) iconOn.classList.add("hidden");
      if (iconOff) iconOff.classList.remove("hidden");
      muteBtn.setAttribute("aria-label", "Bật âm thanh video");
    } else {
      if (iconOn) iconOn.classList.remove("hidden");
      if (iconOff) iconOff.classList.add("hidden");
      muteBtn.setAttribute("aria-label", "Tắt âm thanh video");
    }
  }
}
