import aurumLogo from "@/assets/aurum-logo.jpg";
import blockchainBanner from "@/assets/blockchain-banner.jpg";

const ProfileHeader = () => {
  return (
    <div className="relative w-full">
      {/* Banner */}
      <div className="relative w-full h-[50vh] md:h-[60vh] lg:h-[70vh] overflow-hidden">
        <img
          src={blockchainBanner}
          alt="Blockchain Technology Background"
          className="w-full h-full object-cover"
        />
        <div className="banner-overlay" />
        
        {/* Animated particles effect overlay */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute w-2 h-2 bg-primary rounded-full animate-float" style={{ top: '20%', left: '10%', animationDelay: '0s' }} />
          <div className="absolute w-1 h-1 bg-aurum-cyan rounded-full animate-float" style={{ top: '30%', left: '80%', animationDelay: '1s' }} />
          <div className="absolute w-2 h-2 bg-primary rounded-full animate-float" style={{ top: '60%', left: '20%', animationDelay: '2s' }} />
          <div className="absolute w-1.5 h-1.5 bg-aurum-cyan rounded-full animate-float" style={{ top: '40%', left: '60%', animationDelay: '0.5s' }} />
          <div className="absolute w-1 h-1 bg-primary rounded-full animate-float" style={{ top: '70%', left: '90%', animationDelay: '1.5s' }} />
        </div>
      </div>

      {/* Logo - positioned to overlap banner */}
      <div className="absolute left-1/2 -translate-x-1/2 -bottom-16 md:-bottom-20 z-10">
        <div className="logo-ring animate-pulse-glow">
          <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden bg-background">
            <img
              src={aurumLogo}
              alt="AURUM Foundation Logo"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileHeader;
