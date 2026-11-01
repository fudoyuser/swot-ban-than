// ============================================================
//  CHỈNH SỬA NỘI DUNG SWOT CỦA BẠN Ở FILE NÀY
//  (không cần đụng tới index.html / style.css / script.js)
// ============================================================

const PROFILE = {
  name: "Nguyễn Văn A", // ← đổi thành tên của bạn
  role: "Chủ nhiệm CLB · Ứng viên chương trình Management Trainee",
  intro:
    "Bản phân tích SWOT trung thực về chính mình: mình mạnh ở đâu, yếu ở đâu, " +
    "đang có gì trong tay và cần vượt qua điều gì để chuẩn bị cho mùa tuyển Management Trainee.",
  goal: "Vượt qua vòng tuyển chọn của ít nhất một chương trình Management Trainee trong mùa tuyển sắp tới.",
  avatar: "", // để trống sẽ hiện chữ cái đầu; hoặc điền đường dẫn ảnh, vd: "avatar.jpg"
  links: [
    { label: "Email", url: "mailto:email@example.com" },
    { label: "LinkedIn", url: "https://www.linkedin.com/" },
    { label: "GitHub", url: "https://github.com/" },
  ],
};

const SWOT = {
  strengths: [
    { title: "Chịu được sự cô đơn", detail: "Có thể làm việc và tự xoay xở một mình mà không bị ảnh hưởng tinh thần, không phụ thuộc vào người khác." },
    { title: "Chịu được áp lực lớn", detail: "Giữ được bình tĩnh và vẫn hoạt động được khi khối lượng công việc dồn dập hoặc tình huống căng thẳng." },
    { title: "Tính quyết đoán cao", detail: "Dám đưa ra quyết định nhanh và chịu trách nhiệm, không chần chừ khi cần chốt phương án." },
  ],
  weaknesses: [
    { title: "Phát âm chưa rõ ràng", detail: "Người nghe đôi khi khó nắm bắt khi mình nói, ảnh hưởng đến thuyết trình và phỏng vấn." },
    { title: "Hay để nước đến chân mới nhảy", detail: "Khó kiên trì với công việc có thời hạn dài, thường sát deadline mới bắt tay vào làm." },
    { title: "Khó tập trung vào việc dài hơi", detail: "Dễ mất tập trung khi một công việc kéo dài nhiều ngày hoặc nhiều tuần." },
    { title: "Quyết định liều lĩnh, thiếu kiểm tra", detail: "Mặt trái của sự quyết đoán: đôi khi quyết vội, không rà soát kỹ nên dễ sai sót." },
    { title: "Không duy trì được các mối quan hệ", detail: "Có cơ hội tiếp cận nhiều người nhưng chưa giữ liên lạc và vun đắp lâu dài." },
    { title: "Né tránh việc khó, cần bị ép", detail: "Ít chủ động xử lý vấn đề hóc búa cần suy nghĩ nhiều; chỉ có động lực thay đổi khi bị ép." },
    { title: "Đuối sức ở giai đoạn quan trọng", detail: "Hay bị hụt năng lượng đúng lúc công việc cần dồn sức nhất." },
    { title: "Lúng túng khi duy trì câu chuyện", detail: "Khó giữ cho cuộc trò chuyện tiếp diễn tự nhiên với mọi người." },
    { title: "Khó bắt chuyện với người lạ", detail: "Ngại mở lời trong môi trường mới hoặc khi gặp người chưa quen." },
    { title: "Kém nhận biết điểm yếu của người khác", detail: "Chưa giỏi quan sát để hiểu và tận dụng điểm yếu của đối phương trong đàm phán, cạnh tranh." },
    { title: "Dễ buồn ngủ, khó dậy sớm ở nhà", detail: "Nằm trên giường là dễ ngủ, buổi sáng ở nhà gần như không dậy nổi, nên mất nhiều thời gian hiệu quả." },
  ],
  opportunities: [
    { title: "Mạng lưới từ vai trò chủ nhiệm CLB", detail: "Vị trí chủ nhiệm CLB và các hoạt động khác mở ra nhiều mối quan hệ có thể phát triển: thành viên, cựu thành viên, đối tác, nhà tài trợ, giảng viên." },
  ],
  threats: [
    { title: "Mùa thi Management Trainee đã cận kề", detail: "Các kỳ tuyển MT sắp diễn ra nhưng mình chưa ôn luyện gì cho các vòng test, case và phỏng vấn." },
    { title: "Học toán kém", detail: "Các vòng test năng lực của MT thường có toán và tư duy số liệu (numerical reasoning), và đây đang là rào cản lớn." },
  ],
};

// Chiến lược kết hợp (Ma trận TOWS)
const STRATEGIES = {
  SO: "Dùng sự quyết đoán và khả năng chịu áp lực để chủ động dẫn dắt các hoạt động lớn của CLB, qua đó tạo câu chuyện lãnh đạo thật cho hồ sơ MT và kết nối với đối tác, nhà tài trợ.",
  WO: "Tận dụng vai trò chủ nhiệm CLB làm “sân tập” giao tiếp: mỗi tuần chủ động nhắn hỏi thăm 2–3 người trong mạng lưới, luyện bắt chuyện, nói rõ ràng hơn khi điều phối họp.",
  ST: "Biến khả năng chịu áp lực thành lợi thế: tự đặt deadline giả sớm hơn lịch thi MT và ôn trong các khung giờ dồn nén ngắn để vẫn kịp chuẩn bị dù thời gian gấp.",
  WT: "Chia việc ôn toán/test MT thành các phiên ngắn 25–45 phút, học ở thư viện hoặc quán thay vì ở nhà để tránh buồn ngủ, rủ một bạn cùng ôn để có người “ép” giữ nhịp.",
};

// Kế hoạch hành động (status: "done" | "doing" | "todo")
const PLAN = [
  { time: "Ngay tuần này", task: "Lập danh sách các chương trình MT mục tiêu, ghi rõ deadline nộp hồ sơ & ngày thi", status: "todo" },
  { time: "Mỗi ngày", task: "Luyện 30 phút toán tư duy / numerical reasoning (ra khỏi phòng ngủ để học)", status: "todo" },
  { time: "Mỗi ngày", task: "Đặt báo thức để xa giường, dậy cố định một giờ kể cả khi ở nhà", status: "todo" },
  { time: "Mỗi tuần", task: "Luyện phát âm: đọc to và ghi âm 10 phút, nghe lại để sửa", status: "todo" },
  { time: "Mỗi tuần", task: "Chủ động liên lạc lại 2–3 người trong mạng lưới CLB", status: "todo" },
  { time: "Trước mỗi quyết định lớn", task: "Dùng checklist 3 câu hỏi: rủi ro gì? đã kiểm tra chưa? ai cần hỏi ý kiến?", status: "todo" },
  { time: "2 tuần trước thi", task: "Thi thử test MT có bấm giờ và luyện phỏng vấn với bạn bè", status: "todo" },
];
