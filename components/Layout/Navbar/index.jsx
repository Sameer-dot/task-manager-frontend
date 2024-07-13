import Image from "next/image";
import Button from "@/components/common/Button";
import { useModalsContext } from "@/context/ModalsContext";
import { ModalState } from "@/assets/constants/modalStates";

const Navbar = ({ showSidebar, theme }) => {
  const { setModalState } = useModalsContext();

  const handleNewTask = () => {
    setModalState({ open: true, view: ModalState.addTask });
  };

  return (
    <nav className="flex items-center sticky top-0 left-0 right-0 pl-6 pr-8 bg-white dark:bg-dark-gray z-50 transition-all duration-200 border-b border-light-lines dark:border-dark-lines ">
      <div
        className={
          "border-r border-light-lines dark:border-dark-lines py-8  " +
          (showSidebar ? "pr-36" : "pr-8")
        }
      >
        <Image
          src={theme === "dark" ? "/logo-light.svg" : "/logo-dark.svg"}
          alt="company logo"
          width={150}
          height={25}
        />
      </div>
      <div className="flex w-full pl-8 items-center justify-between">
        <p className="heading-xl text-black dark:text-white">Platform Launch</p>
        <div className="flex">
          <Button onClick={handleNewTask}>+ Add New Task</Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
