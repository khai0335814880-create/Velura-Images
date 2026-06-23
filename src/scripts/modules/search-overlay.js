import { recentSearches, trendingSearches, popularCategories } from "../data/search-mock.js";

export function initSearchOverlay() {
  var searchTriggers = document.querySelectorAll(".js-search-input");
  var overlay = document.getElementById("search-overlay");
  if (!overlay || !searchTriggers.length) return;

  var closeButtons = overlay.querySelectorAll(".js-search-close");
  var overlayInput = overlay.querySelector(".js-search-overlay-input");

  // Helper escape HTML helper
  function escapeHtml(text) {
    return String(text).replace(/[&<>"']/g, function (s) {
      return {
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#39;"
      }[s];
    });
  }

  // Render mock data into the overlay
  function renderSearchData() {
    // 1. Render Recent Searches
    var recentContainer = overlay.querySelector(".js-recent-searches");
    if (recentContainer) {
      recentContainer.innerHTML = recentSearches.map(function (keyword) {
        return '<a href="#" class="search-pill">' + escapeHtml(keyword) + '</a>';
      }).join("");
    }

    // 2. Render Trending Searches
    var trendingContainer = overlay.querySelector(".js-trending-searches");
    if (trendingContainer) {
      trendingContainer.innerHTML = trendingSearches.map(function (keyword, index) {
        return '<li class="trending-item">' +
          '<span class="trending-item__rank">#' + (index + 1) + '</span>' +
          '<a href="#" class="trending-item__link">' + escapeHtml(keyword) + '</a>' +
        '</li>';
      }).join("");
    }

    // 3. Render Popular Categories
    var popularContainer = overlay.querySelector(".js-popular-categories");
    if (popularContainer) {
      popularContainer.innerHTML = popularCategories.map(function (cat) {
        return '<a href="' + cat.link + '" class="popular-card">' +
          '<div class="popular-card__image-container">' +
            '<img src="' + cat.image + '" alt="' + escapeHtml(cat.name) + '" class="popular-card__img" />' +
          '</div>' +
          '<div class="popular-card__info">' +
            '<h4 class="popular-card__name">' + escapeHtml(cat.name) + '</h4>' +
            '<span class="popular-card__count">' + cat.count + ' sản phẩm</span>' +
          '</div>' +
        '</a>';
      }).join("");
    }
  }

  // Open search overlay
  searchTriggers.forEach(function (trigger) {
    trigger.addEventListener("click", function (e) {
      e.preventDefault();
      overlay.classList.add("is-visible");
      document.body.classList.add("overflow-hidden"); // Scroll Lock
      
      // Auto focus input inside overlay
      if (overlayInput) {
        setTimeout(function () {
          overlayInput.focus();
        }, 100);
      }
    });
  });

  // Close search overlay
  closeButtons.forEach(function (btn) {
    btn.addEventListener("click", function () {
      overlay.classList.remove("is-visible");
      document.body.classList.remove("overflow-hidden"); // Unlock scroll
    });
  });

  // Close overlay on Escape key press
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && overlay.classList.contains("is-visible")) {
      overlay.classList.remove("is-visible");
      document.body.classList.remove("overflow-hidden");
    }
  });

  // Render content on initialization
  renderSearchData();
}
