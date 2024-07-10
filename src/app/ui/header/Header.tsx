import MainNav from "@/app/ui/header/MainNav";
import GridLayout from "@/app/ui/GridLayout";
import Logo from "@/components/ui/svg/Logo";
import Account from "@/app/ui/header/Account";

export default function Header() {
  return (
    <header className="fixed w-full top-0 max-w-[100vw]">
      <GridLayout size="boxed" additional_class="">
        <div className="flex justify-between items-center py-2 ">
          <Logo />
          <div className="flex items-center gap-6">
            <MainNav />
            <Account />
          </div>
        </div>
      </GridLayout>
    </header>
  );
}
