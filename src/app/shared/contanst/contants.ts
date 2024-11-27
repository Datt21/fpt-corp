// import type { IOptions } from 'tsparticles-engine';

export const particlesOptions = {
  background: {
    color: {
      value: '#0d47a1',
    },
  },
  fpsLimit: 120,
  interactivity: {
    events: {
      onClick: {
        enable: true,
        mode: 'push',
      },
      onHover: {
        enable: false,
        mode: 'repulse',
      },
    },
    modes: {
      push: {
        quantity: 4,
      },
      repulse: {
        distance: 200,
        duration: 0.4,
      },
    },
  },
  particles: {
    color: {
      value: '#ffffff',
    },
    links: {
      color: '#ffffff',
      distance: 150,
      enable: true,
      opacity: 0.5,
      width: 1,
    },
    move: {
      direction: 'none',
      enable: true,
      outModes: {
        default: 'bounce',
      },
      random: false,
      speed: 0.5,
      straight: false,
    },
    number: {
      density: {
        enable: true,
        area: 200,
      },
      value: 400,
    },
    opacity: {
      value: 0.5,
    },
    shape: {
      type: 'circle',
    },
    size: {
      value: { min: 1, max: 3 },
    },
  },
  fullScreen: false,
  style: {
    width: '100%',
    height: '600px',
  },
};

export const PRODUCTS = [
  {
    imageUrl: '../../../../assets/images/product1.jpg',
    title: 'Internet FTTH',
    description: 'Short description for the first card',
    buttonText: 'Tìm hiểu thêm',
    colorText: 'white',
  },
  {
    imageUrl: '../../../../assets/images/product2.jpg',
    title: 'Giải Pháp Giám Sát An Ninh',
    description: 'Short description for the second card',
    buttonText: 'Tìm hiểu thêm',
    colorText: 'gray-900',
  },
  {
    imageUrl: '../../../../assets/images/product5.jpg',
    title: 'Tổng Đài Số',
    description: 'Short description for the third card',
    buttonText: 'Tìm hiểu thêm',
    colorText: 'gray-900',
  },
  {
    imageUrl: '../../../../assets/images/product4.jpg',
    title: 'IT Services',
    description: 'Short description for the fourth card',
    buttonText: 'Tìm hiểu thêm',
    colorText: 'white',
  },
];

export const REASONS = [
  {
    icon: '../../../../assets/images/icons8-earth-care.png',
    title: 'Chăm sóc khách hàng chuẩn mực và chuyên biệt',
    description:
      'Intuitive interface that helps you find what you need quickly and effortlessly.',
  },
  {
    icon: '../../../../assets/images/icons8-standard.png',
    title: 'Các sản phẩm và dịch vụ tuân theo và đạt chuẩn quốc tế',
    description:
      'SFC is a defining feature of Vue and is the recommended way to author Vue components if your use case warrants a build setup',
  },
  {
    icon: '../../../../assets/images/icons8-server.png',
    title: 'Tích hợp các gói dịch vụ chi phí hợp lí',
    description:
      'You can learn more about the how and why of SFC in its dedicated section - but for now, just know that Vue will handle all the build tools setup for you.',
  },
];

export const NEWS = [
  {
    img: '../../../../assets/images/news-1.jpg',
    type: 'Tin tức',
    title: 'Easy Navigation',
    description:
      'Intuitive interface that helps you find what you need quickly and effortlessly.',
  },
  {
    img: '../../../../assets/images/news-2.jpg',
    type: 'Dịch vụ',
    title: 'Precise Targeting',
    description:
      'Advanced algorithms to pinpoint exactly what matters most to you.',
  },
  {
    img: '../../../../assets/images/news-3.jpg',
    type: 'Báo cáo',
    title: 'Fast Performance',
    description:
      'Lightning-quick responses and smooth user experience across all devices.Despite the flexibility, the core knowledge about how Vue works is shared across all these use cases. ',
  },
  {
    img: '../../../../assets/images/news-1.jpg',
    type: 'Tin tức',
    title: 'Easy Navigation',
    description:
      'Intuitive interface that helps you find what you need quickly and effortlessly.',
  },
  {
    img: '../../../../assets/images/news-2.jpg',
    type: 'Dịch vụ',
    title: 'Precise Targeting',
    description:
      'Advanced algorithms to pinpoint exactly what matters most to you.',
  },
];

export const SLIDES = [
  {
    id: 1,
    image: '../../../../assets/images/slide-1.jpg',
  },
  {
    id: 2,
    image: '../../../../assets/images/slide-2.jpg',
  },
  {
    id: 3,
    image: '../../../../assets/images/slide-3.jpg',
  },
  {
    id: 1,
    image: '../../../../assets/images/slide-1.jpg',
  },
  {
    id: 2,
    image: '../../../../assets/images/slide-2.jpg',
  },
  {
    id: 3,
    image: '../../../../assets/images/slide-3.jpg',
  },
];

export const SLICK_OPTIONS = {
  // Cấu hình hiển thị
  slidesToShow: 1, // Số lượng slide hiển thị cùng lúc
  slidesToScroll: 1, // Số lượng slide cuộn mỗi lần
  dots: true, // Hiển thị chấm điều hướng
  infinite: true, // Cuộn vô hạn
  autoplay: true, // Tự động chuyển slide
  autoplaySpeed: 3000, // Tốc độ tự động chuyển (mili giây)
  arrows: false, // Hiển thị mũi tên điều hướng
  centerPadding: '20%',
  // Responsive
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        centerPadding: '20%',
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],

  // Các tùy chọn khác
  speed: 500, // Tốc độ chuyển slide (mili giây)
  pauseOnHover: true, // Dừng tự động chuyển khi di chuột
  centerMode: true, // Chế độ căn giữa
  variableWidth: false, // Chiều rộng slide thay đổi
  adaptiveHeight: false, // Điều chỉnh chiều cao tự động
};

export const PARTNERS = [
  {
    icon: 'fa-brands fa-microsoft',
    name: 'Microsoft',
  },
  {
    icon: 'fa-brands fa-aws',
    name: '',
  },
  {
    icon: 'fa-brands fa-google',
    name: 'Google',
  },
  {
    icon: 'fa-brands fa-meta',
    name: 'Meta',
  },
  {
    icon: 'fa-brands fa-figma',
    name: 'Figma',
  },
  {
    icon: 'fa-brands fa-apple-pay',
    name: '',
  },
  {
    icon: 'fa-brands fa-youtube',
    name: 'Youtube',
  },
  {
    icon: 'fa-brands fa-linkedin',
    name: 'Linkedin',
  },
  {
    icon: 'fa-brands fa-twitter',
    name: '',
  },
  {
    icon: 'fa-brands fa-spotify',
    name: 'Spotify',
  },
];
