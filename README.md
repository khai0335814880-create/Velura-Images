# Velura — E-commerce Website Frontend

> **Velura** là dự án website bán hàng frontend dùng **HTML5 + CSS3 + Vanilla JavaScript + Vite**. Repository này là **base production-ready** để cả team cùng phát triển giao diện, checkout flow, AI chatbot và chuẩn bị triển khai CI/CD.

---

## 1. Quy tắc bắt buộc trước khi code

Tất cả thành viên và AI coding agent phải đọc theo thứ tự:

1. `README.md` — hiểu cấu trúc dự án, cách chạy, cách cộng tác.
2. `skill.md` — quy tắc làm việc cho AI agent và dev.
3. `docs/coding-standards.md` — chuẩn HTML/CSS/JavaScript.
4. `docs/git-workflow.md` — chuẩn Git, branch, commit, pull request.

> Không sửa code khi chưa biết file cần sửa thuộc module nào. Không sửa lan sang file khác nếu không cần thiết.

---

## 2. Tech stack

- **HTML5 semantic**: chia trang rõ ràng, có accessibility cơ bản.
- **CSS3**: BEM naming, CSS variables, responsive layout, chia module theo layer.
- **Vanilla JavaScript**: không jQuery, không framework nặng.
- **Vite**: dev server và production build.
- **GitHub private repo**: làm việc theo branch, pull request, review.
- **Deployment định hướng**: Docker + Nginx + Cloudflare Tunnel; về sau kết nối AWS/Azure cho dữ liệu lớn, ảnh sản phẩm, chatbot API.

---

## 3. Quick start cho thành viên mới

### 3.1. Clone dự án

```bash
git clone https://github.com/khai0335814880-create/Velura-Images.git
cd Velura-Images
```

### 3.2. Cài dependencies

Yêu cầu:

- Node.js >= 20
- npm >= 10
- Git

```bash
npm install
```

### 3.3. Chạy local dev

```bash
npm run dev
```

Mở các trang qua Vite, **không mở trực tiếp file bằng File Explorer**:

```text
http://localhost:5173/pages/auth/signin.html
http://localhost:5173/pages/checkout/payment-guest.html
http://localhost:5173/pages/checkout/payment-user.html
http://localhost:5173/pages/checkout/shipping-payment.html
http://localhost:5173/pages/checkout/order-confirm.html
http://localhost:5173/pages/checkout/otp-verify.html
http://localhost:5173/pages/checkout/payment-confirm.html
http://localhost:5173/pages/checkout/payment-failed.html
```

### 3.4. Build production

```bash
npm run build
```

Build output nằm trong:

```text
dist/
```

---

## 4. Cây thư mục dự án

```text
Velura-Images/
├── .github/
│   ├── workflows/
│   ├── ISSUE_TEMPLATE/
│   ├── CODEOWNERS
│   └── PULL_REQUEST_TEMPLATE.md
├── categories/
├── docs/
│   ├── architecture.md
│   ├── coding-standards.md
│   ├── deployment.md
│   └── git-workflow.md
├── infra/
│   ├── cloudflare/
│   ├── docker/
│   └── nginx/
├── public/
├── scripts/
├── src/
│   ├── assets/
│   │   ├── fonts/
│   │   ├── icons/
│   │   └── images/
│   ├── pages/
│   │   ├── auth/
│   │   └── checkout/
│   ├── scripts/
│   │   └── main.js
│   └── styles/
│       ├── base/
│       ├── components/
│       ├── layouts/
│       ├── overrides/
│       ├── pages/
│       ├── main.css
│       └── responsive.css
├── tests/
│   ├── e2e/
│   └── unit/
├── .editorconfig
├── .gitattributes
├── .gitignore
├── .nvmrc
├── .prettierrc.json
├── package.json
├── README.md
├── skill.md
└── vite.config.js
```

---

## 5. Giải thích từng folder và quy định bỏ gì vào đâu

### 5.1. `.github/`

Chứa cấu hình làm việc trên GitHub.

- `.github/workflows/`: CI/CD GitHub Actions.
- `.github/ISSUE_TEMPLATE/`: template báo lỗi, yêu cầu tính năng.
- `.github/PULL_REQUEST_TEMPLATE.md`: checklist khi mở pull request.
- `.github/CODEOWNERS`: ai chịu trách nhiệm review khu vực code.

Không bỏ source code frontend vào `.github/`.

---

### 5.2. `categories/`

Chứa ảnh sản phẩm gốc theo nhóm danh mục.

Ví dụ:

```text
categories/
├── ao/
├── ao-khoac/
├── dam-vay/
├── giay-dep/
├── phu-kien/
├── quan/
└── set-do/
```

Quy định:

- Dùng cho asset sản phẩm gốc hoặc ảnh phân loại sản phẩm.
- Tên file viết thường, không dấu, dùng dấu gạch ngang.
- Không lưu file thiết kế `.psd`, `.fig`, `.ai` trong repo nếu quá nặng.
- Ảnh dùng trực tiếp trong frontend nên copy sang `src/assets/images/` nếu cần build cùng Vite.

---

### 5.3. `docs/`

Chứa tài liệu kỹ thuật.

- `architecture.md`: mô tả kiến trúc frontend, data flow, định hướng backend/cloud.
- `coding-standards.md`: chuẩn HTML/CSS/JS.
- `git-workflow.md`: chuẩn branch, commit, PR, review.
- `deployment.md`: hướng dẫn build, Docker, Nginx, Cloudflare.

Mỗi khi thay đổi kiến trúc, quy trình hoặc quy ước code, phải cập nhật `docs/`.

---

### 5.4. `infra/`

Chứa cấu hình hạ tầng.

- `infra/docker/`: Dockerfile, docker-compose nếu có.
- `infra/nginx/`: cấu hình Nginx production.
- `infra/cloudflare/`: Cloudflare Tunnel config mẫu.

Không bỏ secret, token, API key vào folder này.

---

### 5.5. `public/`

Chứa file public được copy nguyên trạng khi build.

Nên để:

- `favicon.ico` hoặc `favicon.png`
- `robots.txt`
- `sitemap.xml`

Không bỏ file source cần import bằng CSS/JS ở đây nếu file đó thuộc UI chính. UI asset nên đặt trong `src/assets/`.

---

### 5.6. `src/assets/`

Chứa tài nguyên giao diện.

```text
src/assets/
├── fonts/
├── icons/
└── images/
```

Quy định:

- `images/`: ảnh dùng trực tiếp trong HTML/CSS.
- `icons/`: SVG icon tách riêng nếu không inline trong HTML.
- `fonts/`: font local nếu không dùng Google Fonts.
- Không lưu ảnh raw quá nặng.
- Tên file không dấu, viết thường, dùng `-`.

Ví dụ đúng:

```text
product-silk-blazer.png
bg-texture.png
logo.png
```

Ví dụ không nên:

```text
Ảnh Sản Phẩm 1 FINAL!!.png
```

---

### 5.7. `src/pages/`

Chứa các file HTML entry page.

```text
src/pages/
├── auth/
│   └── signin.html
└── checkout/
    ├── order-confirm.html
    ├── otp-verify.html
    ├── payment-confirm.html
    ├── payment-failed.html
    ├── payment-guest.html
    ├── payment-user.html
    └── shipping-payment.html
```

Quy định:

- Mỗi file HTML là một page độc lập.
- Luôn link CSS như sau:

```html
<link rel="stylesheet" href="../../styles/main.css" />
```

- Luôn link JS như sau:

```html
<script src="../../scripts/main.js"></script>
```

- Ảnh trong HTML dùng path:

```html
<img src="../../assets/images/logo.png" alt="Velura" />
```

- Trang có header/footer phải dùng wrapper:

```html
<body>
  <div class="page-shell">
    <header class="site-header">...</header>
    <main class="checkout-page">...</main>
    <footer class="site-footer">...</footer>
  </div>
</body>
```

- Không viết CSS inline nếu không bắt buộc. Nếu còn inline style, nên chuyển dần về CSS module phù hợp.

---

### 5.8. `src/styles/`

CSS chia theo layer để tránh conflict.

```text
src/styles/
├── base/
├── components/
├── layouts/
├── overrides/
├── pages/
├── main.css
└── responsive.css
```

#### `src/styles/main.css`

File entry duy nhất để HTML import.

Quy định:

- Chỉ chứa `@import`.
- Không viết style trực tiếp trong `main.css`.
- Import theo thứ tự:

```css
/* Base */
@import "./base/_variables.css";
@import "./base/_reset.css";
@import "./base/_typography.css";
@import "./base/_utilities.css";

/* Layouts */
@import "./layouts/_page-shell.css";
@import "./layouts/_header.css";
@import "./layouts/_footer.css";

/* Components */
@import "./components/_buttons.css";
@import "./components/_forms.css";
@import "./components/_cards.css";
@import "./components/_breadcrumb.css";
@import "./components/_steps.css";
@import "./components/_summary.css";
@import "./components/_review.css";
@import "./components/_otp-modal.css";

/* Pages */
@import "./pages/_signin.css";
@import "./pages/_checkout.css";
@import "./pages/_success.css";
@import "./pages/_payment-failed.css";

/* Responsive */
@import "./responsive.css";

/* Final overrides */
@import "./overrides/_responsive-sync.css";
```

#### `src/styles/base/`

Chứa nền tảng toàn dự án.

- `_variables.css`: token màu, spacing, max-width, radius, shadow.
- `_reset.css`: reset browser default.
- `_typography.css`: font, title, text utility.
- `_utilities.css`: `.container`, `.hidden`, `.tab-panel`, helper class.

Chỉ sửa `_variables.css` khi muốn đổi màu/spacing toàn hệ thống.

#### `src/styles/layouts/`

Chứa layout lớn.

- `_page-shell.css`: wrapper chung, background, main flex.
- `_header.css`: logo, search, icon heart/cart/user, hamburger, nav.
- `_footer.css`: footer grid, social, contact, copyright.

Khi sửa header/footer dùng chung, chỉ sửa tại đây.

#### `src/styles/components/`

Chứa component tái sử dụng.

- `_buttons.css`: `.btn`, `.btn--primary`, `.btn--accent`, `.btn--brown`.
- `_forms.css`: input, textarea, form-row, login fields, tabs.
- `_cards.css`: `.card`, `.address-card`, `.option-card`.
- `_breadcrumb.css`: breadcrumb.
- `_steps.css`: checkout steps.
- `_summary.css`: order summary, coupon, total.
- `_review.css`: review-section, product item.
- `_otp-modal.css`: OTP overlay/modal/input.

Nếu component dùng ở nhiều trang, đặt trong `components/`, không đặt trong `pages/`.

#### `src/styles/pages/`

Chứa style riêng từng page.

- `_signin.css`: trang đăng nhập.
- `_checkout.css`: layout chung checkout.
- `_success.css`: trang đặt hàng thành công.
- `_payment-failed.css`: trang thanh toán thất bại.

Nếu style chỉ phục vụ một page, đặt tại đây.

#### `src/styles/overrides/`

Chứa override cuối cùng để đồng bộ UI toàn dự án.

- `_responsive-sync.css`: fix responsive cuối, container width, checkout-grid, mobile hamburger, mobile checkout step line.

Quy định:

- Không lạm dụng override.
- Chỉ dùng khi cần ép chuẩn toàn dự án hoặc fix conflict giữa nhiều module.
- File override phải được import cuối cùng trong `main.css`.

---

### 5.9. `src/scripts/`

Hiện tại có:

```text
src/scripts/main.js
```

`main.js` xử lý:

- mobile navigation menu
- sign-in tabs
- password visibility toggle
- address card selection
- shipping/payment option card selection
- OTP input auto focus
- OTP countdown timer
- prevent default demo forms

Quy định hiện tại:

- Không dùng jQuery.
- Không thêm code inline trong HTML.
- JS phải query bằng class có sẵn.
- Không hardcode API key.
- Không `console.log` debug khi commit.

Định hướng refactor sau:

```text
src/scripts/
├── main.js
└── modules/
    ├── nav.js
    ├── tabs.js
    ├── password-toggle.js
    ├── address-card.js
    ├── option-card.js
    ├── otp.js
    └── forms.js
```

---

### 5.10. `tests/`

Chứa test sau này.

- `tests/unit/`: unit test JavaScript.
- `tests/e2e/`: end-to-end test bằng Playwright hoặc công cụ tương tự.

Hiện tại có thể để `.gitkeep`, chưa bắt buộc viết test.

---

## 6. Danh sách page hiện có

| Page | File | Mục đích |
|---|---|---|
| Đăng nhập | `src/pages/auth/signin.html` | Login bằng số điện thoại/email |
| Thanh toán khách | `src/pages/checkout/payment-guest.html` | Khách chưa đăng nhập nhập thông tin giao hàng |
| Thanh toán user | `src/pages/checkout/payment-user.html` | User đã đăng nhập chọn địa chỉ |
| Vận chuyển & thanh toán | `src/pages/checkout/shipping-payment.html` | Chọn shipping, COD/VNPay/MoMo |
| Xác nhận đơn | `src/pages/checkout/order-confirm.html` | Review đơn hàng trước khi đặt |
| OTP | `src/pages/checkout/otp-verify.html` | Xác thực OTP |
| Thành công | `src/pages/checkout/payment-confirm.html` | Đặt hàng thành công |
| Thất bại | `src/pages/checkout/payment-failed.html` | Thanh toán thất bại |

---

## 7. Chuẩn HTML

### 7.1. Bắt buộc

Mỗi page phải có:

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
  ...
  <script src="../../scripts/main.js"></script>
</body>
</html>
```

### 7.2. Naming class

Dùng BEM:

```text
block
block__element
block--modifier
block__element--modifier
```

Ví dụ:

```html
<div class="checkout-step">
  <span class="checkout-step__num checkout-step__num--active">1</span>
</div>
```

### 7.3. Không nên

Không viết class kiểu:

```text
box1
abc123
redText
style-new-final
```

Không viết nhiều inline style. Nếu bắt buộc dùng tạm, phải refactor về CSS module trước khi merge production.

---

## 8. Chuẩn CSS

### 8.1. Nguyên tắc

- Không viết CSS mới vào `main.css`.
- Không sửa override nếu có thể sửa đúng module.
- Không dùng `!important` trừ responsive conflict hoặc utility đặc biệt.
- Dùng CSS variables trong `_variables.css`.
- Mobile responsive phải test tại `375px`, `768px`, `1024px`, desktop full width.

### 8.2. Khi cần sửa style

- Sửa header → `src/styles/layouts/_header.css`
- Sửa footer → `src/styles/layouts/_footer.css`
- Sửa checkout steps → `src/styles/components/_steps.css`
- Sửa form/input → `src/styles/components/_forms.css`
- Sửa button → `src/styles/components/_buttons.css`
- Sửa trang checkout chung → `src/styles/pages/_checkout.css`
- Sửa riêng payment failed → `src/styles/pages/_payment-failed.css`
- Sửa responsive cuối → `src/styles/overrides/_responsive-sync.css`

---

## 9. Chuẩn JavaScript

### 9.1. Nguyên tắc

- Vanilla JS.
- Không jQuery.
- Không React/Vue trong base này.
- Không gọi API thật trực tiếp từ frontend nếu có secret.
- Không hardcode token/API key.

### 9.2. Khi thêm tính năng

Nếu thêm tương tác mới:

1. Kiểm tra `src/scripts/main.js` có logic tương tự chưa.
2. Tạo class HTML rõ nghĩa.
3. Gắn event listener trong JS.
4. Không viết `onclick="..."` trong HTML.

Ví dụ không nên:

```html
<button onclick="doSomething()">Click</button>
```

Ví dụ nên:

```html
<button class="js-open-chatbot" type="button">Chatbot</button>
```

---

## 10. Quy trình Git/GitHub chuẩn team

### 10.1. Branch chính

- `main`: production-ready, chỉ merge code đã review.
- `develop`: staging/integration nếu team cần tách môi trường.
- `legacy/raw-export`: backup source gốc, không sửa, không merge.

### 10.2. Branch làm việc

Tạo branch từ `main` hoặc `develop` tùy quy định của lead:

```bash
git checkout main
git pull origin main
git checkout -b feature/checkout-vnpay-flow
```

Tên branch:

```text
feature/<scope>-<short-name>
fix/<scope>-<short-name>
refactor/<scope>-<short-name>
docs/<short-name>
chore/<short-name>
```

Ví dụ:

```text
feature/chatbot-widget
fix/payment-guest-responsive
refactor/css-modules
chore/setup-ci
```

---

## 11. Commit convention

Dùng Conventional Commits:

```text
<type>(<scope>): <message>
```

Type:

```text
feat      thêm tính năng
fix       sửa lỗi
refactor  refactor không đổi behavior
docs      tài liệu
style     format/style không đổi logic
chore     config/tooling
ci        CI/CD
test      test
```

Ví dụ:

```bash
git commit -m "feat(checkout): add VNPay option card"
git commit -m "fix(ui): sync checkout responsive layout"
git commit -m "docs(readme): add team collaboration guide"
git commit -m "chore(vite): configure multi-page build"
```

---

## 12. Pull Request workflow

### 12.1. Trước khi mở PR

Luôn chạy:

```bash
npm install
npm run build
```

Nếu có dev server:

```bash
npm run dev
```

Test các viewport:

- Desktop full width
- 1024px
- 768px
- 375px mobile

### 12.2. PR phải có

- Mục tiêu thay đổi.
- File đã sửa.
- Screenshot trước/sau nếu sửa UI.
- Cách test.
- Ghi chú rủi ro nếu có.

### 12.3. Không merge khi

- Build fail.
- Có conflict chưa resolve.
- Header/footer bị lệch giữa các page.
- Responsive mobile bị vỡ.
- Có secret hoặc token trong code.
- PR sửa quá nhiều phạm vi không liên quan.

---

## 13. Tránh conflict khi làm việc nhóm

### 13.1. Phân chia file theo người

Khuyến nghị chia task theo vùng:

- Dev A: `src/pages/auth/`, `src/styles/pages/_signin.css`
- Dev B: `src/pages/checkout/payment-*.html`
- Dev C: `src/styles/components/`
- Dev D: `src/scripts/main.js` hoặc module JS
- DevOps: `.github/`, `infra/`, `vite.config.js`, `package.json`

Không để nhiều người cùng sửa một file lớn nếu không cần.

### 13.2. Trước khi code

```bash
git checkout main
git pull origin main
git checkout -b feature/my-task
```

### 13.3. Trước khi push

```bash
git status
npm run build
git add .
git commit -m "feat(scope): message"
git push -u origin feature/my-task
```

### 13.4. Khi bị conflict

Không tự xóa code người khác nếu chưa hiểu.

Quy trình:

```bash
git checkout feature/my-task
git fetch origin
git merge origin/main
```

Nếu conflict:

1. Mở file conflict.
2. Giữ phần đúng theo task.
3. Không xóa block không liên quan.
4. Chạy build lại.
5. Commit resolve conflict.

---

## 14. Quy tắc cho AI coding agent

Khi dùng Copilot, Cursor, Claude Code, Gemini hoặc AI agent khác:

1. Bắt AI đọc `README.md` và `skill.md` trước.
2. Chỉ giao task rõ phạm vi.
3. Yêu cầu AI không sửa file ngoài phạm vi.
4. Yêu cầu AI nêu plan trước khi sửa.
5. Sau khi AI sửa, dev phải tự review diff.

Prompt mẫu:

```text
Bạn đang làm trong repo Velura. Đọc README.md và skill.md trước.
Nhiệm vụ: sửa responsive cho payment-guest.html.
Chỉ được sửa:
- src/pages/checkout/payment-guest.html
- src/styles/pages/_checkout.css
- src/styles/overrides/_responsive-sync.css nếu thật sự cần
Không sửa header/footer nếu không cần.
Sau khi sửa, liệt kê file đã sửa và cách test.
```

---

## 15. Các lệnh kiểm tra nhanh

### 15.1. Kiểm tra build

```bash
npm run build
```

### 15.2. Kiểm tra file bị thay đổi

```bash
git status
```

### 15.3. Xem diff trước khi commit

```bash
git diff
```

### 15.4. Kiểm tra các file HTML có dùng CSS đúng không

PowerShell:

```powershell
Get-ChildItem src\pages -Recurse -Filter *.html | ForEach-Object {
  $c = Get-Content $_.FullName -Raw -Encoding UTF8
  "$($_.Name) css=$($c -match 'href="../../styles/main.css"') js=$($c -match 'src="../../scripts/main.js"')"
}
```

### 15.5. Xóa cache Vite khi giao diện không cập nhật

```powershell
Remove-Item -Recurse -Force node_modules\.vite -ErrorAction SilentlyContinue
Remove-Item -Recurse -Force dist -ErrorAction SilentlyContinue
npm run build
npm run dev
```

---

## 16. Checklist trước khi merge lên `main`

- [ ] `npm run build` thành công.
- [ ] Không có lỗi console nghiêm trọng.
- [ ] Không có 404 cho CSS/JS/images.
- [ ] Header đồng bộ giữa các checkout pages.
- [ ] Footer đồng bộ giữa các checkout pages.
- [ ] Responsive ổn ở 375px, 768px, 1024px, desktop full width.
- [ ] Không commit `node_modules/`, `dist/`, `.env`.
- [ ] Không hardcode API key/token.
- [ ] Commit message đúng convention.
- [ ] PR có screenshot nếu sửa UI.

---

## 17. Định hướng tiếp theo

### Phase tiếp theo gần nhất

- Split `src/scripts/main.js` thành module nhỏ.
- Thêm GitHub Actions CI:
  - install
  - build
  - artifact dist
- Thêm Docker + Nginx production config.
- Thêm Cloudflare Tunnel deployment guide.
- Chuẩn hóa AI chatbot widget.

### Phase cloud sau này

- Ảnh sản phẩm: AWS S3 hoặc Azure Blob Storage.
- Database sản phẩm/đơn hàng: PostgreSQL managed cloud.
- Chatbot API: serverless proxy, không gọi AI key trực tiếp từ client.
- Logging/monitoring: CloudWatch hoặc Azure Monitor.

---

## 18. Liên hệ team

- DevOps / Tech Lead: `@khai0335814880-create`
- Repo: `https://github.com/khai0335814880-create/Velura-Images`

Nếu không chắc nên sửa file nào, hỏi lead trước khi code.
