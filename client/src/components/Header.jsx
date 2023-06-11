import { Breadcrumbs } from "@material-tailwind/react";
 
export default function BreadCrumComp() {
  return (
    <Breadcrumbs className="bg-[#F5F7F8]">
      <a href="#" className="opacity-60 text-lg">
        Dashboard
      </a>
      <a href="#" className="text-lg">Home</a>
    </Breadcrumbs>
  );
}