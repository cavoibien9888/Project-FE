const route = [
    {
        id: 1,
        name: 'Thời sự',
        link: "/thoi-su",
        rssLink: "https://baotintuc.vn/thoi-su.rss",
        dropdown: [
            {
                id: 1,
                name: 'Chính trị',
                link: "/chinh-tri",
                rssLink: "https://baotintuc.vn/chinh-tri.rss",
            },
            {
                id: 2,
                name: 'Chính sách và cuộc sống',
                link: "/chinh-sach-va-cuoc-song",
                rssLink: "https://baotintuc.vn/chinh-sach-va-cuoc-song.rss",
            },
            {
                id: 3,
                name: 'Chính phủ với người dân',
                link: "/chinh-phu-voi-nguoi-dan",
                rssLink: "https://baotintuc.vn/chinh-phu-voi-nguoi-dan.rss",
            },
            {
                id: 4,
                name: 'Phản hồi - Phản biện',
                link: "/phan-hoi-phan-bien",
                rssLink: "https://baotintuc.vn/phan-hoi-phan-bien.rss",


            },

        ]
    },
    {
        id: 2,
        name: 'Thế giới',
        link: "/the-gioi",
        rssLink: "https://baotintuc.vn/the-gioi.rss",
        dropdown: [
            {
                id: 1,
                name: 'Phân tích-Nhận định',
                link: "https://baotintuc.vn/phan-tich-nhan-dinh.rss",
            },
            {
                id: 2,
                name: 'Chuyện lạ thế giới',
                link: "https://baotintuc.vn/chuyen-la-the-gioi.rss",
            },
            {
                id: 3,
                name: 'Người Việt 4 phương',
                link: "https://baotintuc.vn/nguoi-viet-4-phuong.rss",
            }
        ]
    },
    {
        id: 3,
        name: 'Kinh tế',
        link: "/kinh-te",
        rssLink: "https://baotintuc.vn/kinh-te.rss",
        dropdown: [
            {
                id: 1,
                name: 'Thị trường - Tiền tệ',
                link: 'https://baotintuc.vn/thi-truong-tien-te.rss',
            },
            {
                id: 2,
                name: 'Doanh nghiệp - Doanh nhân',
                link: 'https://baotintuc.vn/doanh-nghiep-doanh-nhan.rss',
            },
            {
                id: 3,
                name: 'Bất động sản',
                link: 'https://baotintuc.vn/bat-dong-san.rss',
            },
            {
                id: 4,
                name: 'Tài chính – Ngân hàng',
                link: 'https://baotintuc.vn/tai-chinh-ngan-hang.rss',
            },
            {
                id: 5,
                name: 'Người tiêu dùng',
                link: 'https://baotintuc.vn/nguoi-tieu-dung.rss',
            },
        ]
    },
    {
        id: 4,
        name: 'Xã hội',
        link: "/xa-hoi",
        rssLink: "https://baotintuc.vn/xa-hoi.rss",
        dropdown: [
            {
                id: 1,
                name: 'Vấn đề quan tâm',
                link: 'https://baotintuc.vn/van-de-quan-tam.rss',
            },
            {
                id: 2,
                name: 'Phóng sự - Điều tra',
                link: 'https://baotintuc.vn/phong-su-dieu-tra.rss',
            },
            {
                id: 3,
                name: 'Người tốt - Việc tốt',
                link: 'https://baotintuc.vn/nguoi-tot-viec-tot.rss',
            },
            {
                id: 4,
                name: 'Mạng xã hội',
                link: 'https://baotintuc.vn/mang-xa-hoi.rss',
            },
            {
                id: 5,
                name: 'Chính sách BHXH - BHYT',
                link: 'https://baotintuc.vn/chinh-sach-bhxh-bhyt.rss',
            }
        ]
    },
    {
        id: 5,
        name: 'Pháp luật',
        link: '/phap-luat',
        rssLink: "https://baotintuc.vn/phap-luat.rss",
        dropdown: [
            {
                id: 1,
                name: 'Phân tích -  Bình luận',
                link: "phan-tich-biinh-luan",
            },
            {
                id: 2,
                name: 'Chuyện lạ',
                link: "chuyen-la",
            },
        ]
    },
    {
        id: 6,
        name: 'Văn hóa',
        link: "/van-hoa",
        rssLink: "https://baotintuc.vn/van-hoa.rss",

        dropdown: [
            {
                id: 1,
                name: 'Nhịp sống',
                link: "nhip-song",
            },
            {
                id: 2,
                name: 'Cộng đồng mạng',
                link: "cong-dong-mang",
            },
            {
                id: 3,
                name: 'Tài năng trẻ',
                link: "tai-nang-tre",
            },
        ]
    },
    {
        id: 7,
        name: 'Giáo dục',
        link: "/giao-duc",
        rssLink: "https://baotintuc.vn/giao-duc.rss",

        dropdown: [
            {
                id: 1,
                name: "Bản tin 113",
                link: "/ban-tin-113",
            },
            {
                id: 2,
                name: 'Pháp đình',
                link: "/phap-dinh",
            },
        ]
    },
    {
        id: 8,
        name: 'Thể thao',
        link: "/the-thao",
        rssLink: "https://baotintuc.vn/the-thao.rss",
        dropdown: [
            {
                id: 1,
                name: 'Bóng đá',
                link: "/bong-da",
            },
            {
                id: 1,
                name: 'Hậu trường thể thao',
                link: "/hau-truong-the-thao",
            },
            {
                id: 1,
                name: 'Golf',
                link: "/golf",
            },
        ]
    },
    {
        id: 9,
        name: 'Hồ sơ',
        link: "/nho-so",
        rssLink: " https://baotintuc.vn/ho-so.rss",
        dropdown: [

        ]
    },
    {
        id: 10,
        name: 'Quân sự',
        link: "/quan-su",
        rssLink: "https://baotintuc.vn/quan-su.rss",
        dropdown: [
            {
                id: 1,
                name: 'Thị trường xe',
                link: "/th-truong-xe",
            },
            {
                id: 2,
                name: 'Đánh giá xe',
                link: "/danh-gia-xe",
            },
            {
                id: 3,
                name: 'Cộng đồng xe',
                link: "/cong-dong-xe",
            },
            {
                id: 4,
                name: 'Tư vấn',
                link: "/tu-van",
            },
        ]
    },
    {
        id: 11,
        name: 'Khoa học - Công nghệ',
        link: "/khoa-hoc-cong-nghe",
        rssLink: "https://baotintuc.vn/khoa-hoc-cong-nghe.rss",
        dropdown: [
            {
                id: 1,
                name: 'Tin văn hoá',
                link: "/tin-van-hoa",
            },
            {
                id: 2,
                name: 'Câu chuyện văn hoá',
                link: "/cau-chuyen-van-hoa",
            },
            {
                id: 3,
                name: 'Sách',
                link: "/sach",
            },
            {
                id: 4,
                name: 'Sổ bụi',
                link: "/so-bui",
            },
        ]
    },
    {
        id: 12,
        name: 'Biển đảo',
        link: "/bien-dao-viet-nam",
        rssLink: "https://baotintuc.vn/bien-dao-viet-nam.rss",
        dropdown: [
            {
                id: 1,
                name: 'Sao',
                link: "/sao",
            },
            {
                id: 2,
                name: 'Hậu trường sao',
                link: "/hau-truong-sao",
            },
            {
                id: 3,
                name: 'Video',
                link: "/video",
            },
            {
                id: 4,
                name: 'Đẹp',
                link: "/dep",
            },
        ]
    },
    {
        id: 13,
        name: 'Y tế',
        link: "/suc-khoe",
        rssLink: "https://baotintuc.vn/suc-khoe.rss",
        dropdown: [
            {
                id: 1,
                name: 'Cổng trường',
                link: "/cong-truong",
            },
            {
                id: 2,
                name: 'Tuyển sinh',
                link: "/tuyen-sinh",
            },
            {
                id: 3,
                name: 'Du học',
                link: "/du-hoc",
            },
        ]
    },
    {
        id: 14,
        name: 'Địa phương',
        link: "/dia-phuong",
        rssLink: "https://baotintuc.vn/dia-phuong.rss",
        dropdown: [
            {
                id: 1,
                name: 'Công nghệ',
                link: "/cong-nghe",
            },
            {
                id: 2,
                name: 'Vi tính',
                link: "/vi-tinh",
            },
            {
                id: 3,
                name: 'Điện thoại',
                link: "/dien-thoai",
            },
        ]
    },
    {
        id: 15,
        name: 'Hoa hậu',
        link: "/hoa-hau",
        rssLink: "https://tienphong.vn/rss/hoa-hau-253.rss",
        dropdown: [
            {
                id: 1,
                name: 'Tin tức',
                link: "/tin-tuc",
            },
            {
                id: 2,
                name: 'Ảnh',
                link: "/anh",
            },
            {
                id: 3,
                name: 'Video',
                link: "/hoa-hau-video",
            },
            {
                id: 4,
                name: 'Hậu trường hoa hậu',
                link: "/hau-truong-hoa-hau",
            },
        ]
    },
    {
        id: 16,
        name: 'Bạn đọc',
        link: "/ban-doc",
        rssLink: "https://tienphong.vn/rss/ban-doc-15.rss",
        dropdown: [
            {
                id: 1,
                name: 'Điều tra',
                link: "/dieu-tra",
            },
            {
                id: 2,
                name: 'Diễn đàn',
                link: "/dien-dan",
            },
            {
                id: 3,
                name: 'Hồi âm',
                link: "/hoi-am",
            },
            {
                id: 4,
                name: 'Nhân ái',
                link: "/nhan-ai",
            },
        ]
    },
 ]


export default route;