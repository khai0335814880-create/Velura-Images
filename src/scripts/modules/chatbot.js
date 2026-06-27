import { mockHistoryData, mockRecommendedProducts } from "../data/chat-history.js";

export function initChatbot() {
  var chatbotWidget = document.querySelector(".chatbot-widget");
  var chatbotPage = document.querySelector(".chatbot-page");
  if (!chatbotWidget && !chatbotPage) return; // Safe Execution check

  var chatContainer = chatbotWidget || chatbotPage;

  var togglers = chatContainer.querySelectorAll(".js-chatbot-toggle");
  var form = chatContainer.querySelector(".js-chatbot-form");
  var input = chatContainer.querySelector(".js-chatbot-input");
  var messagesContainer = chatContainer.querySelector(".chatbot-messages");
  var switcher = chatContainer.querySelector(".js-chatbot-state-select");
  var recsContainer = chatContainer.querySelector(".js-chatbot-recommendations");

  // --- BỔ SUNG DOM ELEMENTS CHO TÍNH NĂNG MỚI ---
  var historyOverlay = document.querySelector(".chatbot-history-overlay");
  var menuTriggers = document.querySelectorAll(".js-menu-chatbot-trigger");
  var imgInput = document.getElementById("img-input");
  var attachBtn = chatContainer.querySelector(".chatbot-attach-btn");
  // ----------------------------------------------

  var currentMode = "guest";

  // Toggle chatbot box (only runs on pages where floating widget togglers exist)
  togglers.forEach(function (toggle) {
    toggle.addEventListener("click", function (e) {
      e.stopPropagation();
      chatContainer.classList.toggle("chatbot-widget--open");

      // Auto focus input when opened
      if (chatContainer.classList.contains("chatbot-widget--open") && input) {
        setTimeout(function () {
          input.focus();
        }, 300);

        // Auto scroll to bottom when opened
        if (messagesContainer) {
          messagesContainer.scrollTop = messagesContainer.scrollHeight;
        }
      }
    });
  });

  // Handle Menu Trigger Click
  menuTriggers.forEach(function (trigger) {
    trigger.addEventListener("click", function (e) {
      e.preventDefault();

      // --- CẬP NHẬT LOGIC LỊCH SỬ CHAT ---
      if (historyOverlay) {
        // Nếu đang ở trang chatbot, mở overlay lịch sử
        historyOverlay.classList.toggle("is-open");
        var isMember = localStorage.getItem("chatbotStateMode") === "user";
        historyOverlay.innerHTML = isMember
          ? "<h3>Lịch sử trò chuyện</h3><p>Phiên chat 27/06/2026: Tư vấn váy đầm...</p>"
          : "<p class='history-list__empty'>Chưa có lịch sử trò chuyện</p>";
      } else {
        // Nếu ở trang khác, điều hướng về trang chatbot
        console.log("Menu Chatbot Triggered");
        console.log("Navigating to dedicated Chatbot page...");
        window.location.href = "/src/pages/chatbot.html";
      }
      // -----------------------------------
    });
  });

  // --- BỔ SUNG LOGIC ĐÍNH KÈM ẢNH ---
  if (attachBtn && imgInput) {
    attachBtn.addEventListener("click", function () {
      imgInput.click();
    });
  }
  // -----------------------------------

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

  // Format time as AM/PM
  function formatTime(date) {
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    minutes = minutes < 10 ? '0' + minutes : minutes;
    return hours + ':' + minutes + ' ' + ampm;
  }

  // Render messages to container
  function renderMessages(messages, smooth) {
    if (!messagesContainer) return;
    messagesContainer.innerHTML = "";

    messages.forEach(function (msg) {
      var msgEl = document.createElement("div");
      var senderClass = msg.sender === "user" ? "chatbot-message--user" : "chatbot-message--bot";
      var historyClass = msg.isHistory ? " chatbot-message--history" : "";
      msgEl.className = "chatbot-message " + senderClass + historyClass;

      // --- CẬP NHẬT LOGIC RENDER SẢN PHẨM TRONG TIN NHẮN ---
      var contentHtml = '<div class="chatbot-message__text">' + escapeHtml(msg.text) + '</div>';

      if (msg.product) {
        contentHtml +=
          '<div class="chatbot-product-card">' +
          '<img src="' + msg.product.image + '" alt="' + escapeHtml(msg.product.title) + '">' +
          '<h4 class="chatbot-product-card__title">' + escapeHtml(msg.product.title) + '</h4>' +
          '<div class="chatbot-product-card__actions">' +
          '<a href="#" class="chatbot-product-card__btn chatbot-product-card__btn--buy">Mua ngay</a>' +
          '<a href="#" class="chatbot-product-card__btn chatbot-product-card__btn--detail">Xem chi tiết</a>' +
          '</div>' +
          '</div>';
      }

      msgEl.innerHTML = contentHtml + '<span class="chatbot-message__time">' + escapeHtml(msg.time) + '</span>';
      // -----------------------------------------------------

      messagesContainer.appendChild(msgEl);
    });

    // Auto scroll to bottom
    if (smooth) {
      messagesContainer.scrollTo({
        top: messagesContainer.scrollHeight,
        behavior: "smooth"
      });
    } else {
      messagesContainer.scrollTop = messagesContainer.scrollHeight;
    }
  }

  // Render recommendations in sidebar
  function renderRecommendations() {
    if (!recsContainer) return;

    // Reset animation by removing class
    recsContainer.classList.remove("fade-in");
    recsContainer.innerHTML = "";

    if (currentMode === "guest") {
      recsContainer.innerHTML = '<div class="chatbot-recommendations--empty">Chưa có gợi ý phong cách cho bạn. Hãy trò chuyện với AI Stylist hoặc chuyển sang User Mode để xem gợi ý cá nhân hóa!</div>';
    } else {
      if (mockRecommendedProducts && mockRecommendedProducts.length) {
        mockRecommendedProducts.forEach(function (prod) {
          var itemEl = document.createElement("a");
          itemEl.className = "recommendation-item";
          itemEl.href = prod.link;

          itemEl.innerHTML =
            '<img src="' + prod.image + '" alt="' + escapeHtml(prod.title) + '" class="recommendation-item__img" />' +
            '<div class="recommendation-item__info">' +
            '<h4 class="recommendation-item__title">' + escapeHtml(prod.title) + '</h4>' +
            '<span class="recommendation-item__price">' + escapeHtml(prod.price) + '</span>' +
            '</div>';

          recsContainer.appendChild(itemEl);
        });
      } else {
        recsContainer.innerHTML = '<div class="chatbot-recommendations--empty">Không có gợi ý sản phẩm nào.</div>';
      }
    }

    // Trigger reflow to restart css animation
    void recsContainer.offsetWidth;
    recsContainer.classList.add("fade-in");
  }

  // Load chat messages based on current mode
  function loadChat(smooth) {
    var storedHistory = localStorage.getItem("chatHistory");
    var historyObj = { guest: [], user: [] };
    if (storedHistory) {
      try {
        historyObj = JSON.parse(storedHistory);
      } catch (e) {
        // ignore
      }
    }
    if (!historyObj) historyObj = { guest: [], user: [] };
    if (!historyObj.guest) historyObj.guest = [];
    if (!historyObj.user) historyObj.user = [];

    var messagesToRender = [];

    if (currentMode === "guest") {
      // Guest welcome message
      var welcomeMsg = {
        sender: "bot",
        text: "Chào bạn, AI Stylist của Velura có thể giúp gì cho bạn hôm nay?",
        time: "17:05", // Default welcome time
        isHistory: false
      };
      messagesToRender = [welcomeMsg].concat(historyObj.guest);
    } else {
      // User mock history + user session history
      messagesToRender = mockHistoryData.concat(historyObj.user);
    }

    renderMessages(messagesToRender, smooth);
    renderRecommendations();
  }

  // Set up switcher dropdown
  if (switcher) {
    var savedMode = localStorage.getItem("chatbotStateMode");
    if (savedMode) {
      switcher.value = savedMode;
      currentMode = savedMode;
    } else {
      currentMode = switcher.value || "guest";
    }

    switcher.addEventListener("change", function () {
      currentMode = switcher.value;
      localStorage.setItem("chatbotStateMode", currentMode);
      loadChat(false);
    });
  }

  // Initialize chatbot messages list on startup
  loadChat(false);

  // Handle messages submit
  if (form && input && messagesContainer) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var text = input.value.trim();
      if (!text) return;

      var userTimeStr = formatTime(new Date());
      var newMsg = { sender: "user", text: text, time: userTimeStr, isHistory: false };

      // Save to localStorage
      var storedHistory = localStorage.getItem("chatHistory");
      var historyObj = { guest: [], user: [] };
      if (storedHistory) {
        try {
          historyObj = JSON.parse(storedHistory);
        } catch (e) { }
      }
      if (!historyObj) historyObj = { guest: [], user: [] };
      if (!historyObj.guest) historyObj.guest = [];
      if (!historyObj.user) historyObj.user = [];

      historyObj[currentMode].push(newMsg);
      localStorage.setItem("chatHistory", JSON.stringify(historyObj));

      input.value = "";
      loadChat(false);

      // Simulated Bot Reply after 1 second delay
      setTimeout(function () {
        var botTimeStr = formatTime(new Date());

        // --- CẬP NHẬT MOCK BOT REPLY CÓ CHỨA SẢN PHẨM ---
        var botMsg = {
          sender: "bot",
          text: "Cảm ơn tin nhắn của bạn! Đây là gợi ý sản phẩm phù hợp với phong cách của bạn:",
          time: botTimeStr,
          isHistory: false,
          product: {
            image: "/src/assets/images/products/detail/image-1.png",
            title: "Áo sơ mi linen trắng cao cấp",
            price: "890.000đ"
          }
        };
        // ------------------------------------------------

        // Save bot reply to localStorage
        var storedHistoryObj = localStorage.getItem("chatHistory");
        var historyObjUpdate = { guest: [], user: [] };
        if (storedHistoryObj) {
          try {
            historyObjUpdate = JSON.parse(storedHistoryObj);
          } catch (e) { }
        }
        if (!historyObjUpdate) historyObjUpdate = { guest: [], user: [] };
        if (!historyObjUpdate.guest) historyObjUpdate.guest = [];
        if (!historyObjUpdate.user) historyObjUpdate.user = [];

        historyObjUpdate[currentMode].push(botMsg);
        localStorage.setItem("chatHistory", JSON.stringify(historyObjUpdate));

        loadChat(true);
      }, 1000);
    });
  }
}