// ============================================================
//  CHỈNH SỬA NỘI DUNG SWOT CỦA BẠN Ở FILE NÀY
//  (không cần đụng tới index.html / style.css / script.js)
// ============================================================

const PROFILE = {
  name: "Nguyễn Văn A",
  role: "Sinh viên năm 3 · Ngành Quản trị Kinh doanh",
  intro:
    "Đây là bản phân tích SWOT cá nhân giúp mình nhìn rõ năng lực hiện tại, " +
    "những điểm cần cải thiện, cũng như cơ hội và thách thức trên con đường sự nghiệp.",
  goal: "Trở thành Chuyên viên Phân tích Dữ liệu Kinh doanh trong vòng 2 năm tới.",
  avatar: "", // để trống sẽ hiện chữ cái đầu; hoặc điền đường dẫn ảnh, vd: "avatar.jpg"
  links: [
    { label: "Email", url: "mailto:email@example.com" },
    { label: "LinkedIn", url: "https://www.linkedin.com/" },
    { label: "GitHub", url: "https://github.com/" },
  ],
};

const SWOT = {
  strengths: [
    { title: "Tư duy logic & phân tích", detail: "Thích làm việc với số liệu, giải quyết vấn đề theo từng bước rõ ràng." },
    { title: "Tiếng Anh tốt", detail: "IELTS 7.0, đọc hiểu tài liệu chuyên ngành và giao tiếp tự tin." },
    { title: "Tinh thần tự học", detail: "Tự học Excel, SQL và Power BI qua các khóa học online." },
    { title: "Làm việc nhóm", detail: "Từng làm trưởng nhóm trong nhiều dự án môn học và CLB." },
  ],
  weaknesses: [
    { title: "Thiếu kinh nghiệm thực tế", detail: "Chưa có kỳ thực tập chính thức tại doanh nghiệp." },
    { title: "Thuyết trình còn run", detail: "Chưa tự tin khi nói trước đám đông lớn." },
    { title: "Quản lý thời gian", detail: "Đôi khi ôm đồm nhiều việc, dễ trễ deadline." },
    { title: "Kỹ năng lập trình cơ bản", detail: "Python mới ở mức nhập môn." },
  ],
  opportunities: [
    { title: "Nhu cầu nhân lực dữ liệu tăng", detail: "Doanh nghiệp ngày càng cần người hiểu cả kinh doanh lẫn dữ liệu." },
    { title: "Chương trình thực tập", detail: "Trường có nhiều liên kết thực tập với doanh nghiệp lớn." },
    { title: "Khóa học online miễn phí", detail: "Coursera, Google Career Certificates, Kaggle Learn…" },
    { title: "Mạng lưới cựu sinh viên", detail: "Có thể kết nối mentor qua CLB và các sự kiện hướng nghiệp." },
  ],
  threats: [
    { title: "Cạnh tranh cao", detail: "Nhiều ứng viên có nền tảng kỹ thuật mạnh hơn." },
    { title: "AI thay đổi công việc", detail: "Các tác vụ phân tích cơ bản có thể bị tự động hóa." },
    { title: "Yêu cầu kinh nghiệm", detail: "Nhiều vị trí đòi hỏi 1–2 năm kinh nghiệm." },
    { title: "Áp lực tài chính", detail: "Cần cân bằng giữa việc làm thêm và học tập." },
  ],
};

// Chiến lược kết hợp (Ma trận TOWS)
const STRATEGIES = {
  SO: "Dùng tiếng Anh và tư duy phân tích để ứng tuyển các chương trình thực tập Data/BI tại doanh nghiệp đa quốc gia.",
  WO: "Tận dụng khóa học online miễn phí để nâng Python lên mức trung cấp; nhờ mentor cựu sinh viên góp ý CV.",
  ST: "Xây dựng portfolio dự án thực tế (dashboard, phân tích case study) để nổi bật hơn ứng viên khác.",
  WT: "Tham gia CLB tranh biện/thuyết trình và áp dụng phương pháp Pomodoro để giảm rủi ro mất cơ hội vì kỹ năng mềm.",
};

// Kế hoạch hành động
const PLAN = [
  { time: "Tháng 1–3", task: "Hoàn thành chứng chỉ Google Data Analytics", status: "doing" },
  { time: "Tháng 2–4", task: "Làm 3 dự án portfolio trên Kaggle & đăng lên GitHub", status: "todo" },
  { time: "Tháng 4", task: "Tham gia CLB thuyết trình, thuyết trình ít nhất 2 lần", status: "todo" },
  { time: "Tháng 5–8", task: "Ứng tuyển & hoàn thành kỳ thực tập Data/BI", status: "todo" },
  { time: "Hằng tuần", task: "Lập kế hoạch tuần, review mỗi Chủ nhật", status: "done" },
];
