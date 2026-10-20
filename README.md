# 🌸 Vườn Hoa Chúc Mừng 20/10 - Ngày Phụ Nữ Việt Nam

Website chúc mừng Ngày Phụ Nữ Việt Nam 20/10 với giao diện tinh tế, lãng mạn, nhẹ nhàng, sẵn sàng deploy ngay chỉ trong vài giây.

## ✨ Điểm nổi bật
- **Bầu trời trong xanh & Mây trôi**: Mặt trời ấm áp, mây bồng bềnh cùng đàn bướm dập dờn.
- **Vườn hoa đung đưa theo gió mượt mà**: 7 loài hoa tuyệt đẹp (Hoa Hồng, Tulip, Hướng Dương, Cúc Họa Mi, Hoa Sen, Cẩm Chướng, Cát Tường) với vật lý lắc lư tự nhiên theo làn gió.
- **Tương tác chạm hoa**: Khi nhấp/chạm vào từng đóa hoa, hiệu ứng pháo hoa tia sáng bừng nở và mở ra tấm thiệp lời chúc 20/10 ý nghĩa.
- **Chuyển cảnh mượt mà**: Áp dụng chuẩn modern web `@starting-style` và `transition-behavior: allow-discrete` cho thẻ `<dialog>`, giúp đóng mở êm ái, hỗ trợ nút "Trở lại vườn hoa" hoặc phím `Esc` / click ra ngoài nền.
- **Âm nhạc du dương tích hợp**: Bộ phát giai điệu kalimba/piano êm dịu tạo bằng Web Audio API, không lo lỗi bản quyền hay đường link MP3 bị hỏng.
- **Cánh hoa bay lãng mạn**: Canvas mô phỏng cánh hoa rơi và chuyển động quay nhẹ nhàng theo chiều gió.
- **Cá nhân hóa người nhận**: Nút "Gửi người thương" cho phép điền tên mẹ, người yêu, bạn bè, đồng nghiệp; tự động lưu và gắn vào lời chúc.
- **Sao chép lời chúc 1-chạm**: Kèm thông báo Toast tiện lợi để gửi qua Zalo, Messenger, SMS.
- **Chuẩn Responsive**: Hiển thị hoàn hảo trên điện thoại, máy tính bảng và máy tính để bàn.

---

## 🚀 Hướng dẫn Chạy & Triển khai (Deploy)

### 1. Mở xem trực tiếp trên máy tính
Chỉ cần nhấp đúp trực tiếp vào file `index.html` trong thư mục này trên bất kỳ trình duyệt nào (Chrome, Edge, Safari, Firefox) mà **không cần cài đặt bất kỳ công cụ nào**.

---

### 2. Triển khai miễn phí lên Internet (Dễ nhất)

#### Cách A: Vercel (Khuyên dùng)
1. Cài đặt Vercel CLI (nếu có): `npm i -g vercel` rồi gõ `vercel` trong thư mục này.
2. Hoặc tải thư mục lên GitHub, vào [vercel.com](https://vercel.com) chọn **Add New Project** -> Chọn repo GitHub -> Nhấn **Deploy**. Chỉ mất 10 giây là bạn có đường link web chia sẻ cho mọi người!

#### Cách B: GitHub Pages
1. Tạo một repository mới trên GitHub (ví dụ: `chuc-mung-20-10`).
2. Tải toàn bộ các file trong thư mục này lên nhánh `main`.
3. Vào **Settings** -> **Pages** -> Tại mục **Source**, chọn nhánh `main` và thư mục `/ (root)` -> Bấm **Save**.
4. Đường link trang web sẽ có dạng: `https://<ten-tai-khoan>.github.io/chuc-mung-20-10/`.

#### Cách C: Netlify Drop (Kéo thả không cần tài khoản code)
1. Truy cập [app.netlify.com/drop](https://app.netlify.com/drop).
2. Kéo thả nguyên thư mục này vào khung upload.
3. Nhận ngay đường link web trực tuyến hoàn toàn miễn phí.

---

## 📁 Cấu trúc thư mục
```
├── index.html       # Cấu trúc trang web & semantic tags
├── style.css        # Hiệu ứng vườn hoa đung đưa, bầu trời, chuyển cảnh modal
├── script.js        # Logic tương tác, canvas cánh hoa bay, bộ phát âm nhạc
└── README.md        # Hướng dẫn chi tiết
```
