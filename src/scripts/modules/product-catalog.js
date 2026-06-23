/**
 * ES6 Module: Product Catalog Controller
 * Quản lý đồng bộ danh mục động và chuyển đổi chế độ xem Grid / Large / List
 */
export function initProductCatalog() {
  /* 1. Đồng bộ tên Danh mục động lên tiêu đề */
  var categoryCheckboxes = document.querySelectorAll('input[name="category"]');
  var activeCategoryEl = document.querySelector(".js-active-category");

  function updateActiveCategoryText() {
    if (!activeCategoryEl) return;
    var checkedNames = [];
    categoryCheckboxes.forEach(function (cb) {
      if (cb.checked) {
        var labelSpan = cb.closest(".filter-checkbox").querySelector("span");
        if (labelSpan) {
          checkedNames.push(labelSpan.textContent.trim());
        }
      }
    });

    if (checkedNames.length > 0) {
      activeCategoryEl.textContent = " " + checkedNames.join(", ");
    } else {
      activeCategoryEl.textContent = "";
    }
  }

  if (categoryCheckboxes.length && activeCategoryEl) {
    // Chạy đồng bộ lần đầu khi load trang
    updateActiveCategoryText();
    
    categoryCheckboxes.forEach(function (cb) {
      cb.addEventListener("change", updateActiveCategoryText);
    });
  }

  /* 2. Chuyển đổi linh hoạt chế độ xem lưới (Grid / Large / List) */
  var btnViewGrid = document.querySelector(".js-view-grid");
  var btnViewLarge = document.querySelector(".js-view-large");
  var btnViewList = document.querySelector(".js-view-list");
  var productGrid = document.querySelector(".product-grid");

  if (productGrid) {
    var cards = document.querySelectorAll(".card--product");

    // a. Grid view thường (3 cột)
    if (btnViewGrid) {
      btnViewGrid.addEventListener("click", function () {
        productGrid.classList.remove("product-grid--list", "product-grid--large-view");
        cards.forEach(function (card) {
          card.classList.remove("card--list-view", "product-card--large");
        });
        if (btnViewLarge) btnViewLarge.classList.remove("active");
        if (btnViewList) btnViewList.classList.remove("active");
        btnViewGrid.classList.add("active");
      });
    }

    // b. Large view bản to (2 cột lớn)
    if (btnViewLarge) {
      btnViewLarge.addEventListener("click", function () {
        productGrid.classList.remove("product-grid--list");
        productGrid.classList.add("product-grid--large-view");
        cards.forEach(function (card) {
          card.classList.remove("card--list-view");
          card.classList.add("product-card--large");
        });
        if (btnViewGrid) btnViewGrid.classList.remove("active");
        if (btnViewList) btnViewList.classList.remove("active");
        btnViewLarge.classList.add("active");
      });
    }

    // c. List view danh sách dọc (1 cột kèm mô tả)
    if (btnViewList) {
      btnViewList.addEventListener("click", function () {
        productGrid.classList.remove("product-grid--large-view");
        productGrid.classList.add("product-grid--list");
        cards.forEach(function (card) {
          card.classList.remove("product-card--large");
          card.classList.add("card--list-view");
        });
        if (btnViewGrid) btnViewGrid.classList.remove("active");
        if (btnViewLarge) btnViewLarge.classList.remove("active");
        btnViewList.classList.add("active");
      });
    }
  }
}
