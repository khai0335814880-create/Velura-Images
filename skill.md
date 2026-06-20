# Velura — AI Agent & Developer Skill Manifest

> File này là **nguồn sự thật bắt buộc** cho mọi AI coding agent và thành viên khi làm việc trong repo Velura. Trước khi sinh code, sửa code, refactor, tạo file mới hoặc review pull request, AI agent và coder phải đọc file này cùng với `README.md`, `docs/coding-standards.md`, `docs/git-workflow.md`.

---

## 1. Mục tiêu của file này

File `skill.md` giúp AI agent và coder hiểu:

- Cấu trúc dự án Velura.
- File nào được sửa cho từng loại task.
- Quy tắc HTML/CSS/JavaScript production.
- Quy tắc không phá layout responsive hiện tại.
- Quy tắc tự audit trước khi commit hoặc mở PR.
- Quy tắc làm việc giữa AI agent và coder để tránh sửa lan, tránh conflict, tránh tạo code lệch chuẩn.

> Nếu yêu cầu của người dùng mơ hồ, AI agent phải hỏi lại hoặc nêu giả định trước khi sửa. Không tự ý refactor toàn dự án.

---

## 2. Ngữ cảnh dự án

Velura là website bán hàng frontend dùng:

- HTML5 semantic.
- CSS3 chia module theo layer.
- Vanilla JavaScript.
- Vite multi-page build.
- GitHub private repo cho team collaboration.

Dự án hiện tại có các trang chính:

```text
src/pages/auth/signin.html
src/pages/checkout/payment-guest.html
src/pages/checkout/payment-user.html
src/pages/checkout/shipping-payment.html
src/pages/checkout/order-confirm.html
src/pages/checkout/otp-verify.html
src/pages/checkout/payment-confirm.html
src/pages/checkout/payment-failed.html
```

Các trang checkout phải đồng bộ:

- Header.
- Footer.
- Background cream.
- Icon yêu thích, giỏ hàng, tài khoản.
- Checkout steps.
- Responsive desktop/tablet/mobile.

---

## 3. Nguyên tắc làm việc bắt buộc

### 3.1. Think Before Coding

Trước khi sửa code, AI agent phải:

1. Xác định mục tiêu task.
2. Xác định file cần sửa.
3. Xác định file không được sửa.
4. Nêu rủi ro nếu có.
5. Đề xuất cách verify.

Không bắt đầu bằng code khi chưa hiểu phạm vi.

### 3.2. Simplicity First

Ưu tiên giải pháp đơn giản:

- Không thêm framework mới.
- Không thêm dependency nếu không cần.
- Không tạo abstraction phức tạp.
- Không đổi kiến trúc khi chỉ cần sửa CSS/HTML nhỏ.

### 3.3. Surgical Changes

Chỉ sửa đúng chỗ cần sửa:

- Task sửa header → chỉ sửa `_header.css` hoặc header block nếu cần.
- Task sửa footer → chỉ sửa `_footer.css` hoặc footer block nếu cần.
- Task sửa responsive chung → ưu tiên `src/styles/overrides/_responsive-sync.css`.
- Task sửa riêng một page → sửa file page + CSS page module tương ứng.

Không format lại toàn bộ file nếu không được yêu cầu.

### 3.4. Goal-Driven Execution

Mỗi task phải có tiêu chí hoàn thành:

- Build pass.
- Không lỗi console nghiêm trọng.
- Không 404 CSS/JS/image.
- Responsive pass ở desktop, 1024px, 768px, 375px.
- Git diff chỉ nằm trong phạm vi task.

---

## 4. Cấu trúc dự án AI agent phải hiểu

```text
Velura-Images/
├── README.md
├── skill.md
├── docs/
│   ├── coding-standards.md
│   ├── git-workflow.md
│   ├── architecture.md
│   └── deployment.md
├── src/
│   ├── assets/
│   │   ├── images/
│   │   ├── icons/
│   │   └── fonts/
│   ├── pages/
│   │   ├── auth/
│   │   └── checkout/
│   ├── scripts/
│   │   └── main.js
│   └── styles/
│       ├── base/
│       ├── layouts/
│       ├── components/
│       ├── pages/
│       ├── overrides/
│       ├── responsive.css
│       └── main.css
├── public/
├── categories/
├── infra/
├── tests/
├── package.json
└── vite.config.js
```

---

## 5. Quy tắc chọn file cần sửa

### 5.1. Khi sửa HTML page

Sửa trong:

```text
src/pages/auth/
src/pages/checkout/
```

Quy tắc:

- Không nhúng CSS dài trong HTML.
- Không nhúng JS inline.
- Không phá wrapper `.page-shell` ở các trang có header/footer.
- Không đổi đường dẫn CSS/JS chuẩn.

Đường dẫn chuẩn:

```html
<link rel="stylesheet" href="../../styles/main.css" />
<script type="module" src="../../scripts/main.js"></script>
```

Ảnh chuẩn:

```html
<img src="../../assets/images/logo.png" alt="Velura" />
```

### 5.2. Khi sửa CSS toàn cục

Không viết trực tiếp vào `src/styles/main.css`.

`main.css` chỉ dùng để import:

```css
@import "./base/_variables.css";
@import "./base/_reset.css";
@import "./base/_typography.css";
@import "./base/_utilities.css";
@import "./layouts/_page-shell.css";
@import "./layouts/_header.css";
@import "./layouts/_footer.css";
@import "./components/_buttons.css";
@import "./components/_forms.css";
@import "./components/_cards.css";
@import "./components/_breadcrumb.css";
@import "./components/_steps.css";
@import "./components/_summary.css";
@import "./components/_review.css";
@import "./components/_otp-modal.css";
@import "./pages/_signin.css";
@import "./pages/_checkout.css";
@import "./pages/_success.css";
@import "./pages/_payment-failed.css";
@import "./responsive.css";
@import "./overrides/_responsive-sync.css";
```

### 5.3. Khi sửa header

Sửa:

```text
src/styles/layouts/_header.css
```

Nếu cần đồng bộ HTML header giữa các checkout pages, dùng `order-confirm.html` làm canonical source, nhưng phải báo rõ trong plan.

### 5.4. Khi sửa footer

Sửa:

```text
src/styles/layouts/_footer.css
```

Nếu cần đồng bộ footer HTML, phải sync toàn bộ checkout pages để tránh lệch UI.

### 5.5. Khi sửa responsive chung

Sửa:

```text
src/styles/overrides/_responsive-sync.css
```

File này import cuối cùng, dùng để xử lý conflict responsive toàn dự án. Chỉ thêm rule vào đây khi rule cần áp dụng toàn bộ page hoặc cần override rule cũ.

### 5.6. Khi sửa JavaScript

Hiện tại sửa:

```text
src/scripts/main.js
```

Không viết `onclick` trong HTML. Không dùng jQuery. Không hardcode API key.

---

## 6. Quy tắc HTML bắt buộc

### 6.1. Page skeleton

```html
<!DOCTYPE html>
<html lang="vi">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Velura — Tên trang</title>
  <link rel="stylesheet" href="../../styles/main.css" />
</head>
<body>
  <div class="page-shell">
    <header class="site-header">...</header>
    <main class="checkout-page">...</main>
    <footer class="site-footer">...</footer>
  </div>
  <script type="module" src="../../scripts/main.js"></script>
</body>
</html>
```

### 6.2. Header checkout chuẩn

Checkout pages phải có:

- Logo.
- Search box.
- Hamburger menu.
- Icon yêu thích.
- Icon giỏ hàng có badge.
- Icon tài khoản.
- Nav chính.

Nếu một checkout page thiếu một trong các thành phần này, AI agent phải báo lỗi và đề xuất sync header.

### 6.3. Không phá các class quan trọng

Không xóa hoặc đổi tên nếu không sửa CSS/JS tương ứng:

```text
.page-shell
.site-header
.site-header__top
.site-header__search
.site-header__actions
.menu-toggle
.icon-btn
.cart-badge
.site-header__nav
.checkout-page
.checkout-steps
.checkout-step
.checkout-step__line
.checkout-grid
.checkout-main
.order-summary
.site-footer
```

---

## 7. Quy tắc CSS bắt buộc

### 7.1. BEM naming

Dùng:

```text
block
block__element
block--modifier
block__element--modifier
```

Ví dụ đúng:

```css
.checkout-step {}
.checkout-step__num {}
.checkout-step__num--active {}
```

Ví dụ không nên:

```css
.red-box {}
.content1 {}
.new-style-final {}
```

### 7.2. CSS variables

Màu, radius, max width nằm trong:

```text
src/styles/base/_variables.css
```

Không hardcode màu nhiều nơi nếu màu đã có token.

### 7.3. Responsive chuẩn

Phải test tối thiểu:

```text
Desktop full width
1024px
768px
375px
```

Các rule responsive cuối nằm trong:

```text
src/styles/overrides/_responsive-sync.css
```

### 7.4. Không dùng `!important` bừa bãi

Chỉ dùng `!important` khi:

- Fix conflict responsive cuối.
- Rule nằm trong `_responsive-sync.css`.
- Có lý do rõ ràng trong comment hoặc PR.

---

## 8. Quy tắc JavaScript bắt buộc

### 8.1. Hiện trạng

`src/scripts/main.js` đang xử lý:

- Mobile menu.
- Sign-in tabs.
- Password toggle.
- Address card selection.
- Option card selection.
- OTP input auto focus.
- OTP timer.
- Prevent submit demo form.

### 8.2. Không được

- Không dùng jQuery.
- Không thêm framework mới.
- Không gọi API có secret từ client.
- Không hardcode token.
- Không viết inline event handler trong HTML.

### 8.3. Định hướng module sau này

Khi refactor, chia thành:

```text
src/scripts/modules/nav.js
src/scripts/modules/tabs.js
src/scripts/modules/password-toggle.js
src/scripts/modules/address-card.js
src/scripts/modules/option-card.js
src/scripts/modules/otp.js
src/scripts/modules/forms.js
```

`src/scripts/main.js` chỉ import và init.

---

## 9. Quy trình tự audit của AI agent trước khi trả code

AI agent phải tự kiểm tra:

### 9.1. Kiểm tra phạm vi file

Trả lời câu hỏi:

- Đã sửa file nào?
- Vì sao cần sửa file đó?
- Có sửa file ngoài phạm vi không?

### 9.2. Kiểm tra đường dẫn

HTML phải dùng:

```html
<link rel="stylesheet" href="../../styles/main.css" />
<script type="module" src="../../scripts/main.js"></script>
```

Ảnh phải dùng:

```html
../../assets/images/...
```

### 9.3. Kiểm tra build

Luôn đề xuất chạy:

```bash
npm run build
```

### 9.4. Kiểm tra responsive

Nếu sửa UI, phải test:

- Desktop.
- 1024px.
- 768px.
- 375px.

### 9.5. Kiểm tra Git diff

Trước commit:

```bash
git diff
```

Không để diff chứa thay đổi lạ.

---

## 10. Quy tắc cộng tác giữa AI agent và coder

### 10.1. AI agent phải làm

- Đọc `README.md`, `skill.md`, `docs/coding-standards.md`.
- Nêu plan ngắn trước khi sửa.
- Sửa ít nhất có thể.
- Giải thích cách verify.
- Không tự push code.
- Không tự tạo file mới nếu chưa cần.

### 10.2. Coder phải làm

- Review diff do AI tạo.
- Chạy `npm run build`.
- Test UI bằng browser.
- Commit theo convention.
- Mở PR nếu không phải DevOps đang khởi tạo base.

### 10.3. Khi AI không chắc

AI phải hỏi lại hoặc nêu giả định. Không đoán bừa.

---

## 11. Prompt mẫu cho AI agent

```text
Bạn đang làm trong repo Velura.
Đọc README.md, skill.md, docs/coding-standards.md trước.
Nhiệm vụ: [mô tả task].
Chỉ được sửa các file sau: [danh sách file].
Không được sửa file ngoài phạm vi.
Trước khi code, hãy nêu plan 3-5 bước.
Sau khi sửa, hãy liệt kê file đã sửa và cách verify bằng npm run build + responsive test.
```

---

## 12. Definition of Done

Một task chỉ được coi là xong khi:

- Code đúng phạm vi.
- Không phá cấu trúc dự án.
- Không phá header/footer chung.
- Không phá responsive.
- `npm run build` pass.
- Không có asset path sai.
- Git diff sạch, dễ review.
- Có commit message đúng chuẩn.

---

## 13. Cấm tuyệt đối

- Commit `node_modules/`.
- Commit `dist/` nếu không có yêu cầu deploy static trực tiếp.
- Commit `.env`, token, API key.
- Dùng `git push --force origin main`.
- Xóa code người khác khi resolve conflict mà không hiểu.
- Sửa toàn bộ file chỉ để format.
- Thêm framework mới khi chưa được lead duyệt.
