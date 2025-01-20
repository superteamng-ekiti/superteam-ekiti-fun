import logo from "/src/assets/images/logo.svg";

export function Header() {
  return (
    <header className="w-full container mx-auto flex justify-center items-center py-6">
      <img src={logo} alt="logo" className="w-[152px] h-[28px]" />
    </header>
  );
}
