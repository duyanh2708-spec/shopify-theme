# COBER Shopify theme

Bản mã nguồn đồng bộ từ theme đang chạy trên **cober.vn** ngày **10/10/2026**
(Asia/Saigon), lấy trực tiếp qua Shopify Admin API.

- Store: `drsjr5-ps.myshopify.com`
- Theme: `COBER — Tối ưu tốc độ điện thoại`
- Theme ID: `159885557831`
- Nền tảng theme: Horizon 4.1.5
- Bản Git trước khi đồng bộ: `68142ce`

## Phạm vi đồng bộ

Toàn bộ 622 tài nguyên của theme được tải về, gồm mã Liquid, JavaScript, CSS,
ảnh, font, bản dịch, template và cấu hình giao diện đã lưu. Nội dung từng file
được giữ nguyên từ Shopify. Các file trước đây nằm ở thư mục gốc được chuyển
về đúng `assets/` và `snippets/` theo đường dẫn trên Shopify.

Chỉ mục tài nguyên trước và sau khi tải giống nhau. Mã băm SHA-256 của cả
622 file trong Git đã được đối chiếu với bản tải. Xem
[manifest](docs/shopify-snapshot-2026-10-10.json).

Sản phẩm, đơn hàng, nội dung trang, menu quản trị và file trong thư viện nội dung
Shopify là dữ liệu riêng của cửa hàng, không nằm trong bản sao theme này.

## Kiểm tra

- Shopify CLI 4.9.3 Theme Check: không có lỗi, 7 cảnh báo có sẵn trong bản Shopify
  (số lượng setting của header, tham số tài liệu không dùng, độ phức tạp drawer).
- 77 file JSON đọc được sau khi bỏ phần chú thích đầu file do Shopify tạo.
- `git diff --cached --check`: không phát hiện lỗi khoảng trắng.
- Chưa kiểm tra tương tác trong trình duyệt; lượt này chỉ đồng bộ nguyên trạng.

Chạy lại kiểm tra bằng:

```sh
npx --yes @shopify/cli@4.9.3 theme check --path .
```

## Tiếp tục chỉnh sửa

Lấy nhánh đồng bộ này làm cơ sở cho công việc tiếp theo. Trước mỗi lần sửa,
kiểm tra xem Shopify có chỉnh sửa mới hơn hay không và đối chiếu các file liên quan.
Chỉ đẩy mã lên Shopify sau khi chủ cửa hàng đồng ý. Lượt đồng bộ này không
ghi hoặc phát hành thay đổi nào lên Shopify.
