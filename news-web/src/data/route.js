const route = [
    {
        id: 1,
        name: 'Thời sự',
        link: "/thoi-su",
        rssLink: "https://baotintuc.vn/thoi-su.rss",
    },
    {
        id: 2,
        name: 'Thế giới',
        link: "/the-gioi",
        rssLink: "https://baotintuc.vn/the-gioi.rss",
    },
    {
        id: 3,
        name: 'Kinh tế',
        link: "/kinh-te",
        rssLink: "https://baotintuc.vn/kinh-te.rss",
        // dropdown: [
        //     {
        //         id: 1,
        //         name: 'Đô thị',
        //         link: "do-thi",
        //     },
        //     {
        //         id: 2,
        //         name: 'Thị trường',
        //         link: "thi-truong",
        //     },
        //     {
        //         id: 3,
        //         name: 'Nhà đẹp',
        //         link: "nha-dep",
        //     },
        //     {
        //         id: 4,
        //         name: 'Tư vấn',
        //         link: "tu-van",
        //     },
        //     {
        //         id: 5,
        //         name: 'Dự án',
        //         link: "du-an",
        //     },
        // ]
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
                link: "/van-de-quan-tam",
            },
            {
                id: 2,
                name: 'Phóng sự- điều tra',
                link: "/phong-su-dieu-tra",
            },
            {
                id: 3,
                name: 'người tốt việc tốt',
                link: "/nguoi-tot-viec-tot",
            },
            {
                id: 4,
                name: 'Mạng xã hội',
                link: "/mang-xa-hoi",
            },
            {
                id:5,
                name:'Chính sách BHXH-BHYT',
                link:'/chinh-sach-BHXH-BHYT',
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

const danhmuc = [
    {
        id: 1,
        name: 'Xã hội',
        link: "/xa-hoi",
        rssLink: "https://tienphong.vn/rss/xa-hoi-2.rss",
        dropdown: [
            {
                id: 1,
                name: 'Chính trị',
                link: "chinh-tri",
                rssLink: "https://tienphong.vn/rss/chinh-tri-308.rss",
            },
            {
                id: 2,
                name: 'Tin tức',
                link: "tin-tuc",
                rssLink: "https://tienphong.vn/rss/xa-hoi-tin-tuc-104.rss",
            },
            {
                id: 3,
                name: 'Chuyện hôm nay',
                link: "chuyen-hom-nay",
                rssLink: "https://tienphong.vn/rss/xa-hoi-2.rss",
            },
            {
                id: 4,
                name: 'Phóng sự',
                link: "phong-su",
            },

        ]
    },
    {
        id: 2,
        name: 'Kinh tế',
        link: "/kinh-te",
        rssLink: "https://tienphong.vn/rss/kinh-te-3.rss",
        dropdown: [
            {
                id: 1,
                name: 'Doanh ngiệp',
                link: "doanh-ngiep",
            },
            {
                id: 2,
                name: 'Doanh nhân',
                link: "doanh-nhan",
            },
            {
                id: 3,
                name: 'Chứng khoán',
                link: "chung-khoan",
            }
            ,
            {
                id: 4,
                name: 'Du lịch',
                link: "du-lich",
            }
            ,
            {
                id: 5,
                name: 'Giảm nghèo bền vững',
                link: "giam-ngheo-ben-vung",
            }
        ]
    },
    {
        id: 3,
        name: 'Địa ốc',
        link: "/dia-oc",
        rssLink: "https://tienphong.vn/rss/dia-oc-166.rss",
        dropdown: [
            {
                id: 1,
                name: 'Đô thị',
                link: "do-thi",
            },
            {
                id: 2,
                name: 'Thị trường',
                link: "thi-truong",
            },
            {
                id: 3,
                name: 'Nhà đẹp',
                link: "nha-dep",
            },
            {
                id: 4,
                name: 'Tư vấn',
                link: "tu-van",
            },
            {
                id: 5,
                name: 'Dự án',
                link: "du-an",
            },
        ]
    },
    {
        id: 4,
        name: 'Sức khoẻ',
        link: "/suc-khoe",
        rssLink: "https://tienphong.vn/rss/suc-khoe-210.rss",
        dropdown: [
            {
                id: 1,
                name: 'Bác sĩ online',
                link: "bac-si-online",
            },
            {
                id: 2,
                name: 'Thuốc dùng  - Thuốc tốt',
                link: "thuoc-dung-thuoc-tot",
            },
            {
                id: 3,
                name: 'Làm đẹp mỗi ngày',
                link: "lam-dep-moi-ngay",
            },
            {
                id: 4,
                name: 'Thì thầm bên gối',
                link: "thi-tham-ben-goi",
            },
        ]
    },
    {
        id: 5,
        name: 'Thế giới',
        link: "/the-gioi",
        rssLink: "https://tienphong.vn/rss/the-gioi-5.rss",
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
        name: 'Giới trẻ',
        link: "/gioi-tre",
        rssLink: "https://tienphong.vn/rss/gioi-tre-4.rss",

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
        name: 'Pháp luật',
        link: "/phap-luat",
        rssLink: "https://tienphong.vn/rss/phap-luat-12.rss",

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
        rssLink: "https://tienphong.vn/rss/the-thao-11.rss",
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
        name: 'Người lính',
        link: "/nguoi-linh",
        rssLink: "https://tienphong.vn/rss/hanh-trang-nguoi-linh-182.rss",
        dropdown: [

        ]
    },
    {
        id: 10,
        name: 'Xe',
        link: "/xe",
        rssLink: "https://tienphong.vn/rss/xe-113.rss",
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
        name: 'Văn hoá',
        link: "/van-hoa",
        rssLink: "https://tienphong.vn/rss/van-hoa-7.rss",
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
        name: 'Giải trí',
        link: "/giai-tri",
        rssLink: "https://tienphong.vn/rss/giai-tri-36.rss",
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
        name: 'Giáo dục',
        link: "/giao-duc",
        rssLink: "https://tienphong.vn/rss/giao-duc-71.rss",
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
        name: 'Khoa học',
        link: "/khoa-hoc",
        rssLink: "https://tienphong.vn/rss/cong-nghe-45.rss",
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
    {
        id: 17,
        name: 'Video',
        link: "/video-clip",
        rssLink: "https://tienphong.vn/rss/giai-tri-video-153.rss",
        dropdown: [
            {
                id: 1,
                name: 'Thời sự',
                link: "/thoi-su",
            },
            {
                id: 2,
                name: 'Showbiz TV',
                link: "/showbiz-tv",
            },
            {
                id: 3,
                name: 'Thời tiết',
                link: "/thoi-tiet",
            },
            {
                id: 4,
                name: 'Thị trường',
                link: "/video-thi-truong",
            },
            {
                id: 5,
                name: 'Thể thao',
                link: "/video-the-thao",
            },
            {
                id: 6,
                name: 'Quân sự',
                link: "/quan-su",
            },
            {
                id: 7,
                name: 'Mutex',
                link: "/mutex",
            },
        ]
    },
    {
        id: 18,
        name: 'Tôi nghĩ',
        link: "toi-nghi",
        rssLink: "https://tienphong.vn/rss/toi-nghi-273.rss",

        dropdown: [
        ]
    },
    {
        id: 19,
        name: 'Chính trị',
        link: "chinh-tri",
        rssLink: "https://tienphong.vn/rss/chinh-tri-308.rss",
    },
    {
        id: 20,
        name: 'Tin tức',
        link: "tin-tuc",
        rssLink: "https://tienphong.vn/rss/xa-hoi-tin-tuc-104.rss",
    },
    {
        id: 21,
        name: 'Chuyện hôm nay',
        link: "chuyen-hom-nay",
        rssLink: "https://tienphong.vn/rss/xa-hoi-2.rss",
    },
    {
        id: 22,
        name: 'Phóng sự',
        link: "phong-su",
        rssLink: "https://tienphong.vn/rss/xa-hoi-phong-su-13.rss",
    },
    {
        id: 23,
        name: 'Doanh ngiệp',
        link: "doanh-ngiep",
        rssLink: "https://tienphong.vn/rss/kinh-te-doanh-nghiep-22.rss",
    },
    {
        id: 24,
        name: 'Doanh nhân',
        link: "doanh-nhan",
        rssLink: "https://tienphong.vn/rss/kinh-te-doanh-nhan-165.rss",
    },
    {
        id: 25,
        name: 'Chứng khoán',
        link: "chung-khoan",
        rssLink: "https://tienphong.vn/rss/kinh-te-chung-khoan-105.rss",
    }
    ,
    {
        id: 26,
        name: 'Du lịch',
        link: "du-lich",
        rssLink: "https://tienphong.vn/rss/du-lich-220.rss",
    }
    ,
    {
        id: 27,
        name: 'Giảm nghèo bền vững',
        link: "giam-ngheo-ben-vung",
        rssLink: "https://tienphong.vn/rss/giam-ngheo-ben-vung-413.rss",
    },
    {
        id: 28,
        name: 'Đô thị',
        link: "do-thi",
        rssLink: "https://tienphong.vn/rss/do-thi-269.rss",
    },
    {
        id: 29,
        name: 'Thị trường',
        link: "thi-truong",
        rssLink: "https://tienphong.vn/rss/thi-truong-270.rss",
    },
    {
        id: 30,
        name: 'Nhà đẹp',
        link: "nha-dep",
        rssLink: "https://tienphong.vn/rss/nha-dep-271.rss",
    },
    {
        id: 31,
        name: 'Tư vấn',
        link: "tu-van",
        rssLink: "https://tienphong.vn/rss/tu-van-dia-oc-272.rss",
    },
    {
        id: 32,
        name: 'Dự án',
        link: "du-an",
        rssLink: "https://tienphong.vn/rss/du-an-169.rss",
    },
    {
        id: 33,
        name: 'Bác sĩ online',
        link: "bac-si-online",
        rssLink: "https://tienphong.vn/rss/bac-si-online-304.rss",
    },
    {
        id: 34,
        name: 'Thuốc dùng  - Thuốc tốt',
        link: "thuoc-dung-thuoc-tot",
        rssLink: "https://tienphong.vn/rss/thuoc-dung-thuoc-tot-305.rss",
    },
    {
        id: 35,
        name: 'Làm đẹp mỗi ngày',
        link: "lam-dep-moi-ngay",
        rssLink: "https://tienphong.vn/rss/lam-dep-moi-ngay-306.rss",
    },
    {
        id: 36,
        name: 'Thì thầm bên gối',
        link: "thi-tham-ben-goi",
        rssLink: "https://tienphong.vn/rss/suc-khoe-thi-tham-ben-goi-144.rss",
    },
]
export default route;