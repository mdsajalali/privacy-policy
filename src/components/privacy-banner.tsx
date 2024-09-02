import Image from "next/image";

const PrivacyBanner = () => {
  return (
    <div className="bg-[#110427] flex flex-col items-center justify-center pt-10 pb-5 text-white">
      <h1 className="text-xl md:text-2xl font-semibold bg-gradient-to-r from-[#FF7F50] to-[#370099] bg-clip-text text-transparent z-[9999]">
        We Care About
      </h1>
      <h2 className="text-3xl md:text-5xl font-semibold bg-gradient-to-r from-[#FF7F50] to-[#370099] bg-clip-text text-transparent z-[9999]">
        Our Privacy Policy
      </h2>
      <Image
        width={300}
        height={300}
        alt="Privacy Image"
        src="/images/privacy.png"
        className="w-full max-w-xs md:max-w-md lg:max-w-lg"
      />
    </div>
  );
};

export default PrivacyBanner;
