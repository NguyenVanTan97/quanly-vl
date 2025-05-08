import { useTranslation } from "react-i18next";

export function Location() {
    const { t } = useTranslation("home");
 return (
  <div className="flex flex-col md:flex-row container mx-auto px-0 md:px-4 py-0 md:py-24">
   <div className="w-[420px] gradient py-8 pl-8 pr-20 text-white">
    <span className="text-white/60 text-2xs md:text-lg">{t('location.title')}</span>
    <p className="mt-1 md:mt-4 text-xl md:text-4xl font-bold">{t('location.title2')}</p>
    <p className="mt-6 md:mt-14 text-xs md:text-sm font-bold">
    {t('location.invest')}
    </p>
    <p className="text-xs md:text-sm mt-2 md:mt-0 leading-5">
     Số 208 đường Nguyễn Hữu Cảnh, P.22,<br/>Q.Bình Thạnh, TP.HCM
    </p>
    <p className="mt-5 md:mt-12 text-2xs md:text-sm leading-5">
     P. 0938-294-338
     <br />
     W. darlingtonsuite.com
     <br />
     E. mail@darlington.one
     <br />
     E. booking@darlingtonsuite.com
    </p>
   </div>
   <div className="flex-1">
    <iframe
     src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7838.87286563732!2d106.69807806977539!3d10.777847299999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752f4f5f981277%3A0x91751a3056b2079d!2sThe%20Landmark!5e0!3m2!1sen!2s!4v1676180773834!5m2!1sen!2s"
     width="100%"
     className="h-80 md:h-full"
     style={{ border: 0 }}
     allowFullScreen
     loading="lazy"
     referrerPolicy="no-referrer-when-downgrade"
    ></iframe>
   </div>
  </div>
 );
}
