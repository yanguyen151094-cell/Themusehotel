import { useEffect, useRef, useState } from 'react';

export default function BrandSection() {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} className="py-20 md:py-28 bg-cream-dark px-6 md:px-10 lg:px-16 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Images */}
          <div className={`grid grid-cols-2 gap-4 transition-all duration-700 ${visible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            <div className="col-span-2 rounded-2xl overflow-hidden h-56">
              <img
                src="https://readdy.ai/api/search-image?query=boutique%20hotel%20outdoor%20area%20coastal%20Vietnam%2C%20wooden%20deck%20chairs%2C%20tropical%20garden%2C%20sea%20view%2C%20warm%20afternoon%20golden%20light%2C%20relaxing%20atmosphere%2C%20elegant%20minimalist%20resort%20outdoor%2C%20professional%20photography&width=800&height=400&seq=brand1&orientation=landscape"
                alt="The Muse Hotel"
                className="w-full h-full object-cover object-top"
              />
            </div>
            <div className="rounded-2xl overflow-hidden h-40">
              <img
                src="https://readdy.ai/api/search-image?query=hotel%20concierge%20service%2C%20warm%20welcome%2C%20elegant%20hotel%20lobby%20detail%2C%20fresh%20flowers%20arrangement%2C%20wooden%20desk%2C%20boutique%20hotel%20Vietnam%2C%20professional%20photography&width=400&height=300&seq=brand2&orientation=landscape"
                alt="Hotel Service"
                className="w-full h-full object-cover object-top"
              />
            </div>
            <div className="rounded-2xl overflow-hidden h-40">
              <img
                src="https://readdy.ai/api/search-image?query=hotel%20breakfast%20spread%2C%20fresh%20tropical%20fruits%2C%20pastries%2C%20coffee%2C%20elegant%20table%20setting%2C%20boutique%20hotel%20Vietnam%2C%20warm%20morning%20light%2C%20professional%20food%20photography&width=400&height=300&seq=brand3&orientation=landscape"
                alt="Hotel Breakfast"
                className="w-full h-full object-cover object-top"
              />
            </div>
          </div>

          {/* Content */}
          <div className={`transition-all duration-700 delay-200 ${visible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            <span className="inline-block text-gold text-xs font-medium tracking-[0.25em] uppercase border border-gold/30 px-4 py-1.5 rounded-full mb-4">
              Câu Chuyện Của Chúng Tôi
            </span>
            <h2 className="font-serif text-3xl md:text-5xl text-brown font-bold mb-6">
              Triết Lý Của<br />
              <span className="italic font-normal">The Muse Hotel</span>
            </h2>
            <p className="text-brown/60 text-base leading-relaxed mb-5">
              The Muse Hotel ra đời từ tình yêu với vẻ đẹp thiên nhiên Hải Phòng và mong muốn tạo ra không gian nghỉ dưỡng đẳng cấp, nơi mỗi vị khách được cảm nhận sự chào đón chân thành và dịch vụ hoàn hảo.
            </p>
            <p className="text-brown/60 text-base leading-relaxed mb-8">
              Với 3 cơ sở tọa lạc tại khu đô thị Đồi Rồng, Đồ Sơn, chúng tôi kết hợp kiến trúc boutique hiện đại với tinh hoa văn hóa Việt, tạo nên trải nghiệm nghỉ dưỡng độc đáo không nơi nào khác có được.
            </p>
            <div className="grid grid-cols-2 gap-4">
              {[
                { num: '2019', label: 'Năm thành lập' },
                { num: '3', label: 'Cơ sở khách sạn' },
                { num: '50+', label: 'Phòng & Suite' },
                { num: '5★', label: 'Đánh giá trung bình' },
              ].map((item) => (
                <div key={item.label} className="bg-cream rounded-xl p-4 text-center">
                  <div className="font-serif text-2xl font-bold text-gold mb-1">{item.num}</div>
                  <div className="text-brown/60 text-xs">{item.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
