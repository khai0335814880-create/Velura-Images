# Cấu trúc thư mục dự án Velura-Images

Dự án này là một ứng dụng web frontend được xây dựng một cách có tổ chức, sử dụng các công nghệ và phương pháp phát triển hiện đại. Cấu trúc thư mục được thiết kế để phân tách rõ ràng các mối quan tâm (separation of concerns), quản lý tài sản (assets), trang (pages), logic JavaScript (scripts) và kiểu dáng CSS (styles) một cách hiệu quả, dễ bảo trì và mở rộng.

## Sơ đồ cấu trúc tổng thể

```
.
├── index.html
├── package.json
├── README.md
├── skill.md
├── vite.config.js
├── categories/
│   ├── ao/
│   ├── ao-khoac/
│   ├── dam-vay/
│   ├── giay-dep/
│   ├── phu-kien/
│   ├── quan/
│   └── set-do/
├── src/
│   ├── assets/
│   │   ├── fonts/
│   │   ├── icons/
│   │   ├── images/
│   │   │   ├── chatbot/
│   │   │   └── products/
│   │   │       └── detail/
│   │   └── videos/
│   ├── pages/
│   │   ├── chatbot.html
│   │   ├── collections.html
│   │   ├── contact.html
│   │   ├── policies.html
│   │   ├── about/
│   │   │   └── about.html
│   │   ├── account/
│   │   │   ├── my-orders.html
│   │   │   ├── order-detail.html
│   │   │   ├── product-review.html
│   │   │   ├── profile.html
│   │   │   ├── return-request.html
│   │   │   └── track-order.html
│   │   ├── ai/
│   │   │   ├── style-quiz.html
│   │   │   └── suggestions.html
│   │   ├── auth/
│   │   │   ├── forgot-password.html
│   │   │   ├── reset-password.html
│   │   │   ├── signin.html
│   │   │   └── signup.html
│   │   ├── blog/
│   │   │   └── blog.html
│   │   ├── cart/
│   │   │   └── cart.html
│   │   ├── checkout/
│   │   │   ├── order-confirm.html
│   │   │   ├── otp-verify.html
│   │   │   ├── payment-confirm.html
│   │   │   ├── payment-failed.html
│   │   │   ├── payment-guest.html
│   │   │   ├── payment-user.html
│   │   │   └── shipping-payment.html
│   │   ├── home/
│   │   ├── product/
│   │   ├── products/
│   │   │   ├── detail.html
│   │   │   └── list.html
│   │   └── wishlist/
│   ├── scripts/
│   │   ├── main.js
│   │   ├── data/
│   │   │   ├── chat-history.js
│   │   │   └── search-mock.js
│   │   └── modules/
│   │       ├── account-profile.js
│   │       ├── chatbot.js
│   │       ├── collections.js
│   │       ├── contact-form.js
│   │       ├── gallery.js
│   │       ├── my-orders.js
│   │       ├── options.js
│   │       ├── policy-tabs.js
│   │       ├── product-catalog.js
│   │       ├── product-review.js
│   │       ├── quantity.js
│   │       ├── quiz-trigger.js
│   │       ├── search-overlay.js
│   │       ├── style-quiz.js
│   │       ├── tabs.js
│   │       └── video-control.js
│   └── styles/
│       ├── main.css
│       ├── responsive.css
│       ├── base/
│       │   ├── _reset.css
│       │   ├── _typography.css
│       │   ├── _utilities.css
│       │   └── _variables.css
│       ├── components/
│       │   ├── _account.css
│       │   ├── _breadcrumb.css
│       │   ├── _buttons.css
│       │   ├── _cards.css
│       │   ├── _chatbot.css
│       │   ├── _contact-page.css
│       │   ├── _forms.css
│       │   ├── _my-orders.css
│       │   ├── _otp-modal.css
│       │   ├── _policy-tabs.css
│       │   ├── _product-grid.css
│       │   ├── _product-review.css
│       │   ├── _quiz-modal.css
│       │   ├── _quiz-popup.css
│       │   ├── _quiz.css
│       │   ├── _review.css
│       │   ├── _search-overlay.css
│       │   ├── _steps.css
│       │   └── _summary.css
│       ├── layouts/
│       │   ├── _footer.css
│       │   ├── _header.css
│       │   └── _page-shell.css
│       ├── overrides/
│       │   └── _responsive-sync.css
│       └── pages/
│           ├── _about.css
│           ├── _ai-suggestions.css
│           ├── _blog.css
│           ├── _cart.css
│           ├── _chatbot-page.css
│           ├── _checkout.css
│           ├── _collections.css
│           ├── _home.css
│           ├── _order-detail.css
│           └── _payment-failed.css
├── tests/
│   ├── e2e/
│   └── unit/
```

## Giải thích chi tiết các thư mục và tệp

### Thư mục gốc (`d:\HK3_2526\Phát triển web\Velura-Images\`)

*   `index.html`
    *   **Mô tả:** Đây là tệp HTML chính và là điểm vào (entry point) của ứng dụng web. Khi ứng dụng được tải trong trình duyệt, `index.html` là tệp đầu tiên được đọc. Nó thường chứa cấu trúc HTML cơ bản của trang, các thẻ `<link>` để nhúng các tệp CSS, và các thẻ `<script>` để tải các tệp JavaScript. Trong các dự án hiện đại như sử dụng Vite, nó cũng có thể chứa một `<div id="app">` hoặc tương tự, nơi các framework frontend (như React, Vue) sẽ gắn (mount) ứng dụng của mình.
    *   **Mục đích:** Cung cấp khung sườn HTML cơ bản cho ứng dụng và liên kết tất cả các tài nguyên cần thiết (CSS, JS) để ứng dụng có thể hoạt động.

*   `package.json`
    *   **Mô tả:** Tệp này là trung tâm quản lý dự án Node.js. Nó chứa siêu dữ liệu về dự án (tên, phiên bản, tác giả), danh sách các gói phụ thuộc (dependencies) cần thiết cho dự án hoạt động (ví dụ: các thư viện JavaScript), và các tập lệnh (scripts) tiện ích để chạy, build, test, v.v., ứng dụng.
    *   **Mục đích:** Định nghĩa dự án, quản lý các thư viện bên ngoài và tự động hóa các tác vụ phát triển thông qua các lệnh script.

*   `README.md`
    *   **Mô tả:** Một tệp Markdown cung cấp thông tin tổng quan, hướng dẫn cài đặt, cách sử dụng, và các chi tiết quan trọng khác về dự án. Đây là tài liệu đầu tiên mà một nhà phát triển mới hoặc người dùng sẽ đọc khi tiếp cận dự án.
    *   **Mục đích:** Cung cấp tài liệu toàn diện cho dự án, giúp người khác dễ dàng hiểu và làm việc với codebase.

*   `skill.md`
    *   **Mô tả:** Tệp này có thể là một tài liệu hướng dẫn hoặc mô tả các "kỹ năng" hoặc quy tắc cụ thể được sử dụng trong quá trình phát triển, hoặc liên quan đến một công cụ hỗ trợ phát triển nào đó (ví dụ: Copilot skill definitions). Nó có thể chứa các hướng dẫn về cách sử dụng một tính năng, một quy ước mã hóa, hoặc một luồng công việc cụ thể.
    *   **Mục đích:** Chuẩn hóa quy trình làm việc, cung cấp hướng dẫn cho các tính năng đặc biệt hoặc các quy tắc phát triển trong dự án.

*   `vite.config.js`
    *   **Mô tả:** Đây là tệp cấu hình cho Vite, một công cụ build và phát triển frontend hiệu suất cao. Tệp này định nghĩa cách Vite sẽ biên dịch, tối ưu hóa và phục vụ ứng dụng. Nó có thể bao gồm cấu hình cho các plugin, định tuyến tệp, alias đường dẫn, cài đặt máy chủ phát triển (dev server), và cách tối ưu hóa output cho môi trường production.
    *   **Mục đích:** Cấu hình môi trường phát triển và build của ứng dụng, đảm bảo hiệu suất và khả năng mở rộng.

*   `categories/`
    *   **Mô tả:** Thư mục này được tổ chức để chứa các thư mục con, mỗi thư mục con đại diện cho một danh mục sản phẩm cụ thể (ví dụ: `ao`, `dam-vay`, `giay-dep`). Mỗi thư mục danh mục có thể chứa các tài nguyên như hình ảnh đại diện cho danh mục, dữ liệu sản phẩm liên quan hoặc các tệp cấu hình riêng.
    *   **Mục đích:** Phân loại và quản lý tài nguyên hoặc dữ liệu liên quan đến từng danh mục sản phẩm một cách có hệ thống, giúp dễ dàng mở rộng khi có thêm các danh mục mới.
    *   **Các thư mục con:**
        *   `ao/`: Danh mục áo.
        *   `ao-khoac/`: Danh mục áo khoác.
        *   `dam-vay/`: Danh mục đầm váy.
        *   `giay-dep/`: Danh mục giày dép.
        *   `phu-kien/`: Danh mục phụ kiện.
        *   `quan/`: Danh mục quần.
        *   `set-do/`: Danh mục set đồ.

### Thư mục `src/` (Mã nguồn chính)

Thư mục `src` là nơi chứa toàn bộ mã nguồn frontend của ứng dụng, được tổ chức thành các phần rõ ràng để dễ quản lý và phát triển.

*   `assets/`
    *   **Mô tả:** Thư mục này là kho lưu trữ tất cả các tài nguyên tĩnh (static assets) của ứng dụng, bao gồm phông chữ, biểu tượng, hình ảnh và video. Việc tập trung các tài nguyên này vào một nơi giúp quản lý chúng hiệu quả hơn và dễ dàng tham chiếu trong mã nguồn.
    *   **Mục đích:** Tổ chức và cung cấp các tài nguyên đa phương tiện và đồ họa cho ứng dụng.
    *   **Các thư mục con:**
        *   `fonts/`: Lưu trữ các tệp phông chữ tùy chỉnh (ví dụ: `.ttf`, `.woff`, `.woff2`) được sử dụng trong thiết kế giao diện.
        *   `icons/`: Chứa các tệp biểu tượng (ví dụ: `.svg`, `.png`) được sử dụng cho các yếu tố UI nhỏ, nút bấm, v.v.
        *   `images/`: Chứa các tệp hình ảnh chung của ứng dụng.
            *   `chatbot/`: Hình ảnh dành riêng cho tính năng chatbot.
            *   `products/`: Hình ảnh sản phẩm.
                *   `detail/`: Hình ảnh chi tiết cho từng sản phẩm, thường có độ phân giải cao hoặc nhiều góc nhìn.
        *   `videos/`: Lưu trữ các tệp video được sử dụng trong ứng dụng (ví dụ: video giới thiệu, video sản phẩm).

*   `pages/`
    *   **Mô tả:** Thư mục này chứa tất cả các tệp HTML riêng lẻ, mỗi tệp đại diện cho một trang hoặc một phần quan trọng của ứng dụng. Cấu trúc lồng nhau của các thư mục con trong `pages` phản ánh cấu trúc điều hướng hoặc các tính năng chính của ứng dụng. Vite sẽ xử lý các tệp HTML này như các điểm vào (entry points) riêng biệt hoặc các trang được định tuyến.
    *   **Mục đích:** Định nghĩa cấu trúc và nội dung HTML cho từng trang/view của ứng dụng.
    *   **Các tệp và thư mục con:**
        *   `chatbot.html`: Trang giao diện người dùng cho chatbot.
        *   `collections.html`: Trang hiển thị danh sách các bộ sưu tập sản phẩm.
        *   `contact.html`: Trang chứa biểu mẫu và thông tin liên hệ.
        *   `policies.html`: Trang hiển thị các chính sách của cửa hàng (ví dụ: chính sách đổi trả, bảo mật).
        *   `about/`
            *   `about.html`: Trang giới thiệu về cửa hàng hoặc công ty.
        *   `account/`
            *   `my-orders.html`: Trang hiển thị lịch sử các đơn hàng của người dùng.
            *   `order-detail.html`: Trang hiển thị chi tiết của một đơn hàng cụ thể.
            *   `product-review.html`: Trang cho phép người dùng viết đánh giá sản phẩm.
            *   `profile.html`: Trang hiển thị và cho phép chỉnh sửa thông tin hồ sơ người dùng.
            *   `return-request.html`: Trang gửi yêu cầu trả hàng.
            *   `track-order.html`: Trang cho phép người dùng theo dõi trạng thái vận chuyển của đơn hàng.
        *   `ai/`
            *   `style-quiz.html`: Trang chứa một bài trắc nghiệm phong cách được hỗ trợ bởi AI.
            *   `suggestions.html`: Trang hiển thị các gợi ý sản phẩm hoặc phong cách dựa trên AI.
        *   `auth/`
            *   `forgot-password.html`: Trang yêu cầu đặt lại mật khẩu.
            *   `reset-password.html`: Trang thiết lập mật khẩu mới sau khi yêu cầu đặt lại.
            *   `signin.html`: Trang đăng nhập tài khoản.
            *   `signup.html`: Trang đăng ký tài khoản mới.
        *   `blog/`
            *   `blog.html`: Trang hiển thị các bài viết blog.
        *   `cart/`
            *   `cart.html`: Trang hiển thị các sản phẩm trong giỏ hàng.
        *   `checkout/`
            *   `order-confirm.html`: Trang xác nhận đơn hàng sau khi hoàn tất quá trình thanh toán.
            *   `otp-verify.html`: Trang xác minh mã OTP trong quá trình thanh toán hoặc xác thực.
            *   `payment-confirm.html`: Trang xác nhận thông tin thanh toán.
            *   `payment-failed.html`: Trang thông báo thanh toán thất bại.
            *   `payment-guest.html`: Trang thanh toán dành cho khách hàng không đăng nhập.
            *   `payment-user.html`: Trang thanh toán dành cho khách hàng đã đăng nhập.
            *   `shipping-payment.html`: Trang nhập thông tin vận chuyển và chọn phương thức thanh toán.
        *   `home/`: Có thể chứa `index.html` của trang chủ hoặc các tệp liên quan đến bố cục trang chủ.
        *   `product/`: Có thể chứa các tệp HTML liên quan đến một sản phẩm cụ thể nếu có nhiều bố cục cho từng sản phẩm.
        *   `products/`
            *   `detail.html`: Trang hiển thị chi tiết của một sản phẩm.
            *   `list.html`: Trang hiển thị danh sách các sản phẩm (ví dụ: theo danh mục, tìm kiếm).
        *   `wishlist/`: Trang hiển thị danh sách sản phẩm yêu thích của người dùng.

*   `scripts/`
    *   **Mô tả:** Thư mục này chứa toàn bộ logic JavaScript của ứng dụng, được tổ chức thành các tệp và thư mục con để phân tách các chức năng. `main.js` là điểm khởi đầu cho JavaScript, và các module nhỏ hơn được đặt trong `data` và `modules` để tăng tính tái sử dụng và dễ bảo trì.
    *   **Mục đích:** Quản lý hành vi tương tác, logic nghiệp vụ, và các tương tác API của frontend.
    *   **Các tệp và thư mục con:**
        *   `main.js`: Tệp JavaScript chính, thường chịu trách nhiệm khởi tạo các module khác, thiết lập các sự kiện toàn cục, hoặc chạy các script cần thiết khi trang tải.
        *   `data/`: Chứa các tệp JavaScript cung cấp dữ liệu giả (mock data) hoặc cấu hình.
            *   `chat-history.js`: Dữ liệu lịch sử chat mẫu, dùng cho mục đích phát triển hoặc kiểm thử.
            *   `search-mock.js`: Dữ liệu giả lập cho chức năng tìm kiếm.
        *   `modules/`: Chứa các module JavaScript độc lập, mỗi module xử lý một tính năng cụ thể hoặc một phần của UI. Điều này giúp mã nguồn có cấu trúc mô-đun, dễ hiểu và tái sử dụng.
            *   `account-profile.js`: Logic xử lý các tương tác trên trang hồ sơ tài khoản.
            *   `chatbot.js`: Logic điều khiển chức năng và giao diện của chatbot.
            *   `collections.js`: Logic cho việc hiển thị và tương tác với các bộ sưu tập sản phẩm.
            *   `contact-form.js`: Logic xử lý gửi biểu mẫu liên hệ và xác thực dữ liệu.
            *   `gallery.js`: Logic cho thư viện ảnh hoặc trình chiếu ảnh (ví dụ: trên trang chi tiết sản phẩm).
            *   `my-orders.js`: Logic quản lý hiển thị và tương tác với danh sách đơn hàng của người dùng.
            *   `options.js`: Logic xử lý các tùy chọn sản phẩm (kích thước, màu sắc) và tác động của chúng đến UI.
            *   `policy-tabs.js`: Logic điều khiển các tab trên trang chính sách.
            *   `product-catalog.js`: Logic cho việc tải, hiển thị và lọc danh mục sản phẩm.
            *   `product-review.js`: Logic cho việc gửi và hiển thị đánh giá sản phẩm.
            *   `quantity.js`: Logic tăng/giảm số lượng sản phẩm trong giỏ hàng hoặc trên trang chi tiết.
            *   `quiz-trigger.js`: Logic kích hoạt và quản lý trạng thái của các bài trắc nghiệm (ví dụ: trắc nghiệm phong cách).
            *   `search-overlay.js`: Logic điều khiển hiển thị và chức năng của lớp phủ (overlay) tìm kiếm.
            *   `style-quiz.js`: Logic cụ thể cho bài trắc nghiệm phong cách, bao gồm xử lý câu hỏi, đáp án và kết quả.
            *   `tabs.js`: Module JavaScript tổng quát để tạo và quản lý chức năng tab cho bất kỳ thành phần nào.
            *   `video-control.js`: Logic điều khiển phát, tạm dừng và các tương tác khác với các yếu tố video.

*   `styles/`
    *   **Mô tả:** Thư mục này chứa toàn bộ các tệp CSS (hoặc Sass/SCSS nếu được tiền xử lý) định nghĩa kiểu dáng và giao diện người dùng của ứng dụng. Cấu trúc được tổ chức theo phương pháp CSS mạnh mẽ (như BEM, OOCSS, hoặc ITCSS), phân chia CSS thành các lớp khác nhau: base, components, layouts, pages, và overrides. Điều này giúp dễ dàng quản lý các stylesheet lớn và đảm bảo tính nhất quán.
    *   **Mục đích:** Định nghĩa tất cả các quy tắc CSS để tạo ra giao diện trực quan của ứng dụng.
    *   **Các tệp và thư mục con:**
        *   `main.css`: Tệp CSS chính. Đây thường là nơi tất cả các tệp CSS nhỏ hơn từ các thư mục con khác được `@import` vào để tạo ra một stylesheet tổng hợp duy nhất cho ứng dụng.
        *   `responsive.css`: Chứa các media queries và các quy tắc CSS cụ thể để điều chỉnh bố cục và kiểu dáng cho các kích thước màn hình khác nhau, đảm bảo ứng dụng hiển thị tốt trên mọi thiết bị.
        *   `base/`: Chứa các kiểu dáng cơ bản, nền tảng, không liên quan đến thành phần cụ thể.
            *   `_reset.css`: CSS reset hoặc normalize để loại bỏ sự khác biệt mặc định về kiểu dáng giữa các trình duyệt, đảm bảo một điểm khởi đầu nhất quán.
            *   `_typography.css`: Định nghĩa các quy tắc kiểu chữ toàn cục (font-family, font-size, line-height, text-color) cho các thẻ HTML cơ bản (h1-h6, p, a, v.v.).
            *   `_utilities.css`: Các lớp tiện ích (utility classes) nhỏ, có mục đích duy nhất và có thể tái sử dụng (ví dụ: `.text-center`, `.margin-top-10`, `.d-flex`).
            *   `_variables.css`: Định nghĩa các biến CSS (CSS Custom Properties) để lưu trữ các giá trị thường dùng như màu sắc, kích thước spacing, breakpoints, giúp dễ dàng thay đổi kiểu dáng toàn cục.
        *   `components/`: Chứa các style dành riêng cho từng thành phần giao diện người dùng độc lập, có thể tái sử dụng.
            *   `_account.css`: Style cho các thành phần UI liên quan đến tài khoản người dùng.
            *   `_breadcrumb.css`: Style cho thanh điều hướng (breadcrumb).
            *   `_buttons.css`: Style cho tất cả các loại nút trong ứng dụng.
            *   `_cards.css`: Style cho các thành phần hiển thị dạng card (ví dụ: card sản phẩm, card tin tức).
            *   `_chatbot.css`: Style cho giao diện của chatbot.
            *   `_contact-page.css`: Style cụ thể cho các yếu tố trên trang liên hệ.
            *   `_forms.css`: Style tổng quát cho các biểu mẫu (input, textarea, select, label).
            *   `_my-orders.css`: Style cho các thành phần trên trang "đơn hàng của tôi".
            *   `_otp-modal.css`: Style cho hộp thoại modal xác minh OTP.
            *   `_policy-tabs.css`: Style cho các tab được sử dụng trên trang chính sách.
            *   `_product-grid.css`: Style cho bố cục lưới hiển thị danh sách sản phẩm.
            *   `_product-review.css`: Style cho các thành phần liên quan đến việc viết và hiển thị đánh giá sản phẩm.
            *   `_quiz-modal.css`: Style cho hộp thoại modal của bài trắc nghiệm.
            *   `_quiz-popup.css`: Style cho cửa sổ popup của bài trắc nghiệm.
            *   `_quiz.css`: Style chung cho các yếu tố của bài trắc nghiệm.
            *   `_review.css`: Style cho các thành phần đánh giá (ví dụ: xếp hạng sao, nội dung đánh giá).
            *   `_search-overlay.css`: Style cho lớp phủ tìm kiếm.
            *   `_steps.css`: Style cho các thành phần hiển thị tiến trình theo từng bước (ví dụ: trong quá trình thanh toán).
            *   `_summary.css`: Style cho các phần tóm tắt (ví dụ: tóm tắt đơn hàng, tóm tắt giỏ hàng).
        *   `layouts/`: Chứa các style định nghĩa cấu trúc và bố cục tổng thể của các khu vực chính trên trang.
            *   `_footer.css`: Style cho chân trang (footer).
            *   `_header.css`: Style cho đầu trang (header) và thanh điều hướng.
            *   `_page-shell.css`: Style cho bố cục vỏ trang (page shell) tổng quát, định nghĩa cách các khu vực chính của trang được sắp xếp.
        *   `overrides/`: Chứa các style được sử dụng để ghi đè (override) hoặc điều chỉnh các style hiện có từ các thành phần khác hoặc thư viện bên ngoài. Thường được sử dụng để giải quyết các vấn đề cụ thể hoặc điều chỉnh nhỏ.
            *   `_responsive-sync.css`: Các quy tắc CSS để đảm bảo đồng bộ hóa hoặc điều chỉnh các style responsive khi có xung đột.
        *   `pages/`: Chứa các style dành riêng cho từng trang cụ thể, áp dụng cho các yếu tố chỉ xuất hiện trên trang đó.
            *   `_about.css`: Style đặc biệt cho trang giới thiệu.
            *   `_ai-suggestions.css`: Style cho trang hiển thị gợi ý AI.
            *   `_blog.css`: Style cho trang blog.
            *   `_cart.css`: Style cho trang giỏ hàng.
            *   `_chatbot-page.css`: Style cho trang chatbot riêng.
            *   `_checkout.css`: Style cho các trang trong quy trình thanh toán.
            *   `_collections.css`: Style cho trang bộ sưu tập sản phẩm.
            *   `_home.css`: Style đặc biệt cho trang chủ.
            *   `_order-detail.css`: Style cho trang chi tiết đơn hàng.
            *   `_payment-failed.css`: Style cho trang thông báo thanh toán thất bại.

### Thư mục `tests/`

Thư mục này được dành riêng để chứa tất cả các tệp kiểm thử của dự án, đảm bảo chất lượng và tính ổn định của mã nguồn. Việc phân chia thành `e2e` và `unit` phản ánh các cấp độ kiểm thử khác nhau.

*   `e2e/`
    *   **Mô tả:** Chứa các bài kiểm thử đầu cuối (End-to-End tests). Các bài kiểm thử này mô phỏng hành vi của người dùng thực, kiểm tra toàn bộ luồng ứng dụng từ đầu đến cuối (ví dụ: đăng nhập, thêm sản phẩm vào giỏ hàng, thanh toán). Chúng thường sử dụng các công cụ như Cypress, Playwright, hoặc Selenium.
    *   **Mục đích:** Đảm bảo toàn bộ hệ thống hoạt động chính xác như mong đợi từ góc độ người dùng, phát hiện các lỗi tích hợp giữa các thành phần.

*   `unit/`
    *   **Mô tả:** Chứa các bài kiểm thử đơn vị (Unit tests). Các bài kiểm thử này tập trung vào việc kiểm tra các đơn vị mã nhỏ nhất (ví dụ: một hàm, một thành phần nhỏ) một cách cô lập. Chúng giúp xác minh rằng mỗi phần của mã hoạt động đúng đắn theo yêu cầu cụ thể.
    *   **Mục đích:** Xác minh tính đúng đắn của từng đơn vị mã, giúp phát hiện lỗi sớm và dễ dàng sửa chữa.

---

Cấu trúc này cho thấy một sự chú trọng lớn vào việc tổ chức mã nguồn, khả năng mở rộng và dễ bảo trì. Việc phân chia rõ ràng các tệp theo chức năng và loại giúp các nhà phát triển dễ dàng tìm kiếm, hiểu và làm việc với codebase, đồng thời tạo điều kiện thuận lợi cho việc phát triển các tính năng mới và sửa lỗi.