import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const savedLanguage = localStorage.getItem("i18nextLng") || "ur";

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: {
        //Header
        header: {
          home: "Home",
          services: "Services",
          prebooking: "Prebooking Trips",
          tourism: "Tourism Tours",
          news: "News",
          aboutus: "AboutUs",
          contactus: "ContactUs",
          languageSwitch: "عربي",
          editProfile: "Edit Profile", // Added
          myTrips: "My Trips", // Added
          myReservation: "My Reservation", // Added
          myWallet: "My Wallet", // Added
          myRates: "My Rates", // Added
          myPreferences: "My Preferences", // Added
          verification: "Verification", // Added
          notification: "Notification", // Added
          registerAsTraveler: "Register as Traveler", // Added
          logout: "Logout", // Added
        },

        //Home Page
        heroSection: {
          heroTitle:
            "Rehla App is The Best App For Booking Ride And Sharing Trips",
          heroDescription:
            "Rehla is a ride sharing and a ride hailing service that links between passengers and vehicle owners heading to the same destination.",

          AboutReh: "About Rehla",
          Rehla: "Rehla",
          RehlaIntro: "introducing video promotion",
          RehDes:
            "Rehla application .... the pleasure of traveling between cities at the lowest cost and more safety Rehlacar offers a unique travel experience between cities at the lowest cost and the most enjoyable and safe ways. Rehla application licensed by the Public Transport Authority and compatible with all safety and security requirements in Saudi Arabia, and is based on the principle of sharing travel costs between passengers and vehicles owners .",

          startTrip: "Start Your ride Now",
          offerUp: "Offer up to 30% for each ride",

          Signup:"Sign up",
          addingcar:"in Rehla and adding car",
          Trainingvideo:"Training video explaining how to create an account in Rehla, fill in the registration data, and view the login method if you already have an account in Rehla. How to register your car information to be reviewed and registered in Rehla application as a captain, as you can know your balance through the wallet.Watch",

          Create:"Create and ordering a trip",
          explanation:"explanation of how to use Rehla app How to create a ride-sharing trip by the captain and search for them by the passenger, and the possibility of requesting a prior reservation for the ride-sharing trip, How to request a ride-hailing trip inside the city and how to receive the request by Rehla captains.",


          join:"Join tourism experts as a",
          Traveler:"Traveler",
          Rehla: "Rehla",

          firstStep:"First Step",
          secondStep:"Second Step",
          thirdStep:"Third Step",

          first:"Please Click on the Join Now and fill in your data as a tourist traveler",
          second:"Fill out your tourism information form",
          third:"After reviewing our data, you will be able to create tours",

          book:"Book your prebooking",
          trip:"trip now",
          login:"Login with your account for Rehla or create an account for the first time through our website or App",
          goto:"Go to Prebooking Trips",
          select:"Select your destination and departure date and book now and wait for your offer to be accepted by one of our captains",

          Featuredcoures:"Featured coures",
          Charge:"Charge Cards Now",
          price: "Price",
          Chargewallet:"Charge wallet",

          screenShot:"screenshots",

          clentSay:"What clients are saying"


        },
        rehlaServiceSection: {
          rehlaServiceTitle: "Rehla",
          rehlaSer: "Services",
          rehlaServiceDescriptions:
            "Fully layered dolor sit amet, nobis id expedita dolores officiis laboriosam",
          serviceTitle1: "I'm going to",
          serviceDescription1:
            "Passengers order a ride with a local driver to go to another place inside the city Ride-hailing.",
          serviceTitle2: "Prebooking trips",
          serviceDescription2:
            "Passengers can make a prebooking trip order with a local driver to go to any place.",
          serviceTitle3: "Tourism Tours",
          serviceDescription3:
            "Tourism expert creates a tour of the tourist cities and is searched for by regions.",
          serviceTitle4: "Sending Parcels",
          serviceDescription4:
            "Sender offers a parcel to deliver between cities and wait for Rehla captain to accept it.",
        },

        //Pre-BookingTrips page
        preBookingtrips: {
          startPlace: "Start Place",
          arrivalPlace: "Arrival Place",
          startDate: "Start Date",
          startTime: "Start Time",
          paymentType: "Payment Type",
          SelectCarcategory: "Select Car Category",
          coupon: "Coupon",
          preBookingNow: "Prebooking Now",
        },

        //TourismTour Page
        tourismTour: {
          tourismTitle: "Tourism Tours",
          rehlaTourism: "Rehla",
        },

        //AboutUs Page
        AboutUspage: {
          stayTuned: "Stay tuned for new newsThey are coming with offer",
          featureIntegration: "Feature Integration",
          multipleDiscussions: "Multiple Discussions",
          GetStarted: "Get Started",

          OurRehla1: "Our",
          OurRehla2: "Rehla",
          OurRehla3: "Team",

          Gallery: "Gallery",

          SeeAll: "See All",
          Branding: "Branding",
          Designing: "Designing",
          Photography: "Photography",
          Development: "Development",

          availablDevices: "Rehla is available for all devices",
          avaiDes:
            "A Private Limited is the most popular type of partnership Malta. The limited",
          avaiDes1:
            "liabilityis, in fact, the only type of the company allowed by Companies.",
        },

        //ContactUsPage
        contactUspage: {
          nameplaceholder: "Enter Your Name",
          emailplaceholder: "Enter Your Email Address",
          messageplaceholder: "Write Your Message",
          submit: "Send Message",
        },

        //Footer page
        footer: {
          description1: "Rehla is a ride sharing and a ride hailing ",
          description2: "service that links between passengers",
          description3: "and vehicle owners heading to",
          description4: "the same destination",
          sitemap: "Site map",
          usefulLinks: "Useful links",
          contactInfo: "Contact Info",
          address: "455 West Orchard Street Kings Mountain, NC 280867",
          phone: "+088 (246) 642-27-10",
          email: "example@gmail.com",
          home: "Home",
          services: "Services",
          prebooking: "Prebooking Trips",
          tourism: "Tourism Tours",
          news: "News",
          terms: "Terms of Use",
          privacy: "Privacy Policy",
          faq: "Frequently Asked",
          copyright: "Rehla All Rights Reserved.",
        },
      },
    },

    ///////////////urdu translations
    ur: {
      translation: {
        header: {
          home: "بيت",
          services: "خدمات",
          prebooking: "رحلات الحجز المسبق",
          tourism: "جولات سياحية",
          news: "أخبار",
          aboutus: "معلومات عنا",
          contactus: "اتصل بنا",
          languageSwitch: "عربي",
          editProfile: "تحرير الملف الشخصي", // Added
          myTrips: "رحلاتي", // Added
          myReservation: "حجزي", // Added
          myWallet: "محفظتي", // Added
          myRates: "أسعاري", // Added
          myPreferences: "تفضيلاتي", // Added
          verification: "تَحَقّق", // Added
          notification: "إشعار", // Added
          registerAsTraveler: "سجل كمسافر", // Added
          logout: "تسجيل الخروج",
        },
        //home
        heroSection: {
          heroTitle:
            "تطبيق رحلة هو أفضل تطبيق لحجز الرحلات ومشاركة الرحلات",
          heroDescription:
            "رحلة هي خدمة مشاركة الرحلات وخدمة نقل الركاب التي تربط بين الركاب وأصحاب المركبات المتجهين إلى نفس الوجهة.",

          AboutReh: "حول رحلة",
          Rehla: "رحلة",
          RehlaIntro: "إدخال ترويج الفيديو",
          RehDes:"تطبيق رحلة .... متعة السفر بين المدن بأقل تكلفة وأمان أكثر يقدم موقع رحلة تجربة سفر فريدة بين المدن بأقل تكلفة وبأكثر الطرق متعة وأمان. تطبيق رحلة مرخص من هيئة النقل العام ومتوافق مع كافة متطلبات السلامة والأمن في المملكة العربية السعودية، ويقوم على مبدأ تقاسم تكاليف السفر بين الركاب وأصحاب المركبات.",
          startTrip: "ابدأ رحلتك الآن",
          offerUp: "عرض يصل إلى 30% لكل رحلة",

          Signup:"اشتراك",
          addingcar:"في رحلة وإضافة سيارة",
          Trainingvideo:"فيديو تدريبي يشرح كيفية إنشاء حساب في رحلة، وتعبئة بيانات التسجيل، وعرض طريقة تسجيل الدخول إذا كان لديك حساب في رحلة بالفعل. كيفية تسجيل معلومات سيارتك لمراجعتها وتسجيلها في تطبيق رحلة ككابتن، كما يمكنك معرفة رصيدك من خلال المحفظة.شاهد",

          Create:"إنشاء وطلب رحلة",
          explanation:"شرح كيفية استخدام تطبيق رحلة، كيفية إنشاء رحلة مشاركة من قبل الكابتن والبحث عنها من قبل الراكب، وإمكانية طلب حجز مسبق لرحلة المشاركة، كيفية طلب رحلة مشاركة من الداخل المدينة وكيفية استقبال الطلب من قبل رحلة الكباتن.",

          
          join:"انضم إلى خبراء السياحة ك",
          Traveler:"مسافر",
          Rehla: "رحلة",  //////////////////pen

          firstStep:"الخطوة الأولى",
          secondStep:"الخطوة الثانية",
          thirdStep:"الخطوة الثالثة",

          first:"من فضلك اضغط على انضم الآن واملأ بياناتك كسائح",
          second:"املأ نموذج المعلومات السياحية الخاص بك",
          third:"بعد مراجعة بياناتنا، ستتمكن من إنشاء جولات",

          book:"احجز حجزك المسبق",
          trip:"رحلة الآن",
          login:"قم بتسجيل الدخول بحسابك الخاص برحلة أو قم بإنشاء حساب لأول مرة عبر موقعنا أو تطبيقنا",
          goto:"اذهب إلى الحجز المسبق للرحلات",
          select:"حدد وجهتك وتاريخ المغادرة واحجز الآن وانتظر حتى يتم قبول عرضك من قبل أحد الكباتن لدينا",

          Featuredcoures:"دورات مميزة",
          Charge:"اشحن بطاقات رحلة الآن",
          price: "سعر",
          Chargewallet:"شحن المحفظة",

          screenShot:"لقطات الشاشة",

          clentSay:"ما يقوله العملاء"


        },
        rehlaServiceSection: {
          rehlaServiceTitle: "رحلة",
          rehlaSer: "خدمات",
          rehlaServiceDescriptions:
            "آلام الجلوس ذات الطبقات الكاملة، nobis id expedita dolores officiis Laboriosam",
          serviceTitle1: "انا ذاهب ل",
          serviceDescription1:
            "يطلب الركاب رحلة مع سائق محلي للذهاب إلى مكان آخر داخل المدينة",
          serviceTitle2: "رحلات الحجز المسبق",
          serviceDescription2:
            "يمكن للمسافرين إجراء حجز مسبق لرحلة مع سائق محلي للذهاب إلى أي مكان.",
          serviceTitle3: "جولات سياحية",
          serviceDescription3:
            "يقوم خبير السياحة بعمل جولة في المدن السياحية ويتم البحث عنها حسب المناطق.",
          serviceTitle4: "إرسال الطرود",
          serviceDescription4:
            "يعرض المرسل طرداً للتوصيل بين المدن وينتظر كابتن رحلة ليقبله.",

          AboutReh: "ریحلا کے بارے میں",
          Rehla: "ریحلہ",
          RehlaIntro: "ویڈیو پروموشن کا تعارف",
          RehDes:
            "ریہلا ایپلی کیشن .... شہروں کے درمیان سب سے کم قیمت پر سفر کرنے کی خوشی اور زیادہ حفاظت Rehlacar سب سے کم قیمت پر شہروں کے درمیان سفر کا ایک انوکھا تجربہ پیش کرتا ہے اور انتہائی پرلطف اور محفوظ طریقے۔ Rehla ایپلیکیشن پبلک ٹرانسپورٹ اتھارٹی کی طرف سے لائسنس یافتہ ہے اور سعودی عرب میں تمام حفاظتی اور حفاظتی تقاضوں سے ہم آہنگ ہے، اور مسافروں اور گاڑیوں کے مالکان کے درمیان سفری اخراجات بانٹنے کے اصول پر مبنی ہے۔",
        },

        //Pre-BookingTrips page
        preBookingtrips: {
          startPlace: "مكان البدء",
          arrivalPlace: "مكان الوصول",
          startDate: "تاريخ البدء",
          startTime: "وقت البدء",
          paymentType: "نوع الدفع",
          SelectCarcategory: "اختر فئة السيارة",
          coupon: "قسيمة",
          preBookingNow: "الحجز المسبق الآن",
        },

        //TourismTour Page

        tourismTour: {
          tourismTitle: "جولات سياحية",
          rehlaTourism: "رحلة",
        },

        //AboutUs Page
        AboutUspage: {
          stayTuned: "ترقبوا الأخبار الجديدة إنهم يأتون مع العرض",
          featureIntegration: "تكامل الميزات",
          multipleDiscussions: "مناقشات متعددة",
          GetStarted: "ابدأ",

          OurRehla1: "ملكنا",
          OurRehla2: "رحلة",
          OurRehla3: "فريق",

          Gallery: "معرض",

          SeeAll: "رؤية الكل",
          Branding: "العلامة التجارية",
          Designing: "تصميم",
          Photography: "التصوير الفوتوغرافي",
          Development: "تطوير",

          availablDevices: "رحلة متاحة لجميع الأجهزة",
          avaiDes:
            "تعتبر الشراكة الخاصة المحدودة هي النوع الأكثر شيوعًا من الشراكة في مالطا. المحدودة",
          avaiDes1:
            " المسؤولية هي في الواقع النوع الوحيد من الشركات الذي تسمح به الشركات",
        },

        //ContactUsPage
        contactUspage: {
          nameplaceholder: "أدخل اسمك",
          emailplaceholder: "أدخل عنوان بريدك الإلكتروني",
          messageplaceholder: "اكتب رسالتك",
          submit: "أرسل رسالة",
        },

        //Footer page
        footer: {
          description1: " عبارة عن مشاركة في الرحلات ومشاركة الرحلات",
          description2: "الخدمة التي تربط بين الركاب",
          description3: "وأصحاب المركبات المتوجهين إلى",
          description4: "نفس الوجهة",

          sitemap: "خريطة الموقع",
          usefulLinks: "روابط مفيدة",
          contactInfo: "معلومات الاتصال",
          address: "455 شارع ويست أوركارد، كينغز ماونتن، كارولاينا الشمالية 280867",
          phone: "+088 (246) 642-27-10",
          email: "example@gmail.com",
          home: "بيت",
          services: "خدمات",
          prebooking: "رحلات الحجز المسبق",
          tourism: "جولات سياحية",
          news: "أخبار",
          terms: "شروط الاستخدام",
          privacy: "سياسة الخصوصية",
          faq: "سؤال متكرر",
          copyright: "رحلة جميع الحقوق محفوظة",
        },
      },
    },
  },
  lng: savedLanguage,
  lng: "en", // default language
  fallbackLng: "en",

  interpolation: {
    escapeValue: false, // React already escapes content
  },
});

export default i18n;
