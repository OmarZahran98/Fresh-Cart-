import { Link } from "react-router";

const PromoCard = ({
  tag,
  title,
  description,
  discount,
  code,
  gradientFrom,
  gradientTo,
  buttonText,
  buttonColor,
}) => {
  return (
    <div
      className={`relative overflow-hidden w-full p-8 md:p-10 rounded-4xl bg-linear-to-br ${gradientFrom} ${gradientTo} text-white flex flex-col items-start gap-4 shadow-xl`}
    >
      {/* Decorative Semi-Transparent Circle */}
      <div className="absolute -top-12 -right-12 w-48 h-48 bg-white/10 rounded-full pointer-events-none" />

      {/* Badge Tag */}
      <span className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-xs font-semibold flex items-center gap-1">
        {tag}
      </span>

      {/* Content */}
      <div className="z-10">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-2">
          {title}
        </h2>
        <p className="text-white/80 text-sm md:text-base max-w-[80%]">
          {description}
        </p>
      </div>

      {/* Discount Section */}
      <div className="flex items-baseline gap-3 mt-auto z-10">
        <span className="text-4xl md:text-5xl font-black italic">
          {discount}
        </span>
        <span className="text-xs uppercase tracking-wider text-white/90">
          Use code:{" "}
          <span className="font-bold underline decoration-2 underline-offset-4">
            {code}
          </span>
        </span>
      </div>

      {/* CTA Button */}
      <Link
      to={"/"}
        className={`mt-4 px-8 py-3 bg-white ${buttonColor} rounded-full font-bold flex items-center gap-2 hover:scale-105 transition-transform duration-200 shadow-lg z-10`}
      >
        {buttonText}
        <span className="text-xl">→</span>
      </Link>
    </div>
  );
};

export default function PromoSection() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6 max-w-7xl mx-auto">
      <PromoCard
        tag="🔥 Deal of the Day"
        title="Fresh Organic Fruits"
        description="Get up to 40% off on selected organic fruits"
        discount="40% OFF"
        code="ORGANIC40"
        gradientFrom="from-[#00b25c]"
        gradientTo="to-[#007a41]"
        buttonText="Shop Now"
        buttonColor="text-[#007a41]"
      />

      <PromoCard
        tag="✨ New Arrivals"
        title="Exotic Vegetables"
        description="Discover our latest collection of premium vegetables"
        discount="25% OFF"
        code="FRESH25"
        gradientFrom="from-[#ff9a44]"
        gradientTo="to-[#ff4b5c]"
        buttonText="Explore Now"
        buttonColor="text-[#ff4b5c]"
      />
    </div>
  );
}
