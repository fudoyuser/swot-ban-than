# SWOT Bản Thân

Website tĩnh giới thiệu phân tích SWOT cá nhân. Chạy được ngay trên **GitHub Pages**.

## Chỉnh nội dung
Chỉ cần sửa file `data.js`: 4 ô SWOT (`SWOT`),
chiến lược TOWS (`STRATEGIES`) và kế hoạch hành động (`PLAN`, trạng thái `done` / `doing` / `todo`).

## Đăng lên GitHub Pages
1. Tạo repo mới trên GitHub (vd: `swot-ban-than`), để Public.
2. Đẩy code lên:
   ```bash
   git init && git add . && git commit -m "SWOT website"
   git branch -M main
   git remote add origin https://github.com/<ten-ban>/swot-ban-than.git
   git push -u origin main
   ```
3. Vào **Settings → Pages**, chọn *Deploy from a branch*, nhánh `main`, thư mục `/ (root)` → Save.
4. Sau 1–2 phút, web có tại `https://<ten-ban>.github.io/swot-ban-than/`.
