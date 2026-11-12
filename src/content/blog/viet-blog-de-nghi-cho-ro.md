---
title: 'Viết blog để nghĩ cho rõ: vì sao mình bắt đầu lại từ trang giấy trắng'
description: 'Viết ra buộc mình phải hiểu thật. Bài này kể lại cách mình chọn chủ đề, giữ nhịp viết mỗi tuần và những thứ mình quyết định bỏ đi.'
pubDate: '2026-11-12'
topic: 'Ghi chép'
---

> **Bài mẫu.** Tiêu đề và đoạn mô tả của bài này chỉ để xem bố cục, chưa phải bài thật. Phần bên dưới cho bạn thấy các kiểu chữ sẽ trông ra sao trong một bài dài.

Đoạn chữ này giữ chỗ để bạn xem cỡ chữ, khoảng cách dòng và độ rộng của cột khi đọc. Một dòng dài khoảng 65 ký tự là vừa mắt, đọc lâu không mỏi. Toàn bộ trang dùng một font là Be Vietnam Pro, vẽ riêng cho tiếng Việt nên dấu rõ và không bị chồng.

## Tiêu đề mục trông như thế này

Một bài dài nên chia thành vài mục, mỗi mục một ý. Trong đoạn văn bạn có thể **in đậm** chỗ cần nhấn, *in nghiêng* một thuật ngữ, hoặc gắn [một đường liên kết](/blog/) tới bài khác.

### Tiêu đề nhỏ hơn

Danh sách gạch đầu dòng dùng khi có từ ba ý trở lên:

- Ý thứ nhất, viết ngắn.
- Ý thứ hai, cũng ngắn.
- Ý thứ ba, để người đọc lướt là nắm được.

Danh sách có thứ tự dùng cho các bước làm lần lượt:

1. Mở file của bài trong thư mục `src/content/blog/`.
2. Sửa tiêu đề, mô tả, ngày đăng và chủ đề ở đầu file.
3. Viết nội dung bên dưới rồi triển khai lại trang.

> Đây là một đoạn trích dẫn. Dùng nó cho một câu đáng nhớ hoặc lời của người khác.

## Cách viết một bài mới

Mỗi bài là một file `.md`. Đầu file khai báo như sau:

```md
---
title: 'Tên bài viết'
description: 'Một hai câu tóm tắt, hiện ở trang chủ.'
pubDate: '2026-11-12'
topic: 'Ghi chép'
---
```

Thời gian đọc được tính tự động từ độ dài bài, bạn không cần khai báo. Chủ đề mới sẽ tự xuất hiện ở trang Chủ đề ngay khi có bài đầu tiên dùng nó.
