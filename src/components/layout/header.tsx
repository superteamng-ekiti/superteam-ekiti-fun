import logo from "/src/assets/images/logo.svg";

export function Header() {
  return (
    <header className="w-full container mx-auto flex justify-center items-center py-6">
      <img src={logo} alt="logo" className="w-[142px] h-[18px] md:w-[152px] md:h-[28px]" />
    </header>
  );
}
